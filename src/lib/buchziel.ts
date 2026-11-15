// v16 (Eric 15.11.: „das ist enttäuschend … User Experience immer im Hinterkopf … bau das um, dass das nicht
// so missverständlich ist“): Wer von einem gekauften Buch (Next Level, On Location) zur Anmeldung kommt,
// soll klar sehen, dass ein kostenloses Konto nur Beginner enthält – und nach dem Registrieren im
// Beginner-Guide landen, nicht wieder vor dem gesperrten Buch.

export const KONTO_BUCH = "beginner"; // mit kostenlosem Konto lesbar (wie KONTO_BUECHER im Tor books-gate)

const NAMEN: Record<string, string> = { nextlevel: "Next Level", onlocation: "On Location", beginner: "Beginner" };

export function buchName(id: string): string {
  return NAMEN[id] ?? id;
}

/** Aus „/lesen/<buch>/<sprache>“ das Buch und die Sprache holen. */
export function zielInfo(weiter?: string): { buch: string; sprache: string } | null {
  const m = weiter?.match(/^\/lesen\/([^/?#]+)\/([^/?#]+)/);
  return m ? { buch: m[1], sprache: m[2] } : null;
}

/** true = das Ziel ist ein Buch, das man nicht mit einem kostenlosen Konto lesen kann. */
export function istKaufbuch(weiter?: string): boolean {
  const z = zielInfo(weiter);
  return !!z && z.buch !== KONTO_BUCH;
}

/** Wohin nach dem kostenlosen Registrieren: Beginner in derselben Sprache. */
export function freiesZiel(weiter: string | undefined, lang: string): string {
  return `/lesen/${KONTO_BUCH}/${zielInfo(weiter)?.sprache ?? lang}`;
}
