# PPS Books – Lese-App (books-app)

Die Lese-App von ProPhotoSkills: Regal mit den Büchern, Leser im Browser.
Gleicher Aufbau wie der KI-Coach (Repo `app`): TanStack Start + React + Tailwind, läuft auf Cloudflare Workers.

## Stand books-app_v2
- In der App liegen **keine Bücher**. Regal, Cover und EPUBs kommen vom Tor **books-gate**, das das Repo books ausliest.
- Flaggen wie auf prophotoskills.com (8 Sprachen): stellen App-Texte UND Buch-Ausgabe um.
- Gibt es ein Buch nicht in der gewählten Sprache, steht es abgedunkelt mit den vorhandenen Sprachen da.
- Leser (epub.js): Blättern, Inhalt, Schriftgröße, Hell/Sepia/Dunkel, Lesestand je Buch und Sprache.
- Adresse des Tors: Build-Variable `VITE_BOOKS_GATE_URL`, sonst https://books-gate.prophotoskills.workers.dev
- Nächste Stufe: Anmeldung (Web Login) + nur gekaufte Bücher

## Google-Play-Regel
Reine Lese-App: kein Kaufknopf, keine Links zu Digistore oder Produktseiten.

## Befehle
- `npm install` – einmal
- `npm run dev` – lokal ansehen (http://localhost:5173)
- `npm run build` – so baut auch Cloudflare
