import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, List, Type, X } from "lucide-react";
import type { Book as EpubBook, Rendition, NavItem } from "epubjs";

import type { Book } from "@/lib/books";
import { load, save } from "@/lib/storage";

type Theme = "hell" | "sepia" | "dunkel";

const THEMES: Record<Theme, { bg: string; fg: string; label: string }> = {
  hell: { bg: "#ffffff", fg: "#1a1a1a", label: "Hell" },
  sepia: { bg: "#f4ecd8", fg: "#3b2f1e", label: "Sepia" },
  dunkel: { bg: "#14181f", fg: "#e6e6e6", label: "Dunkel" },
};

const READ_FONT =
  'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

const MIN_SIZE = 80;
const MAX_SIZE = 160;

/**
 * Der Leser. Nutzt die fertige Lese-Bibliothek epub.js (kein eigener Leser-Bau).
 * Läuft nur im Browser (epub.js braucht das DOM) – darum der dynamische Import.
 */
export function Reader({ book }: { book: Book }) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const renditionRef = useRef<Rendition | null>(null);
  const bookRef = useRef<EpubBook | null>(null);

  const [status, setStatus] = useState<"laden" | "bereit" | "fehler">("laden");
  const [toc, setToc] = useState<NavItem[]>([]);
  const [pct, setPct] = useState<number>(0);
  const [panel, setPanel] = useState<"none" | "inhalt" | "schrift">("none");
  const [size, setSize] = useState<number>(100);
  const [theme, setTheme] = useState<Theme>("hell");

  // Einstellungen aus dem Speicher holen (nach dem ersten Rendern, nur im Browser)
  useEffect(() => {
    setSize(load<number>("ppsb_size", 100));
    setTheme(load<Theme>("ppsb_theme", "hell"));
  }, []);

  // Buch öffnen
  useEffect(() => {
    let cancelled = false;
    let cleanup = () => {};

    (async () => {
      try {
        const { default: ePub } = await import("epubjs");
        // Buch als Datei holen. Später kommt es vom Tor books-gate (mit Ausweis).
        const res = await fetch(book.file);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.arrayBuffer();
        if (cancelled || !viewerRef.current) return;

        const epub = ePub(data);
        bookRef.current = epub;
        const rendition = epub.renderTo(viewerRef.current, {
          width: "100%",
          height: "100%",
          flow: "paginated",
          spread: "auto",
          minSpreadWidth: 1000,
          allowScriptedContent: false,
        });
        renditionRef.current = rendition;

        // Farben als Themen anmelden
        for (const [name, t] of Object.entries(THEMES)) {
          rendition.themes.register(name, {
            body: { background: `${t.bg} !important`, color: `${t.fg} !important` },
            // Einheitliche Schrift: die in InDesign eingebetteten Schriften sind
            // „verschleiert“ (META-INF/encryption.xml) und laden im Browser nicht –
            // ohne diese Zeile springt der Text zwischen Times und Arial.
            "p, li, span, h1, h2, h3, h4, h5, h6, td, div": {
              color: `${t.fg} !important`,
              "font-family": `${READ_FONT} !important`,
            },
            a: { color: "#b8a600 !important" },
          });
        }
        rendition.themes.select(load<Theme>("ppsb_theme", "hell"));
        rendition.themes.fontSize(`${load<number>("ppsb_size", 100)}%`);

        // Wischen und Pfeiltasten im Buch selbst (das Buch liegt in einem iframe)
        rendition.hooks.content.register((contents: { document: Document }) => {
          let startX = 0;
          contents.document.addEventListener("touchstart", (e) => {
            startX = e.changedTouches[0]?.clientX ?? 0;
          }, { passive: true });
          contents.document.addEventListener("touchend", (e) => {
            const dx = (e.changedTouches[0]?.clientX ?? 0) - startX;
            if (Math.abs(dx) > 50) (dx < 0 ? rendition.next() : rendition.prev());
          }, { passive: true });
          contents.document.addEventListener("keyup", (e) => onKey(e as KeyboardEvent));
        });

        const startAt = load<string | null>(`ppsb_pos_${book.id}`, null);
        await rendition.display(startAt ?? undefined);

        await epub.ready;
        const nav = await epub.loaded.navigation;
        // InDesign legt die Einträge verschachtelt ab (oben der Dateiname, darunter
        // Seitenzahlen) – darum flach machen und den Dateinamen ersetzen.
        const flat: NavItem[] = [];
        const walk = (items: NavItem[]) => {
          for (const i of items) {
            flat.push(i);
            if (i.subitems?.length) walk(i.subitems);
          }
        };
        walk(nav.toc);
        const cleaned = flat
          .filter((i) => !/^cover$/i.test(i.label.trim()))
          .map((i) => (/^PPS_|_Ebook/i.test(i.label) ? { ...i, label: "Anfang" } : i));
        if (!cancelled) setToc(cleaned);
        if (!cancelled) setStatus("bereit");

        // Lesestand in Prozent: braucht einmal eine Positions-Liste
        await epub.locations.generate(1600);
        const update = (loc: { start: { cfi: string } }) => {
          save(`ppsb_pos_${book.id}`, loc.start.cfi);
          const p = Math.round((epub.locations.percentageFromCfi(loc.start.cfi) || 0) * 100);
          setPct(p);
          save(`ppsb_pct_${book.id}`, p);
        };
        rendition.on("relocated", update);
        const cur = rendition.currentLocation() as unknown as { start?: { cfi: string } };
        if (cur?.start) update(cur as { start: { cfi: string } });

        cleanup = () => {
          rendition.destroy();
          epub.destroy();
        };
      } catch (err) {
        console.error(err);
        if (!cancelled) setStatus("fehler");
      }
    })();

    return () => {
      cancelled = true;
      cleanup();
      renditionRef.current = null;
      bookRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [book.id, book.file]);

  const next = useCallback(() => renditionRef.current?.next(), []);
  const prev = useCallback(() => renditionRef.current?.prev(), []);

  function onKey(e: KeyboardEvent) {
    if (e.key === "ArrowRight") renditionRef.current?.next();
    if (e.key === "ArrowLeft") renditionRef.current?.prev();
  }

  useEffect(() => {
    window.addEventListener("keyup", onKey);
    return () => window.removeEventListener("keyup", onKey);
  }, []);

  function changeSize(delta: number) {
    const s = Math.min(MAX_SIZE, Math.max(MIN_SIZE, size + delta));
    setSize(s);
    save("ppsb_size", s);
    renditionRef.current?.themes.fontSize(`${s}%`);
  }

  function changeTheme(t: Theme) {
    setTheme(t);
    save("ppsb_theme", t);
    renditionRef.current?.themes.select(t);
  }

  function goTo(href: string) {
    renditionRef.current?.display(href);
    setPanel("none");
  }

  const t = THEMES[theme];

  return (
    <div className="flex h-[100dvh] flex-col" style={{ background: t.bg, color: t.fg }}>
      {/* Obere Leiste */}
      <div className="flex items-center gap-2 px-2 sm:px-4 py-2" style={{ backgroundColor: "#f8e800" }}>
        <Link to="/" className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-stone-900 hover:bg-black/10">
          <ArrowLeft className="h-4 w-4" /> Regal
        </Link>
        <div className="min-w-0 flex-1 truncate text-center text-sm font-semibold text-stone-900">
          {book.title}
        </div>
        <button
          onClick={() => setPanel(panel === "inhalt" ? "none" : "inhalt")}
          className="rounded-md p-2 text-stone-900 hover:bg-black/10"
          aria-label="Inhalt"
        >
          <List className="h-5 w-5" />
        </button>
        <button
          onClick={() => setPanel(panel === "schrift" ? "none" : "schrift")}
          className="rounded-md p-2 text-stone-900 hover:bg-black/10"
          aria-label="Schrift und Farbe"
        >
          <Type className="h-5 w-5" />
        </button>
      </div>

      {/* Lesefläche */}
      <div className="relative flex-1 overflow-hidden">
        <div ref={viewerRef} className="absolute inset-0 px-2 sm:px-10 py-3" />

        {status === "laden" && (
          <div className="absolute inset-0 grid place-items-center text-sm opacity-70">Buch wird geöffnet …</div>
        )}
        {status === "fehler" && (
          <div className="absolute inset-0 grid place-items-center p-6 text-center text-sm">
            Das Buch konnte nicht geöffnet werden. Bitte später noch einmal versuchen.
          </div>
        )}

        {/* Blätter-Knöpfe am Rand (Desktop) */}
        <button onClick={prev} aria-label="Zurück blättern" className="absolute left-0 top-0 hidden h-full w-10 items-center justify-center opacity-40 hover:opacity-100 sm:flex">
          <ChevronLeft className="h-7 w-7" />
        </button>
        <button onClick={next} aria-label="Weiter blättern" className="absolute right-0 top-0 hidden h-full w-10 items-center justify-center opacity-40 hover:opacity-100 sm:flex">
          <ChevronRight className="h-7 w-7" />
        </button>

        {/* Inhaltsverzeichnis */}
        {panel === "inhalt" && (
          <Panel title="Inhalt" onClose={() => setPanel("none")} bg={t.bg} fg={t.fg}>
            {toc.length === 0 ? (
              <p className="text-sm opacity-70">Dieses Buch hat kein Inhaltsverzeichnis.</p>
            ) : (
              <ul className="space-y-1">
                {toc.map((item) => (
                  <li key={item.id || item.href}>
                    <button onClick={() => goTo(item.href)} className="w-full rounded-md px-2 py-1.5 text-left text-sm hover:bg-black/10">
                      {/^\d+$/.test(item.label.trim()) ? `Seite ${item.label.trim()}` : item.label.trim()}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </Panel>
        )}

        {/* Schrift und Farbe */}
        {panel === "schrift" && (
          <Panel title="Schrift und Farbe" onClose={() => setPanel("none")} bg={t.bg} fg={t.fg}>
            <div className="text-xs uppercase tracking-wider opacity-60">Schriftgröße</div>
            <div className="mt-2 flex items-center gap-3">
              <button onClick={() => changeSize(-10)} className="rounded-md border px-3 py-1.5 text-sm" style={{ borderColor: `${t.fg}40` }}>A−</button>
              <span className="w-14 text-center text-sm">{size} %</span>
              <button onClick={() => changeSize(10)} className="rounded-md border px-3 py-1.5 text-lg" style={{ borderColor: `${t.fg}40` }}>A+</button>
            </div>
            <div className="mt-5 text-xs uppercase tracking-wider opacity-60">Farbe</div>
            <div className="mt-2 flex gap-2">
              {(Object.keys(THEMES) as Theme[]).map((k) => (
                <button
                  key={k}
                  onClick={() => changeTheme(k)}
                  className="rounded-md border px-3 py-1.5 text-sm"
                  style={{
                    background: THEMES[k].bg,
                    color: THEMES[k].fg,
                    borderColor: theme === k ? "#f8e800" : `${t.fg}40`,
                    borderWidth: theme === k ? 2 : 1,
                  }}
                >
                  {THEMES[k].label}
                </button>
              ))}
            </div>
          </Panel>
        )}
      </div>

      {/* Untere Leiste */}
      <div className="flex items-center gap-3 px-3 sm:px-6 py-2 text-xs" style={{ borderTop: `1px solid ${t.fg}20` }}>
        <button onClick={prev} className="rounded-md p-1.5 hover:bg-black/10" aria-label="Zurück blättern">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full" style={{ background: `${t.fg}20` }}>
          <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: "#f8e800" }} />
        </div>
        <span className="w-10 text-right tabular-nums opacity-70">{pct} %</span>
        <button onClick={next} className="rounded-md p-1.5 hover:bg-black/10" aria-label="Weiter blättern">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function Panel({
  title,
  onClose,
  bg,
  fg,
  children,
}: {
  title: string;
  onClose: () => void;
  bg: string;
  fg: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="absolute right-0 top-0 z-10 h-full w-full max-w-sm overflow-y-auto p-4 shadow-2xl"
      style={{ background: bg, color: fg, borderLeft: `1px solid ${fg}20` }}
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold">{title}</h2>
        <button onClick={onClose} className="rounded-md p-1.5 hover:bg-black/10" aria-label="Schließen">
          <X className="h-5 w-5" />
        </button>
      </div>
      {children}
    </div>
  );
}
