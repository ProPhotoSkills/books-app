import { useEffect, useState } from "react";

// v22: Laeuft die Seite in der Android-App (Capacitor-Huelle)?
// Google-Play-Regel (KONZEPT_pps-books_v3): in der App keine Links nach draussen zu Kauf-/Produktseiten.
// Die Wissensseiten verlinken freie Artikel auf prophotoskills.com, und diese Seiten fuehren weiter
// zu den Produkten – darum zeigen wir diese Links in der App NICHT, nur im Browser.
// Server und erster Aufbau: false (Browser) → Suchmaschinen sehen die Links.
export function useIstApp(): boolean {
  const [app, setApp] = useState(false);
  useEffect(() => {
    const cap = (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor;
    setApp(!!cap?.isNativePlatform?.());
  }, []);
  return app;
}
