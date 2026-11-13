// PPS Books holt ALLES vom Tor books-gate – in der App selbst liegen keine Bücher.
// Das Tor liest das Repo books aus (Regel <buch>/<sprache>/<datei>.epub) und liefert:
//   /katalog                 → Liste aller Bücher mit ihren Sprach-Ausgaben
//   /cover/<buch>/<sprache>  → Titelbild aus dem EPUB
//   /buch/<buch>/<sprache>   → die EPUB-Datei
//
// Adresse des Tors: Cloudflare-Variable VITE_BOOKS_GATE_URL (Build-Variable),
// sonst https://books-gate.prophotoskills.workers.dev
//
// Nächste Stufe: Anmeldung (Web Login) – dann schickt die App einen Ausweis mit,
// und das Tor liefert nur gekaufte Bücher.

export const GATE_URL: string = (
  (import.meta.env.VITE_BOOKS_GATE_URL as string | undefined) ?? "https://books-gate.prophotoskills.workers.dev"
).replace(/\/+$/, "");

export type Ausgabe = {
  sprache: string;
  datei: string;
  cover: string;
  epub: string;
  groesse: number | null;
};

export type Buch = { id: string; titel: string; ausgaben: Ausgabe[] };

export type Katalog = { stand: string; buecher: Buch[]; warnungen: string[] };

export async function ladeKatalog(): Promise<Katalog> {
  const res = await fetch(`${GATE_URL}/katalog`);
  if (!res.ok) throw new Error(`Katalog: HTTP ${res.status}`);
  return (await res.json()) as Katalog;
}

export function gateUrl(pfad: string): string {
  return `${GATE_URL}${pfad}`;
}

export function ausgabeFuer(buch: Buch, sprache: string): Ausgabe | undefined {
  return buch.ausgaben.find((a) => a.sprache.slice(0, 2) === sprache.slice(0, 2));
}

export function lesestandKey(buch: string, sprache: string, art: "pos" | "pct"): string {
  return `ppsb_${art}_${buch}_${sprache}`;
}
