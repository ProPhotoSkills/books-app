import { Link } from "@tanstack/react-router";
import { BookOpen, ExternalLink } from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LanguageSwitcher } from "@/components/language-switcher";
import { KontoKnopf } from "@/components/konto-knopf";
import { gateUrl } from "@/lib/books";
import { REIHENFOLGE, MODULE } from "@/lib/buchtexte";
import { LANGS, labelFor, useI18n } from "@/lib/i18n";
import { useIstApp } from "@/lib/app-umgebung";
import { FAQ_URL, LABEL, SPRACHEN, WISSEN, ZEILE, type Sprache, type Wissen } from "@/lib/wissen";

const YELLOW = "#f8e800";
const COVER_SCHATTEN = "drop-shadow(0 6px 4px rgba(0,0,0,0.18)) drop-shadow(0 2px 1px rgba(0,0,0,0.10))";

// Rahmen wie im Regal: gelbe Kopfzeile, Heli-Hintergrund, helle Karten
export function WissenRahmen({ children, sprache = "de" }: { children: React.ReactNode; sprache?: Sprache }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        right={
          <>
            <KontoKnopf />
            <LanguageSwitcher />
          </>
        }
      />
      <main className="flex-1" lang={sprache}>
        <section
          className="relative overflow-hidden"
          style={{
            backgroundImage: "url(/assets/heli-bg.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundAttachment: "fixed",
            minHeight: "calc(100dvh - 64px - 64px)",
          }}
        >
          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-14">{children}</div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


// Link auf eine Wissensseite (typisiert): Deutsch → /wissen/<buch>, sonst /wissen/<buch>/<sprache>
function WLink({ buch, sprache, ...rest }: { buch: string; sprache: Sprache } & Omit<React.ComponentProps<"a">, "href" | "ref">) {
  return sprache === "de" ? (
    <Link to="/wissen/$buch" params={{ buch }} {...rest} />
  ) : (
    <Link to="/wissen/$buch/$sprache" params={{ buch, sprache }} {...rest} />
  );
}

// Cover der Sprache; gibt es (noch) keins, das deutsche
function Cover({ buch, sprache, ...rest }: { buch: string; sprache: Sprache } & React.ComponentProps<"img">) {
  return (
    <img
      src={gateUrl(`/cover/${buch}/${sprache}`)}
      onError={(e) => {
        const de = gateUrl(`/cover/${buch}/de`);
        if (e.currentTarget.src !== de) e.currentTarget.src = de;
      }}
      {...rest}
    />
  );
}

function Karte({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="mt-6 rounded-xl border border-stone-200 bg-white/92 p-5 shadow-lg backdrop-blur-sm sm:p-7 lg:p-8">
      {children}
    </section>
  );
}

function Ueberschrift({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-bold text-stone-800 sm:text-xl">{children}</h2>;
}

// v23: Sprachen der Seite als Leiste (Links auf die Sprachfassungen)
function SprachLeiste({ buch, sprache }: { buch: string; sprache: Sprache }) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-1.5">
      {LANGS.filter((l) => (SPRACHEN as readonly string[]).includes(l.code)).map((l) => {
        const aktiv = l.code === sprache;
        return (
          <WLink
            key={l.code}
            buch={buch}
            sprache={l.code as Sprache}
            hrefLang={l.code}
            title={l.label}
            className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-[11px] font-semibold uppercase transition ${
              aktiv ? "border-stone-800 bg-[#f8e800] text-stone-900" : "border-stone-300 bg-white/90 text-stone-700 hover:border-stone-500"
            }`}
          >
            <img src={l.flag} alt="" className="h-3 w-4 rounded-sm object-cover" />
            {l.code}
          </WLink>
        );
      })}
    </div>
  );
}

// v23: Steht oben eine andere Sprache als die der Seite → Hinweis mit Link (keine automatische Umleitung,
// damit Suchmaschinen jede Sprachfassung unter ihrer eigenen Adresse sehen)
function AuchInHinweis({ buch, sprache }: { buch: string; sprache: Sprache }) {
  const { lang } = useI18n();
  if (lang === sprache || !(SPRACHEN as readonly string[]).includes(lang)) return null;
  const ziel = lang as Sprache;
  return (
    <WLink
      buch={buch}
      sprache={ziel}
      lang={ziel}
      className="mt-3 inline-block rounded-md bg-white/90 px-3 py-1.5 text-sm font-semibold text-stone-800 shadow-sm hover:bg-white"
    >
      {LABEL[ziel].auchIn.replace("{l}", labelFor(ziel))} →
    </WLink>
  );
}

export function WissenSeite({ id, w, sprache }: { id: string; w: Wissen; sprache: Sprache }) {
  const istApp = useIstApp();
  const t = LABEL[sprache];
  const frei = id === "beginner";
  const module = MODULE[id] ?? [];
  const kapitelZahl = w.inhalt.reduce((n, g) => n + g.kapitel.length, 0);
  let nr = 0;

  return (
    <WissenRahmen sprache={sprache}>
      <nav className="text-xs font-medium text-stone-800/80 sm:text-sm">
        <Link to="/" className="hover:underline">Books</Link> <span className="opacity-60">›</span>{" "}
        <Link to="/wissen" className="hover:underline">{t.wissen}</Link> <span className="opacity-60">›</span> <span>{w.titel}</span>
      </nav>
      <SprachLeiste buch={id} sprache={sprache} />
      <AuchInHinweis buch={id} sprache={sprache} />

      {/* Kopf: Titel + Cover */}
      <Karte>
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10">
          <div className="order-2 min-w-0 md:order-1">
            <h1 className="inline-block rounded-md px-2.5 py-1 text-2xl font-bold leading-tight text-stone-800 sm:text-3xl" style={{ backgroundColor: YELLOW }}>
              {w.titel}
            </h1>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-stone-500 sm:text-sm">
              {module.join(" · ")} · {kapitelZahl} {t.kapitel}
              {frei && <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-[10px] text-green-800 sm:text-xs">{t.frei}</span>}
            </p>
            <h2 className="mt-5 text-base font-bold text-stone-800">{t.worum}</h2>
            {w.worum.map((p, i) => (
              <p key={i} className="mt-2 text-sm leading-relaxed text-stone-700 sm:text-base">{p}</p>
            ))}
            <p className="mt-4 text-sm text-stone-700 sm:text-base">
              <span className="font-semibold text-stone-800">{t.fuer}</span>
              {w.fuer}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link to="/" className="inline-flex items-center gap-1.5 rounded-md bg-stone-800 px-3.5 py-2 text-sm font-semibold text-white hover:bg-stone-700">
                <BookOpen className="h-4 w-4" /> {frei ? t.lesenFrei : t.lesen}
              </Link>
              <a href="#leseprobe" className="inline-flex items-center rounded-md border border-stone-800 bg-white px-3.5 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-100">
                {t.leseprobe}
              </a>
              <a href="#inhalt" className="inline-flex items-center rounded-md border border-stone-300 bg-white px-3.5 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-100">
                {t.inhalt}
              </a>
            </div>
          </div>
          <div className="order-1 flex items-start justify-center self-start rounded-lg bg-stone-100 px-5 pb-6 pt-5 md:order-2">
            <Cover
              buch={id}
              sprache={sprache}
              alt={`${w.titel} – Cover`}
              className="h-auto max-h-60 w-auto max-w-[170px] object-contain sm:max-h-80 sm:max-w-[220px]"
              style={{ filter: COVER_SCHATTEN }}
            />
          </div>
        </div>
      </Karte>

      {/* Leseproben aus dem Buch */}
      <Karte id="leseprobe">
        <Ueberschrift>{t.leseprobeTitel}</Ueberschrift>
        <div className="mt-4 flex flex-col gap-6">
          {w.leseproben.map((l, i) => (
            <article key={i} className="border-l-4 pl-4 sm:pl-5" style={{ borderColor: YELLOW }}>
              <h3 className="text-sm font-bold text-stone-800 sm:text-base">{l.kapitel}</h3>
              {l.absaetze.map((p, j) => (
                <p key={j} className="mt-2 font-light text-sm leading-relaxed text-stone-700 sm:text-[15px]">{p}</p>
              ))}
            </article>
          ))}
        </div>
      </Karte>

      {/* Freie Kapitel auf prophotoskills.com */}
      {w.artikel.length > 0 && (
        <Karte id="artikel">
          <Ueberschrift>{id === "beginner" ? t.artikelTitelBg : t.artikelTitel}</Ueberschrift>
          <p className="mt-1 text-sm text-stone-500">{t.artikelSub}</p>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {w.artikel.map((a, i) => (
              <li key={i} className="flex flex-col rounded-lg border border-stone-200 bg-white p-4">
                <h3 className="text-sm font-bold text-stone-800 sm:text-base">{a.titel}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-700">{a.text}</p>
                {istApp ? (
                  <p className="mt-3 text-xs font-semibold text-stone-500">{t.weiterApp}</p>
                ) : (
                  <a href={a.url} target="_blank" rel="noopener" hrefLang="de" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-stone-800 underline decoration-[#f8e800] decoration-2 underline-offset-4 hover:text-black">
                    {t.weiter} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Karte>
      )}

      {/* Inhaltsverzeichnis */}
      <Karte id="inhalt">
        <Ueberschrift>{t.inhalt}</Ueberschrift>
        <div className="mt-4 flex flex-col gap-5">
          {w.inhalt.map((g, gi) => (
            <div key={gi}>
              {g.gruppe && <h3 className="mb-2 inline-block rounded px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-stone-800" style={{ backgroundColor: YELLOW }}>{g.gruppe}</h3>}
              <ol className="grid gap-x-8 gap-y-1.5 text-sm text-stone-700 md:grid-cols-2">
                {g.kapitel.map((k) => {
                  nr += 1;
                  return (
                    <li key={nr} className="flex gap-2">
                      <span className="w-6 shrink-0 text-right tabular-nums text-stone-400">{nr}</span>
                      <span>{k}</span>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
      </Karte>

      {/* Fragen & Antworten */}
      <Karte id="fragen">
        <Ueberschrift>{t.fragen}</Ueberschrift>
        <div className="mt-3 divide-y divide-stone-200">
          {w.fragen.map((f, i) => (
            <details key={i} className="group py-3" open={i === 0}>
              <summary className="cursor-pointer list-none text-sm font-semibold text-stone-800 sm:text-base">
                <span className="mr-2 inline-block transition-transform group-open:rotate-90">›</span>
                {f.frage}
              </summary>
              <p className="mt-2 pl-5 text-sm leading-relaxed text-stone-700">{f.antwort}</p>
            </details>
          ))}
        </div>
        {!istApp && id !== "beginner" && (
          <a href={FAQ_URL} target="_blank" rel="noopener" hrefLang="de" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-stone-800 underline decoration-[#f8e800] decoration-2 underline-offset-4">
            {t.mehrFragen} <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </Karte>

      <WeitereBuecher aktuell={id} sprache={sprache} />
    </WissenRahmen>
  );
}

export function WeitereBuecher({ aktuell, sprache = "de" }: { aktuell?: string; sprache?: Sprache }) {
  const t = LABEL[sprache];
  const ids = REIHENFOLGE.filter((b) => b !== aktuell && WISSEN[sprache][b]);
  return (
    <Karte>
      <Ueberschrift>{aktuell ? t.weitere : t.photoguides}</Ueberschrift>
      <ul className="mt-4 grid gap-4 sm:grid-cols-3">
        {ids.map((b) => (
          <li key={b}>
            <WLink buch={b} sprache={sprache} className="group flex h-full gap-3 rounded-lg border border-stone-200 bg-white p-3 hover:border-stone-400">
              <Cover buch={b} sprache={sprache} alt="" className="h-24 w-auto object-contain" style={{ filter: COVER_SCHATTEN }} />
              <span className="flex flex-col">
                <span className="text-sm font-bold text-stone-800 group-hover:underline">{WISSEN[sprache][b].titel}</span>
                <span className="mt-1 text-xs leading-snug text-stone-600">{ZEILE[sprache][b]}</span>
              </span>
            </WLink>
          </li>
        ))}
      </ul>
    </Karte>
  );
}
