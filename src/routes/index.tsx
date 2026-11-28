import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BookOpen, Lock } from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LanguageSwitcher } from "@/components/language-switcher";
import { KontoKnopf } from "@/components/konto-knopf";
import { useAuth } from "@/lib/auth";
import { ausgabeFuer, gateUrl, ladeKatalog, lesestandKey, type Buch, type Katalog } from "@/lib/books";
import { flagFor, labelFor, LANGS, useI18n } from "@/lib/i18n";
import { buchText, MODULE, REIHENFOLGE } from "@/lib/buchtexte";
import { load } from "@/lib/storage";
import { WISSEN, istSprache, type Sprache } from "@/lib/wissen";

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
            <KontoKnopf />
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
            {/* v22: fester Link zu den Wissensseiten – steht schon im Server-HTML (das Regal lädt erst im Browser) */}
            <Link
              to="/wissen"
              className="mt-3 inline-block rounded-md bg-white/85 px-3 py-1.5 text-sm font-semibold text-stone-800 shadow-sm hover:bg-white"
            >
              Wissen zu den Photoguides →
            </Link>

            {fehler && <Hinweis text={t("shelf.error")} />}
            {!fehler && !katalog && <Hinweis text={t("shelf.loading")} />}
            {katalog && katalog.buecher.length === 0 && <Hinweis text={t("shelf.empty")} />}

            {katalog && katalog.buecher.length > 0 && (
              <ul className="mt-10 flex flex-col gap-5 sm:gap-8">
                {sortiert(katalog.buecher).map((b) => (
                  <BuchKachel key={b.id} buch={b} lang={lang} />
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

// Reihenfolge: Next Level, On Location, darunter Beginner (Eric 14.11.); unbekannte Bücher danach
function sortiert(buecher: Buch[]): Buch[] {
  const rang = (id: string) => {
    const i = REIHENFOLGE.indexOf(id);
    return i === -1 ? 999 : i;
  };
  return [...buecher].sort((a, b) => rang(a.id) - rang(b.id) || a.id.localeCompare(b.id));
}

// Große Kachel je Buch (Eric 14.11.): links der Text zum Buch (Covertext aus dem PDF),
// rechts das Cover der gewählten Sprache, daneben die 8 Sprachen zum Umstellen.
// Das Cover kommt je Sprache aus deren EPUB – sobald die Sprach-EPUBs eigene Cover haben,
// wechselt es mit.
function BuchKachel({ buch, lang }: { buch: Buch; lang: string }) {
  const { t } = useI18n();
  const start = ausgabeFuer(buch, lang) ?? ausgabeFuer(buch, "de") ?? buch.ausgaben[0];
  const [sprache, setSprache] = useState(start.sprache);
  // Wechselt oben die Flagge, folgt die Kachel – sofern es die Sprache gibt
  useEffect(() => {
    const a = ausgabeFuer(buch, lang);
    if (a) setSprache(a.sprache);
  }, [lang, buch]);

  const aktiv = buch.ausgaben.find((a) => a.sprache === sprache) ?? start;
  const [pct, setPct] = useState(0);
  useEffect(() => {
    setPct(load<number>(lesestandKey(buch.id, aktiv.sprache, "pct"), 0));
  }, [buch.id, aktiv.sprache]);

  const text = buchText(buch.id, aktiv.sprache.slice(0, 2));
  // v12 Freischaltung: frei (Beginner) oder gekauft → Lesen; sonst Schloss
  const { darfLesen, session } = useAuth();
  const darf = darfLesen(buch.id);
  // v13: Beginner = kostenlos mit Konto (Gate: KONTO_BUECHER)
  const frei = buch.id === "beginner";
  const kontoWeg = !session && frei; // abgemeldet + Beginner → kostenlos registrieren
  const ziel = `/lesen/${buch.id}/${aktiv.sprache}`; // Text folgt der gewählten Sprache der Kachel
  const module = MODULE[buch.id] ?? [];
  const k2 = aktiv.sprache.slice(0, 2);
  const wissenSprache: Sprache = istSprache(k2) ? k2 : "de";

  const sprachen = (
    <div className="flex flex-row flex-wrap gap-1.5 md:flex-col md:flex-nowrap">
      {LANGS.map((l) => {
        const a = ausgabeFuer(buch, l.code);
        const gewaehlt = a && a.sprache === aktiv.sprache;
        return (
          <button
            key={l.code}
            type="button"
            disabled={!a}
            onClick={() => a && setSprache(a.sprache)}
            title={a ? l.label : `${l.label} – ${t("shelf.notAvailable")}`}
            className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-[11px] font-semibold uppercase transition ${
              gewaehlt
                ? "border-stone-800 bg-[#f8e800] text-stone-900"
                : a
                  ? "border-stone-300 bg-white text-stone-700 hover:border-stone-500"
                  : "cursor-not-allowed border-stone-200 bg-stone-50 text-stone-300 opacity-60"
            }`}
          >
            <img src={l.flag} alt="" className={`h-3 w-4 rounded-sm object-cover ${a ? "" : "grayscale"}`} />
            {l.code}
          </button>
        );
      })}
    </div>
  );

  return (
    <li className="overflow-hidden rounded-xl border border-stone-200 bg-white/90 shadow-lg backdrop-blur-sm">
      <div className="grid gap-5 p-4 sm:p-6 md:grid-cols-[minmax(0,1fr)_auto_auto] md:gap-8 lg:p-8">
        {/* Links: Titel, Module, Text, Lesestand */}
        <div className="flex min-w-0 flex-col gap-3 md:order-1 order-2">
          <div>
            {/* Variante C (Eric 13.11.): Titel dunkelgrau auf gelbem Schild */}
            <h3
              className="inline-block rounded-md px-2.5 py-1 text-xl font-bold leading-tight text-stone-800 sm:text-2xl"
              style={{ backgroundColor: YELLOW }}
            >
              {buch.titel}
            </h3>
            <p className="mt-1.5 text-xs font-medium text-stone-500 sm:text-sm">
              Photoguide
              {frei && (
                <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-green-800 sm:text-xs">
                  {t("shelf.free")}
                </span>
              )}
            </p>
            {module.length > 0 && (
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-stone-400 sm:text-xs">
                {module.join(" · ")}
              </p>
            )}
          </div>
          {text && <p className="text-sm leading-relaxed text-stone-700 sm:text-base">{text}</p>}
          {/* v22: Link zur öffentlichen Wissensseite (Inhalt, Leseprobe, Fragen) */}
          {/* v23: führt zur Wissensseite in der Sprache, die in der Kachel gewählt ist */}
          {WISSEN.de[buch.id] &&
            (wissenSprache === "de" ? (
              <Link
                to="/wissen/$buch"
                params={{ buch: buch.id }}
                className="self-start text-xs font-semibold text-stone-700 underline decoration-[#f8e800] decoration-2 underline-offset-4 hover:text-stone-900 sm:text-sm"
              >
                {t("shelf.more")} →
              </Link>
            ) : (
              <Link
                to="/wissen/$buch/$sprache"
                params={{ buch: buch.id, sprache: wissenSprache }}
                className="self-start text-xs font-semibold text-stone-700 underline decoration-[#f8e800] decoration-2 underline-offset-4 hover:text-stone-900 sm:text-sm"
              >
                {t("shelf.more")} →
              </Link>
            ))}
          <div className="mt-auto pt-2">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-200">
              <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: YELLOW }} />
            </div>
            <div className="mt-2 flex items-center justify-between gap-3">
              <span className="text-xs text-stone-600 sm:text-sm">
                {pct > 0 ? t("shelf.read", { n: pct }) : t("shelf.notStarted")}
              </span>
              {darf ? (
                <Link
                  to="/lesen/$buch/$sprache"
                  params={{ buch: buch.id, sprache: aktiv.sprache }}
                  className="inline-flex items-center gap-1.5 rounded-md bg-stone-800 px-3 py-1.5 text-xs font-semibold text-white hover:bg-stone-700 sm:text-sm"
                >
                  <BookOpen className="h-4 w-4" /> {t("shelf.open")}
                  <img src={flagFor(aktiv.sprache) ?? ""} alt="" className="ml-0.5 h-3 w-4 rounded-sm object-cover" />
                </Link>
              ) : kontoWeg ? (
                <Link
                  to="/registrieren"
                  search={{ weiter: ziel }}
                  className="inline-flex items-center gap-1.5 rounded-md bg-stone-800 px-3 py-1.5 text-xs font-semibold text-white hover:bg-stone-700 sm:text-sm"
                >
                  <BookOpen className="h-4 w-4" /> {t("shelf.registerToRead")}
                </Link>
              ) : !session ? (
                <Link
                  to="/anmelden"
                  search={{ weiter: ziel }}
                  className="inline-flex items-center gap-1.5 rounded-md border border-stone-800 bg-white px-3 py-1.5 text-xs font-semibold text-stone-800 hover:bg-stone-100 sm:text-sm"
                >
                  <Lock className="h-4 w-4" /> {t("shelf.loginToRead")}
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-500 sm:text-sm">
                  <Lock className="h-4 w-4" /> {t("shelf.locked")}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Mitte: Cover der gewählten Sprache */}
        <Link
          to={darf ? "/lesen/$buch/$sprache" : kontoWeg ? "/registrieren" : "/anmelden"}
          params={{ buch: buch.id, sprache: aktiv.sprache }}
          search={darf ? undefined : { weiter: ziel }}
          disabled={!darf && !!session}
          className="group relative order-1 flex items-start justify-center rounded-lg bg-stone-100 px-4 pb-5 pt-4 md:order-2"
        >
          {!darf && (
            <span className="absolute right-2 top-2 z-10 rounded-full bg-stone-800/85 p-1.5 text-white" title={session ? t("shelf.locked") : t("shelf.loginToRead")}>
              <Lock className="h-3.5 w-3.5" />
            </span>
          )}
          <img
            key={aktiv.cover}
            src={gateUrl(aktiv.cover)}
            alt={`${buch.titel} – ${labelFor(aktiv.sprache)}`}
            className="h-auto max-h-72 w-auto max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:max-h-80 sm:max-w-[230px]"
            style={{ filter: COVER_SCHATTEN }}
            loading="lazy"
          />
        </Link>

        {/* Rechts: Sprachen */}
        <div className="order-3 md:pt-1">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-stone-500 sm:text-xs">{t("shelf.languages")}</p>
          {sprachen}
        </div>
      </div>
    </li>
  );
}
