// Texte zu den Büchern im Regal – Quelle: Rückseiten-/Covertext der Buch-PDFs
// (1_web/16_books/dateien/<buch>/indesign/PPS_<Buch>_A5_Ebook_202609.pdf, Seite 1),
// Eric 14.11.: „hol einmal die Texte aus den PDFen raus … Covertexte … links Text, rechts Cover“.
// DE = Original 1:1 (nur Silbentrennung entfernt). Andere Sprachen = Übersetzung von Claude
// (14.11.) – bitte prüfen; „content ist Chef“: bei Abweichung gilt der deutsche Text.
// Module = die farbigen Reiter am Cover.

import type { Lang } from "@/lib/i18n";

export const REIHENFOLGE = ["nextlevel", "onlocation", "beginner"];

export const MODULE: Record<string, string[]> = {
  nextlevel: ["Knowledge", "Technik", "Progress", "Skill", "Psycho"],
  onlocation: ["Travel", "Location", "Insurance", "Equipment"],
  beginner: ["Beginner"],
};

export const BUCHTEXT: Record<string, Partial<Record<Lang, string>>> = {
  nextlevel: {
    de: "Dieser Guide soll dich nicht mit Technik erschlagen. Er will dich heben – mit Wissen, Haltung, Struktur. Es geht nicht um Pixel, Presets oder die perfekte Kamera. Es geht um dich. Um dein Wachstum als Fotograf:in. Um deinen nächsten Schritt. Um deinen Fortschritt – nicht nur in der Bildqualität, sondern in deiner Denkweise, deiner Führung, deiner Präsenz am Set.",
    en: "This guide isn't here to bury you in technology. It wants to lift you up – with knowledge, attitude and structure. It's not about pixels, presets or the perfect camera. It's about you. About your growth as a photographer. About your next step. About your progress – not only in image quality, but in your mindset, your leadership and your presence on set.",
    fr: "Ce guide ne veut pas t'assommer de technique. Il veut t'élever – avec du savoir, une attitude, une structure. Il ne s'agit pas de pixels, de presets ou de l'appareil parfait. Il s'agit de toi. De ta progression en tant que photographe. De ta prochaine étape. De ton évolution – pas seulement dans la qualité de tes images, mais dans ta façon de penser, ta manière de diriger, ta présence sur le plateau.",
    it: "Questa guida non vuole sommergerti di tecnica. Vuole farti crescere – con conoscenza, atteggiamento, struttura. Non si tratta di pixel, preset o della fotocamera perfetta. Si tratta di te. Della tua crescita come fotografo. Del tuo prossimo passo. Del tuo progresso – non solo nella qualità delle immagini, ma nel tuo modo di pensare, nella tua guida, nella tua presenza sul set.",
    es: "Esta guía no quiere abrumarte con técnica. Quiere elevarte – con conocimiento, actitud y estructura. No se trata de píxeles, presets ni de la cámara perfecta. Se trata de ti. De tu crecimiento como fotógrafo. De tu próximo paso. De tu progreso – no solo en la calidad de imagen, sino en tu forma de pensar, tu liderazgo y tu presencia en el set.",
    pt: "Este guia não te quer afogar em técnica. Quer elevar-te – com conhecimento, atitude e estrutura. Não se trata de píxeis, presets ou da câmara perfeita. Trata-se de ti. Do teu crescimento como fotógrafo. Do teu próximo passo. Do teu progresso – não só na qualidade da imagem, mas na tua forma de pensar, na tua liderança e na tua presença no set.",
    el: "Αυτός ο οδηγός δεν θέλει να σε φορτώσει με τεχνική. Θέλει να σε ανεβάσει – με γνώση, στάση και δομή. Δεν πρόκειται για pixel, presets ή την τέλεια κάμερα. Πρόκειται για σένα. Για την εξέλιξή σου ως φωτογράφος. Για το επόμενο βήμα σου. Για την πρόοδό σου – όχι μόνο στην ποιότητα της εικόνας, αλλά και στον τρόπο σκέψης σου, στην καθοδήγησή σου, στην παρουσία σου στο σετ.",
    ja: "このガイドは、技術の話であなたを圧倒するためのものではありません。知識、姿勢、構造によってあなたを引き上げるためのものです。ピクセルやプリセット、完璧なカメラの話ではありません。あなた自身の話です。フォトグラファーとしての成長、次の一歩、そして画質だけでなく、考え方、リーダーシップ、撮影現場での存在感における前進についての話です。",
  },
  onlocation: {
    de: "On Location ist dein Guide für erfolgreiche Outdoor-Fotografie. Lerne, wie du dein Location-Shooting perfekt planst – von Licht, Wetter und Equipment bis zur kreativen Umsetzung. Mit praktischen Fotografie-Tipps, Checklisten und Know-how zu Technik und Organisation wirst du vor Ort flexibel, vorbereitet und souverän.",
    en: "On Location is your guide to successful outdoor photography. Learn how to plan your location shoot perfectly – from light, weather and equipment to creative execution. With practical photography tips, checklists and know-how on technology and organisation, you'll be flexible, prepared and confident on location.",
    fr: "On Location est ton guide pour réussir la photographie en extérieur. Apprends à planifier parfaitement ton shooting en location – de la lumière, de la météo et du matériel jusqu'à la réalisation créative. Avec des conseils pratiques, des check-lists et du savoir-faire en technique et en organisation, tu seras flexible, préparé et serein sur place.",
    it: "On Location è la tua guida per una fotografia outdoor di successo. Impara a pianificare alla perfezione il tuo shooting in location – dalla luce, dal meteo e dall'attrezzatura fino alla realizzazione creativa. Con consigli pratici di fotografia, checklist e know-how su tecnica e organizzazione, sul posto sarai flessibile, preparato e sicuro di te.",
    es: "On Location es tu guía para una fotografía exterior de éxito. Aprende a planificar a la perfección tu sesión en localización – desde la luz, el tiempo y el equipo hasta la realización creativa. Con consejos prácticos de fotografía, listas de control y conocimientos de técnica y organización, estarás flexible, preparado y seguro sobre el terreno.",
    pt: "On Location é o teu guia para uma fotografia de exterior bem-sucedida. Aprende a planear na perfeição a tua sessão em localização – da luz, do tempo e do equipamento até à execução criativa. Com dicas práticas de fotografia, checklists e conhecimento de técnica e organização, estarás no local flexível, preparado e confiante.",
    el: "Το On Location είναι ο οδηγός σου για επιτυχημένη φωτογραφία σε εξωτερικούς χώρους. Μάθε πώς να σχεδιάζεις τέλεια τη φωτογράφιση σε τοποθεσία – από το φως, τον καιρό και τον εξοπλισμό μέχρι τη δημιουργική υλοποίηση. Με πρακτικές φωτογραφικές συμβουλές, λίστες ελέγχου και γνώσεις τεχνικής και οργάνωσης, θα είσαι επί τόπου ευέλικτος, προετοιμασμένος και σίγουρος.",
    ja: "On Location は、屋外撮影を成功させるためのガイドです。光や天候、機材からクリエイティブな表現まで、ロケーション撮影を完璧に計画する方法を学びましょう。実践的な撮影のヒント、チェックリスト、技術と段取りのノウハウで、現場で柔軟に、準備万端で、落ち着いて撮影できるようになります。",
  },
  beginner: {
    de: "Dieser Guide ist kein klassisches Lehrbuch. Er ist dein Begleiter auf dem Weg von soliden Grundlagen hin zu echter fotografischer Sicherheit. Hier geht es nicht darum, Regeln auswendig zu lernen – sondern zu verstehen, warum Bilder wirken, wie Entscheidungen entstehen und wodurch Fotografie Haltung bekommt.",
    en: "This guide is not a classic textbook. It is your companion on the way from solid basics to real photographic confidence. It's not about memorising rules – it's about understanding why images work, how decisions are made and what gives photography its attitude.",
    fr: "Ce guide n'est pas un manuel classique. Il est ton compagnon sur le chemin qui mène de bases solides à une véritable assurance photographique. Il ne s'agit pas d'apprendre des règles par cœur – mais de comprendre pourquoi les images fonctionnent, comment naissent les décisions et ce qui donne à la photographie son attitude.",
    it: "Questa guida non è un classico manuale. È la tua compagna di viaggio, da basi solide fino a una vera sicurezza fotografica. Non si tratta di imparare regole a memoria – ma di capire perché le immagini funzionano, come nascono le decisioni e che cosa dà alla fotografia un carattere.",
    es: "Esta guía no es un manual clásico. Es tu compañera en el camino desde unas bases sólidas hasta una verdadera seguridad fotográfica. No se trata de aprender reglas de memoria – sino de entender por qué funcionan las imágenes, cómo se toman las decisiones y qué da actitud a la fotografía.",
    pt: "Este guia não é um manual clássico. É o teu companheiro no caminho de bases sólidas até uma verdadeira segurança fotográfica. Não se trata de decorar regras – mas de perceber porque é que as imagens funcionam, como nascem as decisões e o que dá atitude à fotografia.",
    el: "Αυτός ο οδηγός δεν είναι ένα κλασικό εγχειρίδιο. Είναι ο σύντροφός σου στον δρόμο από τις σταθερές βάσεις προς την πραγματική φωτογραφική σιγουριά. Δεν πρόκειται να αποστηθίσεις κανόνες – αλλά να καταλάβεις γιατί λειτουργούν οι εικόνες, πώς παίρνονται οι αποφάσεις και τι δίνει στη φωτογραφία χαρακτήρα.",
    ja: "このガイドは、よくある教科書ではありません。しっかりとした基礎から、本当の意味での写真への自信へと進む道のりの伴走者です。ルールを暗記するのではなく、なぜ写真が心に響くのか、判断はどのように生まれるのか、何が写真に姿勢を与えるのかを理解することが目的です。",
  },
};

export function buchText(id: string, lang: string): string | null {
  const t = BUCHTEXT[id];
  if (!t) return null;
  return t[lang as Lang] ?? t.de ?? null;
}
