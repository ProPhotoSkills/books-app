# PPS Books – Lese-App (books-app)

Die Lese-App von ProPhotoSkills: Regal mit den Büchern, Leser im Browser.
Gleicher Aufbau wie der KI-Coach (Repo `app`): TanStack Start + React + Tailwind, läuft auf Cloudflare Workers.

## Stand books-app_v1 (Prototyp)
- Regal mit Next Level, On Location, Beginner – Lesestand je Buch
- Leser (epub.js): Blättern (Knöpfe, Pfeiltasten, Wischen), Inhalt, Schriftgröße, Hell/Sepia/Dunkel, Lesestand wird gemerkt
- Bücher kommen noch aus `public/test-books/` (TEST-Ausgaben) – ohne Login
- Nächste Stufe: Anmeldung (Konto aus Web Login) + Tor `books-gate`, das nur gekaufte Bücher aus dem privaten Repo `books` ausliefert

## Google-Play-Regel
Reine Lese-App: kein Kaufknopf, keine Links zu Digistore oder Produktseiten.

## Befehle
- `npm install` – einmal
- `npm run dev` – lokal ansehen (http://localhost:5173)
- `npm run build` – so baut auch Cloudflare
