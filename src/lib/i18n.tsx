import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { load, save } from "@/lib/storage";

// Sprachen von PPS Books – gleiche Flaggen wie auf prophotoskills.com (8 Sprachen).
// Eine Flagge stellt beides um: die Texte der App UND die Ausgabe der Bücher im Regal.
export type Lang = "de" | "en" | "fr" | "it" | "es" | "pt" | "el" | "ja";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "de", label: "Deutsch", flag: "/flags/de.svg" },
  { code: "en", label: "English", flag: "/flags/en.svg" },
  { code: "fr", label: "Français", flag: "/flags/fr.svg" },
  { code: "it", label: "Italiano", flag: "/flags/it.svg" },
  { code: "es", label: "Español", flag: "/flags/es.svg" },
  { code: "pt", label: "Português", flag: "/flags/pt.svg" },
  { code: "el", label: "Ελληνικά", flag: "/flags/el.svg" },
  { code: "ja", label: "日本語", flag: "/flags/ja.svg" },
];

export function flagFor(code: string): string | null {
  return LANGS.find((l) => l.code === code.slice(0, 2))?.flag ?? null;
}

export function labelFor(code: string): string {
  return LANGS.find((l) => l.code === code.slice(0, 2))?.label ?? code.toUpperCase();
}

type Dict = Record<string, string>;

