// Herkunft erfassen – Umbau Konto & Zugang, Schritt 5 (Eric 26.–28.11.2026: „wer, wann, wo, von wo er sich angemeldet hat“).
// Nach dem Anmelden meldet die App höchstens 1× am Tag je Konto an Supabase „Web Login“ (Funktion pps_besuch):
// welche App, Browser oder Android-App. Der Anmeldeweg (Passwort/Google) liest die Datenbank selbst aus dem Konto.
// KEIN Standort, KEINE IP-Adresse. Fehler werden still ignoriert – die App funktioniert immer weiter.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RpcClient = { rpc: (fn: string, args: Record<string, unknown>) => PromiseLike<{ error: unknown }> } | any;

const APP = "books";

export async function besuchMelden(sb: RpcClient | null, userId: string | undefined | null): Promise<void> {
  if (!sb || !userId || typeof window === "undefined") return;
  try {
    const tag = new Date().toISOString().slice(0, 10);
    const key = `pps_besuch_${APP}_${userId}`;
    if (window.localStorage.getItem(key) === tag) return;
    const cap = (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor;
    const android = !!cap?.isNativePlatform?.() || /PPS\w*Android/.test(navigator.userAgent);
    const { error } = await sb.rpc("pps_besuch", { p_app: APP, p_geraet: android ? "android" : "browser" });
    if (!error) window.localStorage.setItem(key, tag);
  } catch {
    /* egal – nächstes Mal wieder */
  }
}
