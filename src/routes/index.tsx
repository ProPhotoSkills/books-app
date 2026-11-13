import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";

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
// Schatten unter dem Cover (folgt der Bildform, auch bei object-contain)
// v9 (Eric 13.11.: „weniger – die Hälfte, etwas kleiner, härter“): halbe Deckkraft, kürzer, weniger Unschärfe
const COVER_SCHATTEN = "drop-shadow(0 6px 4px rgba(0,0,0,0.18)) drop-shadow(0 2px 1px rgba(0,0,0,0.10))";

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
        {/* Hintergrund wie beim KI-Coach: Heli-Bild, leichter Verlauf, volle Höhe */}
        <section
          className="relative overflow-hidden"
          style={{
            backgroundImage: "url(/assets/heli-bg.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "calc(100dvh - 64px - 64px)",
          }}
        >
          {/* v10 (Eric 13.11.): Hintergrund 20 % heller, damit die dunkle Schrift lesbar ist */}
          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-12">
            <h1
              className="text-5xl sm:text-6xl font-bold tracking-tight leading-[0.95]"
              style={{ textShadow: "0 2px 18px rgba(0,0,0,0.45), 0 1px 3px rgba(0,0,0,0.35)" }}
            >
              {/* Eric 13.11.: oben steht nur „Books“ – an dieser Stelle sind Bücher.
                  Später evtl. weitere Bereiche (z. B. „YouTuber of the Day“). */}
              <span style={{ color: YELLOW }}>Books</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg font-medium text-stone-900 drop-shadow-sm">{t("shelf.sub")}</p>

            {fehler && <Hinweis text={t("shelf.error")} />}
            {!fehler && !katalog && <Hinweis text={t("shelf.loading")} />}
            {katalog && katalog.buecher.length === 0 && <Hinweis text={t("shelf.empty")} />}

            {katalog && katalog.buecher.length > 0 && (
              <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-8">
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
  return <p className="mt-10 max-w-2xl rounded-xl border border-stone-200 bg-white/90 p-6 text-stone-700 shadow-lg backdrop-blur-sm">{text}</p>;
}

// Kachel im Aufbau wie die Produktkacheln im KI-Coach (offers-dialog im Repo app):
// Cover im eigenen Feld, gelber Titel, gleiche Abstände – aber HELL (Eric 13.11.:
// „Anmutung muss heller … gelbe Schrift bleibt, Text dunkelgrau, nicht schwarz“).
function BuchKarte({ buch, lang }: { buch: Buch; lang: string }) {
  const { t } = useI18n();
  const passend = ausgabeFuer(buch, lang);
  // Gibt es das Buch nicht in der gewählten Sprache: Cover der ersten Ausgabe, abgedunkelt
  const zeige = passend ?? buch.ausgaben[0];
  const [pct, setPct] = useState(0);
  useEffect(() => {
    setPct(passend ? load<number>(lesestandKey(buch.id, passend.sprache, "pct"), 0) : 0);
  }, [buch.id, passend]);

  const kachel = "group relative flex h-full flex-col overflow-hidden rounded-xl border border-stone-200 bg-white/90 shadow-lg backdrop-blur-sm transition-colors";

  const oben = (
    <>
      {/* Schatten unter dem Cover (Eric 13.11.: „damit der nicht so platt aussieht“) – unten etwas mehr Platz dafür */}
      <div className="flex items-center justify-center bg-stone-100 px-2 pb-4 pt-2 sm:px-3 sm:pb-5 sm:pt-3">
        <img
          src={gateUrl(zeige.cover)}
          alt={buch.titel}
          className={`h-auto max-h-36 w-full object-contain transition-transform duration-300 sm:max-h-48 lg:max-h-64 ${
            passend ? "group-hover:scale-[1.03]" : "opacity-40"
          }`}
          style={{ filter: `${passend ? "" : "grayscale(1) "}${COVER_SCHATTEN}` }}
          loading="lazy"
        />
      </div>
    </>
  );

  const titel = (
    <div>
      {/* Variante C (Eric 13.11.): Titel dunkelgrau auf gelbem Schild – gelb auf Weiß ist nicht lesbar */}
      <h3
        className="inline-block rounded-md px-2 py-0.5 text-sm font-bold leading-tight text-stone-800 sm:text-lg"
        style={{ backgroundColor: YELLOW }}
      >
        {buch.titel}
      </h3>
      <p className="mt-1 text-[10px] font-medium text-stone-500 sm:text-xs">Photoguide</p>
    </div>
  );

  if (passend) {
    return (
      <li>
        <Link
          to="/lesen/$buch/$sprache"
          params={{ buch: buch.id, sprache: passend.sprache }}
          className={`${kachel} hover:border-[#f8e800]`}
        >
          {oben}
          <div className="flex flex-1 flex-col gap-1.5 p-2.5 sm:gap-2.5 sm:p-4 lg:p-5">
            {titel}
            <div className="mt-auto pt-1">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-200">
                <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: YELLOW }} />
              </div>
              <div className="mt-1.5 flex flex-col items-start gap-1.5 lg:flex-row lg:items-center lg:justify-between lg:gap-2">
                <span className="text-[11px] text-stone-600 sm:text-sm">
                  {pct > 0 ? t("shelf.read", { n: pct }) : t("shelf.notStarted")}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-stone-700 sm:text-xs">
                  {t("shelf.open")} <BookOpen className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <div className={kachel}>
        {oben}
        <div className="flex flex-1 flex-col gap-1.5 p-2.5 sm:gap-2.5 sm:p-4 lg:p-5">
          {titel}
          <div className="mt-auto pt-1">
            <p className="text-[11px] text-stone-600 sm:text-sm">{t("shelf.otherLang")}</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {buch.ausgaben.map((a) => {
                const flag = flagFor(a.sprache);
                return (
                  <Link
                    key={a.sprache}
                    to="/lesen/$buch/$sprache"
                    params={{ buch: buch.id, sprache: a.sprache }}
                    title={labelFor(a.sprache)}
                    className="inline-flex items-center gap-1 rounded-full border border-stone-300 bg-white px-1.5 py-0.5 text-[9px] font-semibold uppercase text-stone-700 hover:border-[#f8e800] sm:px-2 sm:text-[10px]"
                  >
                    {flag && <img src={flag} alt="" className="h-3 w-4 rounded-sm object-cover" />}
                    {a.sprache}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
