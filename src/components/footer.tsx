import { useI18n } from "@/lib/i18n";

/**
 * Schlichte Fußzeile. Bewusst NICHT die große PPS-Fußzeile aus dem KI-Coach:
 * die verlinkt auf Next Level, OnLocation, MemberAbo und den Shop – das ist in
 * einer reinen Lese-App laut Google-Play-Regel nicht erlaubt.
 * Erlaubt: Impressum, Datenschutz, Hilfe/Kontakt.
 */
export function Footer() {
  const { lang, t } = useI18n();
  const de = lang === "de";
  return (
    <footer className="border-t border-border bg-sidebar text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center justify-between gap-3">
        <span>© 2026 ProPhotoSkills · PPS Books</span>
        <nav className="flex flex-wrap gap-4">
          <a className="hover:text-foreground" href={de ? "https://prophotoskills.com/impressum/" : "https://prophotoskills.com/site-notice/"} target="_blank" rel="noreferrer">
            {t("footer.imprint")}
          </a>
          <a className="hover:text-foreground" href={de ? "https://prophotoskills.com/datenschutz/" : "https://prophotoskills.com/privacy-policy/"} target="_blank" rel="noreferrer">
            {t("footer.privacy")}
          </a>
          <a className="hover:text-foreground" href="mailto:support@prophotoskills.com">
            {t("footer.help")}
          </a>
        </nav>
      </div>
    </footer>
  );
}
