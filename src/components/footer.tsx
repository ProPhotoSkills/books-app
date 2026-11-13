/**
 * Schlichte Fußzeile. Bewusst NICHT die große PPS-Fußzeile aus dem KI-Coach:
 * die verlinkt auf Next Level, OnLocation, MemberAbo und den Shop – das ist in
 * einer reinen Lese-App laut Google-Play-Regel nicht erlaubt.
 * Erlaubt: Impressum, Datenschutz, Hilfe/Kontakt.
 */
export function Footer() {
  return (
    <footer className="border-t border-border bg-sidebar text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center justify-between gap-3">
        <span>© 2026 ProPhotoSkills · PPS Books</span>
        <nav className="flex flex-wrap gap-4">
          <a className="hover:text-foreground" href="https://prophotoskills.com/impressum/" target="_blank" rel="noreferrer">
            Impressum
          </a>
          <a className="hover:text-foreground" href="https://prophotoskills.com/datenschutz/" target="_blank" rel="noreferrer">
            Datenschutz
          </a>
          <a className="hover:text-foreground" href="mailto:support@prophotoskills.com">
            Hilfe
          </a>
        </nav>
      </div>
    </footer>
  );
}
