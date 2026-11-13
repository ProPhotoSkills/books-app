import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BOOKS } from "@/lib/books";
import { load } from "@/lib/storage";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Dein Regal – PPS Books" }] }),
  component: Shelf,
});

// Text für ein leeres Regal (später, wenn nur gekaufte Bücher erscheinen).
// Google-Play-Regel: neutraler Hinweis OHNE Link zu Kaufseiten.
export const EMPTY_SHELF_TEXT =
  "Deine Bücher findest du hier, sobald du sie auf prophotoskills.com erworben hast.";

function Shelf() {
  // Lesestand je Buch in Prozent (wird im Reader gespeichert)
  const [progress, setProgress] = useState<Record<string, number>>({});
  useEffect(() => {
    const p: Record<string, number> = {};
    for (const b of BOOKS) p[b.id] = load<number>(`ppsb_pct_${b.id}`, 0);
    setProgress(p);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        right={
          <span className="rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">
            Testversion
          </span>
        }
      />

      <main className="flex-1">
        <section
          className="relative"
          style={{
            backgroundImage: "url(/assets/heli-bg.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-background" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-12">
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
              style={{ textShadow: "0 2px 18px rgba(0,0,0,0.45)" }}
            >
              Dein <span style={{ color: "#f8e800" }}>Regal</span>
            </h1>
            <p className="mt-3 max-w-2xl text-white/80">
              Tippe auf ein Buch, um zu lesen. Dein Lesestand wird auf diesem Gerät gemerkt.
            </p>

            {BOOKS.length === 0 ? (
              <p className="mt-10 rounded-xl border border-white/10 bg-black/70 p-6 text-white/80">
                {EMPTY_SHELF_TEXT}
              </p>
            ) : (
              <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8">
                {BOOKS.map((b) => {
                  const pct = progress[b.id] ?? 0;
                  return (
                    <li key={b.id}>
                      <Link
                        to="/lesen/$buch"
                        params={{ buch: b.id }}
                        className="group block rounded-xl border border-white/10 bg-black/60 p-3 backdrop-blur-sm transition hover:border-[#f8e800]/70"
                      >
                        <img
                          src={b.cover}
                          alt={`Cover ${b.title}`}
                          className="aspect-[874/1240] w-full rounded-md object-cover shadow-lg transition group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                        <div className="mt-3">
                          <div className="text-xs uppercase tracking-wider text-white/60">{b.subtitle}</div>
                          <div className="font-semibold text-white">{b.title}</div>
                        </div>
                        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
                          <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: "#f8e800" }} />
                        </div>
                        <div className="mt-1 text-xs text-white/60">
                          {pct > 0 ? `${pct} % gelesen` : "Noch nicht begonnen"}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
