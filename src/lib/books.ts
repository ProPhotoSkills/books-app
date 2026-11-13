// Die Bücher im Regal von PPS Books.
//
// books-app_v1 (Prototyp): Die EPUBs kommen aus public/test-books/ – das sind
// die TEST-Ausgaben aus dem Brain (1_web/16_books/dateien/…), nur zum Ausprobieren.
// Ab der nächsten Stufe liefert das Tor books-gate die Bücher aus dem privaten
// Repo books – nur an Konten, die das Buch gekauft haben. Dann verschwindet
// public/test-books/ wieder aus diesem Repo.
//
// Titel stehen hier bewusst sauber drin – die Titel in den EPUB-Dateien
// sind Dateinamen aus InDesign (z. B. „PPS_NextLevel_A5_Ebook_202611-TEST-27“).

export type Book = {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  file: string;
};

export const BOOKS: Book[] = [
  {
    id: "nextlevel",
    title: "Next Level",
    subtitle: "Photoguide",
    cover: "/covers/nextlevel.webp",
    file: "/test-books/nextlevel.epub",
  },
  {
    id: "onlocation",
    title: "On Location",
    subtitle: "Photoguide",
    cover: "/covers/onlocation.webp",
    file: "/test-books/onlocation.epub",
  },
  {
    id: "beginner",
    title: "Beginner",
    subtitle: "Photoguide",
    cover: "/covers/beginner.webp",
    file: "/test-books/beginner.epub",
  },
];

export function findBook(id: string): Book | undefined {
  return BOOKS.find((b) => b.id === id);
}
