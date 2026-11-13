import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ausgabeFuer, gateUrl, ladeKatalog, lesestandKey, type Buch, type Katalog } from "@/lib/books";
import { flagFor, labelFor, useI18n } from "@/lib/i18n";
import { load } from "@/lib/storage";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "PPS Books" }] }),
  component: Shelf,
});

const YELLOW = "#f8e800";

function Shelf() {
  const { lang, t } = useI18n();
  const [katalog, setKatalog] = useState<Katalog | null>(null);
  const [fehler, setFehler] = useState(false);

  useEffect(() => {
    ladeKatalog()
      .then(setKatalog)
      .catch((err) => {
        console.error(err);
        setFehler(true);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        right={
          <>
            <span className="hidden sm:inline rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">
              {t("badge.test")}
            </span>
            <LanguageSwitcher />
          </>
        }
      />

      <main className="flex-1">
        <section
          className="relative min-h-[70vh]"
          style={{ backgroundImage: "url(/assets/heli-bg.webp)", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-background" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white" style={{ textShadow: "0 2px 18px rgba(0,0,0,0.45)" }}>
              {t("shelf.title1")} <span style={{ color: YELLOW }}>{t("shelf.title2")}</span>
            </h1>
            <p className="mt-3 max-w-2xl text-white/80">{t("shelf.sub")}</p>

            {fehler && <Hinweis text={t("shelf.error")} />}
            {!fehler && !katalog && <Hinweis text={t("shelf.loading")} />}
            {katalog && katalog.buecher.length === 0 && <Hinweis text={t("shelf.empty")} />}

            {katalog && katalog.buecher.length > 0 && (
              <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8">
                {katalog.buecher.map((b) => (
                  <BuchKarte key={b.id} buch={b} lang={lang} />
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Hinweis({ text }: { text: string }) {
  return <p className="mt-10 max-w-2xl rounded-xl border border-white/10 bg-black/70 p-6 text-white/80">{text}</p>;
}

function BuchKarte({ buch, lang }: { buch: Buch; lang: string }) {
  const { t } = useI18n();
  const passend = ausgabeFuer(buch, lang);
  // Gibt es das Buch nicht in der gewählten Sprache: Cover der ersten Ausgabe, abgedunkelt
  const zeige = passend ?? buch.ausgaben[0];
  const [pct, setPct] = useState(0);
  useEffect(() => {
    setPct(passend ? load<number>(lesestandKey(buch.id, passend.sprache, "pct"), 0) : 0);
  }, [buch.id, passend]);

  const karte = (
    <>
      <img
        src={gateUrl(zeige.cover)}
        alt={buch.titel}
        className={`aspect-[874/1240] w-full rounded-md object-cover shadow-lg transition ${
          passend ? "group-hover:scale-[1.02]" : "opacity-40 grayscale"
        }`}
        loading="lazy"
      />
      <div className="mt-3 flex items-center gap-2">
        <div className="min-w-0">
          <div className="text-xs uppercase tracking-wider text-white/60">Photoguide</div>
          <div className="truncate font-semibold text-white">{buch.titel}</div>
        </div>
      </div>
    </>
  );

  if (passend) {
    return (
      <li>
        <Link
          to="/lesen/$buch/$sprache"
          params={{ buch: buch.id, sprache: passend.sprache }}
          className="group block rounded-xl border border-white/10 bg-black/60 p-3 backdrop-blur-sm transition hover:border-[#f8e800]/70"
        >
          {karte}
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
            <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: YELLOW }} />
          </div>
          <div className="mt-1 text-xs text-white/60">{pct > 0 ? t("shelf.read", { n: pct }) : t("shelf.notStarted")}</div>
        </Link>
      </li>
    );
  }

  return (
    <li className="rounded-xl border border-white/10 bg-black/60 p-3 backdrop-blur-sm">
      {karte}
      <div className="mt-2 text-xs text-white/70">{t("shelf.otherLang")}</div>
      <div className="mt-1.5 flex flex-wrap gap-1.5">
        {buch.ausgaben.map((a) => {
          const flag = flagFor(a.sprache);
          return (
            <Link
              key={a.sprache}
              to="/lesen/$buch/$sprache"
              params={{ buch: buch.id, sprache: a.sprache }}
              title={labelFor(a.sprache)}
              className="inline-flex items-center gap-1 rounded border border-white/15 px-1.5 py-0.5 text-[11px] uppercase text-white/80 hover:border-[#f8e800]/70"
            >
              {flag && <img src={flag} alt="" className="h-3 w-4 rounded-sm object-cover" />}
              {a.sprache}
            </Link>
          );
        })}
      </div>
    </li>
  );
}
