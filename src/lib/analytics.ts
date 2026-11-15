// Google Analytics für PPS Books (books.prophotoskills.workers.dev) – v18 (Eric 15.11.2026: Variante B,
// eigener Datenstrom). Quelle: Brain 0_grundlagen/02_infrastruktur/google-analytics/Google Alle seiten.rtf
//   Stream „books.prophotoskills.workers.dev“ · Stream-ID 16345867058 · Mess-ID G-HRG9QE7VRY
// Eingebaut als Google-Tag (gtag.js) mit config – NICHT über gtm.js: eine G-Kennung über gtm.js zu laden
// unterstützt Google nicht (Tag-Manager-Hinweis Okt. 2026). Der Container GTM-53MLCLKK wird hier nicht genutzt.
// Lädt NUR nach Zustimmung im Cookie-Hinweis (DSGVO) – ohne Zustimmung kein Google-Skript, keine Cookies.
// Gilt automatisch auch in der Android-App (die Hülle zeigt diese Seite live).

export const GA_ID = "G-HRG9QE7VRY";

export const CONSENT_KEY = "ppsb_cookie_consent";
/** "all" = Analytics erlaubt, "essential" = nur notwendige */
export type Consent = "all" | "essential";

export function readConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "all" || v === "essential" ? v : null;
  } catch {
    return null;
  }
}

export function loadAnalytics(): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (document.getElementById("ppsb-gtag")) return;
  const w = window as unknown as { dataLayer: unknown[]; gtag?: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", GA_ID);
  const s = document.createElement("script");
  s.id = "ppsb-gtag";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}