const T: Record<Lang, Dict> = {
  de: {
    "badge.test": "Testversion",
    "lang.label": "Sprache",
    "shelf.title1": "Dein",
    "shelf.title2": "Regal",
    "shelf.sub": "Tippe auf ein Buch, um zu lesen. Dein Lesestand wird auf diesem Gerät gemerkt.",
    "shelf.loading": "Regal wird geladen …",
    "shelf.error": "Das Regal konnte gerade nicht geladen werden. Bitte später noch einmal versuchen.",
    "shelf.empty": "Deine Bücher findest du hier, sobald du sie auf prophotoskills.com erworben hast.",
    "shelf.notStarted": "Noch nicht begonnen",
    "shelf.read": "{n} % gelesen",
    "shelf.otherLang": "Nicht auf Deutsch – verfügbar in:",
    "reader.back": "Regal",
    "reader.toc": "Inhalt",
    "reader.font": "Schrift und Farbe",
    "reader.size": "Schriftgröße",
    "reader.color": "Farbe",
    "reader.light": "Hell",
    "reader.sepia": "Sepia",
    "reader.dark": "Dunkel",
    "reader.loading": "Buch wird geöffnet …",
    "reader.error": "Das Buch konnte nicht geöffnet werden. Bitte später noch einmal versuchen.",
    "reader.noToc": "Dieses Buch hat kein Inhaltsverzeichnis.",
    "reader.start": "Anfang",
    "reader.page": "Seite",
    "reader.prev": "Zurück blättern",
    "reader.next": "Weiter blättern",
    "close": "Schließen",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",
    "footer.help": "Hilfe",
  },
  en: {
    "badge.test": "Test version",
    "lang.label": "Language",
    "shelf.title1": "Your",
    "shelf.title2": "Shelf",
    "shelf.sub": "Tap a book to start reading. Your reading position is saved on this device.",
    "shelf.loading": "Loading your shelf …",
    "shelf.error": "Your shelf could not be loaded right now. Please try again later.",
    "shelf.empty": "Your books will appear here once you have purchased them on prophotoskills.com.",
    "shelf.notStarted": "Not started yet",
    "shelf.read": "{n} % read",
    "shelf.otherLang": "Not available in English – available in:",
    "reader.back": "Shelf",
    "reader.toc": "Contents",
    "reader.font": "Font and colour",
    "reader.size": "Font size",
    "reader.color": "Colour",
    "reader.light": "Light",
    "reader.sepia": "Sepia",
    "reader.dark": "Dark",
    "reader.loading": "Opening book …",
    "reader.error": "The book could not be opened. Please try again later.",
    "reader.noToc": "This book has no table of contents.",
    "reader.start": "Beginning",
    "reader.page": "Page",
    "reader.prev": "Previous page",
    "reader.next": "Next page",
    "close": "Close",
    "footer.imprint": "Site notice",
    "footer.privacy": "Privacy",
    "footer.help": "Help",
  },
  fr: {
    "badge.test": "Version test",
    "lang.label": "Langue",
    "shelf.title1": "Ta",
    "shelf.title2": "bibliothèque",
    "shelf.sub": "Touche un livre pour commencer la lecture. Ta progression est enregistrée sur cet appareil.",
    "shelf.loading": "Chargement de ta bibliothèque …",
    "shelf.error": "Ta bibliothèque n'a pas pu être chargée. Réessaie plus tard.",
    "shelf.empty": "Tes livres apparaîtront ici dès que tu les auras achetés sur prophotoskills.com.",
    "shelf.notStarted": "Pas encore commencé",
    "shelf.read": "{n} % lu",
    "shelf.otherLang": "Pas disponible en français – disponible en :",
    "reader.back": "Bibliothèque",
    "reader.toc": "Sommaire",
    "reader.font": "Police et couleur",
    "reader.size": "Taille du texte",
    "reader.color": "Couleur",
    "reader.light": "Clair",
    "reader.sepia": "Sépia",
    "reader.dark": "Sombre",
    "reader.loading": "Ouverture du livre …",
    "reader.error": "Le livre n'a pas pu être ouvert. Réessaie plus tard.",
    "reader.noToc": "Ce livre n'a pas de sommaire.",
    "reader.start": "Début",
    "reader.page": "Page",
    "reader.prev": "Page précédente",
    "reader.next": "Page suivante",
    "close": "Fermer",
    "footer.imprint": "Mentions légales",
    "footer.privacy": "Confidentialité",
    "footer.help": "Aide",
  },
  it: {
    "badge.test": "Versione di prova",
    "lang.label": "Lingua",
    "shelf.title1": "La tua",
    "shelf.title2": "libreria",
    "shelf.sub": "Tocca un libro per iniziare a leggere. Il punto di lettura viene salvato su questo dispositivo.",
    "shelf.loading": "Caricamento della libreria …",
    "shelf.error": "Non è stato possibile caricare la libreria. Riprova più tardi.",
    "shelf.empty": "I tuoi libri appariranno qui non appena li avrai acquistati su prophotoskills.com.",
    "shelf.notStarted": "Non ancora iniziato",
    "shelf.read": "{n} % letto",
    "shelf.otherLang": "Non disponibile in italiano – disponibile in:",
    "reader.back": "Libreria",
    "reader.toc": "Indice",
    "reader.font": "Carattere e colore",
    "reader.size": "Dimensione testo",
    "reader.color": "Colore",
    "reader.light": "Chiaro",
    "reader.sepia": "Seppia",
    "reader.dark": "Scuro",
    "reader.loading": "Apertura del libro …",
    "reader.error": "Non è stato possibile aprire il libro. Riprova più tardi.",
    "reader.noToc": "Questo libro non ha un indice.",
    "reader.start": "Inizio",
    "reader.page": "Pagina",
    "reader.prev": "Pagina precedente",
    "reader.next": "Pagina successiva",
    "close": "Chiudi",
    "footer.imprint": "Note legali",
    "footer.privacy": "Privacy",
    "footer.help": "Aiuto",
  },
  es: {
    "badge.test": "Versión de prueba",
    "lang.label": "Idioma",
    "shelf.title1": "Tu",
    "shelf.title2": "estantería",
    "shelf.sub": "Toca un libro para empezar a leer. Tu progreso se guarda en este dispositivo.",
    "shelf.loading": "Cargando tu estantería …",
    "shelf.error": "No se pudo cargar tu estantería. Inténtalo de nuevo más tarde.",
    "shelf.empty": "Tus libros aparecerán aquí en cuanto los hayas comprado en prophotoskills.com.",
    "shelf.notStarted": "Aún no empezado",
    "shelf.read": "{n} % leído",
    "shelf.otherLang": "No disponible en español – disponible en:",
    "reader.back": "Estantería",
    "reader.toc": "Índice",
    "reader.font": "Letra y color",
    "reader.size": "Tamaño de letra",
    "reader.color": "Color",
    "reader.light": "Claro",
    "reader.sepia": "Sepia",
    "reader.dark": "Oscuro",
    "reader.loading": "Abriendo el libro …",
    "reader.error": "No se pudo abrir el libro. Inténtalo de nuevo más tarde.",
    "reader.noToc": "Este libro no tiene índice.",
    "reader.start": "Inicio",
    "reader.page": "Página",
    "reader.prev": "Página anterior",
    "reader.next": "Página siguiente",
    "close": "Cerrar",
    "footer.imprint": "Aviso legal",
    "footer.privacy": "Privacidad",
    "footer.help": "Ayuda",
  },
  pt: {
    "badge.test": "Versão de teste",
    "lang.label": "Idioma",
    "shelf.title1": "A tua",
    "shelf.title2": "estante",
    "shelf.sub": "Toca num livro para começar a ler. O teu progresso fica guardado neste dispositivo.",
    "shelf.loading": "A carregar a tua estante …",
    "shelf.error": "Não foi possível carregar a tua estante. Tenta novamente mais tarde.",
    "shelf.empty": "Os teus livros aparecem aqui assim que os comprares em prophotoskills.com.",
    "shelf.notStarted": "Ainda não começado",
    "shelf.read": "{n} % lido",
    "shelf.otherLang": "Não disponível em português – disponível em:",
    "reader.back": "Estante",
    "reader.toc": "Índice",
    "reader.font": "Letra e cor",
    "reader.size": "Tamanho da letra",
    "reader.color": "Cor",
    "reader.light": "Claro",
    "reader.sepia": "Sépia",
    "reader.dark": "Escuro",
    "reader.loading": "A abrir o livro …",
    "reader.error": "Não foi possível abrir o livro. Tenta novamente mais tarde.",
    "reader.noToc": "Este livro não tem índice.",
    "reader.start": "Início",
    "reader.page": "Página",
    "reader.prev": "Página anterior",
    "reader.next": "Página seguinte",
    "close": "Fechar",
    "footer.imprint": "Aviso legal",
    "footer.privacy": "Privacidade",
    "footer.help": "Ajuda",
  },
  el: {
    "badge.test": "Δοκιμαστική έκδοση",
    "lang.label": "Γλώσσα",
    "shelf.title1": "Η",
    "shelf.title2": "βιβλιοθήκη σου",
    "shelf.sub": "Πάτησε ένα βιβλίο για να ξεκινήσεις. Το σημείο ανάγνωσης αποθηκεύεται σε αυτή τη συσκευή.",
    "shelf.loading": "Φόρτωση βιβλιοθήκης …",
    "shelf.error": "Η βιβλιοθήκη δεν μπόρεσε να φορτωθεί. Δοκίμασε ξανά αργότερα.",
    "shelf.empty": "Τα βιβλία σου θα εμφανιστούν εδώ μόλις τα αγοράσεις στο prophotoskills.com.",
    "shelf.notStarted": "Δεν έχει ξεκινήσει",
    "shelf.read": "{n} % διαβασμένο",
    "shelf.otherLang": "Δεν διατίθεται στα ελληνικά – διατίθεται σε:",
    "reader.back": "Βιβλιοθήκη",
    "reader.toc": "Περιεχόμενα",
    "reader.font": "Γραμματοσειρά και χρώμα",
    "reader.size": "Μέγεθος γραμμάτων",
    "reader.color": "Χρώμα",
    "reader.light": "Φωτεινό",
    "reader.sepia": "Σέπια",
    "reader.dark": "Σκούρο",
    "reader.loading": "Άνοιγμα βιβλίου …",
    "reader.error": "Το βιβλίο δεν μπόρεσε να ανοίξει. Δοκίμασε ξανά αργότερα.",
    "reader.noToc": "Αυτό το βιβλίο δεν έχει πίνακα περιεχομένων.",
    "reader.start": "Αρχή",
    "reader.page": "Σελίδα",
    "reader.prev": "Προηγούμενη σελίδα",
    "reader.next": "Επόμενη σελίδα",
    "close": "Κλείσιμο",
    "footer.imprint": "Νομική σημείωση",
    "footer.privacy": "Απόρρητο",
    "footer.help": "Βοήθεια",
  },
  ja: {
    "badge.test": "テスト版",
    "lang.label": "言語",
    "shelf.title1": "あなたの",
    "shelf.title2": "本棚",
    "shelf.sub": "本をタップすると読み始められます。読書位置はこの端末に保存されます。",
    "shelf.loading": "本棚を読み込んでいます …",
    "shelf.error": "本棚を読み込めませんでした。しばらくしてからもう一度お試しください。",
    "shelf.empty": "prophotoskills.com で購入した本がここに表示されます。",
    "shelf.notStarted": "未読",
    "shelf.read": "{n} % 読了",
    "shelf.otherLang": "日本語版はありません – 対応言語：",
    "reader.back": "本棚",
    "reader.toc": "目次",
    "reader.font": "文字と色",
    "reader.size": "文字サイズ",
    "reader.color": "色",
    "reader.light": "ライト",
    "reader.sepia": "セピア",
    "reader.dark": "ダーク",
    "reader.loading": "本を開いています …",
    "reader.error": "本を開けませんでした。しばらくしてからもう一度お試しください。",
    "reader.noToc": "この本には目次がありません。",
    "reader.start": "最初",
    "reader.page": "ページ",
    "reader.prev": "前のページ",
    "reader.next": "次のページ",
    "close": "閉じる",
    "footer.imprint": "法的表示",
    "footer.privacy": "プライバシー",
    "footer.help": "ヘルプ",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string, vars?: Record<string, string | number>) => string };

const I18nContext = createContext<Ctx | null>(null);

function isLang(x: unknown): x is Lang {
  return typeof x === "string" && LANGS.some((l) => l.code === x);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  // Gespeicherte Wahl → sonst Sprache des Browsers → sonst Deutsch
  useEffect(() => {
    const saved = load<string | null>("ppsb_lang", null);
    if (isLang(saved)) return setLangState(saved);
    const nav = (navigator.language || "de").slice(0, 2);
    if (isLang(nav)) setLangState(nav);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    save("ppsb_lang", l);
  };

  const t = (key: string, vars?: Record<string, string | number>) => {
    let s = T[lang][key] ?? T.de[key] ?? key;
    if (vars) for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, String(v));
    return s;
  };

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n(): Ctx {
  const c = useContext(I18nContext);
  if (!c) throw new Error("useI18n außerhalb von I18nProvider");
  return c;
}
