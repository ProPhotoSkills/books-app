// Wissensseiten der Buecher (v22, Eric 22.11.2026: „Setz das mal um für die Books-App“).
// Oeffentlich, ohne Anmeldung, serverseitig gerendert – damit Google, Bing und KI-Suchen etwas lesen koennen.
// Quellen:
// - inhalt: Kapitel-Ueberschriften (Absatzformat „Head“) aus den IDML-Dateien im Brain
//   1_web/16_books/dateien: PPS_NextLevel_DE_v05.idml · PPS_OnLocation_DE_v01.idml · PPS_Beginner_DE_v01.idml
//   (1:1, nur doppelte Leerzeichen entfernt)
// - leseproben: Absaetze 1:1 aus denselben IDML-Dateien
// - artikel: freie Kapitel auf prophotoskills.com (pps_v22) – hier NUR eigene Zusammenfassung + Link,
//   damit kein doppelter Inhalt entsteht. Keine Inhalte aus dem bezahlten Bereich (Repo content).
// - fragen: gekuerzt nach prophotoskills.com/faq (Beginner: aus dem Buch abgeleitet)
// v23 (Eric 26.11.2026: „ja mach mal“ – Übersetzung): 8 Sprachen. Je Sprache gilt:
// - inhalt + leseproben: 1:1 aus dem EPUB dieser Sprache (1_web/16_books/books_struktur/<buch>/<sprache>/,
//   On Location JA: dateien/onlocation/indesign/PPS_OnLocation_JA_v03.epub) – Auszug im Brain:
//   1_web/17_books-app/wissen/buchtexte_wissen_v1.json
// - kurz, worum, fuer, artikel, fragen: Übersetzung von Claude aus dem Deutschen (bitte prüfen; DE ist Chef)
// - Artikel und FAQ auf prophotoskills.com gibt es nur auf Deutsch – die Seiten sagen das dazu.

export type Kapitelgruppe = { gruppe: string | null; kapitel: string[] };
export type Leseprobe = { kapitel: string; absaetze: string[] };
export type Artikel = { titel: string; url: string; text: string };
export type Frage = { frage: string; antwort: string };
export type Wissen = {
  titel: string;
  kurz: string;
  worum: string[];
  fuer: string;
  inhalt: Kapitelgruppe[];
  leseproben: Leseprobe[];
  artikel: Artikel[];
  fragen: Frage[];
};

export const SPRACHEN = ["de", "en", "fr", "it", "es", "pt", "el", "ja"] as const;
export type Sprache = (typeof SPRACHEN)[number];

export const SEITE = "https://books.prophotoskills.workers.dev";
export const FAQ_URL = "https://prophotoskills.com/faq/";

export const WISSEN: Record<Sprache, Record<string, Wissen>> = {
  "de": {
    "nextlevel": {
      "titel": "Photoguide Next Level",
      "kurz": "Photoguide Next Level von ProPhotoSkills: Wissen, Haltung und Struktur für Fotograf:innen, die professionell wachsen wollen – Inhalt, Leseproben und Antworten.",
      "worum": [
        "Next Level ist der Photoguide für alle, die schon solide fotografieren und den Schritt zur professionellen Werbefotografie gehen wollen. Er erklärt keine Menüs und Presets, sondern das, was am Set und im Kundengespräch den Unterschied macht.",
        "Im Mittelpunkt steht die Arbeit vor dem ersten Klick: Vorbereitung, Team, Kommunikation, Führung am Set, Preisgespräche und Nutzungsrechte. Dazu kommen Kapitel über körperliche und mentale Stärke, über Kunstgeschichte als Werkzeug und über den Blick der Kund:innen auf dich."
      ],
      "fuer": "Fotograf:innen mit Erfahrung, die von Aufträgen zu Partnerschaften kommen und ihren Wert sicher vertreten wollen.",
      "inhalt": [
        {
          "gruppe": null,
          "kapitel": [
            "Warum Gala und Bunte soooooo wichtig sind...",
            "Haare & Make-up – Tratschzeit ist Vertrauenszeit",
            "Das zweite oder dritte Model sitzt wartend herum",
            "70 % des Fotojobs? Passieren VOR dem ersten Klick.",
            "Das Unsichtbare vor dem Klick",
            "Warum eingespielte Menschen mehr wert sind als jedes Objektiv",
            "„Houston, wir haben ein Problem...“",
            "Warum spontane Änderungen gefährlich sind",
            "Warum solche Situationen häufiger vorkommen, als man denkt",
            "Bonus-Tipps für höchste Souveränität",
            "Achte auf dein Umfeld",
            "Schaust du auch gerne wer wird Millionär ?",
            "Produktshooting mit Agenturteam – Kreativität anzünden",
            "Was haben Fussballer und Fotografen gemeinsam?",
            "Entwicklung - dein unsichtbarer Next-Level Trigger",
            "All die Coaches ....",
            "Vorurteile vs. Erfahrungen",
            "Interesse und Neugierde",
            "Technische Fähigkeiten",
            "Kreativität und Vision",
            "Komposition und Bildgestaltung",
            "Geduld",
            "Ausdauer",
            "Passion und Hingabe",
            "Menschenführung und Kommunikation",
            "Teamarbeit",
            "Zeitmanagement und Organisation",
            "Kritikfähigkeit und Weiterentwicklung",
            "Fokussierung auf Details",
            "Konzentration und Präsenz",
            "Wissen über Licht und Schatten",
            "Verkauf und Selbstpräsentation",
            "Souveränität und Führungsqualität",
            "Geschichten erzählen",
            "Wissen über die Kunstgeschichte",
            "Warum joggen dir hilft besser zu fotografieren...",
            "Du bist Regisseur, nicht nur Auslöser",
            "Du musst schnell sein – körperlich UND geistig",
            "Set-Energie = Team-Energie",
            "Mentale Stärke = Stressresistenz",
            "Du arbeitest in Extremsituationen – Zeit, Wetter, Locations",
            "Konzentration durch körperliche Klarheit",
            "Haltung = Wirkung",
            "Leonardo Davinci, wichtig für die Fofografie?",
            "Lichtführung – Chiaroscuro (Hell-Dunkel)",
            "Studium der Anatomie – echtes Verständnis für Körper",
            "Komposition & Goldener Schnitt",
            "Optik & Sehen – die Camera Obscura",
            "Der Ausdruck – Mona-Lisa-Effekt",
            "Multidisziplinärer Ansatz = moderne Fotografie",
            "Licht und Schatten lesen – wie ein Drama auf der Bühne",
            "Beobachten statt urteilen",
            "Architektur als Kulisse begreifen",
            "Alles ist verbunden – Interdisziplinäres Denken",
            "Bewegung verstehen",
            "Neugier als Motor",
            "Emotion über Perfektion",
            "Fehler als Teil des Prozesses",
            "Geduld und Langfristigkeit",
            "Fotografen haben Social Network erschaffen....",
            "Die Kulisse von nebenan",
            "Das Lehrteam beim freien Projekt“",
            "Warum professionelle Photografie ihren Preis wert ist",
            "Warum professionelle Photografie ihren Preis wert ist -2-",
            "Professionelle Werbefotografie – ein Handwerk, das man nicht auf dem Kameradisplay erkennt",
            "Es beginnt mit dem Ziel – nicht mit der Kamera",
            "Technik kostet – aber das Ergebnis zählt",
            "Der Preis ist nicht das Problem – das Missverständnis ist es",
            "Rechte kosten – weil Bilder wertvoll sind",
            "Zusammenarbeit statt Abarbeitung",
            "Technik macht Qualität – aber Haltung macht den Unterschied",
            "Fazit: Wer billig kauft, kauft nicht doppelt – sondern verliert Wirkung",
            "Kunden Blick"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "70 % des Fotojobs? Passieren VOR dem ersten Klick.",
          "absaetze": [
            "Du denkst vielleicht, ein Fotograf oder eine Fotografin packt einfach die Kamera ein, fährt zum Set, drückt ein paarmal ab – und voilà, das perfekte Bild ist im Kasten. Doch das wäre in etwa so, als würde man sagen, ein Konzert sei allein durch das Betreten der Bühne gelungen – ohne Probe, ohne Soundcheck, ohne Lampenfieber. In Wahrheit passiert das Entscheidende lange davor. Denn etwa 70 % der Arbeit eines professionellen Fotojobs finden nicht am Set statt, sondern in der intensiven Vorbereitung darauf. Und das betrifft weit mehr als nur das Zusammenpacken der Ausrüstung.",
            "Eine gute Vorbereitung ist kein „Nice to have“, sie ist das Fundament. Sie ist der Ort, an dem sich Ideen formen, Lösungen entwickeln und mögliche Probleme bereits gedanklich durchgespielt werden. Sie ist der stille Kraftakt im Hintergrund, der dafür sorgt, dass am Tag des Shootings alles rundläuft – oder wenn es nicht rundläuft, dass man es trotzdem souverän auffängt. Diese 70 % fordern dich heraus: mental, physisch, technisch, organisatorisch – und manchmal sogar emotional. Sie sind der eigentliche Job."
          ]
        },
        {
          "kapitel": "Warum professionelle Photografie ihren Preis wert ist",
          "absaetze": [
            "In der heutigen digitalen Bilderflut entscheidet nicht der schönste Look, sondern der strategisch wirksamste. Werbefotografie ist nicht einfach ein hübsches Bild. Es ist ein Instrument – präzise, geplant, markengerecht. Der professionelle Fotograf ist dabei nicht nur ein Handwerker, sondern ein Mitdenker, ein Markenversteher, ein strategischer Partner. Und genau deshalb hat diese Leistung ihren Preis.",
            "Wer einmal in einer Marketingabteilung gearbeitet hat, weiß: Eine Kampagne steht und fällt mit den Bildern. Sie sind das erste, was wahrgenommen wird. Sie transportieren Werte, Emotionen, Identität. Eine schwache Bildsprache kann selbst die beste Idee ruinieren. Gute Bilder hingegen schaffen Vertrauen, verlängern die Verweildauer, stärken den Wiedererkennungswert. Das ist kein „Nice to have“ – das ist Conversion-Treiber."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "Entwicklung – dein unsichtbarer Next-Level-Trigger",
          "url": "https://prophotoskills.com/t05_e02_entwicklung-dein-unsichtbarer-next-level-trigger/",
          "text": "Irgendwann läuft alles: Die Kund:innen buchen, der Stil sitzt, die Routine trägt – und trotzdem spürst du, dass da mehr geht. Das Kapitel beschreibt diesen Punkt und die bewusste Entscheidung, sich wirklich weiterzuentwickeln. Es zeigt ehrlich beide Seiten: was du gewinnst (eine stärkere Persönlichkeit, schärferes fotografisches Denken, mehr Wert und Unabhängigkeit von Trends) und was es kostet (Zeit, Energie, alte Gewohnheiten und manchmal Menschen, die nicht mitgehen)."
        },
        {
          "titel": "Kunden-Blick – wenn aus Vertrauen plötzlich Budget wird",
          "url": "https://prophotoskills.com/t09_l09_kunden-blick-wenn-aus-vertrauen-ploetzlich-budget-wird/",
          "text": "Sobald große Budgets im Raum stehen, prüfen Kund:innen dich – lange bevor das Angebot rausgeht. Das Kapitel schaut durch ihre Augen: Sie kaufen nicht Bilder, sondern Sicherheit, Konsistenz, Struktur, Führung und Ruhe. Bewertet wird, wie du kommunizierst, denkst, vorbereitest, kalkulierst und führst – am Set genauso wie nach der Abgabe. Am Ende steht der Wechsel vom Dienstleister zum Partner."
        },
        {
          "titel": "All die Coaches …",
          "url": "https://prophotoskills.com/t05_e03_all_die_coaches/",
          "text": "Ein Gedankenexperiment: Was würde sich ändern, wenn morgen eine Million auf deinem Konto wäre? Vor allem würde die Angst leiser – die Angst, falsch zu entscheiden oder nicht zu genügen. Das Kapitel zeigt, warum viele Coaching-Versprechen genau daran vorbeigehen und warum echter Fortschritt entsteht, wenn du lernst, mit dieser inneren Ruhe zu denken und zu entscheiden – ganz ohne die Million."
        },
        {
          "titel": "Vorurteile vs. Erfahrungen",
          "url": "https://prophotoskills.com/t05_e04_vorurteile-vs-erfahrungen/",
          "text": "Vorurteile sammeln sich unbemerkt an – aus Workshops, Foren und Sätzen, die irgendwer laut genug behauptet hat. Das Kapitel zeigt, wie sie dir genau den Weg verbauen, der dich weiterbringen würde, und warum die eigene Erfahrung die stärkere Lehrerin ist: ausprobieren, die vorgezeichnete Spur verlassen und die eigenen Fehler machen."
        },
        {
          "titel": "Achte auf dein Umfeld",
          "url": "https://prophotoskills.com/t03_l04_achte-auf-dein-umfeld/",
          "text": "Das Bild vom einsamen Wolf mit Kamera ist romantisch, aber falsch. Hinter jeder kreativen Kraft stehen Menschen, die sie tragen, fordern und manchmal retten. Das Kapitel erklärt, warum das Umfeld in der Fotografie ein Multiplikator ist: Es entscheidet mit, wie schnell du lernst, wie du mit Druck und Krisen umgehst und woher deine Inspiration kommt – und warum es sich lohnt, dieses Umfeld bewusst zu wählen."
        }
      ],
      "fragen": [
        {
          "frage": "Was bedeutet „70 % des Fotojobs passieren vor dem Klick“?",
          "antwort": "Der größte Teil der Arbeit ist unsichtbar: Konzept, Briefing, Lichtplanung, Team, Location und die eigene mentale Vorbereitung. Wer erst am Set anfängt zu denken, verliert Zeit, Energie und oft Bildqualität."
        },
        {
          "frage": "Warum ist ein eingespieltes Team wichtiger als teures Equipment?",
          "antwort": "Atmosphäre, Flow und ein entspanntes Model entstehen durch Menschen, nicht durch Technik. Ein Team, das sich kennt, löst Probleme schneller und schafft die Energie, die starke Bilder erst möglich macht."
        },
        {
          "frage": "Was heißt „Du bist Regisseur, nicht nur Auslöser“?",
          "antwort": "Am Set schauen alle auf dich. Du führst, hältst das Team zusammen und steuerst die Energie – mit Klarheit, Konzentration und echter Präsenz."
        },
        {
          "frage": "Warum ist Werbefotografie ein Investment und kein Kostenfaktor?",
          "antwort": "Eine Kampagne steht und fällt mit ihren Bildern. Gute Bilder schaffen Vertrauen und Wiedererkennung und arbeiten über Monate für ein Unternehmen – schwache Bilder ruinieren selbst die beste Idee."
        },
        {
          "frage": "Warum kosten Nutzungsrechte extra?",
          "antwort": "Die Bilder gehören nach dem Shooting dem Urheber. Wo, wie lange und wie weit ein Bild genutzt wird, bestimmt seinen Wert – deshalb werden Reichweite, Kanal und Dauer fair lizenziert."
        },
        {
          "frage": "Welchen Einfluss hat das Umfeld auf die Entwicklung als Fotograf:in?",
          "antwort": "Das Umfeld filtert ständig, was du dir zutraust. Wer von Menschen umgeben ist, die klein denken, wächst langsamer – ein unterstützendes Umfeld wirkt dagegen wie eine Versicherung für kreative Freiheit."
        }
      ]
    },
    "onlocation": {
      "titel": "Photoguide On Location",
      "kurz": "Photoguide On Location von ProPhotoSkills: Reise, Location, Absicherung und Equipment für Shootings vor Ort – Inhalt, Leseproben und Antworten.",
      "worum": [
        "On Location ist der Photoguide für alles, was außerhalb des Studios passiert. Er begleitet dich von der Reiseplanung über die Wahl und das Lesen von Locations bis zur Frage, wie du dich, dein Team und dein Equipment absicherst.",
        "Das Buch ist in vier Teile gegliedert: Travel, Location, Insurance und Equipment. Jeder Teil verbindet praktische Checklisten mit der Haltung, die du brauchst, um unterwegs flexibel, vorbereitet und souverän zu arbeiten."
      ],
      "fuer": "Fotograf:innen, die on location, auf Reisen oder international arbeiten – oder es vorhaben.",
      "inhalt": [
        {
          "gruppe": "Travel",
          "kapitel": [
            "Reiseplanung für Kreative",
            "Flughafen vs. Bahn vs. Auto – welches Transportmittel wann Sinn macht",
            "Das unsichtbare Handgepäck – was immer in deiner Tasche sein muss",
            "Jetlag-Management – Energie trotz Zeitverschiebung",
            "Transport von Equipment – sicher packen und clever deklarieren",
            "Visa & Zoll – wie du Stress an Grenzen vermeidest",
            "Shooting im Ausland – kulturelle Codes und Do’s & Don’ts",
            "Travel light vs. Full Gear – wann minimal, wann maximal reisen",
            "Kreativer Blick unterwegs – Bilder, die schon auf der Reise entstehen",
            "Team-Reisen – Logistik, Kosten und Gruppendynamik",
            "Hotels & Unterkünfte – was ein guter Standort wirklich ausmacht",
            "Reise als Inspirationsquelle – wie neue Orte dein Auge schärfen",
            "Notfallpläne unterwegs – wenn Flüge ausfallen oder Gepäck fehlt",
            "Nachhaltiges Reisen – Green Choices in der Fotoindustrie",
            "Travel-Mindset – Gelassenheit als wichtigste Ressource",
            "30 ikonische Orte, die du als Fotograf einmal bereist haben solltest"
          ]
        },
        {
          "gruppe": "Location",
          "kapitel": [
            "Location-Scouting Basics – wie du passende Orte findest",
            "Warum Orte ihr eigenes Licht haben – und warum du lernen musst, es zu lesen",
            "Location & Marke – wie Räume Geschichten erzählen",
            "Indoor vs. Outdoor – Vor- und Nachteile für verschiedene Jobs",
            "Genehmigungen & Rechte – rechtliche Klarheit schaffen",
            "Unplanbares Wetter – Shooting sichern trotz Natur",
            "Set-Design vs. Real Location – was echt sein muss, was inszeniert werden darf",
            "Orte lesen lernen – wie du Potenzial sofort erkennst",
            "Locations als Energiegeber – warum Räume Stimmung prägen",
            "Kostenfaktor Location – Budget und Alternativen",
            "Improvisierte Kulissen – Wohnzimmer, Hinterhöfe, Off-Spaces",
            "Iconic Places – Orte mit Symbolkraft und Wiedererkennung",
            "Location & Sicherheit – Crew, Equipment, Infrastruktur",
            "Kulturelle Kontexte – was ein Ort bedeutet, bevor du ihn fotografierst",
            "Locations als Co-Creator – wenn der Raum selbst Teil der Story wird"
          ]
        },
        {
          "gruppe": "Insurance",
          "kapitel": [
            "Warum Absicherung kein Luxus ist – sondern Voraussetzung",
            "Equipment-Versicherung – Schutz für deine Tools",
            "Reiseversicherung für Kreative – weltweit arbeiten ohne Risiko",
            "Haftpflicht am Set – wenn Menschen oder Orte Schaden nehmen",
            "Model Release & Verträge – rechtliche Sicherheit schaffen",
            "Nutzungsrechte absichern – warum Rechte gleichwertig zum Bild sind",
            "Budgetschutz – wenn Projekte unerwartet kippen",
            "Backups als Versicherung – Daten doppelt ist Pflicht",
            "Notfallpläne für Technik – Ersatzkameras und Mietlösungen",
            "Gesundheit am Set – warum auch deine Absicherung zählt",
            "Versicherung vs. Vertrauen – wo Verträge Beziehungen ergänzen",
            "Internationale Jobs – rechtliche Unterschiede beachten",
            "Absicherung für freie Projekte – Schutz trotz kleinem Budget",
            "Reputations-Schutz –",
            "Krisenkommunikation als Teil der Absicherung",
            "Psychologische Sicherheit – wie Plan B dir Freiheit gibt"
          ]
        },
        {
          "gruppe": "Equipment",
          "kapitel": [
            "Die Kamera ist nicht alles – Mindset vor Megapixel",
            "Objektive verstehen – Brennweiten als Bildsprache",
            "Lichtformen & Tools – mehr als nur „hell machen“",
            "Mobile Studios – Technik für flexible Sets",
            "Must-have vs. Nice-to-have – Prioritäten setzen",
            "Akkus, Speicherkarten & Basics – die unterschätzten Helden",
            "Transportlösungen – Cases, Bags & Ordnungssysteme",
            "Equipment testen – bevor der Job beginnt",
            "Backup-Strategien – was tun, wenn Technik ausfällt",
            "Rental vs. Ownership – wann mieten, wann kaufen",
            "Technik & Team – wer was bedienen muss",
            "Set-Organisation – Kabel, Stative, Sicherheit",
            "Innovationen & Trends – Technik mit Sinn statt Hype",
            "Minimalismus-Setups – mit wenig viel erreichen",
            "Equipment als Visitenkarte – wie dein Umgang Professionalität zeigt"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "Das unsichtbare Handgepäck – was immer in deiner Tasche sein muss",
          "absaetze": [
            "Wenn Kreative vom „Handgepäck“ sprechen, meinen sie oft: Kamera, Laptop, Objektive. Doch in Wahrheit gibt es ein anderes Handgepäck – unsichtbar, aber entscheidend. Dinge, die man nicht wiegen oder in Zollvorschriften packen kann. Haltung. Routinen. Rituale. Kleine Helfer, die in der Summe darüber entscheiden, ob du souverän ankommst oder schon am Gate verloren wirkst.",
            "Dieses Kapitel widmet sich genau diesem unsichtbaren Handgepäck. Es ist eine Mischung aus Praktischem, Psychologischem und Philosophischem. Denn am Ende zählt nicht nur, was du dabeihast – sondern wie du reist: vorbereitet, klar, resilient."
          ]
        },
        {
          "kapitel": "Warum Orte ihr eigenes Licht haben – und warum du lernen musst, es zu lesen",
          "absaetze": [
            "Licht ist keine neutrale Ressource. Es ist kein Werkzeug, das du einfach „hinzufügst“. Jeder Ort bringt sein eigenes Licht mit – geprägt durch Architektur, Geografie, Materialien, Öffnungen, Oberflächen und Umgebung.",
            "Wer dieses Licht nicht erkennt, kämpft dagegen an. Wer es versteht, arbeitet mit dem Ort – nicht gegen ihn."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "30 ikonische Orte, die du als Fotograf einmal bereist haben solltest",
          "url": "https://prophotoskills.com/t11_e02_30-ikonische-orte-die-du-als-fotograf-einmal-bereist-haben-solltest/",
          "text": "Keine Bucketlist für Instagram, sondern 30 Orte als Trainingsräume für dein Auge – von Island über die Toskana, Venedig und die Lofoten bis Marokko, Jordanien und die kanadischen Rockies. Zu jedem Ort zeigt das Kapitel, was er dir beibringt: Licht im Minutentakt lesen, Linien und Timing, Stille als Motiv, Maßstab und Tiefe oder Chaos kontrollieren."
        }
      ],
      "fragen": [
        {
          "frage": "Was muss immer ins Handgepäck eines Fotografen?",
          "antwort": "Alles, was unersetzlich ist: Kamera-Body, das wichtigste Objektiv, Laptop, Festplatten, Speicherkarten und Akkus. Pack so, dass du im Notfall auch ohne Aufgabegepäck arbeiten könntest."
        },
        {
          "frage": "Was müssen Fotografen bei Visa und Zoll beachten?",
          "antwort": "Ein Touristenvisum erlaubt keine bezahlte Arbeit, auch nicht für einen Shootingtag. Arbeitsvisa brauchen oft Wochen Vorlauf, und am Zoll hilft eine Equipment-Liste mit Seriennummern und Werten."
        },
        {
          "frage": "Warum hat jeder Ort sein eigenes Licht?",
          "antwort": "Tageszeit, Himmelsrichtung, Reflexionen, Architektur und Vegetation prägen das Licht einer Location. Wer Orte zu verschiedenen Zeiten besucht und ihr Lichtpotenzial liest, entscheidet besser und baut schneller auf."
        },
        {
          "frage": "Brauche ich eine Genehmigung für ein Shooting an öffentlichen Orten?",
          "antwort": "Oft ja. Öffentlich zugänglich heißt nicht, dass kommerzielle Aufnahmen erlaubt sind. Profis trennen Zugang, Aufnahme und Verwertung und klären Genehmigungen schriftlich."
        },
        {
          "frage": "Welche Versicherungen brauchen Fotografen wirklich?",
          "antwort": "Vor allem drei: eine Berufshaftpflicht, eine Equipment-Versicherung und für Jobs im Ausland eine passende Reiseversicherung."
        },
        {
          "frage": "Macht besseres Equipment bessere Fotos?",
          "antwort": "Nicht automatisch. Technik verstärkt Haltung, sie ersetzt sie nicht. Entscheidend ist, ob du weißt, warum du ein Werkzeug einsetzt."
        }
      ]
    },
    "beginner": {
      "titel": "Photoguide Beginner",
      "kurz": "Photoguide Beginner von ProPhotoSkills: Belichtung, Komposition, Licht und Nachbearbeitung verständlich erklärt – Inhalt, Leseproben und Antworten. Kostenlos mit Konto.",
      "worum": [
        "Beginner ist dein Einstieg in die Fotografie – kein trockenes Lehrbuch, sondern ein Begleiter von soliden Grundlagen zu echter Sicherheit. In zehn Kapiteln geht es um Kamera, Belichtung, Bildaufbau, Porträt, Landschaft, Nacht, Licht, Nachbearbeitung und dein Portfolio.",
        "Das Ziel ist nicht, Regeln auswendig zu lernen, sondern zu verstehen, warum Bilder wirken und wie gute Entscheidungen entstehen. In PPS Books liest du den Beginner kostenlos – du brauchst nur ein Konto."
      ],
      "fuer": "Einsteiger:innen und alle, die ihre Grundlagen sauber ordnen wollen.",
      "inhalt": [
        {
          "gruppe": null,
          "kapitel": [
            "Kapitel 1: Einführung in die Profi-Fotografie",
            "Kapitel 2: Die richtige Kameraauswahl",
            "Kapitel 3: Grundlagen der Belichtung",
            "Kapitel 4: Perfekte Bildkomposition",
            "Kapitel 5: Porträtfotografie meistern",
            "Kapitel 6: Landschaftsfotografie verstehen",
            "Kapitel 7: Die Kunst der Nachtfotografie",
            "Kapitel 8: Fortgeschrittene Beleuchtungstechniken",
            "Kapitel 9: Nachbearbeitung und Bildoptimierung",
            "Kapitel 10: Präsentation und Portfolio-Erstellung"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "Kapitel 3: Grundlagen der Belichtung",
          "absaetze": [
            "Die Kunst der Belichtung liegt im Herzen der Fotografie. Sie ist der Schlüssel, der den Weg zu einem richtig belichteten Foto öffnet. Die Belichtung bestimmt, wie hell oder dunkel ein Bild ist und wie viele Details in den hellen und dunklen Bereichen sichtbar sind. Um dies zu beherrschen, ist ein genaues Verständnis der «Belichtungsdreieck»-Komponenten erforderlich: Blende, Verschlusszeit und ISO-Empfindlichkeit.",
            "Die Blende, gemessen in f-Stopps, kontrolliert die Menge an Licht, die durch das Objektiv auf den Sensor fällt. Eine niedrige Blendenzahl (z.B. f/1.8) lässt mehr Licht herein und ist ideal für Aufnahmen bei schwachem Licht oder zur Erzeugung eines unscharfen Hintergrunds, was für Porträts oft erwünscht ist. Eine hohe Blendenzahl (z.B. f/16) verkleinert die Öffnung, was für Landschaftsaufnahmen mit einer größeren Schärfentiefe genutzt wird."
          ]
        },
        {
          "kapitel": "Kapitel 4: Perfekte Bildkomposition",
          "absaetze": [
            "Die Kunst der Bildkomposition ist das Herzstück der Fotografie. Sie ist ein unsichtbares Gerüst, das die Aufmerksamkeit des Betrachters lenkt und die visuelle Wirkung eines Fotos verstärkt. Eine durchdachte Komposition ist nicht nur ästhetisch ansprechend, sondern hilft auch dabei, eine Geschichte zu erzählen oder eine bestimmte Stimmung zu transportieren.",
            "Der goldene Schnitt ist eine mathematische Formel, die in der Kunst und Architektur weit verbreitet ist, um harmonische Proportionen zu erzeugen. In der Fotografie steht er oft für das ideale Verhältnis in der Komposition. Die Drittelregel ist eine praktische Annäherung daran und schlägt vor, das Bild durch zwei horizontale und zwei vertikale Linien zu teilen, um neun gleichgroße Teile zu erhalten. Positioniere wichtige Elemente entlang dieser Linien oder deren Schnittpunkten, um das Bild dynamisch und ausgewogen zu gestalten."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "Vorurteile vs. Erfahrungen",
          "url": "https://prophotoskills.com/t05_e04_vorurteile-vs-erfahrungen/",
          "text": "Gerade am Anfang sammelt man viele Regeln und Meinungen ein – aus Videos, Foren und Workshops. Dieses freie Kapitel aus dem Photoguide Next Level zeigt, warum die eigene Erfahrung mehr zählt als jedes Vorurteil: ausprobieren, eigene Wege gehen und aus den eigenen Fehlern lernen."
        },
        {
          "titel": "All die Coaches …",
          "url": "https://prophotoskills.com/t05_e03_all_die_coaches/",
          "text": "Wer neu anfängt, trifft schnell auf Coaching-Versprechen und Schritt-für-Schritt-Pläne. Dieses freie Kapitel aus dem Photoguide Next Level erklärt, warum echter Fortschritt aus innerer Ruhe und eigenem Denken entsteht – und nicht aus dem nächsten Blueprint."
        }
      ],
      "fragen": [
        {
          "frage": "Was ist das Belichtungsdreieck?",
          "antwort": "Blende, Verschlusszeit und ISO-Empfindlichkeit. Zusammen bestimmen sie, wie hell ein Bild wird und wie viel Zeichnung in Lichtern und Schatten bleibt."
        },
        {
          "frage": "Wann nehme ich eine kleine, wann eine große Blendenzahl?",
          "antwort": "Eine kleine Blendenzahl wie f/1.8 lässt viel Licht herein und macht den Hintergrund weich – gut für Porträts und wenig Licht. Eine große wie f/16 sorgt für viel Schärfentiefe, etwa in der Landschaft."
        },
        {
          "frage": "Welche Verschlusszeit friert Bewegung ein?",
          "antwort": "Kurze Zeiten wie 1/1000 Sekunde frieren Bewegung ein, etwa beim Sport. Längere Zeiten ab etwa 1/30 Sekunde lassen Bewegung verwischen – für fließendes Wasser oder Lichtmalerei."
        },
        {
          "frage": "Was ist die Drittelregel?",
          "antwort": "Du teilst das Bild mit je zwei waagerechten und senkrechten Linien in neun Felder und setzt wichtige Elemente auf die Linien oder ihre Schnittpunkte. So wirkt das Bild ausgewogen und lebendig."
        }
      ]
    }
  },
  "en": {
    "nextlevel": {
      "titel": "Photoguide Next Level",
      "kurz": "Photoguide Next Level by ProPhotoSkills: knowledge, attitude and structure for photographers who want to grow professionally – contents, reading samples and answers.",
      "worum": [
        "Next Level is the photoguide for everyone who already takes solid photos and wants to take the step into professional advertising photography. It doesn't explain menus or presets, but what makes the difference on set and in conversations with clients.",
        "The focus is on the work before the first click: preparation, team, communication, leading the set, price negotiations and usage rights. On top of that come chapters on physical and mental strength, on art history as a tool and on how clients see you."
      ],
      "fuer": "Experienced photographers who want to move from jobs to partnerships and represent their value with confidence.",
      "inhalt": [
        {
          "gruppe": null,
          "kapitel": [
            "Why Gala and Bunte are soooooo important...",
            "Hair & make-up – gossip time is trust time",
            "The second or third model is sitting around waiting",
            "70% of the photo job? Happens BEFORE the first click.",
            "The invisible before the click",
            "Why well-rehearsed people are worth more than any lens",
            "“Houston, we have a problem...”",
            "Why spontaneous changes are dangerous",
            "Why such situations happen more often than you think",
            "Bonus tips for maximum composure",
            "Pay attention to your surroundings",
            "Do you like watching Who Wants to Be a Millionaire too?",
            "Product shoot with an agency team – igniting creativity",
            "What do footballers and photographers have in common?",
            "Development – your invisible next-level trigger",
            "All the coaches ....",
            "Prejudices vs. experiences",
            "Interest and curiosity",
            "Technical skills",
            "Creativity and vision",
            "Composition and image design",
            "Patience",
            "Stamina",
            "Passion and dedication",
            "Leadership and communication",
            "Teamwork",
            "Time management and organization",
            "Openness to criticism and further development",
            "Focus on details",
            "Concentration and presence",
            "Knowledge of light and shadow",
            "Sales and self-presentation",
            "Confidence and leadership quality",
            "Storytelling",
            "Knowledge of art history",
            "Why jogging helps you take better photos...",
            "You are the director, not just the shutter release",
            "You have to be fast – physically AND mentally",
            "Set energy = team energy",
            "Mental strength = stress resistance",
            "You work in extreme situations – time, weather, locations",
            "Concentration through physical clarity",
            "Posture = impact",
            "Leonardo da Vinci, important for photography?",
            "Lighting – chiaroscuro (light and dark)",
            "Studying anatomy – a real understanding of the body",
            "Composition & the golden ratio",
            "Optics & seeing – the camera obscura",
            "Expression – the Mona Lisa effect",
            "Multidisciplinary approach = modern photography",
            "Reading light and shadow – like a drama on stage",
            "Observe instead of judging",
            "Understanding architecture as a backdrop",
            "Everything is connected – interdisciplinary thinking",
            "Understanding movement",
            "Curiosity as a driving force",
            "Emotion over perfection",
            "Mistakes as part of the process",
            "Patience and the long view",
            "Photographers created social networking....",
            "The backdrop next door",
            "The teaching team on a free project”",
            "Why professional photography is worth its price",
            "Why professional photography is worth its price -2-",
            "Professional advertising photography – a craft you can’t see on the camera display",
            "It starts with the goal – not with the camera",
            "Technology costs – but the result is what counts",
            "The price isn’t the problem – the misunderstanding is",
            "Rights cost – because pictures are valuable",
            "Collaboration instead of processing",
            "Technology makes quality – but attitude makes the difference",
            "Conclusion: Buy cheap and you don’t buy twice – you lose impact",
            "The client’s view"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "70% of the photo job? Happens BEFORE the first click.",
          "absaetze": [
            "You might think a photographer simply packs the camera, drives to the set, presses the shutter a few times – and voilà, the perfect picture is in the can. But that would be roughly like saying a concert succeeded just by walking on stage – without rehearsal, without soundcheck, without stage fright. In truth, the decisive part happens long before. Because about 70% of the work on a professional photo job doesn’t take place on set, but in the intensive preparation for it. And that involves far more than just packing the equipment.",
            "Good preparation is not a “nice to have”, it is the foundation. It is the place where ideas take shape, solutions develop and possible problems are already played through in your head. It is the quiet feat of strength in the background that makes sure everything runs smoothly on the day of the shoot – or, if it doesn’t, that you still handle it with composure. These 70% challenge you: mentally, physically, technically, organizationally – and sometimes even emotionally. They are the actual job."
          ]
        },
        {
          "kapitel": "Why professional photography is worth its price",
          "absaetze": [
            "In today’s digital flood of images, it isn’t the prettiest look that decides, but the most strategically effective one. Advertising photography isn’t simply a pretty picture. It is an instrument – precise, planned, true to the brand. The professional photographer isn’t just a craftsman, but someone who thinks along, who understands brands, a strategic partner. And that is exactly why this work has its price.",
            "Anyone who has ever worked in a marketing department knows: a campaign stands or falls with its pictures. They are the first thing that is perceived. They convey values, emotions, identity. A weak visual language can ruin even the best idea. Good pictures, on the other hand, create trust, increase dwell time, strengthen recognition. That isn’t a “nice to have” – that is a conversion driver."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "Development – your invisible next-level trigger",
          "url": "https://prophotoskills.com/t05_e02_entwicklung-dein-unsichtbarer-next-level-trigger/",
          "text": "At some point everything runs smoothly: clients book you, your style is set, routine carries you – and still you feel there's more. The chapter describes this point and the conscious decision to really develop further. It honestly shows both sides: what you gain (a stronger personality, sharper photographic thinking, more value and independence from trends) and what it costs (time, energy, old habits and sometimes people who don't come along)."
        },
        {
          "titel": "The client's view – when trust suddenly turns into budget",
          "url": "https://prophotoskills.com/t09_l09_kunden-blick-wenn-aus-vertrauen-ploetzlich-budget-wird/",
          "text": "As soon as big budgets are on the table, clients check you out – long before the quote goes out. The chapter looks through their eyes: they don't buy pictures, they buy security, consistency, structure, leadership and calm. What gets judged is how you communicate, think, prepare, calculate and lead – on set as well as after delivery. In the end comes the shift from service provider to partner."
        },
        {
          "titel": "All the coaches …",
          "url": "https://prophotoskills.com/t05_e03_all_die_coaches/",
          "text": "A thought experiment: what would change if there were a million on your account tomorrow? Above all, the fear would get quieter – the fear of deciding wrongly or not being good enough. The chapter shows why many coaching promises miss exactly this point, and why real progress happens when you learn to think and decide with this inner calm – without the million."
        },
        {
          "titel": "Prejudices vs. experiences",
          "url": "https://prophotoskills.com/t05_e04_vorurteile-vs-erfahrungen/",
          "text": "Prejudices pile up unnoticed – from workshops, forums and sentences someone claimed loudly enough. The chapter shows how they block exactly the path that would take you further, and why your own experience is the stronger teacher: try things out, leave the beaten track and make your own mistakes."
        },
        {
          "titel": "Pay attention to your surroundings",
          "url": "https://prophotoskills.com/t03_l04_achte-auf-dein-umfeld/",
          "text": "The image of the lone wolf with a camera is romantic, but wrong. Behind every creative force there are people who carry it, challenge it and sometimes save it. The chapter explains why your surroundings act as a multiplier in photography: they help decide how fast you learn, how you deal with pressure and crises and where your inspiration comes from – and why it pays to choose them consciously."
        }
      ],
      "fragen": [
        {
          "frage": "What does “70% of the photo job happens before the click” mean?",
          "antwort": "Most of the work is invisible: concept, briefing, light planning, team, location and your own mental preparation. If you only start thinking on set, you lose time, energy and often image quality."
        },
        {
          "frage": "Why is a well-rehearsed team more important than expensive equipment?",
          "antwort": "Atmosphere, flow and a relaxed model come from people, not from technology. A team that knows each other solves problems faster and creates the energy that makes strong pictures possible in the first place."
        },
        {
          "frage": "What does “You are the director, not just the shutter release” mean?",
          "antwort": "On set, everyone looks at you. You lead, hold the team together and steer the energy – with clarity, concentration and real presence."
        },
        {
          "frage": "Why is advertising photography an investment and not a cost factor?",
          "antwort": "A campaign stands or falls with its pictures. Good pictures create trust and recognition and work for a company for months – weak pictures ruin even the best idea."
        },
        {
          "frage": "Why do usage rights cost extra?",
          "antwort": "After the shoot, the pictures belong to their author. Where, how long and how widely a picture is used determines its value – that's why reach, channel and duration are licensed fairly."
        },
        {
          "frage": "How do your surroundings influence your development as a photographer?",
          "antwort": "Your surroundings constantly filter what you dare to do. If you are surrounded by people who think small, you grow more slowly – a supportive environment, on the other hand, works like insurance for creative freedom."
        }
      ]
    },
    "onlocation": {
      "titel": "Photoguide On Location",
      "kurz": "Photoguide On Location by ProPhotoSkills: travel, location, protection and equipment for shoots on location – contents, reading samples and answers.",
      "worum": [
        "On Location is the photoguide for everything that happens outside the studio. It accompanies you from travel planning and choosing and reading locations to the question of how to protect yourself, your team and your equipment.",
        "The book is divided into four parts: Travel, Location, Insurance and Equipment. Each part combines practical checklists with the attitude you need to work flexibly, prepared and confidently on the road."
      ],
      "fuer": "Photographers who work on location, while travelling or internationally – or plan to.",
      "inhalt": [
        {
          "gruppe": "Travel",
          "kapitel": [
            "Travel Planning for Creatives",
            "Airport vs. Train vs. Car – Which Mode of Transport Makes Sense When",
            "The Invisible Carry-On – What Always Needs to Be in Your Bag",
            "Jet Lag Management – Energy Despite Time Differences",
            "Transporting Equipment – Packing Safely and Declaring Smartly",
            "Visas & Customs – How to Avoid Stress at Borders",
            "Shooting Abroad – Cultural Codes and Do’s & Don’ts",
            "Travel Light vs. Full Gear – When to Travel Minimal, When to Go Maximal",
            "A Creative Eye on the Road – Images That Happen During the Journey",
            "Team Travel – Logistics, Costs and Group Dynamics",
            "Hotels & Accommodation – What Really Makes a Good Location",
            "Travel as a Source of Inspiration – How New Places Sharpen Your Eye",
            "Emergency Plans on the Road – When Flights Are Canceled or Luggage Goes Missing",
            "Sustainable Travel – Green Choices in the Photo Industry",
            "Travel Mindset – Composure as Your Most Important Resource",
            "30 Iconic Places You Should Travel to Once as a Photographer"
          ]
        },
        {
          "gruppe": "Location",
          "kapitel": [
            "Location Scouting Basics – How to Find the Right Places",
            "Why Places Have Their Own Light – and Why You Have to Learn to Read It",
            "Location & Brand – How Spaces Tell Stories",
            "Indoor vs. Outdoor – Pros and Cons for Different Jobs",
            "Permits & Rights – Creating Legal Clarity",
            "Unpredictable Weather – Securing the Shoot Despite Nature",
            "Set Design vs. Real Location – What Has to Be Real, What Can Be Staged",
            "Learning to Read Places – How to Recognize Potential Instantly",
            "Locations as Energy Sources – Why Spaces Shape Mood",
            "Location as a Cost Factor – Budget and Alternatives",
            "Improvised Backdrops – Living Rooms, Backyards, Off-Spaces",
            "Iconic Places – Locations with Symbolic Power and Recognition",
            "Location & Safety – Crew, Equipment, Infrastructure",
            "Cultural Contexts – What a Place Means Before You Photograph It",
            "Locations as Co-Creators – When the Space Itself Becomes Part of the Story"
          ]
        },
        {
          "gruppe": "Insurance",
          "kapitel": [
            "Why Protection Is Not a Luxury – but a Prerequisite",
            "Equipment Insurance – Protection for Your Tools",
            "Travel Insurance for Creatives – Working Worldwide Without Risk",
            "Liability on Set – When People or Places Get Damaged",
            "Model Releases & Contracts – Creating Legal Security",
            "Securing Usage Rights – Why Rights Are as Valuable as the Image",
            "Budget Protection – When Projects Unexpectedly Tip Over",
            "Backups as Insurance – Keeping Data Twice Is a Must",
            "Emergency Plans for Gear – Backup Cameras and Rental Solutions",
            "Health on Set – Why Your Own Protection Counts Too",
            "Insurance vs. Trust – Where Contracts Complement Relationships",
            "International Jobs – Paying Attention to Legal Differences",
            "Protection for Personal Projects – Coverage Despite a Small Budget",
            "Reputation Protection –",
            "Crisis Communication as Part of Your Safeguards",
            "Psychological Safety – How Plan B Gives You Freedom"
          ]
        },
        {
          "gruppe": "Equipment",
          "kapitel": [
            "The Camera Isn’t Everything – Mindset Before Megapixels",
            "Understanding Lenses – Focal Lengths as Visual Language",
            "Light Shapers & Tools – More Than Just “Making It Bright”",
            "Mobile Studios – Gear for Flexible Sets",
            "Must-Have vs. Nice-to-Have – Setting Priorities",
            "Batteries, Memory Cards & Basics – the Underrated Heroes",
            "Transport Solutions – Cases, Bags & Organization Systems",
            "Testing Equipment – Before the Job Begins",
            "Backup Strategies – What to Do When Gear Fails",
            "Rental vs. Ownership – When to Rent, When to Buy",
            "Gear & Team – Who Needs to Operate What",
            "Set Organization – Cables, Stands, Safety",
            "Innovations & Trends – Meaningful Tech Instead of Hype",
            "Minimalist Setups – Achieving a Lot with Little",
            "Equipment as a Business Card – How Your Handling Shows Professionalism"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "The Invisible Carry-On – What Always Needs to Be in Your Bag",
          "absaetze": [
            "When creatives talk about “carry-on,” they often mean: camera, laptop, lenses. But in truth there is another carry-on – invisible, but decisive. Things you can’t weigh or pack into customs regulations. Attitude. Routines. Rituals. Little helpers that, taken together, decide whether you arrive confidently or already look lost at the gate.",
            "This chapter is devoted to exactly this invisible carry-on. It’s a mix of the practical, the psychological and the philosophical. Because in the end, what counts is not only what you have with you – but how you travel: prepared, clear, resilient."
          ]
        },
        {
          "kapitel": "Why Places Have Their Own Light – and Why You Have to Learn to Read It",
          "absaetze": [
            "Light is not a neutral resource. It’s not a tool you simply “add.” Every place brings its own light – shaped by architecture, geography, materials, openings, surfaces and surroundings.",
            "Whoever doesn’t recognize this light fights against it. Whoever understands it works with the place – not against it."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "30 iconic places you should have travelled to as a photographer",
          "url": "https://prophotoskills.com/t11_e02_30-ikonische-orte-die-du-als-fotograf-einmal-bereist-haben-solltest/",
          "text": "Not a bucket list for Instagram, but 30 places as training grounds for your eye – from Iceland, Tuscany, Venice and the Lofoten Islands to Morocco, Jordan and the Canadian Rockies. For each place, the chapter shows what it teaches you: reading light that changes by the minute, lines and timing, silence as a subject, scale and depth, or controlling chaos."
        }
      ],
      "fragen": [
        {
          "frage": "What should always be in a photographer's hand luggage?",
          "antwort": "Everything that is irreplaceable: camera body, the most important lens, laptop, hard drives, memory cards and batteries. Pack so that in an emergency you could work even without your checked luggage."
        },
        {
          "frage": "What do photographers need to know about visas and customs?",
          "antwort": "A tourist visa doesn't allow paid work, not even for one day of shooting. Work visas often need weeks of lead time, and at customs an equipment list with serial numbers and values helps."
        },
        {
          "frage": "Why does every place have its own light?",
          "antwort": "Time of day, orientation, reflections, architecture and vegetation shape the light of a location. If you visit places at different times and read their light potential, you make better decisions and set up faster."
        },
        {
          "frage": "Do I need a permit for a shoot in public places?",
          "antwort": "Often, yes. Publicly accessible doesn't mean commercial shooting is allowed. Professionals separate access, shooting and use and clarify permits in writing."
        },
        {
          "frage": "Which insurances do photographers really need?",
          "antwort": "Above all three: professional liability insurance, equipment insurance and, for jobs abroad, suitable travel insurance."
        },
        {
          "frage": "Does better equipment make better photos?",
          "antwort": "Not automatically. Technology amplifies attitude, it doesn't replace it. What matters is whether you know why you use a tool."
        }
      ]
    },
    "beginner": {
      "titel": "Photoguide Beginner",
      "kurz": "Photoguide Beginner by ProPhotoSkills: exposure, composition, light and post-processing clearly explained – contents, reading samples and answers. Free with an account.",
      "worum": [
        "Beginner is your entry into photography – not a dry textbook, but a companion from solid basics to real confidence. Ten chapters cover the camera, exposure, composition, portraits, landscapes, night, light, post-processing and your portfolio.",
        "The goal isn't to memorise rules, but to understand why pictures work and how good decisions are made. In PPS Books you can read Beginner for free – all you need is an account."
      ],
      "fuer": "Beginners and anyone who wants to put their basics in good order.",
      "inhalt": [
        {
          "gruppe": null,
          "kapitel": [
            "Chapter 1: Introduction to Professional Photography",
            "Chapter 2: Choosing the Right Camera",
            "Chapter 3: Exposure Basics",
            "Chapter 4: Perfect Composition",
            "Chapter 5: Mastering Portrait Photography",
            "Chapter 6: Understanding Landscape Photography",
            "Chapter 7: The Art of Night Photography",
            "Chapter 8: Advanced Lighting Techniques",
            "Chapter 9: Post-Processing and Image Optimization",
            "Chapter 10: Presentation and Building a Portfolio"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "Chapter 3: Exposure Basics",
          "absaetze": [
            "The art of exposure lies at the heart of photography. It is the key that opens the way to a correctly exposed photo. Exposure determines how bright or dark a picture is and how much detail is visible in the light and dark areas. To master it, you need a precise understanding of the components of the «exposure triangle»: aperture, shutter speed and ISO sensitivity.",
            "The aperture, measured in f-stops, controls the amount of light that falls through the lens onto the sensor. A low f-number (e.g. f/1.8) lets in more light and is ideal for shooting in low light or for creating a blurred background, which is often desired for portraits. A high f-number (e.g. f/16) makes the opening smaller, which is used for landscape shots with greater depth of field."
          ]
        },
        {
          "kapitel": "Chapter 4: Perfect Composition",
          "absaetze": [
            "The art of composition is the heart of photography. It is an invisible framework that guides the viewer’s attention and strengthens the visual impact of a photo. A well-thought-out composition is not only aesthetically pleasing but also helps to tell a story or convey a certain mood.",
            "The golden ratio is a mathematical formula widely used in art and architecture to create harmonious proportions. In photography, it often stands for the ideal ratio in composition. The rule of thirds is a practical approximation of it and suggests dividing the picture with two horizontal and two vertical lines to get nine equal parts. Place important elements along these lines or at their intersections to make the picture dynamic and balanced."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "Prejudices vs. experiences",
          "url": "https://prophotoskills.com/t05_e04_vorurteile-vs-erfahrungen/",
          "text": "Especially at the beginning you pick up lots of rules and opinions – from videos, forums and workshops. This free chapter from the Photoguide Next Level shows why your own experience counts for more than any prejudice: try things out, go your own way and learn from your own mistakes."
        },
        {
          "titel": "All the coaches …",
          "url": "https://prophotoskills.com/t05_e03_all_die_coaches/",
          "text": "When you're starting out, you quickly come across coaching promises and step-by-step plans. This free chapter from the Photoguide Next Level explains why real progress comes from inner calm and your own thinking – and not from the next blueprint."
        }
      ],
      "fragen": [
        {
          "frage": "What is the exposure triangle?",
          "antwort": "Aperture, shutter speed and ISO sensitivity. Together they determine how bright a picture becomes and how much detail remains in the highlights and shadows."
        },
        {
          "frage": "When do I use a small and when a large f-number?",
          "antwort": "A small f-number such as f/1.8 lets in a lot of light and softens the background – good for portraits and low light. A large one such as f/16 gives a lot of depth of field, for example in landscapes."
        },
        {
          "frage": "Which shutter speed freezes motion?",
          "antwort": "Short times such as 1/1000 second freeze motion, for example in sports. Longer times from around 1/30 second blur motion – for flowing water or light painting."
        },
        {
          "frage": "What is the rule of thirds?",
          "antwort": "You divide the picture into nine fields with two horizontal and two vertical lines and place important elements on the lines or their intersections. This makes the picture look balanced and lively."
        }
      ]
    }
  },
  "fr": {
    "nextlevel": {
      "titel": "Photoguide Next Level",
      "kurz": "Photoguide Next Level de ProPhotoSkills : savoir, attitude et structure pour les photographes qui veulent évoluer professionnellement – sommaire, extraits et réponses.",
      "worum": [
        "Next Level est le photoguide pour tous ceux qui photographient déjà solidement et veulent franchir le pas vers la photographie publicitaire professionnelle. Il n'explique pas les menus ni les presets, mais ce qui fait la différence sur le plateau et dans l'échange avec les clients.",
        "Au centre : le travail avant le premier clic – préparation, équipe, communication, direction du plateau, négociation des prix et droits d'utilisation. S'y ajoutent des chapitres sur la force physique et mentale, sur l'histoire de l'art comme outil et sur le regard que les clients portent sur toi."
      ],
      "fuer": "Les photographes expérimentés qui veulent passer de la commande au partenariat et défendre leur valeur avec assurance.",
      "inhalt": [
        {
          "gruppe": null,
          "kapitel": [
            "Pourquoi Gala et Bunte sont siiiii importants...",
            "Coiffure & maquillage – le temps des potins est le temps de la confiance",
            "Le deuxième ou troisième modèle attend assis dans un coin",
            "70 % du job photo ? Se passent AVANT le premier clic.",
            "L’invisible avant le clic",
            "Pourquoi des personnes bien rodées valent plus que n’importe quel objectif",
            "« Houston, on a un problème... »",
            "Pourquoi les changements spontanés sont dangereux",
            "Pourquoi ces situations sont plus fréquentes qu’on ne le pense",
            "Astuces bonus pour une assurance maximale",
            "Fais attention à ton entourage",
            "Toi aussi, tu aimes regarder Qui veut gagner des millions ?",
            "Shooting produit avec une équipe d’agence – allumer la créativité",
            "Qu’ont en commun footballeurs et photographes ?",
            "L’évolution – ton déclencheur invisible vers le niveau supérieur",
            "Tous ces coachs ....",
            "Préjugés vs expériences",
            "Intérêt et curiosité",
            "Compétences techniques",
            "Créativité et vision",
            "Composition et construction de l’image",
            "Patience",
            "Endurance",
            "Passion et dévouement",
            "Direction des personnes et communication",
            "Travail d’équipe",
            "Gestion du temps et organisation",
            "Ouverture à la critique et évolution",
            "L’attention aux détails",
            "Concentration et présence",
            "Connaissance de la lumière et de l’ombre",
            "Vente et présentation de soi",
            "Assurance et qualités de leader",
            "Raconter des histoires",
            "Connaissance de l’histoire de l’art",
            "Pourquoi courir t’aide à mieux photographier...",
            "Tu es le réalisateur, pas seulement le déclencheur",
            "Tu dois être rapide – physiquement ET mentalement",
            "Énergie du plateau = énergie de l’équipe",
            "Force mentale = résistance au stress",
            "Tu travailles dans des situations extrêmes – temps, météo, lieux",
            "La concentration par la clarté physique",
            "Posture = impact",
            "Léonard de Vinci, important pour la photographie ?",
            "Conduite de la lumière – le clair-obscur",
            "Étudier l’anatomie – une vraie compréhension du corps",
            "Composition & nombre d’or",
            "Optique & vision – la camera obscura",
            "L’expression – l’effet Mona Lisa",
            "Approche pluridisciplinaire = photographie moderne",
            "Lire la lumière et l’ombre – comme un drame sur scène",
            "Observer plutôt que juger",
            "Comprendre l’architecture comme décor",
            "Tout est lié – la pensée interdisciplinaire",
            "Comprendre le mouvement",
            "La curiosité comme moteur",
            "L’émotion avant la perfection",
            "L’erreur comme partie du processus",
            "Patience et long terme",
            "Les photographes ont créé le réseau social....",
            "Le décor d’à côté",
            "L’équipe enseignante sur un projet libre »",
            "Pourquoi la photographie professionnelle vaut son prix",
            "Pourquoi la photographie professionnelle vaut son prix -2-",
            "La photographie publicitaire professionnelle – un savoir-faire qu’on ne voit pas sur l’écran de l’appareil",
            "Tout commence par l’objectif – pas par l’appareil",
            "La technique coûte – mais c’est le résultat qui compte",
            "Le prix n’est pas le problème – le malentendu, si",
            "Les droits coûtent – parce que les images ont de la valeur",
            "Collaborer plutôt qu’exécuter",
            "La technique fait la qualité – mais l’attitude fait la différence",
            "Conclusion : qui achète bon marché n’achète pas deux fois – il perd en impact",
            "Le regard du client"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "70 % du job photo ? Se passent AVANT le premier clic.",
          "absaetze": [
            "Tu penses peut-être qu’un photographe range simplement son appareil, se rend sur le plateau, déclenche quelques fois – et voilà, l’image parfaite est dans la boîte. Mais ce serait à peu près comme dire qu’un concert est réussi simplement parce qu’on est monté sur scène – sans répétition, sans balance, sans trac. En réalité, l’essentiel se passe bien avant. Car environ 70 % du travail d’un job photo professionnel n’a pas lieu sur le plateau, mais dans la préparation intensive qui le précède. Et cela concerne bien plus que le simple rangement du matériel.",
            "Une bonne préparation n’est pas un « nice to have », c’est le fondement. C’est l’endroit où les idées prennent forme, où les solutions se développent et où les problèmes possibles sont déjà joués mentalement. C’est l’effort silencieux en coulisses qui fait que tout roule le jour du shooting – ou, si ce n’est pas le cas, qu’on gère quand même avec assurance. Ces 70 % te mettent au défi : mentalement, physiquement, techniquement, sur le plan de l’organisation – et parfois même émotionnellement. Ils sont le vrai job."
          ]
        },
        {
          "kapitel": "Pourquoi la photographie professionnelle vaut son prix",
          "absaetze": [
            "Dans le flot d’images numériques d’aujourd’hui, ce n’est pas le plus beau look qui décide, mais le plus efficace stratégiquement. La photographie publicitaire n’est pas simplement une jolie image. C’est un instrument – précis, planifié, fidèle à la marque. Le photographe professionnel n’est pas seulement un artisan, mais quelqu’un qui réfléchit avec le client, qui comprend la marque, un partenaire stratégique. Et c’est exactement pour cela que ce travail a un prix.",
            "Quiconque a déjà travaillé dans un service marketing le sait : une campagne tient ou tombe avec ses images. Elles sont la première chose qu’on perçoit. Elles transmettent des valeurs, des émotions, une identité. Un langage visuel faible peut ruiner même la meilleure idée. De bonnes images, en revanche, créent la confiance, allongent le temps de consultation, renforcent la reconnaissance. Ce n’est pas un « nice to have » – c’est un moteur de conversion."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "L'évolution – ton déclencheur invisible vers le niveau supérieur",
          "url": "https://prophotoskills.com/t05_e02_entwicklung-dein-unsichtbarer-next-level-trigger/",
          "text": "À un moment, tout roule : les clients te réservent, ton style est affirmé, la routine te porte – et pourtant tu sens qu'il y a plus. Le chapitre décrit ce moment et la décision consciente d'évoluer vraiment. Il montre honnêtement les deux côtés : ce que tu gagnes (une personnalité plus forte, une pensée photographique plus aiguisée, plus de valeur et d'indépendance face aux tendances) et ce que cela coûte (du temps, de l'énergie, de vieilles habitudes et parfois des personnes qui ne suivent pas)."
        },
        {
          "titel": "Le regard du client – quand la confiance devient soudain budget",
          "url": "https://prophotoskills.com/t09_l09_kunden-blick-wenn-aus-vertrauen-ploetzlich-budget-wird/",
          "text": "Dès que de gros budgets sont en jeu, les clients t'examinent – bien avant l'envoi du devis. Le chapitre regarde à travers leurs yeux : ils n'achètent pas des images, mais de la sécurité, de la constance, de la structure, du leadership et du calme. Ce qui est jugé, c'est ta façon de communiquer, de penser, de préparer, de calculer et de diriger – sur le plateau comme après la livraison. À la fin, on passe du prestataire au partenaire."
        },
        {
          "titel": "Tous ces coachs …",
          "url": "https://prophotoskills.com/t05_e03_all_die_coaches/",
          "text": "Une expérience de pensée : qu'est-ce qui changerait si demain il y avait un million sur ton compte ? Surtout, la peur se ferait plus discrète – la peur de mal décider ou de ne pas être à la hauteur. Le chapitre montre pourquoi beaucoup de promesses de coaching passent justement à côté, et pourquoi le vrai progrès naît quand tu apprends à penser et à décider avec ce calme intérieur – sans le million."
        },
        {
          "titel": "Préjugés vs expériences",
          "url": "https://prophotoskills.com/t05_e04_vorurteile-vs-erfahrungen/",
          "text": "Les préjugés s'accumulent sans qu'on s'en rende compte – venus d'ateliers, de forums et de phrases que quelqu'un a affirmées assez fort. Le chapitre montre comment ils te barrent justement le chemin qui te ferait avancer, et pourquoi ta propre expérience est la meilleure enseignante : essayer, quitter la voie toute tracée et faire tes propres erreurs."
        },
        {
          "titel": "Fais attention à ton entourage",
          "url": "https://prophotoskills.com/t03_l04_achte-auf-dein-umfeld/",
          "text": "L'image du loup solitaire avec son appareil est romantique, mais fausse. Derrière chaque force créative, il y a des personnes qui la portent, la stimulent et parfois la sauvent. Le chapitre explique pourquoi l'entourage est un multiplicateur en photographie : il décide en partie de la vitesse à laquelle tu apprends, de ta façon de gérer la pression et les crises, et de la source de ton inspiration – et pourquoi il vaut la peine de le choisir consciemment."
        }
      ],
      "fragen": [
        {
          "frage": "Que signifie « 70 % du job photo se passent avant le clic » ?",
          "antwort": "L'essentiel du travail est invisible : concept, briefing, planification de la lumière, équipe, lieu et ta propre préparation mentale. Celui qui ne commence à réfléchir que sur le plateau perd du temps, de l'énergie et souvent de la qualité d'image."
        },
        {
          "frage": "Pourquoi une équipe bien rodée est-elle plus importante qu'un matériel coûteux ?",
          "antwort": "L'ambiance, le flow et un modèle détendu naissent des personnes, pas de la technique. Une équipe qui se connaît résout les problèmes plus vite et crée l'énergie qui rend possibles les images fortes."
        },
        {
          "frage": "Que veut dire « Tu es le réalisateur, pas seulement le déclencheur » ?",
          "antwort": "Sur le plateau, tout le monde te regarde. Tu diriges, tu tiens l'équipe ensemble et tu pilotes l'énergie – avec clarté, concentration et une vraie présence."
        },
        {
          "frage": "Pourquoi la photographie publicitaire est-elle un investissement et non un coût ?",
          "antwort": "Une campagne tient ou tombe avec ses images. De bonnes images créent confiance et reconnaissance et travaillent pendant des mois pour une entreprise – des images faibles ruinent même la meilleure idée."
        },
        {
          "frage": "Pourquoi les droits d'utilisation coûtent-ils en plus ?",
          "antwort": "Après le shooting, les images appartiennent à leur auteur. Où, combien de temps et dans quelle mesure une image est utilisée détermine sa valeur – c'est pourquoi la portée, le canal et la durée font l'objet d'une licence équitable."
        },
        {
          "frage": "Quelle influence l'entourage a-t-il sur l'évolution d'un photographe ?",
          "antwort": "L'entourage filtre en permanence ce que tu t'autorises à oser. Entouré de personnes qui voient petit, tu grandis plus lentement – un entourage bienveillant agit au contraire comme une assurance pour ta liberté créative."
        }
      ]
    },
    "onlocation": {
      "titel": "Photoguide On Location",
      "kurz": "Photoguide On Location de ProPhotoSkills : voyage, lieux, protection et matériel pour les shootings sur place – sommaire, extraits et réponses.",
      "worum": [
        "On Location est le photoguide pour tout ce qui se passe hors du studio. Il t'accompagne de la planification du voyage au choix et à la lecture des lieux, jusqu'à la question de savoir comment protéger toi-même, ton équipe et ton matériel.",
        "Le livre est divisé en quatre parties : Travel, Location, Insurance et Equipment. Chaque partie associe des check-lists pratiques à l'attitude dont tu as besoin pour travailler en déplacement de façon flexible, préparée et sereine."
      ],
      "fuer": "Les photographes qui travaillent en extérieur, en voyage ou à l'international – ou qui en ont le projet.",
      "inhalt": [
        {
          "gruppe": "Travel",
          "kapitel": [
            "Planification de voyage pour créatifs",
            "Avion vs. train vs. voiture – quel moyen de transport choisir et quand",
            "Le bagage à main invisible – ce qui doit toujours être dans ton sac",
            "Gérer le jetlag – garder son énergie malgré le décalage horaire",
            "Transport du matériel – bien emballer et déclarer intelligemment",
            "Visas et douane – comment éviter le stress aux frontières",
            "Shooting à l’étranger – codes culturels et do’s & don’ts",
            "Travel light vs. full gear – quand voyager léger, quand voyager au maximum",
            "Le regard créatif en route – des images qui naissent dès le voyage",
            "Voyages en équipe – logistique, coûts et dynamique de groupe",
            "Hôtels et hébergements – ce qui fait vraiment un bon emplacement",
            "Le voyage comme source d’inspiration – comment les nouveaux lieux aiguisent ton regard",
            "Plans d’urgence en route – quand les vols sont annulés ou que les bagages manquent",
            "Voyager durablement – green choices dans l’industrie photo",
            "Travel mindset – la sérénité comme ressource la plus importante",
            "30 lieux iconiques que tu devrais avoir visités une fois en tant que photographe"
          ]
        },
        {
          "gruppe": "Location",
          "kapitel": [
            "Les bases du repérage de location – comment trouver les bons lieux",
            "Pourquoi les lieux ont leur propre lumière – et pourquoi tu dois apprendre à la lire",
            "Location et marque – comment les espaces racontent des histoires",
            "Intérieur vs. extérieur – avantages et inconvénients selon les jobs",
            "Autorisations et droits – créer la clarté juridique",
            "Météo imprévisible – sécuriser le shooting malgré la nature",
            "Décor de set vs. location réelle – ce qui doit être vrai, ce qui peut être mis en scène",
            "Apprendre à lire les lieux – comment reconnaître tout de suite un potentiel",
            "Les locations comme sources d’énergie – pourquoi les espaces marquent l’ambiance",
            "La location comme facteur de coût – budget et alternatives",
            "Décors improvisés – salons, arrière-cours, off-spaces",
            "Iconic places – des lieux à forte charge symbolique et reconnaissables",
            "Location et sécurité – équipe, matériel, infrastructure",
            "Contextes culturels – ce que signifie un lieu avant que tu le photographies",
            "Les locations comme co-créatrices – quand l’espace lui-même fait partie de l’histoire"
          ]
        },
        {
          "gruppe": "Insurance",
          "kapitel": [
            "Pourquoi se protéger n’est pas un luxe – mais une condition",
            "Assurance du matériel – protéger tes outils",
            "Assurance voyage pour créatifs – travailler dans le monde entier sans risque",
            "Responsabilité civile sur le set – quand des personnes ou des lieux subissent des dommages",
            "Model release et contrats – créer la sécurité juridique",
            "Sécuriser les droits d’utilisation – pourquoi les droits valent autant que l’image",
            "Protection du budget – quand les projets basculent de façon inattendue",
            "Les sauvegardes comme assurance – doubler les données est obligatoire",
            "Plans d’urgence pour la technique – boîtiers de secours et solutions de location",
            "La santé sur le set – pourquoi ta propre protection compte aussi",
            "Assurance vs. confiance – là où les contrats complètent les relations",
            "Jobs internationaux – tenir compte des différences juridiques",
            "Se protéger sur les projets libres – une protection malgré un petit budget",
            "Protection de la réputation –",
            "la communication de crise comme partie de la protection",
            "Sécurité psychologique – comment le plan B te donne de la liberté"
          ]
        },
        {
          "gruppe": "Equipment",
          "kapitel": [
            "L’appareil n’est pas tout – le mindset avant les mégapixels",
            "Comprendre les objectifs – les focales comme langage visuel",
            "Formes de lumière et outils – bien plus qu’« éclairer »",
            "Studios mobiles – la technique pour des sets flexibles",
            "Must-have vs. nice-to-have – fixer des priorités",
            "Batteries, cartes mémoire et basics – les héros sous-estimés",
            "Solutions de transport – cases, sacs et systèmes de rangement",
            "Tester le matériel – avant que le job commence",
            "Stratégies de sauvegarde – que faire quand la technique lâche",
            "Rental vs. ownership – quand louer, quand acheter",
            "Technique et équipe – qui doit manier quoi",
            "Organisation du set – câbles, pieds, sécurité",
            "Innovations et tendances – une technique qui a du sens plutôt que du hype",
            "Setups minimalistes – obtenir beaucoup avec peu",
            "Le matériel comme carte de visite – comment ta façon de faire montre ton professionnalisme"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "Le bagage à main invisible – ce qui doit toujours être dans ton sac",
          "absaetze": [
            "Quand les créatifs parlent de « bagage à main », ils pensent souvent : appareil, ordinateur portable, objectifs. Mais en réalité, il existe un autre bagage à main – invisible, mais décisif. Des choses qu’on ne peut ni peser ni faire entrer dans les règles douanières. L’attitude. Les routines. Les rituels. De petits auxiliaires qui, ensemble, décident si tu arrives serein ou si tu sembles déjà perdu à la porte d’embarquement.",
            "Ce chapitre est consacré justement à ce bagage à main invisible. C’est un mélange de pratique, de psychologie et de philosophie. Car au final, ce qui compte n’est pas seulement ce que tu emportes – mais la manière dont tu voyages : préparé, clair, résilient."
          ]
        },
        {
          "kapitel": "Pourquoi les lieux ont leur propre lumière – et pourquoi tu dois apprendre à la lire",
          "absaetze": [
            "La lumière n’est pas une ressource neutre. Ce n’est pas un outil que tu « ajoutes » simplement. Chaque lieu apporte sa propre lumière – marquée par l’architecture, la géographie, les matériaux, les ouvertures, les surfaces et l’environnement.",
            "Qui ne reconnaît pas cette lumière lutte contre elle. Qui la comprend travaille avec le lieu – pas contre lui."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "30 lieux iconiques que tu devrais avoir visités en tant que photographe",
          "url": "https://prophotoskills.com/t11_e02_30-ikonische-orte-die-du-als-fotograf-einmal-bereist-haben-solltest/",
          "text": "Pas une bucket list pour Instagram, mais 30 lieux comme terrains d'entraînement pour ton œil – de l'Islande à la Toscane, Venise et les Lofoten, jusqu'au Maroc, à la Jordanie et aux Rocheuses canadiennes. Pour chaque lieu, le chapitre montre ce qu'il t'apprend : lire une lumière qui change à la minute, les lignes et le timing, le silence comme sujet, l'échelle et la profondeur, ou maîtriser le chaos."
        }
      ],
      "fragen": [
        {
          "frage": "Que doit toujours contenir le bagage à main d'un photographe ?",
          "antwort": "Tout ce qui est irremplaçable : boîtier, l'objectif le plus important, ordinateur portable, disques durs, cartes mémoire et batteries. Fais ton sac de façon à pouvoir travailler même sans ton bagage en soute en cas de problème."
        },
        {
          "frage": "Que doivent savoir les photographes sur les visas et la douane ?",
          "antwort": "Un visa touristique n'autorise aucun travail rémunéré, pas même pour une journée de shooting. Les visas de travail demandent souvent des semaines de délai, et à la douane une liste du matériel avec numéros de série et valeurs aide."
        },
        {
          "frage": "Pourquoi chaque lieu a-t-il sa propre lumière ?",
          "antwort": "L'heure, l'orientation, les reflets, l'architecture et la végétation façonnent la lumière d'un lieu. Celui qui visite les lieux à différents moments et lit leur potentiel lumineux décide mieux et s'installe plus vite."
        },
        {
          "frage": "Ai-je besoin d'une autorisation pour un shooting dans un lieu public ?",
          "antwort": "Souvent, oui. Accessible au public ne veut pas dire que les prises de vue commerciales sont permises. Les pros distinguent l'accès, la prise de vue et l'exploitation, et règlent les autorisations par écrit."
        },
        {
          "frage": "De quelles assurances les photographes ont-ils vraiment besoin ?",
          "antwort": "Surtout de trois : une responsabilité civile professionnelle, une assurance du matériel et, pour les jobs à l'étranger, une assurance voyage adaptée."
        },
        {
          "frage": "Un meilleur matériel fait-il de meilleures photos ?",
          "antwort": "Pas automatiquement. La technique renforce l'attitude, elle ne la remplace pas. Ce qui compte, c'est de savoir pourquoi tu utilises un outil."
        }
      ]
    },
    "beginner": {
      "titel": "Photoguide Beginner",
      "kurz": "Photoguide Beginner de ProPhotoSkills : exposition, composition, lumière et post-traitement expliqués clairement – sommaire, extraits et réponses. Gratuit avec un compte.",
      "worum": [
        "Beginner est ton entrée dans la photographie – pas un manuel aride, mais un compagnon qui te mène de bases solides à une vraie assurance. En dix chapitres, il est question d'appareil, d'exposition, de composition, de portrait, de paysage, de nuit, de lumière, de post-traitement et de ton portfolio.",
        "Le but n'est pas d'apprendre des règles par cœur, mais de comprendre pourquoi les images fonctionnent et comment naissent les bonnes décisions. Dans PPS Books, tu lis Beginner gratuitement – il te faut seulement un compte."
      ],
      "fuer": "Les débutants et tous ceux qui veulent remettre leurs bases en ordre.",
      "inhalt": [
        {
          "gruppe": null,
          "kapitel": [
            "Chapitre 1 : Introduction à la photographie professionnelle",
            "Chapitre 2 : Choisir le bon appareil photo",
            "Chapitre 3 : Les bases de l’exposition",
            "Chapitre 4 : La composition parfaite",
            "Chapitre 5 : Maîtriser la photographie de portrait",
            "Chapitre 6 : Comprendre la photographie de paysage",
            "Chapitre 7 : L’art de la photographie de nuit",
            "Chapitre 8 : Techniques d’éclairage avancées",
            "Chapitre 9 : Post-traitement et optimisation de l’image",
            "Chapitre 10 : Présentation et création d’un portfolio"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "Chapitre 3 : Les bases de l’exposition",
          "absaetze": [
            "L’art de l’exposition est au cœur de la photographie. C’est la clé qui ouvre la voie à une photo correctement exposée. L’exposition détermine la luminosité d’une image et la quantité de détails visibles dans les zones claires et sombres. Pour la maîtriser, il faut une compréhension précise des composantes du « triangle d’exposition » : ouverture, vitesse d’obturation et sensibilité ISO.",
            "L’ouverture, mesurée en nombres f, contrôle la quantité de lumière qui traverse l’objectif jusqu’au capteur. Un petit nombre f (par ex. f/1.8) laisse entrer plus de lumière et est idéal pour photographier en basse lumière ou pour créer un arrière-plan flou, souvent recherché en portrait. Un grand nombre f (par ex. f/16) réduit l’ouverture, ce qui est utilisé pour les paysages avec une plus grande profondeur de champ."
          ]
        },
        {
          "kapitel": "Chapitre 4 : La composition parfaite",
          "absaetze": [
            "L’art de la composition est le cœur de la photographie. C’est une charpente invisible qui guide l’attention du spectateur et renforce l’impact visuel d’une photo. Une composition réfléchie n’est pas seulement esthétique, elle aide aussi à raconter une histoire ou à transmettre une ambiance particulière.",
            "Le nombre d’or est une formule mathématique très répandue dans l’art et l’architecture pour créer des proportions harmonieuses. En photographie, il représente souvent le rapport idéal dans la composition. La règle des tiers en est une approximation pratique et propose de diviser l’image par deux lignes horizontales et deux lignes verticales afin d’obtenir neuf parties égales. Place les éléments importants le long de ces lignes ou à leurs intersections pour rendre l’image dynamique et équilibrée."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "Préjugés vs expériences",
          "url": "https://prophotoskills.com/t05_e04_vorurteile-vs-erfahrungen/",
          "text": "Surtout au début, on accumule beaucoup de règles et d'opinions – venues de vidéos, de forums et d'ateliers. Ce chapitre gratuit du Photoguide Next Level montre pourquoi ta propre expérience compte plus que n'importe quel préjugé : essayer, suivre ton propre chemin et apprendre de tes propres erreurs."
        },
        {
          "titel": "Tous ces coachs …",
          "url": "https://prophotoskills.com/t05_e03_all_die_coaches/",
          "text": "Quand on débute, on tombe vite sur des promesses de coaching et des plans étape par étape. Ce chapitre gratuit du Photoguide Next Level explique pourquoi le vrai progrès naît du calme intérieur et de ta propre réflexion – et pas du prochain mode d'emploi."
        }
      ],
      "fragen": [
        {
          "frage": "Qu'est-ce que le triangle d'exposition ?",
          "antwort": "L'ouverture, la vitesse d'obturation et la sensibilité ISO. Ensemble, elles déterminent la luminosité d'une image et la quantité de détails conservés dans les hautes lumières et les ombres."
        },
        {
          "frage": "Quand choisir une petite et quand une grande valeur d'ouverture ?",
          "antwort": "Une petite valeur comme f/1.8 laisse entrer beaucoup de lumière et adoucit l'arrière-plan – idéal pour le portrait et la faible lumière. Une grande comme f/16 donne beaucoup de profondeur de champ, par exemple en paysage."
        },
        {
          "frage": "Quelle vitesse d'obturation fige le mouvement ?",
          "antwort": "Les vitesses rapides comme 1/1000 s figent le mouvement, par exemple en sport. Les vitesses plus lentes, à partir d'environ 1/30 s, rendent le mouvement flou – pour l'eau qui coule ou le light painting."
        },
        {
          "frage": "Qu'est-ce que la règle des tiers ?",
          "antwort": "Tu divises l'image en neuf zones avec deux lignes horizontales et deux verticales, et tu places les éléments importants sur ces lignes ou à leurs intersections. L'image paraît ainsi équilibrée et vivante."
        }
      ]
    }
  },
  "it": {
    "nextlevel": {
      "titel": "Photoguide Next Level",
      "kurz": "Photoguide Next Level di ProPhotoSkills: conoscenza, atteggiamento e struttura per fotografi che vogliono crescere professionalmente – indice, estratti e risposte.",
      "worum": [
        "Next Level è il photoguide per chi fotografa già con solidità e vuole fare il passo verso la fotografia pubblicitaria professionale. Non spiega menu o preset, ma ciò che fa la differenza sul set e nel dialogo con i clienti.",
        "Al centro c'è il lavoro prima del primo clic: preparazione, team, comunicazione, guida del set, trattative sul prezzo e diritti d'uso. A questo si aggiungono capitoli sulla forza fisica e mentale, sulla storia dell'arte come strumento e su come i clienti ti vedono."
      ],
      "fuer": "Fotografi con esperienza che vogliono passare dagli incarichi alle partnership e far valere con sicurezza il proprio valore.",
      "inhalt": [
        {
          "gruppe": null,
          "kapitel": [
            "Perché Gala e Bunte sono taaaanto importanti...",
            "Capelli e trucco – il tempo del pettegolezzo è tempo di fiducia",
            "La seconda o la terza modella aspetta seduta senza far niente",
            "Il 70% del lavoro fotografico? Avviene PRIMA del primo clic.",
            "L’invisibile prima del clic",
            "Perché le persone affiatate valgono più di qualsiasi obiettivo",
            "“Houston, abbiamo un problema...”",
            "Perché i cambiamenti spontanei sono pericolosi",
            "Perché queste situazioni capitano più spesso di quanto si pensi",
            "Consigli bonus per la massima sicurezza",
            "Fai attenzione al tuo ambiente",
            "Anche a te piace guardare Chi vuol essere milionario?",
            "Shooting di prodotto con il team dell’agenzia – accendere la creatività",
            "Che cosa hanno in comune calciatori e fotografi?",
            "Evoluzione - il tuo trigger invisibile verso il Next Level",
            "Tutti quei coach ....",
            "Pregiudizi vs. esperienze",
            "Interesse e curiosità",
            "Competenze tecniche",
            "Creatività e visione",
            "Composizione e costruzione dell’immagine",
            "Pazienza",
            "Resistenza",
            "Passione e dedizione",
            "Guida delle persone e comunicazione",
            "Lavoro di squadra",
            "Gestione del tempo e organizzazione",
            "Capacità di accettare le critiche e crescita",
            "Attenzione ai dettagli",
            "Concentrazione e presenza",
            "Conoscenza della luce e dell’ombra",
            "Vendita e presentazione di sé",
            "Sicurezza e capacità di leadership",
            "Raccontare storie",
            "Conoscenza della storia dell’arte",
            "Perché correre ti aiuta a fotografare meglio...",
            "Sei un regista, non solo uno che scatta",
            "Devi essere veloce – fisicamente E mentalmente",
            "Energia del set = energia del team",
            "Forza mentale = resistenza allo stress",
            "Lavori in situazioni estreme – tempo, meteo, location",
            "Concentrazione grazie alla chiarezza fisica",
            "Postura = impatto",
            "Leonardo da Vinci, importante per la fotografia?",
            "La gestione della luce – il chiaroscuro",
            "Lo studio dell’anatomia – una vera comprensione del corpo",
            "Composizione e sezione aurea",
            "Ottica e visione – la camera oscura",
            "L’espressione – l’effetto Monna Lisa",
            "Approccio multidisciplinare = fotografia moderna",
            "Leggere luce e ombra – come un dramma sul palcoscenico",
            "Osservare invece di giudicare",
            "Capire l’architettura come scenografia",
            "Tutto è collegato – pensiero interdisciplinare",
            "Capire il movimento",
            "La curiosità come motore",
            "L’emozione prima della perfezione",
            "L’errore come parte del processo",
            "Pazienza e visione a lungo termine",
            "I fotografi hanno creato il social network....",
            "La scenografia della porta accanto",
            "Il team di insegnanti nel progetto libero”",
            "Perché la fotografia professionale vale il suo prezzo",
            "Perché la fotografia professionale vale il suo prezzo -2-",
            "Fotografia pubblicitaria professionale – un mestiere che non si riconosce sul display della fotocamera",
            "Tutto inizia con l’obiettivo – non con la fotocamera",
            "La tecnica costa – ma conta il risultato",
            "Il problema non è il prezzo – è il malinteso",
            "I diritti costano – perché le immagini hanno valore",
            "Collaborazione invece di semplice esecuzione",
            "La tecnica fa la qualità – ma è l’atteggiamento a fare la differenza",
            "Conclusione: chi compra a poco non spende due volte – perde efficacia",
            "Lo sguardo del cliente"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "Il 70% del lavoro fotografico? Avviene PRIMA del primo clic.",
          "absaetze": [
            "Forse pensi che un fotografo o una fotografa metta semplicemente in borsa la fotocamera, vada sul set, scatti qualche volta – e voilà, l’immagine perfetta è fatta. Ma sarebbe un po’ come dire che un concerto riesce solo perché si sale sul palco – senza prove, senza soundcheck, senza tremarella. In realtà, la parte decisiva avviene molto prima. Perché circa il 70 % del lavoro di un incarico fotografico professionale non si svolge sul set, ma nell’intensa preparazione che lo precede. E questo riguarda molto più che fare i bagagli con l’attrezzatura.",
            "Una buona preparazione non è un “nice to have”, è il fondamento. È il luogo in cui le idee prendono forma, si sviluppano soluzioni e i possibili problemi vengono già simulati mentalmente. È lo sforzo silenzioso dietro le quinte che fa sì che il giorno dello shooting tutto fili liscio – o, se qualcosa non fila liscio, che lo si possa comunque gestire con sicurezza. Questo 70 % ti mette alla prova: mentalmente, fisicamente, tecnicamente, organizzativamente – e a volte perfino emotivamente. È questo il vero lavoro."
          ]
        },
        {
          "kapitel": "Perché la fotografia professionale vale il suo prezzo",
          "absaetze": [
            "Nell’attuale diluvio digitale di immagini non decide il look più bello, ma quello strategicamente più efficace. La fotografia pubblicitaria non è semplicemente una bella immagine. È uno strumento – preciso, pianificato, coerente con il marchio. In questo il fotografo professionista non è solo un artigiano, ma qualcuno che pensa insieme, che capisce il marchio, un partner strategico. Ed è proprio per questo che questo servizio ha il suo prezzo.",
            "Chi ha lavorato almeno una volta in un reparto marketing lo sa: una campagna sta in piedi o crolla con le immagini. Sono la prima cosa che si percepisce. Trasmettono valori, emozioni, identità. Un linguaggio visivo debole può rovinare anche l’idea migliore. Le buone immagini invece creano fiducia, allungano il tempo di permanenza, rafforzano la riconoscibilità. Non è un “nice to have” – è un motore di conversione."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "Evoluzione – il tuo trigger invisibile verso il Next Level",
          "url": "https://prophotoskills.com/t05_e02_entwicklung-dein-unsichtbarer-next-level-trigger/",
          "text": "A un certo punto tutto funziona: i clienti ti prenotano, lo stile è definito, la routine ti sostiene – eppure senti che si può fare di più. Il capitolo descrive questo momento e la decisione consapevole di evolvere davvero. Mostra con onestà entrambi i lati: ciò che guadagni (una personalità più forte, un pensiero fotografico più acuto, più valore e indipendenza dalle mode) e ciò che costa (tempo, energia, vecchie abitudini e a volte persone che non ti seguono)."
        },
        {
          "titel": "Lo sguardo del cliente – quando la fiducia diventa all'improvviso budget",
          "url": "https://prophotoskills.com/t09_l09_kunden-blick-wenn-aus-vertrauen-ploetzlich-budget-wird/",
          "text": "Non appena sono in gioco budget importanti, i clienti ti mettono alla prova – molto prima che parta il preventivo. Il capitolo guarda attraverso i loro occhi: non comprano immagini, ma sicurezza, coerenza, struttura, leadership e calma. Si valuta come comunichi, pensi, ti prepari, calcoli e guidi – sul set come dopo la consegna. Alla fine c'è il passaggio da fornitore a partner."
        },
        {
          "titel": "Tutti quei coach …",
          "url": "https://prophotoskills.com/t05_e03_all_die_coaches/",
          "text": "Un esperimento mentale: cosa cambierebbe se domani avessi un milione sul conto? Soprattutto, la paura diventerebbe più silenziosa – la paura di decidere male o di non essere all'altezza. Il capitolo mostra perché molte promesse di coaching mancano proprio questo punto e perché il vero progresso nasce quando impari a pensare e decidere con questa calma interiore – senza il milione."
        },
        {
          "titel": "Pregiudizi vs. esperienze",
          "url": "https://prophotoskills.com/t05_e04_vorurteile-vs-erfahrungen/",
          "text": "I pregiudizi si accumulano senza che ce ne accorgiamo – da workshop, forum e frasi che qualcuno ha affermato abbastanza ad alta voce. Il capitolo mostra come ti sbarrino proprio la strada che ti porterebbe avanti e perché la tua esperienza è la maestra più forte: provare, uscire dal sentiero tracciato e fare i tuoi errori."
        },
        {
          "titel": "Fai attenzione al tuo ambiente",
          "url": "https://prophotoskills.com/t03_l04_achte-auf-dein-umfeld/",
          "text": "L'immagine del lupo solitario con la fotocamera è romantica, ma falsa. Dietro ogni forza creativa ci sono persone che la sostengono, la stimolano e a volte la salvano. Il capitolo spiega perché in fotografia l'ambiente è un moltiplicatore: contribuisce a decidere quanto velocemente impari, come gestisci pressione e crisi e da dove viene la tua ispirazione – e perché vale la pena sceglierlo consapevolmente."
        }
      ],
      "fragen": [
        {
          "frage": "Cosa significa «il 70 % del lavoro fotografico avviene prima del clic»?",
          "antwort": "La maggior parte del lavoro è invisibile: concept, briefing, pianificazione della luce, team, location e la tua preparazione mentale. Chi inizia a pensare solo sul set perde tempo, energia e spesso qualità d'immagine."
        },
        {
          "frage": "Perché un team affiatato è più importante di un'attrezzatura costosa?",
          "antwort": "Atmosfera, flow e una modella rilassata nascono dalle persone, non dalla tecnica. Un team che si conosce risolve i problemi più in fretta e crea l'energia che rende possibili immagini forti."
        },
        {
          "frage": "Cosa vuol dire «Sei un regista, non solo uno che scatta»?",
          "antwort": "Sul set tutti guardano te. Guidi, tieni unito il team e dirigi l'energia – con chiarezza, concentrazione e una presenza autentica."
        },
        {
          "frage": "Perché la fotografia pubblicitaria è un investimento e non un costo?",
          "antwort": "Una campagna sta in piedi o crolla con le sue immagini. Le buone immagini creano fiducia e riconoscibilità e lavorano per un'azienda per mesi – le immagini deboli rovinano anche l'idea migliore."
        },
        {
          "frage": "Perché i diritti d'uso costano a parte?",
          "antwort": "Dopo lo shooting le immagini appartengono al loro autore. Dove, per quanto tempo e quanto ampiamente viene usata un'immagine ne determina il valore – per questo diffusione, canale e durata vengono concessi in licenza in modo equo."
        },
        {
          "frage": "Che influenza ha l'ambiente sulla crescita di un fotografo?",
          "antwort": "L'ambiente filtra di continuo ciò che osi fare. Chi è circondato da persone che pensano in piccolo cresce più lentamente – un ambiente che ti sostiene funziona invece come un'assicurazione per la libertà creativa."
        }
      ]
    },
    "onlocation": {
      "titel": "Photoguide On Location",
      "kurz": "Photoguide On Location di ProPhotoSkills: viaggio, location, tutela e attrezzatura per gli shooting sul posto – indice, estratti e risposte.",
      "worum": [
        "On Location è il photoguide per tutto ciò che accade fuori dallo studio. Ti accompagna dalla pianificazione del viaggio alla scelta e alla lettura delle location, fino alla domanda su come tutelare te stesso, il tuo team e la tua attrezzatura.",
        "Il libro è diviso in quattro parti: Travel, Location, Insurance ed Equipment. Ogni parte unisce checklist pratiche all'atteggiamento che ti serve per lavorare in viaggio in modo flessibile, preparato e sicuro."
      ],
      "fuer": "Fotografi che lavorano in location, in viaggio o a livello internazionale – o che intendono farlo.",
      "inhalt": [
        {
          "gruppe": "Travel",
          "kapitel": [
            "Pianificazione dei viaggi per creativi",
            "Aereo vs. treno vs. auto – quale mezzo di trasporto ha senso e quando",
            "Il bagaglio a mano invisibile – cosa deve sempre esserci nella tua borsa",
            "Gestire il jet lag – energia nonostante il fuso orario",
            "Trasporto dell’attrezzatura – imballare in sicurezza e dichiarare con intelligenza",
            "Visti & dogana – come evitare lo stress alle frontiere",
            "Shooting all’estero – codici culturali e do’s & don’ts",
            "Travel light vs. full gear – quando viaggiare minimal, quando al massimo",
            "Sguardo creativo in viaggio – immagini che nascono già durante il viaggio",
            "Viaggi in team – logistica, costi e dinamiche di gruppo",
            "Hotel & alloggi – cosa rende davvero buona una posizione",
            "Il viaggio come fonte d’ispirazione – come i luoghi nuovi affinano il tuo occhio",
            "Piani d’emergenza in viaggio – quando i voli saltano o il bagaglio manca",
            "Viaggiare in modo sostenibile – green choices nell’industria fotografica",
            "Travel mindset – la serenità come risorsa più importante",
            "30 luoghi iconici che come fotografo dovresti visitare almeno una volta"
          ]
        },
        {
          "gruppe": "Location",
          "kapitel": [
            "Basi del location scouting – come trovare i luoghi giusti",
            "Perché i luoghi hanno una loro luce – e perché devi imparare a leggerla",
            "Location & brand – come gli spazi raccontano storie",
            "Indoor vs. outdoor – vantaggi e svantaggi per lavori diversi",
            "Permessi & diritti – fare chiarezza giuridica",
            "Meteo imprevedibile – mettere al sicuro lo shooting nonostante la natura",
            "Set design vs. real location – cosa deve essere vero, cosa può essere messo in scena",
            "Imparare a leggere i luoghi – come riconoscere subito il potenziale",
            "Le location come fonte di energia – perché gli spazi plasmano l’atmosfera",
            "Il costo della location – budget e alternative",
            "Scenografie improvvisate – salotti, cortili, off-spaces",
            "Iconic places – luoghi con forza simbolica e riconoscibilità",
            "Location & sicurezza – crew, attrezzatura, infrastruttura",
            "Contesti culturali – cosa significa un luogo prima di fotografarlo",
            "Le location come co-creator – quando lo spazio stesso diventa parte della storia"
          ]
        },
        {
          "gruppe": "Insurance",
          "kapitel": [
            "Perché proteggersi non è un lusso – ma un presupposto",
            "Assicurazione dell’attrezzatura – protezione per i tuoi strumenti",
            "Assicurazione di viaggio per creativi – lavorare in tutto il mondo senza rischi",
            "Responsabilità civile sul set – quando persone o luoghi subiscono danni",
            "Model release & contratti – creare sicurezza giuridica",
            "Tutelare i diritti d’uso – perché i diritti valgono quanto l’immagine",
            "Protezione del budget – quando i progetti crollano all’improvviso",
            "I backup come assicurazione – dati doppi sono un obbligo",
            "Piani d’emergenza per la tecnica – fotocamere di riserva e soluzioni a noleggio",
            "La salute sul set – perché conta anche la tua protezione",
            "Assicurazione vs. fiducia – dove i contratti completano le relazioni",
            "Lavori internazionali – tenere conto delle differenze giuridiche",
            "Protezione per progetti liberi – sicurezza anche con un budget ridotto",
            "Protezione della reputazione –",
            "la comunicazione di crisi come parte della tutela",
            "Sicurezza psicologica – come il piano B ti dà libertà"
          ]
        },
        {
          "gruppe": "Equipment",
          "kapitel": [
            "La fotocamera non è tutto – mindset prima dei megapixel",
            "Capire gli obiettivi – le focali come linguaggio visivo",
            "Forme di luce e strumenti – molto più che “illuminare”",
            "Studi mobili – tecnica per set flessibili",
            "Must-have vs. nice-to-have – stabilire le priorità",
            "Batterie, schede di memoria & basi – gli eroi sottovalutati",
            "Soluzioni di trasporto – case, bag & sistemi di organizzazione",
            "Testare l’attrezzatura – prima che il lavoro inizi",
            "Strategie di backup – cosa fare quando la tecnica si guasta",
            "Rental vs. ownership – quando noleggiare, quando comprare",
            "Tecnica & team – chi deve usare cosa",
            "Organizzazione del set – cavi, stativi, sicurezza",
            "Innovazioni & tendenze – tecnica con senso invece di hype",
            "Setup minimalisti – ottenere molto con poco",
            "L’attrezzatura come biglietto da visita – come il tuo modo di usarla mostra professionalità"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "Il bagaglio a mano invisibile – cosa deve sempre esserci nella tua borsa",
          "absaetze": [
            "Quando i creativi parlano di “bagaglio a mano”, spesso intendono: fotocamera, laptop, obiettivi. Ma in realtà esiste un altro bagaglio a mano – invisibile, ma decisivo. Cose che non si possono pesare né mettere nei regolamenti doganali. Atteggiamento. Routine. Rituali. Piccoli aiuti che, nel complesso, decidono se arrivi sicuro di te o se sembri già perso al gate.",
            "Questo capitolo è dedicato proprio a questo bagaglio a mano invisibile. È un mix di pratica, psicologia e filosofia. Perché alla fine non conta solo cosa porti con te – ma come viaggi: preparato, lucido, resiliente."
          ]
        },
        {
          "kapitel": "Perché i luoghi hanno una loro luce – e perché devi imparare a leggerla",
          "absaetze": [
            "La luce non è una risorsa neutra. Non è uno strumento che semplicemente “aggiungi”. Ogni luogo porta con sé una sua luce – segnata da architettura, geografia, materiali, aperture, superfici e ambiente.",
            "Chi non riconosce questa luce lotta contro di essa. Chi la capisce lavora con il luogo – non contro di esso."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "30 luoghi iconici che dovresti aver visitato come fotografo",
          "url": "https://prophotoskills.com/t11_e02_30-ikonische-orte-die-du-als-fotograf-einmal-bereist-haben-solltest/",
          "text": "Non una bucket list per Instagram, ma 30 luoghi come palestre per il tuo occhio – dall'Islanda alla Toscana, a Venezia e alle Lofoten, fino al Marocco, alla Giordania e alle Montagne Rocciose canadesi. Per ogni luogo il capitolo mostra cosa ti insegna: leggere una luce che cambia di minuto in minuto, linee e timing, il silenzio come soggetto, scala e profondità o tenere sotto controllo il caos."
        }
      ],
      "fragen": [
        {
          "frage": "Cosa deve esserci sempre nel bagaglio a mano di un fotografo?",
          "antwort": "Tutto ciò che è insostituibile: corpo macchina, l'obiettivo più importante, laptop, hard disk, schede di memoria e batterie. Prepara il bagaglio in modo da poter lavorare in caso di emergenza anche senza il bagaglio da stiva."
        },
        {
          "frage": "A cosa devono fare attenzione i fotografi con visti e dogana?",
          "antwort": "Un visto turistico non consente lavoro retribuito, nemmeno per una sola giornata di shooting. I visti di lavoro richiedono spesso settimane di anticipo, e in dogana aiuta una lista dell'attrezzatura con numeri di serie e valori."
        },
        {
          "frage": "Perché ogni luogo ha la sua luce?",
          "antwort": "Ora del giorno, orientamento, riflessi, architettura e vegetazione plasmano la luce di una location. Chi visita i luoghi in momenti diversi e ne legge il potenziale di luce decide meglio e allestisce più in fretta."
        },
        {
          "frage": "Mi serve un permesso per uno shooting in luoghi pubblici?",
          "antwort": "Spesso sì. Accessibile al pubblico non significa che le riprese commerciali siano consentite. I professionisti distinguono accesso, ripresa e utilizzo e chiariscono i permessi per iscritto."
        },
        {
          "frage": "Di quali assicurazioni hanno davvero bisogno i fotografi?",
          "antwort": "Soprattutto di tre: una responsabilità civile professionale, un'assicurazione per l'attrezzatura e, per i lavori all'estero, un'adeguata assicurazione di viaggio."
        },
        {
          "frage": "Un'attrezzatura migliore fa foto migliori?",
          "antwort": "Non automaticamente. La tecnica rafforza l'atteggiamento, non lo sostituisce. Conta sapere perché usi uno strumento."
        }
      ]
    },
    "beginner": {
      "titel": "Photoguide Beginner",
      "kurz": "Photoguide Beginner di ProPhotoSkills: esposizione, composizione, luce e post-produzione spiegate in modo chiaro – indice, estratti e risposte. Gratis con un account.",
      "worum": [
        "Beginner è il tuo ingresso nella fotografia – non un manuale arido, ma un compagno che ti porta da basi solide a una vera sicurezza. In dieci capitoli si parla di fotocamera, esposizione, composizione, ritratto, paesaggio, notte, luce, post-produzione e del tuo portfolio.",
        "L'obiettivo non è imparare regole a memoria, ma capire perché le immagini funzionano e come nascono le buone decisioni. In PPS Books leggi Beginner gratis – ti serve solo un account."
      ],
      "fuer": "Principianti e chiunque voglia mettere ordine nelle proprie basi.",
      "inhalt": [
        {
          "gruppe": null,
          "kapitel": [
            "Capitolo 1: Introduzione alla fotografia professionale",
            "Capitolo 2: Scegliere la fotocamera giusta",
            "Capitolo 3: Le basi dell’esposizione",
            "Capitolo 4: La composizione perfetta",
            "Capitolo 5: Padroneggiare la fotografia di ritratto",
            "Capitolo 6: Capire la fotografia di paesaggio",
            "Capitolo 7: L’arte della fotografia notturna",
            "Capitolo 8: Tecniche di illuminazione avanzate",
            "Capitolo 9: Post-produzione e ottimizzazione delle immagini",
            "Capitolo 10: Presentazione e creazione di un portfolio"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "Capitolo 3: Le basi dell’esposizione",
          "absaetze": [
            "L’arte dell’esposizione è al cuore della fotografia. È la chiave che apre la strada a una foto correttamente esposta. L’esposizione determina quanto un’immagine sia chiara o scura e quanti dettagli siano visibili nelle zone chiare e scure. Per padroneggiarla serve una conoscenza precisa delle componenti del «triangolo dell’esposizione»: diaframma, tempo di scatto e sensibilità ISO.",
            "Il diaframma, misurato in numeri f, controlla la quantità di luce che attraversa l’obiettivo e raggiunge il sensore. Un numero f basso (ad es. f/1.8) fa entrare più luce ed è ideale per fotografare in condizioni di scarsa luce o per ottenere uno sfondo sfocato, spesso desiderato nei ritratti. Un numero f alto (ad es. f/16) riduce l’apertura, cosa che si usa nelle foto di paesaggio con una maggiore profondità di campo."
          ]
        },
        {
          "kapitel": "Capitolo 4: La composizione perfetta",
          "absaetze": [
            "L’arte della composizione è il cuore della fotografia. È un’impalcatura invisibile che guida l’attenzione dell’osservatore e rafforza l’impatto visivo di una foto. Una composizione ben pensata non è solo esteticamente piacevole, ma aiuta anche a raccontare una storia o a trasmettere un’atmosfera precisa.",
            "La sezione aurea è una formula matematica molto diffusa nell’arte e nell’architettura per creare proporzioni armoniose. In fotografia rappresenta spesso il rapporto ideale nella composizione. La regola dei terzi ne è un’approssimazione pratica e propone di dividere l’immagine con due linee orizzontali e due verticali, così da ottenere nove parti uguali. Posiziona gli elementi importanti lungo queste linee o nei loro punti di intersezione per rendere l’immagine dinamica ed equilibrata."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "Pregiudizi vs. esperienze",
          "url": "https://prophotoskills.com/t05_e04_vorurteile-vs-erfahrungen/",
          "text": "Soprattutto all'inizio si raccolgono tante regole e opinioni – da video, forum e workshop. Questo capitolo gratuito del Photoguide Next Level mostra perché la tua esperienza conta più di qualsiasi pregiudizio: provare, seguire la tua strada e imparare dai tuoi errori."
        },
        {
          "titel": "Tutti quei coach …",
          "url": "https://prophotoskills.com/t05_e03_all_die_coaches/",
          "text": "Chi inizia si imbatte presto in promesse di coaching e piani passo dopo passo. Questo capitolo gratuito del Photoguide Next Level spiega perché il vero progresso nasce dalla calma interiore e dal tuo modo di pensare – e non dal prossimo schema pronto."
        }
      ],
      "fragen": [
        {
          "frage": "Che cos'è il triangolo dell'esposizione?",
          "antwort": "Diaframma, tempo di scatto e sensibilità ISO. Insieme determinano quanto un'immagine sarà luminosa e quanti dettagli resteranno nelle luci e nelle ombre."
        },
        {
          "frage": "Quando scelgo un numero f piccolo e quando uno grande?",
          "antwort": "Un numero f piccolo come f/1.8 fa entrare molta luce e sfuma lo sfondo – ideale per ritratti e poca luce. Uno grande come f/16 dà molta profondità di campo, per esempio nel paesaggio."
        },
        {
          "frage": "Quale tempo di scatto congela il movimento?",
          "antwort": "Tempi brevi come 1/1000 di secondo congelano il movimento, per esempio nello sport. Tempi più lunghi, da circa 1/30 di secondo, rendono il movimento mosso – per l'acqua che scorre o il light painting."
        },
        {
          "frage": "Che cos'è la regola dei terzi?",
          "antwort": "Dividi l'immagine in nove riquadri con due linee orizzontali e due verticali e posizioni gli elementi importanti sulle linee o sui loro punti d'incrocio. Così l'immagine risulta equilibrata e viva."
        }
      ]
    }
  },
  "es": {
    "nextlevel": {
      "titel": "Photoguide Next Level",
      "kurz": "Photoguide Next Level de ProPhotoSkills: conocimiento, actitud y estructura para fotógrafos que quieren crecer profesionalmente – índice, muestras de lectura y respuestas.",
      "worum": [
        "Next Level es el photoguide para quienes ya fotografían con solidez y quieren dar el paso a la fotografía publicitaria profesional. No explica menús ni presets, sino lo que marca la diferencia en el set y en la conversación con los clientes.",
        "En el centro está el trabajo antes del primer clic: preparación, equipo, comunicación, dirección del set, negociación de precios y derechos de uso. A ello se suman capítulos sobre la fuerza física y mental, sobre la historia del arte como herramienta y sobre cómo te ven los clientes."
      ],
      "fuer": "Fotógrafos con experiencia que quieren pasar de los encargos a las colaboraciones y defender su valor con seguridad.",
      "inhalt": [
        {
          "gruppe": null,
          "kapitel": [
            "Por qué Gala y Bunte son taaaaan importantes...",
            "Peluquería y maquillaje – el tiempo de cotilleo es tiempo de confianza",
            "La segunda o tercera modelo espera sentada",
            "¿El 70 % del trabajo fotográfico? Ocurre ANTES del primer clic.",
            "Lo invisible antes del clic",
            "Por qué las personas bien compenetradas valen más que cualquier objetivo",
            "“Houston, tenemos un problema...”",
            "Por qué los cambios espontáneos son peligrosos",
            "Por qué estas situaciones son más frecuentes de lo que se piensa",
            "Consejos extra para la máxima seguridad",
            "Presta atención a tu entorno",
            "¿A ti también te gusta ver ¿Quién quiere ser millonario?",
            "Sesión de producto con un equipo de agencia – encender la creatividad",
            "¿Qué tienen en común futbolistas y fotógrafos?",
            "Desarrollo – tu disparador invisible hacia el siguiente nivel",
            "Todos esos coaches ....",
            "Prejuicios vs. experiencias",
            "Interés y curiosidad",
            "Habilidades técnicas",
            "Creatividad y visión",
            "Composición y diseño de la imagen",
            "Paciencia",
            "Resistencia",
            "Pasión y entrega",
            "Dirección de personas y comunicación",
            "Trabajo en equipo",
            "Gestión del tiempo y organización",
            "Capacidad de aceptar críticas y evolución",
            "Atención a los detalles",
            "Concentración y presencia",
            "Conocimiento de la luz y la sombra",
            "Venta y autopresentación",
            "Seguridad y dotes de liderazgo",
            "Contar historias",
            "Conocimiento de la historia del arte",
            "Por qué correr te ayuda a fotografiar mejor...",
            "Eres el director, no solo el disparador",
            "Tienes que ser rápido – física Y mentalmente",
            "Energía del set = energía del equipo",
            "Fortaleza mental = resistencia al estrés",
            "Trabajas en situaciones extremas – tiempo, clima, localizaciones",
            "Concentración gracias a la claridad física",
            "Postura = impacto",
            "Leonardo da Vinci, ¿importante para la fotografía?",
            "Dirección de la luz – claroscuro",
            "Estudio de la anatomía – comprensión real del cuerpo",
            "Composición y proporción áurea",
            "Óptica y visión – la cámara oscura",
            "La expresión – el efecto Mona Lisa",
            "Enfoque multidisciplinar = fotografía moderna",
            "Leer la luz y la sombra – como un drama en el escenario",
            "Observar en lugar de juzgar",
            "Entender la arquitectura como escenario",
            "Todo está conectado – pensamiento interdisciplinar",
            "Entender el movimiento",
            "La curiosidad como motor",
            "La emoción por encima de la perfección",
            "Los errores como parte del proceso",
            "Paciencia y largo plazo",
            "Los fotógrafos crearon la red social....",
            "El escenario de al lado",
            "El equipo docente en un proyecto libre”",
            "Por qué la fotografía profesional vale lo que cuesta",
            "Por qué la fotografía profesional vale lo que cuesta -2-",
            "La fotografía publicitaria profesional – un oficio que no se ve en la pantalla de la cámara",
            "Empieza con el objetivo – no con la cámara",
            "La técnica cuesta – pero lo que cuenta es el resultado",
            "El precio no es el problema – el malentendido sí",
            "Los derechos cuestan – porque las imágenes tienen valor",
            "Colaborar en lugar de despachar",
            "La técnica da calidad – pero la actitud marca la diferencia",
            "Conclusión: quien compra barato no compra dos veces – pierde impacto",
            "La mirada del cliente"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "¿El 70 % del trabajo fotográfico? Ocurre ANTES del primer clic.",
          "absaetze": [
            "Quizá pienses que un fotógrafo simplemente guarda la cámara, va al set, dispara unas cuantas veces – y voilà, la imagen perfecta ya está hecha. Pero eso sería más o menos como decir que un concierto ha salido bien solo por subirse al escenario – sin ensayo, sin prueba de sonido, sin nervios. En realidad, lo decisivo ocurre mucho antes. Porque alrededor del 70 % del trabajo de un encargo fotográfico profesional no tiene lugar en el set, sino en la intensa preparación previa. Y eso abarca mucho más que guardar el equipo.",
            "Una buena preparación no es un “nice to have”, es la base. Es el lugar donde las ideas toman forma, donde se desarrollan soluciones y donde los posibles problemas ya se repasan mentalmente. Es el esfuerzo silencioso entre bastidores que hace que todo fluya el día de la sesión – o, si no fluye, que aun así lo resuelvas con seguridad. Ese 70 % te pone a prueba: mental, física, técnica y organizativamente – y a veces incluso emocionalmente. Es el verdadero trabajo."
          ]
        },
        {
          "kapitel": "Por qué la fotografía profesional vale lo que cuesta",
          "absaetze": [
            "En la avalancha digital de imágenes de hoy, no decide el look más bonito, sino el más eficaz estratégicamente. La fotografía publicitaria no es simplemente una imagen bonita. Es un instrumento – preciso, planificado, fiel a la marca. El fotógrafo profesional no es solo un artesano, sino alguien que piensa con el cliente, que entiende la marca, un socio estratégico. Y precisamente por eso este trabajo tiene su precio.",
            "Quien haya trabajado alguna vez en un departamento de marketing lo sabe: una campaña se sostiene o se cae con sus imágenes. Son lo primero que se percibe. Transmiten valores, emociones, identidad. Un lenguaje visual débil puede arruinar incluso la mejor idea. Las buenas imágenes, en cambio, generan confianza, alargan el tiempo de permanencia y refuerzan el reconocimiento. Eso no es un “nice to have” – es un motor de conversión."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "Desarrollo – tu disparador invisible hacia el siguiente nivel",
          "url": "https://prophotoskills.com/t05_e02_entwicklung-dein-unsichtbarer-next-level-trigger/",
          "text": "En algún momento todo funciona: los clientes te contratan, tu estilo está definido, la rutina te sostiene – y aun así sientes que hay más. El capítulo describe ese punto y la decisión consciente de desarrollarte de verdad. Muestra con honestidad las dos caras: lo que ganas (una personalidad más fuerte, un pensamiento fotográfico más afilado, más valor e independencia de las modas) y lo que cuesta (tiempo, energía, viejos hábitos y a veces personas que no te acompañan)."
        },
        {
          "titel": "La mirada del cliente – cuando la confianza se convierte de pronto en presupuesto",
          "url": "https://prophotoskills.com/t09_l09_kunden-blick-wenn-aus-vertrauen-ploetzlich-budget-wird/",
          "text": "En cuanto hay grandes presupuestos sobre la mesa, los clientes te examinan – mucho antes de enviar el presupuesto. El capítulo mira a través de sus ojos: no compran imágenes, sino seguridad, constancia, estructura, liderazgo y calma. Se valora cómo comunicas, piensas, preparas, calculas y diriges – en el set igual que después de la entrega. Al final llega el paso de proveedor a socio."
        },
        {
          "titel": "Todos esos coaches …",
          "url": "https://prophotoskills.com/t05_e03_all_die_coaches/",
          "text": "Un experimento mental: ¿qué cambiaría si mañana tuvieras un millón en tu cuenta? Sobre todo, el miedo se haría más silencioso – el miedo a decidir mal o a no estar a la altura. El capítulo muestra por qué muchas promesas de coaching pasan justo por alto esto y por qué el progreso real surge cuando aprendes a pensar y decidir con esa calma interior – sin el millón."
        },
        {
          "titel": "Prejuicios vs. experiencias",
          "url": "https://prophotoskills.com/t05_e04_vorurteile-vs-erfahrungen/",
          "text": "Los prejuicios se acumulan sin que nos demos cuenta – de talleres, foros y frases que alguien afirmó con suficiente fuerza. El capítulo muestra cómo te bloquean justo el camino que te haría avanzar y por qué tu propia experiencia es la mejor maestra: probar, salir del camino trazado y cometer tus propios errores."
        },
        {
          "titel": "Presta atención a tu entorno",
          "url": "https://prophotoskills.com/t03_l04_achte-auf-dein-umfeld/",
          "text": "La imagen del lobo solitario con cámara es romántica, pero falsa. Detrás de cada fuerza creativa hay personas que la sostienen, la exigen y a veces la salvan. El capítulo explica por qué en fotografía el entorno es un multiplicador: influye en lo rápido que aprendes, en cómo manejas la presión y las crisis y en de dónde viene tu inspiración – y por qué vale la pena elegirlo de forma consciente."
        }
      ],
      "fragen": [
        {
          "frage": "¿Qué significa «el 70 % del trabajo fotográfico ocurre antes del clic»?",
          "antwort": "La mayor parte del trabajo es invisible: concepto, briefing, planificación de la luz, equipo, localización y tu propia preparación mental. Quien solo empieza a pensar en el set pierde tiempo, energía y a menudo calidad de imagen."
        },
        {
          "frage": "¿Por qué un equipo compenetrado es más importante que un equipo técnico caro?",
          "antwort": "El ambiente, el flow y una modelo relajada surgen de las personas, no de la técnica. Un equipo que se conoce resuelve los problemas más rápido y crea la energía que hace posibles las imágenes fuertes."
        },
        {
          "frage": "¿Qué quiere decir «Eres el director, no solo el disparador»?",
          "antwort": "En el set todos te miran a ti. Diriges, mantienes unido al equipo y guías la energía – con claridad, concentración y presencia real."
        },
        {
          "frage": "¿Por qué la fotografía publicitaria es una inversión y no un gasto?",
          "antwort": "Una campaña se sostiene o se cae con sus imágenes. Las buenas imágenes generan confianza y reconocimiento y trabajan durante meses para una empresa – las imágenes débiles arruinan incluso la mejor idea."
        },
        {
          "frage": "¿Por qué los derechos de uso se cobran aparte?",
          "antwort": "Después de la sesión, las imágenes pertenecen a su autor. Dónde, durante cuánto tiempo y con qué alcance se usa una imagen determina su valor – por eso el alcance, el canal y la duración se licencian de forma justa."
        },
        {
          "frage": "¿Qué influencia tiene el entorno en el desarrollo de un fotógrafo?",
          "antwort": "El entorno filtra constantemente lo que te atreves a hacer. Quien está rodeado de personas que piensan en pequeño crece más despacio – un entorno que te apoya funciona, en cambio, como un seguro para la libertad creativa."
        }
      ]
    },
    "onlocation": {
      "titel": "Photoguide On Location",
      "kurz": "Photoguide On Location de ProPhotoSkills: viaje, localización, protección y equipo para sesiones en exteriores – índice, muestras de lectura y respuestas.",
      "worum": [
        "On Location es el photoguide para todo lo que ocurre fuera del estudio. Te acompaña desde la planificación del viaje, pasando por la elección y la lectura de localizaciones, hasta la pregunta de cómo protegerte a ti, a tu equipo y a tu material.",
        "El libro se divide en cuatro partes: Travel, Location, Insurance y Equipment. Cada parte combina listas de control prácticas con la actitud que necesitas para trabajar en ruta de forma flexible, preparada y segura."
      ],
      "fuer": "Fotógrafos que trabajan en exteriores, de viaje o a nivel internacional – o que tienen previsto hacerlo.",
      "inhalt": [
        {
          "gruppe": "Travel",
          "kapitel": [
            "Planificación de viajes para creativos",
            "Aeropuerto vs. tren vs. coche – qué medio de transporte tiene sentido y cuándo",
            "El equipaje de mano invisible – lo que siempre debe ir en tu bolsa",
            "Gestión del jet lag – energía a pesar del cambio horario",
            "Transporte del equipo – embalar con seguridad y declarar con inteligencia",
            "Visados y aduanas – cómo evitar el estrés en las fronteras",
            "Sesiones en el extranjero – códigos culturales y lo que se debe y no se debe hacer",
            "Travel light vs. full gear – cuándo viajar ligero y cuándo con todo",
            "Mirada creativa en ruta – imágenes que ya surgen durante el viaje",
            "Viajes en equipo – logística, costes y dinámica de grupo",
            "Hoteles y alojamientos – qué hace realmente buena una ubicación",
            "El viaje como fuente de inspiración – cómo los lugares nuevos agudizan tu mirada",
            "Planes de emergencia en ruta – cuando se cancelan vuelos o falta el equipaje",
            "Viajar de forma sostenible – green choices en la industria fotográfica",
            "Travel mindset – la serenidad como recurso más importante",
            "30 lugares icónicos que deberías visitar al menos una vez como fotógrafo"
          ]
        },
        {
          "gruppe": "Location",
          "kapitel": [
            "Fundamentos del location scouting – cómo encontrar los lugares adecuados",
            "Por qué los lugares tienen su propia luz – y por qué tienes que aprender a leerla",
            "Location y marca – cómo los espacios cuentan historias",
            "Interior vs. exterior – ventajas y desventajas para distintos trabajos",
            "Permisos y derechos – crear claridad jurídica",
            "Clima imprevisible – asegurar la sesión a pesar de la naturaleza",
            "Diseño de set vs. location real – qué tiene que ser real y qué se puede escenificar",
            "Aprender a leer lugares – cómo reconocer el potencial al instante",
            "Las locations como fuente de energía – por qué los espacios marcan el ambiente",
            "La location como factor de coste – presupuesto y alternativas",
            "Escenarios improvisados – salones, patios traseros, off-spaces",
            "Iconic places – lugares con fuerza simbólica y reconocibles",
            "Location y seguridad – equipo humano, material, infraestructura",
            "Contextos culturales – lo que significa un lugar antes de fotografiarlo",
            "Las locations como co-creadoras – cuando el espacio mismo forma parte de la historia"
          ]
        },
        {
          "gruppe": "Insurance",
          "kapitel": [
            "Por qué asegurarse no es un lujo, sino un requisito",
            "Seguro de equipo – protección para tus herramientas",
            "Seguro de viaje para creativos – trabajar en todo el mundo sin riesgo",
            "Responsabilidad civil en el set – cuando las personas o los lugares sufren daños",
            "Model release y contratos – crear seguridad jurídica",
            "Asegurar los derechos de uso – por qué los derechos valen tanto como la imagen",
            "Protección del presupuesto – cuando los proyectos se tuercen de forma inesperada",
            "Las copias de seguridad como seguro – duplicar los datos es obligatorio",
            "Planes de emergencia para la técnica – cámaras de repuesto y soluciones de alquiler",
            "La salud en el set – por qué tu propia protección también cuenta",
            "Seguro vs. confianza – dónde los contratos complementan las relaciones",
            "Trabajos internacionales – tener en cuenta las diferencias jurídicas",
            "Asegurarse en proyectos libres – protección a pesar de un presupuesto pequeño",
            "Protección de la reputación –",
            "la comunicación de crisis como parte de la protección",
            "Seguridad psicológica – cómo el plan B te da libertad"
          ]
        },
        {
          "gruppe": "Equipment",
          "kapitel": [
            "La cámara no lo es todo – mindset antes que megapíxeles",
            "Entender los objetivos – las distancias focales como lenguaje visual",
            "Formas de luz y herramientas – más que «iluminar»",
            "Estudios móviles – técnica para sets flexibles",
            "Must-have vs. nice-to-have – establecer prioridades",
            "Baterías, tarjetas de memoria y básicos – los héroes infravalorados",
            "Soluciones de transporte – cases, bolsas y sistemas de organización",
            "Probar el equipo – antes de que empiece el trabajo",
            "Estrategias de copia de seguridad – qué hacer cuando la técnica falla",
            "Rental vs. ownership – cuándo alquilar y cuándo comprar",
            "Técnica y equipo – quién tiene que manejar qué",
            "Organización del set – cables, trípodes, seguridad",
            "Innovaciones y tendencias – técnica con sentido en lugar de hype",
            "Setups minimalistas – conseguir mucho con poco",
            "El equipo como tarjeta de visita – cómo tu manejo muestra profesionalidad"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "El equipaje de mano invisible – lo que siempre debe ir en tu bolsa",
          "absaetze": [
            "Cuando los creativos hablan de «equipaje de mano», suelen referirse a: cámara, portátil, objetivos. Pero en realidad hay otro equipaje de mano, invisible pero decisivo. Cosas que no se pueden pesar ni meter en las normas de aduanas. Actitud. Rutinas. Rituales. Pequeños ayudantes que, en conjunto, deciden si llegas con seguridad o ya pareces perdido en la puerta de embarque.",
            "Este capítulo está dedicado precisamente a ese equipaje de mano invisible. Es una mezcla de lo práctico, lo psicológico y lo filosófico. Porque al final no solo cuenta lo que llevas contigo, sino cómo viajas: preparado, claro, resiliente."
          ]
        },
        {
          "kapitel": "Por qué los lugares tienen su propia luz – y por qué tienes que aprender a leerla",
          "absaetze": [
            "La luz no es un recurso neutral. No es una herramienta que simplemente «añades». Cada lugar trae su propia luz, marcada por la arquitectura, la geografía, los materiales, las aberturas, las superficies y el entorno.",
            "Quien no reconoce esa luz lucha contra ella. Quien la entiende trabaja con el lugar, no contra él."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "30 lugares icónicos que deberías haber visitado como fotógrafo",
          "url": "https://prophotoskills.com/t11_e02_30-ikonische-orte-die-du-als-fotograf-einmal-bereist-haben-solltest/",
          "text": "No es una lista de deseos para Instagram, sino 30 lugares como campos de entrenamiento para tu mirada – de Islandia a la Toscana, Venecia y las Lofoten, hasta Marruecos, Jordania y las Rocosas canadienses. Para cada lugar, el capítulo muestra lo que te enseña: leer una luz que cambia cada minuto, líneas y timing, el silencio como motivo, escala y profundidad o controlar el caos."
        }
      ],
      "fragen": [
        {
          "frage": "¿Qué debe llevar siempre un fotógrafo en el equipaje de mano?",
          "antwort": "Todo lo que es insustituible: cuerpo de cámara, el objetivo más importante, portátil, discos duros, tarjetas de memoria y baterías. Prepáralo de forma que, en caso de emergencia, pudieras trabajar incluso sin el equipaje facturado."
        },
        {
          "frage": "¿Qué deben tener en cuenta los fotógrafos con los visados y la aduana?",
          "antwort": "Un visado de turista no permite trabajo remunerado, ni siquiera para un día de sesión. Los visados de trabajo suelen necesitar semanas de antelación, y en la aduana ayuda una lista del equipo con números de serie y valores."
        },
        {
          "frage": "¿Por qué cada lugar tiene su propia luz?",
          "antwort": "La hora del día, la orientación, los reflejos, la arquitectura y la vegetación dan forma a la luz de una localización. Quien visita los lugares a distintas horas y lee su potencial de luz decide mejor y monta más rápido."
        },
        {
          "frage": "¿Necesito un permiso para una sesión en lugares públicos?",
          "antwort": "A menudo, sí. Que un lugar sea de acceso público no significa que se permitan las tomas comerciales. Los profesionales separan acceso, toma y explotación, y aclaran los permisos por escrito."
        },
        {
          "frage": "¿Qué seguros necesitan realmente los fotógrafos?",
          "antwort": "Sobre todo tres: un seguro de responsabilidad civil profesional, un seguro del equipo y, para trabajos en el extranjero, un seguro de viaje adecuado."
        },
        {
          "frage": "¿Un equipo mejor hace mejores fotos?",
          "antwort": "No automáticamente. La técnica refuerza la actitud, no la sustituye. Lo decisivo es saber por qué usas una herramienta."
        }
      ]
    },
    "beginner": {
      "titel": "Photoguide Beginner",
      "kurz": "Photoguide Beginner de ProPhotoSkills: exposición, composición, luz y posprocesado explicados con claridad – índice, muestras de lectura y respuestas. Gratis con una cuenta.",
      "worum": [
        "Beginner es tu entrada en la fotografía – no un manual árido, sino un compañero que te lleva de unas bases sólidas a una seguridad real. En diez capítulos trata la cámara, la exposición, la composición, el retrato, el paisaje, la noche, la luz, el posprocesado y tu portafolio.",
        "El objetivo no es aprender reglas de memoria, sino entender por qué funcionan las imágenes y cómo se toman las buenas decisiones. En PPS Books lees Beginner gratis – solo necesitas una cuenta."
      ],
      "fuer": "Principiantes y todos los que quieren poner en orden sus bases.",
      "inhalt": [
        {
          "gruppe": null,
          "kapitel": [
            "Capítulo 1: Introducción a la fotografía profesional",
            "Capítulo 2: Elegir la cámara adecuada",
            "Capítulo 3: Fundamentos de la exposición",
            "Capítulo 4: La composición perfecta",
            "Capítulo 5: Dominar la fotografía de retrato",
            "Capítulo 6: Comprender la fotografía de paisaje",
            "Capítulo 7: El arte de la fotografía nocturna",
            "Capítulo 8: Técnicas de iluminación avanzadas",
            "Capítulo 9: Posproducción y optimización de imágenes",
            "Capítulo 10: Presentación y creación de un portafolio"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "Capítulo 3: Fundamentos de la exposición",
          "absaetze": [
            "El arte de la exposición está en el corazón de la fotografía. Es la llave que abre el camino hacia una foto correctamente expuesta. La exposición determina lo clara u oscura que es una imagen y cuántos detalles son visibles en las zonas claras y oscuras. Para dominarla, se necesita un conocimiento preciso de los componentes del «triángulo de exposición»: diafragma, velocidad de obturación y sensibilidad ISO.",
            "El diafragma, medido en números f, controla la cantidad de luz que pasa a través del objetivo hasta el sensor. Un número f bajo (p. ej. f/1.8) deja entrar más luz y es ideal para fotografiar con poca luz o para crear un fondo desenfocado, algo que a menudo se busca en los retratos. Un número f alto (p. ej. f/16) reduce la abertura, lo que se usa en fotos de paisaje con mayor profundidad de campo."
          ]
        },
        {
          "kapitel": "Capítulo 4: La composición perfecta",
          "absaetze": [
            "El arte de la composición es el corazón de la fotografía. Es un andamiaje invisible que guía la atención del espectador y refuerza el impacto visual de una foto. Una composición bien pensada no solo resulta estéticamente atractiva, sino que también ayuda a contar una historia o a transmitir un ambiente determinado.",
            "La proporción áurea es una fórmula matemática muy extendida en el arte y la arquitectura para crear proporciones armoniosas. En fotografía, a menudo representa la relación ideal en la composición. La regla de los tercios es una aproximación práctica a ella y propone dividir la imagen con dos líneas horizontales y dos verticales para obtener nueve partes iguales. Coloca los elementos importantes a lo largo de estas líneas o en sus intersecciones para que la imagen resulte dinámica y equilibrada."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "Prejuicios vs. experiencias",
          "url": "https://prophotoskills.com/t05_e04_vorurteile-vs-erfahrungen/",
          "text": "Sobre todo al principio se acumulan muchas reglas y opiniones – de vídeos, foros y talleres. Este capítulo gratuito del Photoguide Next Level muestra por qué tu propia experiencia cuenta más que cualquier prejuicio: probar, seguir tu propio camino y aprender de tus propios errores."
        },
        {
          "titel": "Todos esos coaches …",
          "url": "https://prophotoskills.com/t05_e03_all_die_coaches/",
          "text": "Quien empieza se encuentra pronto con promesas de coaching y planes paso a paso. Este capítulo gratuito del Photoguide Next Level explica por qué el progreso real nace de la calma interior y de tu propio pensamiento – y no de la siguiente receta."
        }
      ],
      "fragen": [
        {
          "frage": "¿Qué es el triángulo de exposición?",
          "antwort": "Diafragma, velocidad de obturación y sensibilidad ISO. Juntos determinan lo luminosa que será una imagen y cuánto detalle queda en las luces y en las sombras."
        },
        {
          "frage": "¿Cuándo uso un número f pequeño y cuándo uno grande?",
          "antwort": "Un número f pequeño como f/1.8 deja entrar mucha luz y suaviza el fondo – bueno para retratos y poca luz. Uno grande como f/16 da mucha profundidad de campo, por ejemplo en el paisaje."
        },
        {
          "frage": "¿Qué velocidad de obturación congela el movimiento?",
          "antwort": "Las velocidades rápidas como 1/1000 de segundo congelan el movimiento, por ejemplo en el deporte. Las más lentas, a partir de 1/30 de segundo aproximadamente, difuminan el movimiento – para agua que fluye o light painting."
        },
        {
          "frage": "¿Qué es la regla de los tercios?",
          "antwort": "Divides la imagen en nueve campos con dos líneas horizontales y dos verticales y colocas los elementos importantes sobre las líneas o sus intersecciones. Así la imagen resulta equilibrada y viva."
        }
      ]
    }
  },
  "pt": {
    "nextlevel": {
      "titel": "Photoguide Next Level",
      "kurz": "Photoguide Next Level da ProPhotoSkills: conhecimento, atitude e estrutura para fotógrafos que querem crescer profissionalmente – índice, amostras de leitura e respostas.",
      "worum": [
        "Next Level é o photoguide para quem já fotografa com segurança e quer dar o passo rumo à fotografia publicitária profissional. Ele não explica menus nem presets, mas o que faz a diferença no set e na conversa com os clientes.",
        "No centro está o trabalho antes do primeiro clique: preparação, equipe, comunicação, condução do set, negociação de preços e direitos de uso. Somam-se capítulos sobre força física e mental, sobre a história da arte como ferramenta e sobre como os clientes enxergam você."
      ],
      "fuer": "Fotógrafos experientes que querem passar de trabalhos avulsos a parcerias e defender o próprio valor com segurança.",
      "inhalt": [
        {
          "gruppe": null,
          "kapitel": [
            "Por que Gala e Bunte são taaaão importantes...",
            "Cabelo & maquiagem – hora da fofoca é hora da confiança",
            "A segunda ou terceira modelo fica sentada esperando",
            "70% do trabalho fotográfico? Acontecem ANTES do primeiro clique.",
            "O invisível antes do clique",
            "Por que pessoas bem entrosadas valem mais do que qualquer lente",
            "“Houston, temos um problema...”",
            "Por que mudanças espontâneas são perigosas",
            "Por que essas situações são mais frequentes do que se imagina",
            "Dicas extras para a máxima segurança",
            "Preste atenção no seu entorno",
            "Você também gosta de assistir Quem Quer Ser um Milionário?",
            "Ensaio de produto com uma equipe de agência – acendendo a criatividade",
            "O que jogadores de futebol e fotógrafos têm em comum?",
            "Desenvolvimento – o seu gatilho invisível para o próximo nível",
            "Todos esses coaches ....",
            "Preconceitos vs. experiências",
            "Interesse e curiosidade",
            "Habilidades técnicas",
            "Criatividade e visão",
            "Composição e construção da imagem",
            "Paciência",
            "Resistência",
            "Paixão e dedicação",
            "Condução de pessoas e comunicação",
            "Trabalho em equipe",
            "Gestão do tempo e organização",
            "Abertura à crítica e desenvolvimento",
            "Foco nos detalhes",
            "Concentração e presença",
            "Conhecimento de luz e sombra",
            "Venda e autoapresentação",
            "Segurança e qualidade de liderança",
            "Contar histórias",
            "Conhecimento de história da arte",
            "Por que correr te ajuda a fotografar melhor...",
            "Você é o diretor, não só o disparador",
            "Você precisa ser rápido – física E mentalmente",
            "Energia do set = energia da equipe",
            "Força mental = resistência ao estresse",
            "Você trabalha em situações extremas – tempo, clima, locações",
            "Concentração pela clareza física",
            "Postura = impacto",
            "Leonardo da Vinci, importante para a fotografia?",
            "Condução da luz – claro-escuro",
            "Estudo da anatomia – compreensão real do corpo",
            "Composição & proporção áurea",
            "Óptica & visão – a câmera escura",
            "A expressão – o efeito Mona Lisa",
            "Abordagem multidisciplinar = fotografia moderna",
            "Ler luz e sombra – como um drama no palco",
            "Observar em vez de julgar",
            "Entender a arquitetura como cenário",
            "Tudo está conectado – pensamento interdisciplinar",
            "Entender o movimento",
            "A curiosidade como motor",
            "Emoção acima da perfeição",
            "O erro como parte do processo",
            "Paciência e visão de longo prazo",
            "Fotógrafos criaram a rede social....",
            "O cenário ao lado",
            "O time de professores no projeto livre”",
            "Por que a fotografia profissional vale o seu preço",
            "Por que a fotografia profissional vale o seu preço -2-",
            "Fotografia publicitária profissional – um ofício que não se reconhece no visor da câmera",
            "Começa com o objetivo – não com a câmera",
            "A técnica custa – mas o que conta é o resultado",
            "O preço não é o problema – o mal-entendido é",
            "Direitos custam – porque as imagens são valiosas",
            "Colaboração em vez de execução",
            "A técnica gera qualidade – mas a atitude faz a diferença",
            "Conclusão: quem compra barato não compra duas vezes – perde impacto",
            "O olhar do cliente"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "70% do trabalho fotográfico? Acontecem ANTES do primeiro clique.",
          "absaetze": [
            "Talvez você pense que um fotógrafo simplesmente guarda a câmera, vai até o set, aperta o disparador algumas vezes – e voilà, a imagem perfeita está feita. Mas isso seria mais ou menos como dizer que um show deu certo só porque alguém subiu ao palco – sem ensaio, sem passagem de som, sem frio na barriga. Na verdade, o decisivo acontece muito antes. Porque cerca de 70% do trabalho de um job fotográfico profissional não acontece no set, mas na preparação intensa que vem antes. E isso envolve muito mais do que só arrumar o equipamento.",
            "Uma boa preparação não é um “nice to have”, é a base. É o lugar onde as ideias ganham forma, as soluções se desenvolvem e os possíveis problemas já são simulados mentalmente. É o esforço silencioso nos bastidores que garante que tudo corra bem no dia do ensaio – ou, se não correr, que você contorne com segurança. Esses 70% te desafiam: mental, física, técnica e organizacionalmente – e às vezes até emocionalmente. Eles são o trabalho de verdade."
          ]
        },
        {
          "kapitel": "Por que a fotografia profissional vale o seu preço",
          "absaetze": [
            "Na enxurrada digital de imagens de hoje, não é o visual mais bonito que decide, mas o estrategicamente mais eficaz. A fotografia publicitária não é simplesmente uma imagem bonita. É um instrumento – preciso, planejado, alinhado à marca. Nisso, o fotógrafo profissional não é só um artesão, mas alguém que pensa junto, que entende a marca, um parceiro estratégico. E é exatamente por isso que esse serviço tem o seu preço.",
            "Quem já trabalhou num departamento de marketing sabe: uma campanha vive ou morre pelas imagens. Elas são a primeira coisa que se percebe. Transmitem valores, emoções, identidade. Uma linguagem visual fraca pode arruinar até a melhor ideia. Boas imagens, por outro lado, criam confiança, aumentam o tempo de permanência, reforçam o reconhecimento. Isso não é um “nice to have” – é um motor de conversão."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "Desenvolvimento – o seu gatilho invisível para o próximo nível",
          "url": "https://prophotoskills.com/t05_e02_entwicklung-dein-unsichtbarer-next-level-trigger/",
          "text": "Em algum momento tudo funciona: os clientes contratam você, o estilo está definido, a rotina sustenta – e mesmo assim você sente que dá para ir além. O capítulo descreve esse ponto e a decisão consciente de realmente se desenvolver. Ele mostra com honestidade os dois lados: o que você ganha (uma personalidade mais forte, um pensamento fotográfico mais afiado, mais valor e independência das tendências) e o que isso custa (tempo, energia, velhos hábitos e às vezes pessoas que não acompanham)."
        },
        {
          "titel": "O olhar do cliente – quando a confiança de repente vira orçamento",
          "url": "https://prophotoskills.com/t09_l09_kunden-blick-wenn-aus-vertrauen-ploetzlich-budget-wird/",
          "text": "Assim que grandes orçamentos entram em jogo, os clientes avaliam você – muito antes de o orçamento ser enviado. O capítulo olha pelos olhos deles: eles não compram imagens, mas segurança, consistência, estrutura, liderança e calma. É avaliado como você se comunica, pensa, se prepara, calcula e lidera – no set e também depois da entrega. No fim vem a mudança de prestador de serviço para parceiro."
        },
        {
          "titel": "Todos esses coaches …",
          "url": "https://prophotoskills.com/t05_e03_all_die_coaches/",
          "text": "Um experimento mental: o que mudaria se amanhã houvesse um milhão na sua conta? Sobretudo, o medo ficaria mais baixo – o medo de decidir errado ou de não ser suficiente. O capítulo mostra por que muitas promessas de coaching passam justamente ao largo disso e por que o progresso real surge quando você aprende a pensar e decidir com essa calma interior – sem o milhão."
        },
        {
          "titel": "Preconceitos vs. experiências",
          "url": "https://prophotoskills.com/t05_e04_vorurteile-vs-erfahrungen/",
          "text": "Os preconceitos se acumulam sem que a gente perceba – vindos de workshops, fóruns e frases que alguém afirmou alto o bastante. O capítulo mostra como eles bloqueiam justamente o caminho que levaria você adiante e por que a sua própria experiência é a professora mais forte: experimentar, sair do caminho traçado e cometer os próprios erros."
        },
        {
          "titel": "Preste atenção ao seu ambiente",
          "url": "https://prophotoskills.com/t03_l04_achte-auf-dein-umfeld/",
          "text": "A imagem do lobo solitário com a câmera é romântica, mas errada. Por trás de toda força criativa há pessoas que a sustentam, desafiam e às vezes salvam. O capítulo explica por que, na fotografia, o ambiente é um multiplicador: ele influencia a rapidez com que você aprende, como lida com pressão e crises e de onde vem a sua inspiração – e por que vale a pena escolhê-lo de forma consciente."
        }
      ],
      "fragen": [
        {
          "frage": "O que significa “70 % do trabalho fotográfico acontece antes do clique”?",
          "antwort": "A maior parte do trabalho é invisível: conceito, briefing, planejamento da luz, equipe, locação e a sua própria preparação mental. Quem só começa a pensar no set perde tempo, energia e muitas vezes qualidade de imagem."
        },
        {
          "frage": "Por que uma equipe entrosada é mais importante do que equipamento caro?",
          "antwort": "Atmosfera, fluxo e uma modelo relaxada nascem das pessoas, não da técnica. Uma equipe que se conhece resolve problemas mais rápido e cria a energia que torna possíveis imagens fortes."
        },
        {
          "frage": "O que quer dizer “Você é o diretor, não apenas quem aperta o disparador”?",
          "antwort": "No set, todos olham para você. Você conduz, mantém a equipe unida e direciona a energia – com clareza, concentração e presença verdadeira."
        },
        {
          "frage": "Por que a fotografia publicitária é um investimento e não um custo?",
          "antwort": "Uma campanha se sustenta ou cai com as suas imagens. Boas imagens geram confiança e reconhecimento e trabalham por meses para uma empresa – imagens fracas arruínam até a melhor ideia."
        },
        {
          "frage": "Por que os direitos de uso custam à parte?",
          "antwort": "Depois da sessão, as imagens pertencem ao seu autor. Onde, por quanto tempo e com que alcance uma imagem é usada determina o seu valor – por isso alcance, canal e duração são licenciados de forma justa."
        },
        {
          "frage": "Que influência o ambiente tem no desenvolvimento de um fotógrafo?",
          "antwort": "O ambiente filtra o tempo todo o que você se permite ousar. Quem está cercado de pessoas que pensam pequeno cresce mais devagar – um ambiente que apoia funciona, ao contrário, como um seguro para a liberdade criativa."
        }
      ]
    },
    "onlocation": {
      "titel": "Photoguide On Location",
      "kurz": "Photoguide On Location da ProPhotoSkills: viagem, locação, proteção e equipamento para sessões no local – índice, amostras de leitura e respostas.",
      "worum": [
        "On Location é o photoguide para tudo o que acontece fora do estúdio. Ele acompanha você do planejamento da viagem, passando pela escolha e pela leitura das locações, até a questão de como proteger você, a sua equipe e o seu equipamento.",
        "O livro é dividido em quatro partes: Travel, Location, Insurance e Equipment. Cada parte une checklists práticos à atitude de que você precisa para trabalhar em viagem com flexibilidade, preparo e segurança."
      ],
      "fuer": "Fotógrafos que trabalham em locação, em viagem ou internacionalmente – ou que pretendem fazer isso.",
      "inhalt": [
        {
          "gruppe": "Travel",
          "kapitel": [
            "Planejamento de viagem para criativos",
            "Avião vs. trem vs. carro – qual meio de transporte faz sentido e quando",
            "A bagagem de mão invisível – o que sempre precisa estar na sua bolsa",
            "Gestão do jet lag – energia apesar do fuso horário",
            "Transporte de equipamento – embalar com segurança e declarar com inteligência",
            "Vistos e alfândega – como evitar estresse nas fronteiras",
            "Sessões no exterior – códigos culturais e do’s & don’ts",
            "Travel light vs. full gear – quando viajar com o mínimo, quando com o máximo",
            "Olhar criativo em trânsito – imagens que já surgem durante a viagem",
            "Viagens em equipe – logística, custos e dinâmica de grupo",
            "Hotéis e hospedagens – o que realmente faz uma boa localização",
            "Viagem como fonte de inspiração – como novos lugares afiam o seu olhar",
            "Planos de emergência em trânsito – quando voos são cancelados ou a bagagem some",
            "Viajar de forma sustentável – green choices na indústria da fotografia",
            "Travel mindset – a serenidade como recurso mais importante",
            "30 lugares icônicos que você deveria visitar pelo menos uma vez como fotógrafo"
          ]
        },
        {
          "gruppe": "Location",
          "kapitel": [
            "Básico de location scouting – como encontrar os lugares certos",
            "Por que os lugares têm sua própria luz – e por que você precisa aprender a lê-la",
            "Location e marca – como os espaços contam histórias",
            "Indoor vs. outdoor – vantagens e desvantagens para diferentes trabalhos",
            "Autorizações e direitos – criar clareza jurídica",
            "Clima imprevisível – garantir a sessão apesar da natureza",
            "Set design vs. location real – o que precisa ser real, o que pode ser encenado",
            "Aprender a ler lugares – como reconhecer o potencial na hora",
            "Locations como fontes de energia – por que os espaços marcam o clima",
            "A location como fator de custo – orçamento e alternativas",
            "Cenários improvisados – salas de estar, quintais, off-spaces",
            "Iconic places – lugares com força simbólica e reconhecimento",
            "Location e segurança – equipe, equipamento, infraestrutura",
            "Contextos culturais – o que um lugar significa antes de você fotografá-lo",
            "Locations como co-creator – quando o próprio espaço vira parte da história"
          ]
        },
        {
          "gruppe": "Insurance",
          "kapitel": [
            "Por que se proteger não é luxo – mas condição",
            "Seguro de equipamento – proteção para as suas ferramentas",
            "Seguro viagem para criativos – trabalhar no mundo todo sem riscos",
            "Responsabilidade civil no set – quando pessoas ou lugares sofrem danos",
            "Model release e contratos – criar segurança jurídica",
            "Proteger os direitos de uso – por que os direitos valem tanto quanto a imagem",
            "Proteção do orçamento – quando os projetos desandam de repente",
            "Backups como seguro – dados em dobro são obrigatórios",
            "Planos de emergência para a técnica – câmeras reserva e soluções de aluguel",
            "Saúde no set – por que a sua proteção também conta",
            "Seguro vs. confiança – onde os contratos complementam as relações",
            "Trabalhos internacionais – atenção às diferenças jurídicas",
            "Proteção para projetos livres – segurança mesmo com orçamento pequeno",
            "Proteção da reputação –",
            "comunicação de crise como parte da proteção",
            "Segurança psicológica – como o plano B dá liberdade a você"
          ]
        },
        {
          "gruppe": "Equipment",
          "kapitel": [
            "A câmera não é tudo – mindset antes de megapixels",
            "Entender as lentes – distâncias focais como linguagem visual",
            "Formas de luz e ferramentas – muito mais do que “clarear”",
            "Estúdios móveis – técnica para sets flexíveis",
            "Must-have vs. nice-to-have – definir prioridades",
            "Baterias, cartões de memória & básicos – os heróis subestimados",
            "Soluções de transporte – cases, bags & sistemas de organização",
            "Testar o equipamento – antes de o trabalho começar",
            "Estratégias de backup – o que fazer quando a técnica falha",
            "Rental vs. ownership – quando alugar, quando comprar",
            "Técnica & equipe – quem precisa operar o quê",
            "Organização do set – cabos, tripés, segurança",
            "Inovações & tendências – técnica com sentido em vez de hype",
            "Setups minimalistas – alcançar muito com pouco",
            "O equipamento como cartão de visita – como o seu modo de usar mostra profissionalismo"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "A bagagem de mão invisível – o que sempre precisa estar na sua bolsa",
          "absaetze": [
            "Quando os criativos falam de “bagagem de mão”, muitas vezes pensam em: câmera, notebook, lentes. Mas, na verdade, existe outra bagagem de mão – invisível, mas decisiva. Coisas que não dá para pesar nem encaixar em regras alfandegárias. Atitude. Rotinas. Rituais. Pequenos ajudantes que, somados, decidem se você chega seguro ou já parece perdido no portão de embarque.",
            "Este capítulo é dedicado justamente a essa bagagem de mão invisível. É uma mistura de prática, psicologia e filosofia. Porque, no fim, não conta só o que você leva – mas como você viaja: preparado, claro, resiliente."
          ]
        },
        {
          "kapitel": "Por que os lugares têm sua própria luz – e por que você precisa aprender a lê-la",
          "absaetze": [
            "A luz não é um recurso neutro. Não é uma ferramenta que você simplesmente “acrescenta”. Cada lugar traz a sua própria luz – marcada pela arquitetura, pela geografia, pelos materiais, pelas aberturas, pelas superfícies e pelo entorno.",
            "Quem não reconhece essa luz luta contra ela. Quem a entende trabalha com o lugar – não contra ele."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "30 lugares icônicos que você deveria conhecer como fotógrafo",
          "url": "https://prophotoskills.com/t11_e02_30-ikonische-orte-die-du-als-fotograf-einmal-bereist-haben-solltest/",
          "text": "Não é uma bucket list para o Instagram, mas 30 lugares como campos de treino para o seu olhar – da Islândia à Toscana, Veneza e as Lofoten, até o Marrocos, a Jordânia e as Montanhas Rochosas canadenses. Para cada lugar, o capítulo mostra o que ele ensina: ler uma luz que muda a cada minuto, linhas e timing, o silêncio como tema, escala e profundidade ou controlar o caos."
        }
      ],
      "fragen": [
        {
          "frage": "O que nunca pode faltar na bagagem de mão de um fotógrafo?",
          "antwort": "Tudo o que é insubstituível: corpo da câmera, a lente mais importante, notebook, HDs, cartões de memória e baterias. Arrume a mala de modo que, numa emergência, você consiga trabalhar mesmo sem a bagagem despachada."
        },
        {
          "frage": "O que os fotógrafos precisam observar em vistos e alfândega?",
          "antwort": "Um visto de turista não permite trabalho remunerado, nem mesmo para um único dia de sessão. Vistos de trabalho costumam exigir semanas de antecedência, e na alfândega ajuda ter uma lista do equipamento com números de série e valores."
        },
        {
          "frage": "Por que cada lugar tem a sua própria luz?",
          "antwort": "Horário, orientação, reflexos, arquitetura e vegetação moldam a luz de uma locação. Quem visita os lugares em horários diferentes e lê o seu potencial de luz decide melhor e monta mais rápido."
        },
        {
          "frage": "Preciso de autorização para uma sessão em locais públicos?",
          "antwort": "Muitas vezes, sim. Acesso público não significa que fotos comerciais sejam permitidas. Os profissionais separam acesso, captação e uso e resolvem as autorizações por escrito."
        },
        {
          "frage": "De quais seguros os fotógrafos realmente precisam?",
          "antwort": "Principalmente de três: um seguro de responsabilidade civil profissional, um seguro do equipamento e, para trabalhos no exterior, um seguro-viagem adequado."
        },
        {
          "frage": "Equipamento melhor faz fotos melhores?",
          "antwort": "Não automaticamente. A técnica reforça a atitude, não a substitui. O que importa é saber por que você usa uma ferramenta."
        }
      ]
    },
    "beginner": {
      "titel": "Photoguide Beginner",
      "kurz": "Photoguide Beginner da ProPhotoSkills: exposição, composição, luz e pós-produção explicadas com clareza – índice, amostras de leitura e respostas. Grátis com uma conta.",
      "worum": [
        "Beginner é a sua porta de entrada na fotografia – não um manual árido, mas um companheiro que leva você de bases sólidas a uma segurança real. Em dez capítulos, trata da câmera, exposição, composição, retrato, paisagem, noite, luz, pós-produção e do seu portfólio.",
        "O objetivo não é decorar regras, mas entender por que as imagens funcionam e como surgem as boas decisões. No PPS Books você lê o Beginner de graça – só precisa de uma conta."
      ],
      "fuer": "Iniciantes e todos que querem organizar bem as suas bases.",
      "inhalt": [
        {
          "gruppe": null,
          "kapitel": [
            "Capítulo 1: Introdução à fotografia profissional",
            "Capítulo 2: Escolhendo a câmera certa",
            "Capítulo 3: Fundamentos da exposição",
            "Capítulo 4: A composição perfeita",
            "Capítulo 5: Dominando a fotografia de retrato",
            "Capítulo 6: Entendendo a fotografia de paisagem",
            "Capítulo 7: A arte da fotografia noturna",
            "Capítulo 8: Técnicas avançadas de iluminação",
            "Capítulo 9: Pós-produção e otimização de imagens",
            "Capítulo 10: Apresentação e criação de portfólio"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "Capítulo 3: Fundamentos da exposição",
          "absaetze": [
            "A arte da exposição está no coração da fotografia. Ela é a chave que abre o caminho para uma foto corretamente exposta. A exposição determina o quanto uma imagem é clara ou escura e quantos detalhes ficam visíveis nas áreas claras e escuras. Para dominá-la, é preciso entender com precisão os componentes do «triângulo de exposição»: abertura, velocidade do obturador e sensibilidade ISO.",
            "A abertura, medida em números f, controla a quantidade de luz que passa pela lente até o sensor. Um número f baixo (por ex. f/1.8) deixa entrar mais luz e é ideal para fotografar com pouca luz ou para criar um fundo desfocado, muitas vezes desejado em retratos. Um número f alto (por ex. f/16) reduz a abertura, o que é usado em fotos de paisagem com maior profundidade de campo."
          ]
        },
        {
          "kapitel": "Capítulo 4: A composição perfeita",
          "absaetze": [
            "A arte da composição é o coração da fotografia. Ela é uma estrutura invisível que direciona a atenção do observador e reforça o impacto visual de uma foto. Uma composição bem pensada não é apenas esteticamente agradável, mas também ajuda a contar uma história ou a transmitir um clima específico.",
            "A proporção áurea é uma fórmula matemática muito usada na arte e na arquitetura para criar proporções harmoniosas. Na fotografia, ela muitas vezes representa a relação ideal na composição. A regra dos terços é uma aproximação prática dela e sugere dividir a imagem com duas linhas horizontais e duas verticais para obter nove partes iguais. Posicione os elementos importantes ao longo dessas linhas ou nos seus pontos de interseção para deixar a imagem dinâmica e equilibrada."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "Preconceitos vs. experiências",
          "url": "https://prophotoskills.com/t05_e04_vorurteile-vs-erfahrungen/",
          "text": "Principalmente no início, a gente junta muitas regras e opiniões – de vídeos, fóruns e workshops. Este capítulo gratuito do Photoguide Next Level mostra por que a sua própria experiência vale mais do que qualquer preconceito: experimentar, seguir o próprio caminho e aprender com os próprios erros."
        },
        {
          "titel": "Todos esses coaches …",
          "url": "https://prophotoskills.com/t05_e03_all_die_coaches/",
          "text": "Quem está começando logo esbarra em promessas de coaching e planos passo a passo. Este capítulo gratuito do Photoguide Next Level explica por que o progresso real nasce da calma interior e do seu próprio pensamento – e não da próxima receta pronta."
        }
      ],
      "fragen": [
        {
          "frage": "O que é o triângulo de exposição?",
          "antwort": "Abertura, velocidade do obturador e sensibilidade ISO. Juntos, eles determinam o quanto uma imagem fica clara e quanto detalhe permanece nas altas luzes e nas sombras."
        },
        {
          "frage": "Quando uso um número f pequeno e quando um grande?",
          "antwort": "Um número f pequeno como f/1.8 deixa entrar muita luz e suaviza o fundo – bom para retratos e pouca luz. Um grande como f/16 dá muita profundidade de campo, por exemplo na paisagem."
        },
        {
          "frage": "Qual velocidade do obturador congela o movimento?",
          "antwort": "Velocidades rápidas como 1/1000 de segundo congelam o movimento, por exemplo no esporte. Velocidades mais lentas, a partir de cerca de 1/30 de segundo, borram o movimento – para água correndo ou light painting."
        },
        {
          "frage": "O que é a regra dos terços?",
          "antwort": "Você divide a imagem em nove campos com duas linhas horizontais e duas verticais e posiciona os elementos importantes sobre as linhas ou nos seus cruzamentos. Assim a imagem fica equilibrada e viva."
        }
      ]
    }
  },
  "el": {
    "nextlevel": {
      "titel": "Photoguide Next Level",
      "kurz": "Photoguide Next Level της ProPhotoSkills: γνώση, στάση και δομή για φωτογράφους που θέλουν να εξελιχθούν επαγγελματικά – περιεχόμενα, αποσπάσματα και απαντήσεις.",
      "worum": [
        "Το Next Level είναι ο photoguide για όσους ήδη φωτογραφίζουν σταθερά και θέλουν να κάνουν το βήμα προς την επαγγελματική διαφημιστική φωτογραφία. Δεν εξηγεί μενού και presets, αλλά όσα κάνουν τη διαφορά στο σετ και στη συζήτηση με τους πελάτες.",
        "Στο επίκεντρο βρίσκεται η δουλειά πριν από το πρώτο κλικ: προετοιμασία, ομάδα, επικοινωνία, καθοδήγηση στο σετ, διαπραγμάτευση τιμών και δικαιώματα χρήσης. Προστίθενται κεφάλαια για τη σωματική και ψυχική δύναμη, για την ιστορία της τέχνης ως εργαλείο και για το πώς σε βλέπουν οι πελάτες."
      ],
      "fuer": "Έμπειροι φωτογράφοι που θέλουν να περάσουν από τις αναθέσεις στις συνεργασίες και να υποστηρίζουν με σιγουριά την αξία τους.",
      "inhalt": [
        {
          "gruppe": null,
          "kapitel": [
            "Γιατί τα Gala και Bunte είναι τόοοοσο σημαντικά...",
            "Μαλλιά και μακιγιάζ – η ώρα του κουτσομπολιού είναι ώρα εμπιστοσύνης",
            "Το δεύτερο ή το τρίτο μοντέλο κάθεται και περιμένει",
            "Το 70 % της φωτογραφικής δουλειάς; Συμβαίνει ΠΡΙΝ από το πρώτο κλικ.",
            "Το αόρατο πριν από το κλικ",
            "Γιατί οι δεμένοι άνθρωποι αξίζουν περισσότερο από κάθε φακό",
            "«Χιούστον, έχουμε πρόβλημα...»",
            "Γιατί οι αυθόρμητες αλλαγές είναι επικίνδυνες",
            "Γιατί τέτοιες καταστάσεις συμβαίνουν πιο συχνά απ’ όσο νομίζεις",
            "Bonus συμβουλές για απόλυτη σιγουριά",
            "Πρόσεξε το περιβάλλον σου",
            "Βλέπεις κι εσύ ευχαρίστως το «Ποιος θέλει να γίνει εκατομμυριούχος;»",
            "Φωτογράφιση προϊόντος με την ομάδα του πρακτορείου – άναψε τη δημιουργικότητα",
            "Τι κοινό έχουν οι ποδοσφαιριστές και οι φωτογράφοι;",
            "Εξέλιξη - ο αόρατος Next-Level trigger σου",
            "Όλοι αυτοί οι coaches ....",
            "Προκαταλήψεις vs. εμπειρίες",
            "Ενδιαφέρον και περιέργεια",
            "Τεχνικές δεξιότητες",
            "Δημιουργικότητα και όραμα",
            "Σύνθεση και διαμόρφωση της εικόνας",
            "Υπομονή",
            "Αντοχή",
            "Πάθος και αφοσίωση",
            "Καθοδήγηση ανθρώπων και επικοινωνία",
            "Ομαδική δουλειά",
            "Διαχείριση χρόνου και οργάνωση",
            "Αποδοχή κριτικής και εξέλιξη",
            "Εστίαση στις λεπτομέρειες",
            "Συγκέντρωση και παρουσία",
            "Γνώση για το φως και τη σκιά",
            "Πώληση και παρουσίαση του εαυτού σου",
            "Σιγουριά και ηγετικές ικανότητες",
            "Αφήγηση ιστοριών",
            "Γνώση της ιστορίας της τέχνης",
            "Γιατί το τρέξιμο σε βοηθά να φωτογραφίζεις καλύτερα...",
            "Είσαι σκηνοθέτης, όχι μόνο αυτός που πατάει το κλείστρο",
            "Πρέπει να είσαι γρήγορος – σωματικά ΚΑΙ πνευματικά",
            "Ενέργεια του σετ = ενέργεια της ομάδας",
            "Ψυχική δύναμη = αντοχή στο στρες",
            "Δουλεύεις σε ακραίες συνθήκες – χρόνος, καιρός, τοποθεσίες",
            "Συγκέντρωση μέσα από σωματική διαύγεια",
            "Στάση = αποτέλεσμα",
            "Λεονάρντο ντα Βίντσι, σημαντικός για τη φωτογραφία;",
            "Διαχείριση του φωτός – Chiaroscuro (φωτοσκίαση)",
            "Μελέτη της ανατομίας – πραγματική κατανόηση του σώματος",
            "Σύνθεση & χρυσή τομή",
            "Οπτική και όραση – η Camera Obscura",
            "Η έκφραση – το φαινόμενο της Μόνα Λίζα",
            "Διεπιστημονική προσέγγιση = σύγχρονη φωτογραφία",
            "Διαβάζοντας φως και σκιά – σαν δράμα στη σκηνή",
            "Παρατηρώ αντί να κρίνω",
            "Κατανοώντας την αρχιτεκτονική ως σκηνικό",
            "Όλα συνδέονται – διεπιστημονική σκέψη",
            "Κατανοώντας την κίνηση",
            "Η περιέργεια ως κινητήρας",
            "Το συναίσθημα πάνω από την τελειότητα",
            "Τα λάθη ως μέρος της διαδικασίας",
            "Υπομονή και μακροπρόθεσμη σκέψη",
            "Οι φωτογράφοι δημιούργησαν το κοινωνικό δίκτυο....",
            "Το σκηνικό της διπλανής πόρτας",
            "Η ομάδα των καθηγητών στο ελεύθερο project»",
            "Γιατί η επαγγελματική φωτογραφία αξίζει την τιμή της",
            "Γιατί η επαγγελματική φωτογραφία αξίζει την τιμή της -2-",
            "Επαγγελματική διαφημιστική φωτογραφία – μια τέχνη που δεν αναγνωρίζεται στην οθόνη της κάμερας",
            "Όλα ξεκινούν με τον στόχο – όχι με την κάμερα",
            "Η τεχνική κοστίζει – αλλά μετράει το αποτέλεσμα",
            "Το πρόβλημα δεν είναι η τιμή – είναι η παρεξήγηση",
            "Τα δικαιώματα κοστίζουν – γιατί οι εικόνες έχουν αξία",
            "Συνεργασία αντί για απλή εκτέλεση",
            "Η τεχνική φτιάχνει ποιότητα – αλλά η στάση κάνει τη διαφορά",
            "Συμπέρασμα: όποιος αγοράζει φθηνά δεν πληρώνει διπλά – χάνει αποτέλεσμα",
            "Το βλέμμα του πελάτη"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "Το 70 % της φωτογραφικής δουλειάς; Συμβαίνει ΠΡΙΝ από το πρώτο κλικ.",
          "absaetze": [
            "Ίσως νομίζεις ότι ένας φωτογράφος ή μια φωτογράφος απλώς βάζει την κάμερα στην τσάντα, πηγαίνει στο σετ, πατάει μερικές φορές το κλείστρο – και voilà, η τέλεια εικόνα είναι στο κουτί. Αυτό όμως θα ήταν σαν να λέμε ότι μια συναυλία πέτυχε μόνο επειδή ανέβηκε κάποιος στη σκηνή – χωρίς πρόβα, χωρίς soundcheck, χωρίς τρακ. Στην πραγματικότητα το καθοριστικό συμβαίνει πολύ νωρίτερα. Γιατί περίπου το 70 % της δουλειάς μιας επαγγελματικής φωτογράφισης δεν γίνεται στο σετ, αλλά στην εντατική προετοιμασία της. Και αυτό αφορά πολύ περισσότερα από το να μαζέψεις τον εξοπλισμό.",
            "Η καλή προετοιμασία δεν είναι «nice to have», είναι το θεμέλιο. Είναι ο τόπος όπου οι ιδέες παίρνουν μορφή, αναπτύσσονται λύσεις και πιθανά προβλήματα δοκιμάζονται ήδη νοερά. Είναι η αθόρυβη προσπάθεια στο παρασκήνιο που φροντίζει ώστε τη μέρα της φωτογράφισης όλα να κυλούν – ή, αν δεν κυλούν, να τα αντιμετωπίζεις παρ’ όλα αυτά με σιγουριά. Αυτό το 70 % σε προκαλεί: πνευματικά, σωματικά, τεχνικά, οργανωτικά – και μερικές φορές ακόμα και συναισθηματικά. Αυτό είναι η πραγματική δουλειά."
          ]
        },
        {
          "kapitel": "Γιατί η επαγγελματική φωτογραφία αξίζει την τιμή της",
          "absaetze": [
            "Στη σημερινή ψηφιακή πλημμύρα εικόνων δεν κερδίζει το πιο όμορφο look, αλλά το πιο αποτελεσματικό στρατηγικά. Η διαφημιστική φωτογραφία δεν είναι απλώς μια χαριτωμένη εικόνα. Είναι ένα εργαλείο – ακριβές, σχεδιασμένο, προσαρμοσμένο στη μάρκα. Ο επαγγελματίας φωτογράφος εδώ δεν είναι μόνο τεχνίτης, αλλά κάποιος που σκέφτεται μαζί σου, που καταλαβαίνει τη μάρκα, ένας στρατηγικός συνεργάτης. Και ακριβώς γι’ αυτό αυτή η υπηρεσία έχει την τιμή της.",
            "Όποιος έχει δουλέψει κάποτε σε τμήμα μάρκετινγκ ξέρει: μια καμπάνια στέκεται ή πέφτει με τις εικόνες. Είναι το πρώτο που γίνεται αντιληπτό. Μεταφέρουν αξίες, συναισθήματα, ταυτότητα. Μια αδύναμη οπτική γλώσσα μπορεί να καταστρέψει ακόμα και την καλύτερη ιδέα. Οι καλές εικόνες αντίθετα χτίζουν εμπιστοσύνη, παρατείνουν τον χρόνο παραμονής, ενισχύουν την αναγνωρισιμότητα. Αυτό δεν είναι «nice to have» – αυτό είναι κινητήριος δύναμη για conversions."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "Εξέλιξη – το αόρατο έναυσμά σου για το επόμενο επίπεδο",
          "url": "https://prophotoskills.com/t05_e02_entwicklung-dein-unsichtbarer-next-level-trigger/",
          "text": "Κάποια στιγμή όλα κυλούν: οι πελάτες σε κλείνουν, το στυλ σου έχει παγιωθεί, η ρουτίνα σε στηρίζει – κι όμως νιώθεις ότι υπάρχει κάτι παραπάνω. Το κεφάλαιο περιγράφει αυτό το σημείο και τη συνειδητή απόφαση να εξελιχθείς πραγματικά. Δείχνει με ειλικρίνεια και τις δύο πλευρές: τι κερδίζεις (πιο δυνατή προσωπικότητα, πιο οξεία φωτογραφική σκέψη, περισσότερη αξία και ανεξαρτησία από τις τάσεις) και τι κοστίζει (χρόνο, ενέργεια, παλιές συνήθειες και μερικές φορές ανθρώπους που δεν ακολουθούν)."
        },
        {
          "titel": "Η ματιά του πελάτη – όταν η εμπιστοσύνη ξαφνικά γίνεται προϋπολογισμός",
          "url": "https://prophotoskills.com/t09_l09_kunden-blick-wenn-aus-vertrauen-ploetzlich-budget-wird/",
          "text": "Μόλις μπουν στο τραπέζι μεγάλοι προϋπολογισμοί, οι πελάτες σε ελέγχουν – πολύ πριν σταλεί η προσφορά. Το κεφάλαιο κοιτάζει μέσα από τα μάτια τους: δεν αγοράζουν εικόνες, αλλά ασφάλεια, συνέπεια, δομή, ηγεσία και ηρεμία. Κρίνεται το πώς επικοινωνείς, σκέφτεσαι, προετοιμάζεσαι, κοστολογείς και ηγείσαι – στο σετ όπως και μετά την παράδοση. Στο τέλος έρχεται η μετάβαση από πάροχο υπηρεσιών σε συνεργάτη."
        },
        {
          "titel": "Όλοι αυτοί οι coaches …",
          "url": "https://prophotoskills.com/t05_e03_all_die_coaches/",
          "text": "Ένα πείραμα σκέψης: τι θα άλλαζε αν αύριο είχες ένα εκατομμύριο στον λογαριασμό σου; Πάνω απ' όλα, ο φόβος θα χαμήλωνε – ο φόβος μήπως αποφασίσεις λάθος ή δεν είσαι αρκετός. Το κεφάλαιο δείχνει γιατί πολλές υποσχέσεις coaching προσπερνούν ακριβώς αυτό και γιατί η πραγματική πρόοδος έρχεται όταν μαθαίνεις να σκέφτεσαι και να αποφασίζεις με αυτή την εσωτερική ηρεμία – χωρίς το εκατομμύριο."
        },
        {
          "titel": "Προκαταλήψεις vs. εμπειρίες",
          "url": "https://prophotoskills.com/t05_e04_vorurteile-vs-erfahrungen/",
          "text": "Οι προκαταλήψεις μαζεύονται χωρίς να το καταλάβουμε – από workshops, φόρουμ και φράσεις που κάποιος υποστήριξε αρκετά δυνατά. Το κεφάλαιο δείχνει πώς σου κλείνουν ακριβώς τον δρόμο που θα σε πήγαινε μπροστά και γιατί η δική σου εμπειρία είναι η πιο δυνατή δασκάλα: να δοκιμάζεις, να βγαίνεις από τον χαραγμένο δρόμο και να κάνεις τα δικά σου λάθη."
        },
        {
          "titel": "Πρόσεχε το περιβάλλον σου",
          "url": "https://prophotoskills.com/t03_l04_achte-auf-dein-umfeld/",
          "text": "Η εικόνα του μοναχικού λύκου με την κάμερα είναι ρομαντική, αλλά λάθος. Πίσω από κάθε δημιουργική δύναμη υπάρχουν άνθρωποι που τη στηρίζουν, την προκαλούν και μερικές φορές τη σώζουν. Το κεφάλαιο εξηγεί γιατί στη φωτογραφία το περιβάλλον είναι πολλαπλασιαστής: συμβάλλει στο πόσο γρήγορα μαθαίνεις, στο πώς διαχειρίζεσαι την πίεση και τις κρίσεις και στο από πού έρχεται η έμπνευσή σου – και γιατί αξίζει να το επιλέγεις συνειδητά."
        }
      ],
      "fragen": [
        {
          "frage": "Τι σημαίνει «το 70 % της φωτογραφικής δουλειάς γίνεται πριν από το κλικ»;",
          "antwort": "Το μεγαλύτερο μέρος της δουλειάς είναι αόρατο: ιδέα, briefing, σχεδιασμός φωτισμού, ομάδα, τοποθεσία και η δική σου ψυχική προετοιμασία. Όποιος αρχίζει να σκέφτεται μόνο στο σετ χάνει χρόνο, ενέργεια και συχνά ποιότητα εικόνας."
        },
        {
          "frage": "Γιατί μια δεμένη ομάδα είναι πιο σημαντική από τον ακριβό εξοπλισμό;",
          "antwort": "Η ατμόσφαιρα, η ροή και ένα χαλαρό μοντέλο προέρχονται από ανθρώπους, όχι από την τεχνολογία. Μια ομάδα που γνωρίζεται λύνει τα προβλήματα πιο γρήγορα και δημιουργεί την ενέργεια που κάνει δυνατές τις δυνατές εικόνες."
        },
        {
          "frage": "Τι σημαίνει «Είσαι σκηνοθέτης, όχι απλώς αυτός που πατάει το κλείστρο»;",
          "antwort": "Στο σετ όλοι κοιτάζουν εσένα. Καθοδηγείς, κρατάς την ομάδα ενωμένη και κατευθύνεις την ενέργεια – με σαφήνεια, συγκέντρωση και πραγματική παρουσία."
        },
        {
          "frage": "Γιατί η διαφημιστική φωτογραφία είναι επένδυση και όχι κόστος;",
          "antwort": "Μια καμπάνια στέκεται ή πέφτει με τις εικόνες της. Οι καλές εικόνες δημιουργούν εμπιστοσύνη και αναγνωρισιμότητα και δουλεύουν για μια εταιρεία επί μήνες – οι αδύναμες εικόνες καταστρέφουν ακόμη και την καλύτερη ιδέα."
        },
        {
          "frage": "Γιατί τα δικαιώματα χρήσης χρεώνονται επιπλέον;",
          "antwort": "Μετά τη φωτογράφιση οι εικόνες ανήκουν στον δημιουργό τους. Το πού, για πόσο και σε τι έκταση χρησιμοποιείται μια εικόνα καθορίζει την αξία της – γι' αυτό η εμβέλεια, το κανάλι και η διάρκεια αδειοδοτούνται δίκαια."
        },
        {
          "frage": "Τι επίδραση έχει το περιβάλλον στην εξέλιξη ενός φωτογράφου;",
          "antwort": "Το περιβάλλον φιλτράρει συνεχώς το τι τολμάς. Όποιος περιβάλλεται από ανθρώπους που σκέφτονται μικρά εξελίσσεται πιο αργά – ένα υποστηρικτικό περιβάλλον λειτουργεί αντίθετα σαν ασφάλεια για τη δημιουργική ελευθερία."
        }
      ]
    },
    "onlocation": {
      "titel": "Photoguide On Location",
      "kurz": "Photoguide On Location της ProPhotoSkills: ταξίδι, τοποθεσία, ασφάλιση και εξοπλισμός για φωτογραφίσεις επί τόπου – περιεχόμενα, αποσπάσματα και απαντήσεις.",
      "worum": [
        "Το On Location είναι ο photoguide για όλα όσα συμβαίνουν έξω από το στούντιο. Σε συνοδεύει από τον σχεδιασμό του ταξιδιού και την επιλογή και «ανάγνωση» των τοποθεσιών μέχρι το ερώτημα πώς προστατεύεις τον εαυτό σου, την ομάδα σου και τον εξοπλισμό σου.",
        "Το βιβλίο χωρίζεται σε τέσσερα μέρη: Travel, Location, Insurance και Equipment. Κάθε μέρος συνδυάζει πρακτικές λίστες ελέγχου με τη στάση που χρειάζεσαι για να δουλεύεις στον δρόμο ευέλικτα, προετοιμασμένα και με σιγουριά."
      ],
      "fuer": "Φωτογράφοι που δουλεύουν σε τοποθεσίες, σε ταξίδια ή διεθνώς – ή σκοπεύουν να το κάνουν.",
      "inhalt": [
        {
          "gruppe": "Travel",
          "kapitel": [
            "Σχεδιασμός ταξιδιών για δημιουργικούς",
            "Αεροπλάνο vs. τρένο vs. αυτοκίνητο – ποιο μέσο μεταφοράς έχει νόημα και πότε",
            "Η αόρατη χειραποσκευή – τι πρέπει να υπάρχει πάντα στην τσάντα σου",
            "Διαχείριση του jet lag – ενέργεια παρά τη διαφορά ώρας",
            "Μεταφορά εξοπλισμού – ασφαλές πακετάρισμα και έξυπνη δήλωση",
            "Βίζα & τελωνείο – πώς να αποφύγεις το άγχος στα σύνορα",
            "Φωτογράφιση στο εξωτερικό – πολιτισμικοί κώδικες και do’s & don’ts",
            "Travel light vs. full gear – πότε να ταξιδεύεις minimal, πότε στο μέγιστο",
            "Δημιουργικό βλέμμα στον δρόμο – εικόνες που γεννιούνται ήδη στο ταξίδι",
            "Ομαδικά ταξίδια – logistics, κόστος και δυναμική της ομάδας",
            "Ξενοδοχεία & καταλύματα – τι κάνει πραγματικά καλή μια τοποθεσία",
            "Το ταξίδι ως πηγή έμπνευσης – πώς τα νέα μέρη οξύνουν το μάτι σου",
            "Σχέδια έκτακτης ανάγκης στον δρόμο – όταν ακυρώνονται πτήσεις ή χάνονται αποσκευές",
            "Βιώσιμο ταξίδι – green choices στη βιομηχανία της φωτογραφίας",
            "Travel mindset – η ψυχραιμία ως ο πιο σημαντικός πόρος",
            "30 εμβληματικοί τόποι που ως φωτογράφος πρέπει να επισκεφθείς μία φορά"
          ]
        },
        {
          "gruppe": "Location",
          "kapitel": [
            "Βασικά του location scouting – πώς να βρεις τα κατάλληλα μέρη",
            "Γιατί οι τόποι έχουν το δικό τους φως – και γιατί πρέπει να μάθεις να το διαβάζεις",
            "Location & brand – πώς οι χώροι αφηγούνται ιστορίες",
            "Indoor vs. outdoor – πλεονεκτήματα και μειονεκτήματα για διαφορετικές δουλειές",
            "Άδειες & δικαιώματα – δημιουργώντας νομική σαφήνεια",
            "Απρόβλεπτος καιρός – εξασφάλισε τη φωτογράφιση παρά τη φύση",
            "Set design vs. real location – τι πρέπει να είναι αληθινό, τι επιτρέπεται να σκηνοθετηθεί",
            "Μάθε να διαβάζεις τους τόπους – πώς να αναγνωρίζεις αμέσως τις δυνατότητες",
            "Οι locations ως πηγή ενέργειας – γιατί οι χώροι διαμορφώνουν την ατμόσφαιρα",
            "Το κόστος της location – προϋπολογισμός και εναλλακτικές",
            "Αυτοσχέδια σκηνικά – σαλόνια, πίσω αυλές, off-spaces",
            "Iconic places – τόποι με συμβολική δύναμη και αναγνωρισιμότητα",
            "Location & ασφάλεια – crew, εξοπλισμός, υποδομές",
            "Πολιτισμικά πλαίσια – τι σημαίνει ένας τόπος πριν τον φωτογραφίσεις",
            "Οι locations ως co-creator – όταν ο ίδιος ο χώρος γίνεται μέρος της ιστορίας"
          ]
        },
        {
          "gruppe": "Insurance",
          "kapitel": [
            "Γιατί η κάλυψη δεν είναι πολυτέλεια – αλλά προϋπόθεση",
            "Ασφάλιση εξοπλισμού – προστασία για τα εργαλεία σου",
            "Ταξιδιωτική ασφάλιση για δημιουργικούς – δουλειά σε όλο τον κόσμο χωρίς ρίσκο",
            "Αστική ευθύνη στο set – όταν άνθρωποι ή τόποι παθαίνουν ζημιά",
            "Model release & συμβόλαια – δημιουργώντας νομική ασφάλεια",
            "Κατοχύρωση δικαιωμάτων χρήσης – γιατί τα δικαιώματα αξίζουν όσο η εικόνα",
            "Προστασία του budget – όταν τα έργα ανατρέπονται απρόσμενα",
            "Τα backups ως ασφάλιση – τα διπλά δεδομένα είναι υποχρέωση",
            "Σχέδια έκτακτης ανάγκης για την τεχνική – εφεδρικές κάμερες και λύσεις ενοικίασης",
            "Υγεία στο set – γιατί μετράει και η δική σου κάλυψη",
            "Ασφάλιση vs. εμπιστοσύνη – πού τα συμβόλαια συμπληρώνουν τις σχέσεις",
            "Διεθνείς δουλειές – προσοχή στις νομικές διαφορές",
            "Κάλυψη για ελεύθερα projects – προστασία ακόμη και με μικρό budget",
            "Προστασία της φήμης –",
            "η επικοινωνία κρίσης ως μέρος της κάλυψης",
            "Ψυχολογική ασφάλεια – πώς το σχέδιο Β σού δίνει ελευθερία"
          ]
        },
        {
          "gruppe": "Equipment",
          "kapitel": [
            "Η κάμερα δεν είναι το παν – mindset πριν από τα megapixel",
            "Κατανόηση των φακών – οι εστιακές αποστάσεις ως γλώσσα εικόνας",
            "Μορφές φωτός & εργαλεία – περισσότερα από το να «φωτίζεις»",
            "Κινητά στούντιο – τεχνική για ευέλικτα sets",
            "Must-have vs. nice-to-have – θέσε προτεραιότητες",
            "Μπαταρίες, κάρτες μνήμης & βασικά – οι υποτιμημένοι ήρωες",
            "Λύσεις μεταφοράς – cases, bags & συστήματα οργάνωσης",
            "Δοκιμή εξοπλισμού – πριν ξεκινήσει η δουλειά",
            "Στρατηγικές backup – τι κάνεις όταν η τεχνική χαλάει",
            "Rental vs. ownership – πότε να νοικιάζεις, πότε να αγοράζεις",
            "Τεχνική & ομάδα – ποιος πρέπει να χειρίζεται τι",
            "Οργάνωση του set – καλώδια, τρίποδα, ασφάλεια",
            "Καινοτομίες & τάσεις – τεχνική με νόημα αντί για hype",
            "Minimalism setups – να πετυχαίνεις πολλά με λίγα",
            "Ο εξοπλισμός ως επαγγελματική κάρτα – πώς ο χειρισμός σου δείχνει επαγγελματισμό"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "Η αόρατη χειραποσκευή – τι πρέπει να υπάρχει πάντα στην τσάντα σου",
          "absaetze": [
            "Όταν οι δημιουργικοί μιλούν για «χειραποσκευή», εννοούν συχνά: κάμερα, laptop, φακούς. Στην πραγματικότητα όμως υπάρχει μια άλλη χειραποσκευή – αόρατη, αλλά καθοριστική. Πράγματα που δεν ζυγίζονται ούτε χωρούν σε τελωνειακούς κανονισμούς. Στάση. Ρουτίνες. Τελετουργίες. Μικροί βοηθοί που, όλοι μαζί, κρίνουν αν φτάνεις με σιγουριά ή αν φαίνεσαι ήδη χαμένος στην πύλη.",
            "Αυτό το κεφάλαιο είναι αφιερωμένο ακριβώς σε αυτή την αόρατη χειραποσκευή. Είναι ένα μείγμα πρακτικού, ψυχολογικού και φιλοσοφικού. Γιατί στο τέλος δεν μετράει μόνο τι έχεις μαζί σου – αλλά πώς ταξιδεύεις: προετοιμασμένος, καθαρός, ανθεκτικός."
          ]
        },
        {
          "kapitel": "Γιατί οι τόποι έχουν το δικό τους φως – και γιατί πρέπει να μάθεις να το διαβάζεις",
          "absaetze": [
            "Το φως δεν είναι ουδέτερος πόρος. Δεν είναι εργαλείο που απλώς «προσθέτεις». Κάθε τόπος φέρνει το δικό του φως – διαμορφωμένο από αρχιτεκτονική, γεωγραφία, υλικά, ανοίγματα, επιφάνειες και περιβάλλον.",
            "Όποιος δεν αναγνωρίζει αυτό το φως παλεύει εναντίον του. Όποιος το καταλαβαίνει δουλεύει με τον τόπο – όχι εναντίον του."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "30 εμβληματικά μέρη που πρέπει να έχεις επισκεφθεί ως φωτογράφος",
          "url": "https://prophotoskills.com/t11_e02_30-ikonische-orte-die-du-als-fotograf-einmal-bereist-haben-solltest/",
          "text": "Όχι μια bucket list για το Instagram, αλλά 30 μέρη ως πεδία εκπαίδευσης για το μάτι σου – από την Ισλανδία, την Τοσκάνη, τη Βενετία και τα Λοφότεν μέχρι το Μαρόκο, την Ιορδανία και τα Καναδικά Βραχώδη Όρη. Για κάθε μέρος, το κεφάλαιο δείχνει τι σου διδάσκει: να διαβάζεις φως που αλλάζει κάθε λεπτό, γραμμές και timing, τη σιωπή ως θέμα, κλίμακα και βάθος ή τον έλεγχο του χάους."
        }
      ],
      "fragen": [
        {
          "frage": "Τι πρέπει να υπάρχει πάντα στη χειραποσκευή ενός φωτογράφου;",
          "antwort": "Ό,τι είναι αναντικατάστατο: σώμα κάμερας, ο πιο σημαντικός φακός, laptop, σκληροί δίσκοι, κάρτες μνήμης και μπαταρίες. Ετοίμασέ τη έτσι ώστε, σε περίπτωση ανάγκης, να μπορείς να δουλέψεις και χωρίς τις παραδομένες αποσκευές."
        },
        {
          "frage": "Τι πρέπει να προσέχουν οι φωτογράφοι με τις βίζες και το τελωνείο;",
          "antwort": "Μια τουριστική βίζα δεν επιτρέπει αμειβόμενη εργασία, ούτε καν για μία ημέρα φωτογράφισης. Οι βίζες εργασίας χρειάζονται συχνά εβδομάδες, και στο τελωνείο βοηθά μια λίστα εξοπλισμού με σειριακούς αριθμούς και αξίες."
        },
        {
          "frage": "Γιατί κάθε μέρος έχει το δικό του φως;",
          "antwort": "Η ώρα της ημέρας, ο προσανατολισμός, οι αντανακλάσεις, η αρχιτεκτονική και η βλάστηση διαμορφώνουν το φως μιας τοποθεσίας. Όποιος επισκέπτεται τα μέρη σε διαφορετικές ώρες και διαβάζει τις δυνατότητες του φωτός τους αποφασίζει καλύτερα και στήνει πιο γρήγορα."
        },
        {
          "frage": "Χρειάζομαι άδεια για φωτογράφιση σε δημόσιους χώρους;",
          "antwort": "Συχνά ναι. Το ότι ένας χώρος είναι δημόσια προσβάσιμος δεν σημαίνει ότι επιτρέπονται οι εμπορικές λήψεις. Οι επαγγελματίες διαχωρίζουν την πρόσβαση, τη λήψη και την αξιοποίηση και κανονίζουν τις άδειες γραπτώς."
        },
        {
          "frage": "Ποιες ασφαλίσεις χρειάζονται πραγματικά οι φωτογράφοι;",
          "antwort": "Κυρίως τρεις: επαγγελματική ασφάλιση αστικής ευθύνης, ασφάλιση εξοπλισμού και, για δουλειές στο εξωτερικό, κατάλληλη ταξιδιωτική ασφάλιση."
        },
        {
          "frage": "Ο καλύτερος εξοπλισμός κάνει καλύτερες φωτογραφίες;",
          "antwort": "Όχι αυτόματα. Η τεχνολογία ενισχύει τη στάση, δεν την αντικαθιστά. Αυτό που μετράει είναι να ξέρεις γιατί χρησιμοποιείς ένα εργαλείο."
        }
      ]
    },
    "beginner": {
      "titel": "Photoguide Beginner",
      "kurz": "Photoguide Beginner της ProPhotoSkills: έκθεση, σύνθεση, φως και επεξεργασία εξηγημένα με σαφήνεια – περιεχόμενα, αποσπάσματα και απαντήσεις. Δωρεάν με λογαριασμό.",
      "worum": [
        "Το Beginner είναι η είσοδός σου στη φωτογραφία – όχι ένα στεγνό εγχειρίδιο, αλλά ένας σύντροφος από τις σταθερές βάσεις ως την πραγματική σιγουριά. Σε δέκα κεφάλαια μιλά για την κάμερα, την έκθεση, τη σύνθεση, το πορτρέτο, το τοπίο, τη νύχτα, το φως, την επεξεργασία και το portfolio σου.",
        "Ο στόχος δεν είναι να αποστηθίσεις κανόνες, αλλά να καταλάβεις γιατί λειτουργούν οι εικόνες και πώς παίρνονται οι καλές αποφάσεις. Στο PPS Books διαβάζεις το Beginner δωρεάν – χρειάζεσαι μόνο έναν λογαριασμό."
      ],
      "fuer": "Αρχάριοι και όλοι όσοι θέλουν να βάλουν σε τάξη τις βάσεις τους.",
      "inhalt": [
        {
          "gruppe": null,
          "kapitel": [
            "Κεφάλαιο 1: Εισαγωγή στην επαγγελματική φωτογραφία",
            "Κεφάλαιο 2: Επιλέγοντας τη σωστή μηχανή",
            "Κεφάλαιο 3: Βασικές αρχές της έκθεσης",
            "Κεφάλαιο 4: Η τέλεια σύνθεση",
            "Κεφάλαιο 5: Κατακτώντας τη φωτογραφία πορτρέτου",
            "Κεφάλαιο 6: Κατανοώντας τη φωτογραφία τοπίου",
            "Κεφάλαιο 7: Η τέχνη της νυχτερινής φωτογραφίας",
            "Κεφάλαιο 8: Προχωρημένες τεχνικές φωτισμού",
            "Κεφάλαιο 9: Επεξεργασία και βελτιστοποίηση εικόνας",
            "Κεφάλαιο 10: Παρουσίαση και δημιουργία portfolio"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "Κεφάλαιο 3: Βασικές αρχές της έκθεσης",
          "absaetze": [
            "Η τέχνη της έκθεσης βρίσκεται στην καρδιά της φωτογραφίας. Είναι το κλειδί που ανοίγει τον δρόμο για μια σωστά εκτεθειμένη φωτογραφία. Η έκθεση καθορίζει πόσο φωτεινή ή σκοτεινή είναι μια εικόνα και πόσες λεπτομέρειες φαίνονται στις φωτεινές και στις σκοτεινές περιοχές. Για να την ελέγξεις, χρειάζεται ακριβής κατανόηση των στοιχείων του «τριγώνου της έκθεσης»: διάφραγμα, ταχύτητα κλείστρου και ευαισθησία ISO.",
            "Το διάφραγμα, που μετριέται σε αριθμούς f, ελέγχει την ποσότητα φωτός που περνά από τον φακό στον αισθητήρα. Ένας μικρός αριθμός f (π.χ. f/1.8) αφήνει να μπει περισσότερο φως και είναι ιδανικός για λήψεις σε χαμηλό φωτισμό ή για θολό φόντο, κάτι που συχνά θέλουμε στα πορτρέτα. Ένας μεγάλος αριθμός f (π.χ. f/16) μικραίνει το άνοιγμα, κάτι που χρησιμοποιείται σε λήψεις τοπίου με μεγαλύτερο βάθος πεδίου."
          ]
        },
        {
          "kapitel": "Κεφάλαιο 4: Η τέλεια σύνθεση",
          "absaetze": [
            "Η τέχνη της σύνθεσης είναι η καρδιά της φωτογραφίας. Είναι ένας αόρατος σκελετός που κατευθύνει την προσοχή του θεατή και ενισχύει την οπτική επίδραση μιας φωτογραφίας. Μια καλά μελετημένη σύνθεση δεν είναι μόνο αισθητικά ευχάριστη, αλλά βοηθά και στην αφήγηση μιας ιστορίας ή στη μετάδοση μιας συγκεκριμένης ατμόσφαιρας.",
            "Η χρυσή τομή είναι ένας μαθηματικός τύπος, πολύ διαδεδομένος στην τέχνη και στην αρχιτεκτονική, για τη δημιουργία αρμονικών αναλογιών. Στη φωτογραφία συχνά αντιπροσωπεύει την ιδανική αναλογία στη σύνθεση. Ο κανόνας των τρίτων είναι μια πρακτική προσέγγισή της και προτείνει να χωρίσεις την εικόνα με δύο οριζόντιες και δύο κάθετες γραμμές, ώστε να προκύψουν εννέα ίσα μέρη. Τοποθέτησε τα σημαντικά στοιχεία πάνω σε αυτές τις γραμμές ή στα σημεία τομής τους, για να κάνεις την εικόνα δυναμική και ισορροπημένη."
          ]
        }
      ],
      "artikel": [
        {
          "titel": "Προκαταλήψεις vs. εμπειρίες",
          "url": "https://prophotoskills.com/t05_e04_vorurteile-vs-erfahrungen/",
          "text": "Ειδικά στην αρχή μαζεύει κανείς πολλούς κανόνες και απόψεις – από βίντεο, φόρουμ και workshops. Αυτό το δωρεάν κεφάλαιο από τον Photoguide Next Level δείχνει γιατί η δική σου εμπειρία μετράει περισσότερο από κάθε προκατάληψη: να δοκιμάζεις, να βρίσκεις τον δικό σου δρόμο και να μαθαίνεις από τα δικά σου λάθη."
        },
        {
          "titel": "Όλοι αυτοί οι coaches …",
          "url": "https://prophotoskills.com/t05_e03_all_die_coaches/",
          "text": "Όποιος ξεκινά πέφτει γρήγορα πάνω σε υποσχέσεις coaching και σχέδια βήμα προς βήμα. Αυτό το δωρεάν κεφάλαιο από τον Photoguide Next Level εξηγεί γιατί η πραγματική πρόοδος έρχεται από την εσωτερική ηρεμία και τη δική σου σκέψη – και όχι από την επόμενη έτοιμη συνταγή."
        }
      ],
      "fragen": [
        {
          "frage": "Τι είναι το τρίγωνο της έκθεσης;",
          "antwort": "Το διάφραγμα, η ταχύτητα κλείστρου και η ευαισθησία ISO. Μαζί καθορίζουν πόσο φωτεινή θα είναι μια εικόνα και πόση λεπτομέρεια μένει στα φωτεινά και στις σκιές."
        },
        {
          "frage": "Πότε επιλέγω μικρό και πότε μεγάλο αριθμό f;",
          "antwort": "Ένας μικρός αριθμός f όπως f/1.8 αφήνει να μπει πολύ φως και θολώνει απαλά το φόντο – καλό για πορτρέτα και λίγο φως. Ένας μεγάλος όπως f/16 δίνει μεγάλο βάθος πεδίου, για παράδειγμα στο τοπίο."
        },
        {
          "frage": "Ποια ταχύτητα κλείστρου «παγώνει» την κίνηση;",
          "antwort": "Οι γρήγορες ταχύτητες όπως 1/1000 του δευτερολέπτου παγώνουν την κίνηση, για παράδειγμα στα σπορ. Οι πιο αργές, από περίπου 1/30 του δευτερολέπτου, θολώνουν την κίνηση – για νερό που κυλά ή light painting."
        },
        {
          "frage": "Τι είναι ο κανόνας των τρίτων;",
          "antwort": "Χωρίζεις την εικόνα σε εννέα πεδία με δύο οριζόντιες και δύο κάθετες γραμμές και τοποθετείς τα σημαντικά στοιχεία πάνω στις γραμμές ή στα σημεία τομής τους. Έτσι η εικόνα δείχνει ισορροπημένη και ζωντανή."
        }
      ]
    }
  },
  "ja": {
    "nextlevel": {
      "titel": "Photoguide Next Level",
      "kurz": "ProPhotoSkills の Photoguide Next Level：プロとして成長したいフォトグラファーのための知識・姿勢・構造――目次、試し読み、よくある質問。",
      "worum": [
        "Next Level は、すでに安定した写真が撮れていて、プロの広告写真へと一歩を踏み出したい人のための photoguide です。メニューやプリセットの説明ではなく、撮影現場やクライアントとの対話で差がつくことを扱います。",
        "中心にあるのは、最初のクリックの前の仕事です。準備、チーム、コミュニケーション、現場でのリード、価格交渉、使用権。さらに、身体と心の強さ、道具としての美術史、そしてクライアントがあなたをどう見ているかについての章が加わります。"
      ],
      "fuer": "経験を積んだフォトグラファーで、単発の仕事からパートナーシップへ進み、自分の価値を自信を持って伝えたい人。",
      "inhalt": [
        {
          "gruppe": null,
          "kapitel": [
            "なぜGalaとBunteはそーーーんなに大切なのか...",
            "ヘア＆メイク――おしゃべりの時間は信頼の時間",
            "二人目、三人目のモデルが待ちぼうけ",
            "写真の仕事の70 %？それは最初のクリックの「前」に起きています。",
            "クリックの前の見えないもの",
            "息の合った人たちがどんなレンズよりも価値がある理由",
            "「ヒューストン、問題が発生した...」",
            "思いつきの変更が危険な理由",
            "こうした状況が思っているより頻繁に起きる理由",
            "最高の落ち着きのためのボーナスヒント",
            "自分の周りの環境に目を向ける",
            "あなたも「クイズ$ミリオネア」を観るのが好きですか？",
            "エージェンシーチームとの商品撮影――創造性に火をつける",
            "サッカー選手と写真家の共通点とは？",
            "成長 - あなたの見えないNext-Levelトリガー",
            "あのコーチたちみんな ....",
            "偏見 vs. 経験",
            "興味と好奇心",
            "技術的スキル",
            "創造性とビジョン",
            "構図と画づくり",
            "忍耐",
            "持久力",
            "情熱と献身",
            "人を導く力とコミュニケーション",
            "チームワーク",
            "時間管理と段取り",
            "批判を受け止める力と成長",
            "ディテールへの集中",
            "集中力と存在感",
            "光と影についての知識",
            "セールスと自己プレゼンテーション",
            "落ち着きとリーダーシップ",
            "物語を語る",
            "美術史の知識",
            "ジョギングが写真をうまくしてくれる理由...",
            "あなたは監督であって、シャッターを押すだけの人ではない",
            "素早くあれ――身体的にも精神的にも",
            "現場のエネルギー＝チームのエネルギー",
            "精神的な強さ＝ストレス耐性",
            "極限状況での仕事――時間、天候、ロケーション",
            "身体の明晰さによる集中",
            "姿勢＝効果",
            "レオナルド・ダ・ヴィンチは写真にとって重要？",
            "光の扱い――キアロスクーロ（明暗法）",
            "解剖学の研究――身体への本当の理解",
            "構図と黄金比",
            "光学と見ること――カメラ・オブスクラ",
            "表情――モナ・リザ効果",
            "学際的なアプローチ＝現代の写真",
            "光と影を読む――舞台のドラマのように",
            "判断する代わりに観察する",
            "建築を舞台装置として捉える",
            "すべてはつながっている――学際的な思考",
            "動きを理解する",
            "原動力としての好奇心",
            "完璧さよりも感情",
            "プロセスの一部としての失敗",
            "忍耐と長期的な視点",
            "写真家がソーシャルネットワークをつくった....",
            "すぐ隣の舞台セット",
            "自主プロジェクトの先生チーム」",
            "なぜプロの写真はその価格に見合うのか",
            "なぜプロの写真はその価格に見合うのか -2-",
            "プロの広告写真――カメラのモニターでは見えない職人技",
            "すべては目的から始まる――カメラからではない",
            "技術にはお金がかかる――しかし大切なのは結果",
            "問題は価格ではない――誤解こそが問題",
            "権利にはお金がかかる――写真には価値があるから",
            "ただこなすのではなく、協働する",
            "技術が品質をつくる――しかし差をつくるのは姿勢",
            "結論：安物買いは銭失い、ではなく――効果を失う",
            "クライアントの視点"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "写真の仕事の70 %？それは最初のクリックの「前」に起きています。",
          "absaetze": [
            "写真家は、ただカメラをバッグに入れて現場へ行き、何度かシャッターを押せば――はい、完璧な一枚の出来上がり、と思っているかもしれません。でもそれは、リハーサルもサウンドチェックも緊張もなしに、ステージに上がっただけでコンサートが成功したと言うようなものです。実際には、決定的なことはずっと前に起きています。プロの撮影の仕事のおよそ70 %は、現場ではなく、その徹底した準備の中で行われているのです。そしてそれは、機材をまとめることよりもはるかに多くのことを含んでいます。",
            "良い準備は「あったらいいもの」ではなく、土台です。アイデアが形になり、解決策が育ち、起こりうる問題が頭の中ですでにシミュレーションされる場所です。撮影の日にすべてが順調に進むように――あるいは順調でなくても落ち着いて受け止められるように――裏で支える静かな力仕事なのです。この70 %はあなたに挑んできます。精神的にも、身体的にも、技術的にも、段取りの面でも――そしてときには感情的にも。それこそが本当の仕事なのです。"
          ]
        },
        {
          "kapitel": "なぜプロの写真はその価格に見合うのか",
          "absaetze": [
            "今日のデジタルな写真の洪水の中で、勝つのはいちばん美しいルックではなく、戦略的にいちばん効果のあるルックです。広告写真はただのきれいな写真ではありません。それは道具です――精密で、計画され、ブランドにふさわしい道具です。そこでのプロの写真家は、職人であるだけでなく、一緒に考える人であり、ブランドを理解する人であり、戦略的なパートナーなのです。そしてまさにだからこそ、この仕事には価格があるのです。",
            "一度でもマーケティング部門で働いたことのある人なら知っています。キャンペーンの成否は写真で決まるのだと。写真は最初に知覚されるものです。価値観を、感情を、アイデンティティを運びます。弱い表現言語は、最高のアイデアさえ台無しにしてしまいます。一方、良い写真は信頼を生み、滞在時間を延ばし、認知度を高めます。それは「あったらいいもの」ではなく――コンバージョンの原動力なのです。"
          ]
        }
      ],
      "artikel": [
        {
          "titel": "成長――次のレベルへの見えないトリガー",
          "url": "https://prophotoskills.com/t05_e02_entwicklung-dein-unsichtbarer-next-level-trigger/",
          "text": "いつしかすべてが順調に回り始めます。クライアントから依頼が来て、スタイルも定まり、ルーティンが支えてくれる――それでも、まだ先があると感じる。この章は、その地点と、本当に成長しようという意識的な決断を描きます。得られるもの（より強い人格、より鋭い写真的思考、より高い価値、流行に左右されない自立）と、その代償（時間、エネルギー、古い習慣、そして時には離れていく人）の両面を正直に示します。"
        },
        {
          "titel": "クライアントの視点――信頼が突然予算に変わるとき",
          "url": "https://prophotoskills.com/t09_l09_kunden-blick-wenn-aus-vertrauen-ploetzlich-budget-wird/",
          "text": "大きな予算が動くとなると、クライアントは見積もりを出すずっと前からあなたを見極めています。この章はクライアントの目線で考えます。彼らが買うのは写真ではなく、安心、一貫性、構造、リーダーシップ、そして落ち着きです。評価されるのは、あなたがどう伝え、考え、準備し、見積もり、リードするか――現場でも納品後でも。最後に、サービス提供者からパートナーへの転換があります。"
        },
        {
          "titel": "あまたのコーチたち……",
          "url": "https://prophotoskills.com/t05_e03_all_die_coaches/",
          "text": "思考実験です。明日、口座に100万ユーロがあったら何が変わるでしょう？何より、不安が静かになるはずです――判断を誤る不安、自分では足りないという不安が。この章は、多くのコーチングの約束がまさにそこを見落としている理由と、その内なる落ち着きを持って考え、決めることを学んだときに本当の前進が生まれる理由を示します――100万がなくても。"
        },
        {
          "titel": "偏見 vs. 経験",
          "url": "https://prophotoskills.com/t05_e04_vorurteile-vs-erfahrungen/",
          "text": "偏見は気づかないうちに積み重なります。ワークショップ、フォーラム、誰かが声高に言い切った言葉から。この章は、偏見があなたを前に進めるはずの道をまさにふさいでしまう仕組みと、自分自身の経験がより強い先生である理由を示します。試してみる、決められた道から外れる、そして自分の失敗をすることです。"
        },
        {
          "titel": "自分の周りの環境に気を配ろう",
          "url": "https://prophotoskills.com/t03_l04_achte-auf-dein-umfeld/",
          "text": "カメラを持った一匹狼というイメージはロマンチックですが、事実ではありません。どんな創造的な力の背後にも、それを支え、刺激し、時には救う人たちがいます。この章は、写真において環境が「増幅器」である理由を説明します。どれだけ早く学ぶか、プレッシャーや危機にどう向き合うか、インスピレーションがどこから来るかを左右するのです――だからこそ、意識して環境を選ぶ価値があります。"
        }
      ],
      "fragen": [
        {
          "frage": "「撮影の仕事の70 %はクリックの前に起きる」とはどういう意味ですか？",
          "antwort": "仕事の大部分は目に見えません。コンセプト、ブリーフィング、ライティング計画、チーム、ロケーション、そして自分自身の心の準備です。現場に着いてから考え始める人は、時間、エネルギー、そして多くの場合は画質を失います。"
        },
        {
          "frage": "なぜ高価な機材より息の合ったチームのほうが大切なのですか？",
          "antwort": "雰囲気、流れ、リラックスしたモデルは、技術ではなく人から生まれます。互いをよく知るチームは問題を早く解決し、力強い写真を可能にするエネルギーを生み出します。"
        },
        {
          "frage": "「あなたは監督であり、シャッターを押すだけの人ではない」とは？",
          "antwort": "撮影現場では全員があなたを見ています。あなたがリードし、チームをまとめ、エネルギーを導くのです――明確さ、集中、そして本物の存在感をもって。"
        },
        {
          "frage": "なぜ広告写真はコストではなく投資なのですか？",
          "antwort": "キャンペーンの成否は写真で決まります。良い写真は信頼と認知を生み、何か月にもわたって企業のために働きます。弱い写真は、最高のアイデアさえ台無しにします。"
        },
        {
          "frage": "なぜ使用権は別料金なのですか？",
          "antwort": "撮影後、写真は著作者のものです。どこで、どれくらいの期間、どの範囲で使われるかが写真の価値を決めます。だからこそ、リーチ、媒体、期間に応じて公正にライセンスされます。"
        },
        {
          "frage": "環境はフォトグラファーの成長にどんな影響を与えますか？",
          "antwort": "環境は、あなたが何に挑戦できるかを常にふるいにかけています。小さく考える人に囲まれていると成長は遅くなり、支えてくれる環境は創造の自由を守る保険のように働きます。"
        }
      ]
    },
    "onlocation": {
      "titel": "Photoguide On Location",
      "kurz": "ProPhotoSkills の Photoguide On Location：ロケ撮影のための旅、ロケーション、備え、機材――目次、試し読み、よくある質問。",
      "worum": [
        "On Location は、スタジオの外で起こるすべてのための photoguide です。旅の計画から、ロケーションの選び方と読み解き方、そして自分自身とチーム、機材をどう守るかまで、あなたに寄り添います。",
        "本書は Travel、Location、Insurance、Equipment の四部構成です。どの部も実践的なチェックリストと、移動先で柔軟に、準備を整えて、落ち着いて仕事をするための姿勢を組み合わせています。"
      ],
      "fuer": "ロケーション撮影、旅先での撮影、海外での仕事をしている、またはこれから予定しているフォトグラファー。",
      "inhalt": [
        {
          "gruppe": "Travel",
          "kapitel": [
            "クリエイターのための旅行計画",
            "飛行機 vs. 鉄道 vs. 車――どの交通手段がいつ意味を持つのか",
            "見えない手荷物――いつもバッグに入れておくべきもの",
            "時差ぼけ対策――時差があってもエネルギーを保つ",
            "機材の輸送――安全に梱包し、賢く申告する",
            "ビザと税関――国境でのストレスを避ける方法",
            "海外での撮影――文化的コードと Do’s & Don’ts",
            "Travel light vs. Full Gear――いつ最小限で、いつ最大限で旅するか",
            "旅先でのクリエイティブな視点――移動中にすでに生まれる写真",
            "チームでの移動――ロジスティクス、コスト、グループダイナミクス",
            "ホテルと宿泊施設――良い立地を本当に決めるもの",
            "インスピレーションの源としての旅――新しい場所が目を研ぎ澄ませる方法",
            "旅先の緊急時プラン――フライトが欠航したり荷物が届かなかったりしたとき",
            "サステナブルな旅――写真業界における Green Choices",
            "Travel-Mindset――最も重要なリソースとしての落ち着き",
            "写真家として一度は訪れるべき30の象徴的な場所"
          ]
        },
        {
          "gruppe": "Location",
          "kapitel": [
            "ロケーション・スカウティングの基本――合う場所の見つけ方",
            "なぜ場所には独自の光があるのか――そしてなぜそれを読むことを学ばなければならないのか",
            "ロケーションとブランド――空間が物語を語る方法",
            "インドア vs. アウトドア――さまざまな仕事における長所と短所",
            "許可と権利――法的な明確さをつくる",
            "予測できない天気――自然に負けずに撮影を守る",
            "セットデザイン vs. リアルロケーション――何が本物であるべきで、何を演出してよいか",
            "場所を読む力を身につける――ポテンシャルをすぐに見抜く方法",
            "エネルギー源としてのロケーション――なぜ空間がムードを形づくるのか",
            "コスト要因としてのロケーション――予算と代替案",
            "即興の背景――リビングルーム、裏庭、オフスペース",
            "Iconic Places――象徴性と認知度を持つ場所",
            "ロケーションと安全――クルー、機材、インフラ",
            "文化的文脈――撮影する前に、その場所が何を意味するのか",
            "Co-Creator としてのロケーション――空間そのものがストーリーの一部になるとき"
          ]
        },
        {
          "gruppe": "Insurance",
          "kapitel": [
            "なぜ備えは贅沢ではなく、前提条件なのか",
            "機材保険――あなたのツールを守る",
            "クリエイターのための旅行保険――リスクなしで世界中で働く",
            "撮影現場の賠償責任――人や場所に損害が出たとき",
            "モデルリリースと契約――法的な安全をつくる",
            "使用権を守る――なぜ権利は写真と同等なのか",
            "予算の保護――プロジェクトが予期せず傾いたとき",
            "保険としてのバックアップ――データの二重化は義務",
            "機材の緊急時プラン――予備カメラとレンタルという解決策",
            "現場での健康――なぜあなた自身の備えも大切なのか",
            "保険 vs. 信頼――契約が関係を補うところ",
            "海外の仕事――法的な違いに注意する",
            "自主プロジェクトの備え――小さな予算でも守る",
            "評判の保護――",
            "備えの一部としての危機コミュニケーション",
            "心理的安全――プランBがあなたに自由を与える方法"
          ]
        },
        {
          "gruppe": "Equipment",
          "kapitel": [
            "カメラがすべてではない――メガピクセルの前にマインドセット",
            "レンズを理解する――写真の言語としての焦点距離",
            "光の形とツール――「明るくする」だけではない",
            "モバイルスタジオ――柔軟なセットのためのテクニック",
            "Must-have vs. Nice-to-have――優先順位を決める",
            "バッテリー、メモリーカードと基本――過小評価されたヒーローたち",
            "運搬の解決策――ケース、バッグ、整理の仕組み",
            "機材をテストする――仕事が始まる前に",
            "バックアップ戦略――機材が故障したときにどうするか",
            "Rental vs. Ownership――いつ借りて、いつ買うか",
            "テクニックとチーム――誰が何を操作すべきか",
            "セットの整理――ケーブル、スタンド、安全",
            "イノベーションとトレンド――ハイプではなく意味のあるテクニック",
            "ミニマリズムのセットアップ――少ないもので多くを実現する",
            "名刺としての機材――扱い方がプロフェッショナリズムを示す方法"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "見えない手荷物――いつもバッグに入れておくべきもの",
          "absaetze": [
            "クリエイターが「手荷物」と言うとき、たいていはカメラ、ノートパソコン、レンズのことを指します。けれども実は、もう一つの手荷物があります――目には見えなくても、決定的なものです。重さを量ることも、税関の規定に収めることもできないもの。姿勢。ルーティン。儀式。合わさって、あなたが落ち着いて到着するのか、それともゲートですでに途方に暮れて見えるのかを決める小さな助っ人たちです。",
            "この章は、まさにこの見えない手荷物を扱います。それは実用的なもの、心理的なもの、哲学的なものの組み合わせです。なぜなら結局大切なのは、何を持っているかだけでなく――どのように旅するかだからです。準備をして、明確に、しなやかに。"
          ]
        },
        {
          "kapitel": "なぜ場所には独自の光があるのか――そしてなぜそれを読むことを学ばなければならないのか",
          "absaetze": [
            "光は中立的な資源ではありません。 単に「付け加える」道具でもありません。 どの場所にも独自の光があります――建築、地理、素材、開口部、表面、周囲の環境によって形づくられた光が。",
            "この光に気づかない人は、それと戦うことになります。 それを理解する人は、場所に逆らうのではなく――場所と共に働きます。"
          ]
        }
      ],
      "artikel": [
        {
          "titel": "フォトグラファーとして一度は訪れておきたい30の象徴的な場所",
          "url": "https://prophotoskills.com/t11_e02_30-ikonische-orte-die-du-als-fotograf-einmal-bereist-haben-solltest/",
          "text": "Instagram のためのバケットリストではなく、あなたの目を鍛える練習場としての30の場所です――アイスランド、トスカーナ、ヴェネツィア、ロフォーテン諸島から、モロッコ、ヨルダン、カナディアン・ロッキーまで。それぞれの場所が何を教えてくれるのかを示します。刻々と変わる光を読むこと、ラインとタイミング、被写体としての静けさ、スケールと奥行き、そして混沌をコントロールすること。"
        }
      ],
      "fragen": [
        {
          "frage": "フォトグラファーの機内持ち込み手荷物に必ず入れておくべきものは？",
          "antwort": "替えのきかないものすべてです。カメラボディ、最も重要なレンズ、ノートパソコン、外付けドライブ、メモリーカード、バッテリー。万一のとき、預け荷物がなくても仕事ができるように詰めましょう。"
        },
        {
          "frage": "ビザと税関について、フォトグラファーが注意すべきことは？",
          "antwort": "観光ビザでは、たとえ1日の撮影でも報酬を伴う仕事はできません。就労ビザは数週間前の準備が必要なことが多く、税関ではシリアル番号と価格を記した機材リストが役立ちます。"
        },
        {
          "frage": "なぜ場所ごとに固有の光があるのですか？",
          "antwort": "時間帯、方角、反射、建築、植生がロケーションの光を形づくります。時間を変えて場所を訪れ、その光の可能性を読む人は、より良い判断ができ、セッティングも早くなります。"
        },
        {
          "frage": "公共の場所での撮影に許可は必要ですか？",
          "antwort": "多くの場合、必要です。誰でも入れる場所だからといって、商業撮影が許されるわけではありません。プロは立ち入り、撮影、利用を区別し、許可を書面で確認します。"
        },
        {
          "frage": "フォトグラファーに本当に必要な保険は？",
          "antwort": "主に三つです。業務上の賠償責任保険、機材保険、そして海外の仕事のための適切な旅行保険。"
        },
        {
          "frage": "良い機材を使えば良い写真になりますか？",
          "antwort": "自動的にはなりません。技術は姿勢を強めますが、その代わりにはなりません。大切なのは、なぜその道具を使うのかを分かっていることです。"
        }
      ]
    },
    "beginner": {
      "titel": "Photoguide Beginner",
      "kurz": "ProPhotoSkills の Photoguide Beginner：露出、構図、光、レタッチを分かりやすく解説――目次、試し読み、よくある質問。アカウントがあれば無料。",
      "worum": [
        "Beginner は写真の世界への入り口です。堅苦しい教科書ではなく、しっかりした基礎から本当の自信へと導く伴走者です。10章で、カメラ、露出、構図、ポートレート、風景、夜景、光、レタッチ、そしてポートフォリオを扱います。",
        "目的はルールを暗記することではなく、なぜ写真が心に響くのか、良い判断がどう生まれるのかを理解することです。PPS Books では Beginner を無料で読めます――必要なのはアカウントだけです。"
      ],
      "fuer": "初心者の方、そして基礎をきちんと整理したいすべての方。",
      "inhalt": [
        {
          "gruppe": null,
          "kapitel": [
            "第1章：プロフェッショナル写真入門",
            "第2章：正しいカメラ選び",
            "第3章：露出の基本",
            "第4章：完璧な構図",
            "第5章：ポートレート写真を極める",
            "第6章：風景写真を理解する",
            "第7章：夜景撮影の技術",
            "第8章：上級ライティングテクニック",
            "第9章：レタッチと画像の最適化",
            "第10章：作品の見せ方とポートフォリオづくり"
          ]
        }
      ],
      "leseproben": [
        {
          "kapitel": "第3章：露出の基本",
          "absaetze": [
            "露出の技術は、写真の核心にあります。それは、適正に露出された写真への道を開く鍵です。露出は、写真がどれだけ明るいか暗いか、そして明るい部分と暗い部分にどれだけのディテールが見えるかを決めます。これを使いこなすには、「露出の三角形」の要素――絞り、シャッタースピード、ISO感度――を正確に理解する必要があります。",
            "絞りはF値で表され、レンズを通ってセンサーに届く光の量をコントロールします。小さなF値（例：f/1.8）は多くの光を取り込み、暗い場所での撮影や、ポートレートでよく求められる背景のぼかしに最適です。大きなF値（例：f/16）は開口部を小さくし、被写界深度を深くしたい風景撮影に使われます。"
          ]
        },
        {
          "kapitel": "第4章：完璧な構図",
          "absaetze": [
            "構図の技術は、写真の心臓部です。それは見る人の注意を導き、写真の視覚的な効果を高める、目に見えない骨組みです。よく考えられた構図は美しいだけでなく、物語を伝えたり、特定の雰囲気を届けたりする助けにもなります。",
            "黄金比は、調和のとれたプロポーションを生み出すために、芸術や建築で広く使われている数学的な比率です。写真では、構図における理想的な比率を表すことがよくあります。三分割法はその実用的な近似で、水平線二本と垂直線二本で画面を区切り、同じ大きさの九つの区画をつくるという考え方です。重要な要素をこれらの線上や交点に配置すると、写真がダイナミックでバランスのとれたものになります。"
          ]
        }
      ],
      "artikel": [
        {
          "titel": "偏見 vs. 経験",
          "url": "https://prophotoskills.com/t05_e04_vorurteile-vs-erfahrungen/",
          "text": "特に始めたばかりの頃は、動画やフォーラム、ワークショップからたくさんのルールや意見を集めてしまうものです。Photoguide Next Level のこの無料の章は、どんな偏見よりも自分自身の経験が大切な理由を示します。試してみる、自分の道を進む、そして自分の失敗から学ぶことです。"
        },
        {
          "titel": "あまたのコーチたち……",
          "url": "https://prophotoskills.com/t05_e03_all_die_coaches/",
          "text": "始めたばかりの人は、すぐにコーチングの約束やステップごとのプランに出会います。Photoguide Next Level のこの無料の章は、本当の前進が内なる落ち着きと自分自身の考えから生まれる理由を説明します――次の「型」からではなく。"
        }
      ],
      "fragen": [
        {
          "frage": "露出の三角形とは何ですか？",
          "antwort": "絞り、シャッタースピード、ISO感度のことです。この三つが一緒になって、写真の明るさと、明るい部分と暗い部分にどれだけディテールが残るかを決めます。"
        },
        {
          "frage": "F値は、いつ小さく、いつ大きくすればいいですか？",
          "antwort": "f/1.8 のような小さなF値はたくさんの光を取り込み、背景をやわらかくぼかします――ポートレートや暗い場面に向いています。f/16 のような大きなF値は被写界深度を深くし、たとえば風景に向いています。"
        },
        {
          "frage": "動きを止めるシャッタースピードは？",
          "antwort": "1/1000秒のような速いシャッターは、スポーツなどの動きを止めます。1/30秒前後より遅いシャッターでは動きがぶれます――流れる水やライトペインティングに。"
        },
        {
          "frage": "三分割法とは何ですか？",
          "antwort": "水平線2本と垂直線2本で画面を9つに分け、大切な要素を線の上やその交点に置きます。こうすると、写真にバランスと動きが生まれます。"
        }
      ]
    }
  }
};

// Beschriftungen der Wissensseiten – folgen der Sprache der Seite, nicht der Sprachwahl oben
export const LABEL: Record<Sprache, Record<string, string>> = {
  "de": {
    "worum": "Worum es geht",
    "fuer": "Für wen: ",
    "lesen": "In PPS Books lesen",
    "lesenFrei": "Kostenlos in PPS Books lesen",
    "leseprobe": "Leseprobe",
    "inhalt": "Inhalt",
    "leseprobeTitel": "Leseprobe aus dem Buch",
    "artikelTitel": "Freie Kapitel aus dem Buch",
    "artikelTitelBg": "Weiterlesen: freie Kapitel",
    "artikelSub": "Kostenlos lesbar auf prophotoskills.com – hier kurz zusammengefasst.",
    "weiter": "Weiterlesen auf prophotoskills.com",
    "weiterApp": "Ganz lesen auf prophotoskills.com",
    "fragen": "Fragen & Antworten",
    "mehrFragen": "Mehr Antworten auf prophotoskills.com/faq",
    "kapitel": "Kapitel",
    "frei": "Kostenlos mit Konto",
    "weitere": "Weitere Photoguides",
    "photoguides": "Photoguides",
    "wissen": "Wissen",
    "titelZusatz": "Inhalt, Leseprobe & Fragen",
    "sprachen": "Sprachen",
    "auchIn": "Diese Seite gibt es auch auf {l}",
    "uebersichtSub": "Worum es in den Photoguides geht – mit Inhalt, Leseproben und Antworten auf häufige Fragen.",
    "uebersichtDesc": "Inhalt, Leseproben und Antworten zu den ProPhotoSkills-Photoguides Next Level, On Location und Beginner."
  },
  "en": {
    "worum": "What it's about",
    "fuer": "Who it's for: ",
    "lesen": "Read in PPS Books",
    "lesenFrei": "Read for free in PPS Books",
    "leseprobe": "Reading sample",
    "inhalt": "Contents",
    "leseprobeTitel": "Reading sample from the book",
    "artikelTitel": "Free chapters from the book",
    "artikelTitelBg": "Read on: free chapters",
    "artikelSub": "Free to read on prophotoskills.com (in German) – briefly summarised here.",
    "weiter": "Read on at prophotoskills.com (German)",
    "weiterApp": "Read in full on prophotoskills.com (German)",
    "fragen": "Questions & answers",
    "mehrFragen": "More answers at prophotoskills.com/faq (German)",
    "kapitel": "chapters",
    "frei": "Free with an account",
    "weitere": "More photoguides",
    "photoguides": "Photoguides",
    "wissen": "Knowledge",
    "titelZusatz": "contents, reading sample & FAQ",
    "sprachen": "Languages",
    "auchIn": "This page is also available in {l}",
    "uebersichtSub": "What the photoguides are about – with contents, reading samples and answers to common questions.",
    "uebersichtDesc": "Contents, reading samples and answers on the ProPhotoSkills photoguides Next Level, On Location and Beginner."
  },
  "fr": {
    "worum": "De quoi il s'agit",
    "fuer": "Pour qui : ",
    "lesen": "Lire dans PPS Books",
    "lesenFrei": "Lire gratuitement dans PPS Books",
    "leseprobe": "Extrait",
    "inhalt": "Sommaire",
    "leseprobeTitel": "Extrait du livre",
    "artikelTitel": "Chapitres gratuits du livre",
    "artikelTitelBg": "Pour aller plus loin : chapitres gratuits",
    "artikelSub": "À lire gratuitement sur prophotoskills.com (en allemand) – résumés ici.",
    "weiter": "Lire la suite sur prophotoskills.com (en allemand)",
    "weiterApp": "À lire en entier sur prophotoskills.com (en allemand)",
    "fragen": "Questions & réponses",
    "mehrFragen": "Plus de réponses sur prophotoskills.com/faq (en allemand)",
    "kapitel": "chapitres",
    "frei": "Gratuit avec un compte",
    "weitere": "Autres photoguides",
    "photoguides": "Photoguides",
    "wissen": "Savoir",
    "titelZusatz": "sommaire, extrait & questions",
    "sprachen": "Langues",
    "auchIn": "Cette page existe aussi en {l}",
    "uebersichtSub": "De quoi parlent les photoguides – avec sommaire, extraits et réponses aux questions fréquentes.",
    "uebersichtDesc": "Sommaire, extraits et réponses sur les photoguides ProPhotoSkills Next Level, On Location et Beginner."
  },
  "it": {
    "worum": "Di cosa parla",
    "fuer": "Per chi: ",
    "lesen": "Leggi in PPS Books",
    "lesenFrei": "Leggi gratis in PPS Books",
    "leseprobe": "Estratto",
    "inhalt": "Indice",
    "leseprobeTitel": "Estratto dal libro",
    "artikelTitel": "Capitoli gratuiti dal libro",
    "artikelTitelBg": "Per continuare: capitoli gratuiti",
    "artikelSub": "Da leggere gratis su prophotoskills.com (in tedesco) – qui in breve.",
    "weiter": "Continua a leggere su prophotoskills.com (in tedesco)",
    "weiterApp": "Da leggere per intero su prophotoskills.com (in tedesco)",
    "fragen": "Domande e risposte",
    "mehrFragen": "Altre risposte su prophotoskills.com/faq (in tedesco)",
    "kapitel": "capitoli",
    "frei": "Gratis con un account",
    "weitere": "Altri photoguide",
    "photoguides": "Photoguide",
    "wissen": "Sapere",
    "titelZusatz": "indice, estratto e domande",
    "sprachen": "Lingue",
    "auchIn": "Questa pagina è disponibile anche in {l}",
    "uebersichtSub": "Di cosa parlano i photoguide – con indice, estratti e risposte alle domande frequenti.",
    "uebersichtDesc": "Indice, estratti e risposte sui photoguide ProPhotoSkills Next Level, On Location e Beginner."
  },
  "es": {
    "worum": "De qué trata",
    "fuer": "Para quién: ",
    "lesen": "Leer en PPS Books",
    "lesenFrei": "Leer gratis en PPS Books",
    "leseprobe": "Muestra",
    "inhalt": "Índice",
    "leseprobeTitel": "Muestra de lectura del libro",
    "artikelTitel": "Capítulos gratuitos del libro",
    "artikelTitelBg": "Para seguir leyendo: capítulos gratuitos",
    "artikelSub": "Lectura gratuita en prophotoskills.com (en alemán) – aquí, en resumen.",
    "weiter": "Seguir leyendo en prophotoskills.com (en alemán)",
    "weiterApp": "Lectura completa en prophotoskills.com (en alemán)",
    "fragen": "Preguntas y respuestas",
    "mehrFragen": "Más respuestas en prophotoskills.com/faq (en alemán)",
    "kapitel": "capítulos",
    "frei": "Gratis con una cuenta",
    "weitere": "Más photoguides",
    "photoguides": "Photoguides",
    "wissen": "Conocimiento",
    "titelZusatz": "índice, muestra y preguntas",
    "sprachen": "Idiomas",
    "auchIn": "Esta página también está disponible en {l}",
    "uebersichtSub": "De qué tratan los photoguides – con índice, muestras de lectura y respuestas a preguntas frecuentes.",
    "uebersichtDesc": "Índice, muestras de lectura y respuestas sobre los photoguides de ProPhotoSkills Next Level, On Location y Beginner."
  },
  "pt": {
    "worum": "Do que se trata",
    "fuer": "Para quem: ",
    "lesen": "Ler no PPS Books",
    "lesenFrei": "Ler grátis no PPS Books",
    "leseprobe": "Amostra",
    "inhalt": "Índice",
    "leseprobeTitel": "Amostra de leitura do livro",
    "artikelTitel": "Capítulos gratuitos do livro",
    "artikelTitelBg": "Para continuar: capítulos gratuitos",
    "artikelSub": "Leitura gratuita em prophotoskills.com (em alemão) – aqui, em resumo.",
    "weiter": "Continuar lendo em prophotoskills.com (em alemão)",
    "weiterApp": "Leitura completa em prophotoskills.com (em alemão)",
    "fragen": "Perguntas e respostas",
    "mehrFragen": "Mais respostas em prophotoskills.com/faq (em alemão)",
    "kapitel": "capítulos",
    "frei": "Grátis com uma conta",
    "weitere": "Mais photoguides",
    "photoguides": "Photoguides",
    "wissen": "Conhecimento",
    "titelZusatz": "índice, amostra e perguntas",
    "sprachen": "Idiomas",
    "auchIn": "Esta página também está disponível em {l}",
    "uebersichtSub": "Do que tratam os photoguides – com índice, amostras de leitura e respostas às perguntas frequentes.",
    "uebersichtDesc": "Índice, amostras de leitura e respostas sobre os photoguides da ProPhotoSkills Next Level, On Location e Beginner."
  },
  "el": {
    "worum": "Περί τίνος πρόκειται",
    "fuer": "Για ποιους: ",
    "lesen": "Διάβασέ το στο PPS Books",
    "lesenFrei": "Διάβασέ το δωρεάν στο PPS Books",
    "leseprobe": "Απόσπασμα",
    "inhalt": "Περιεχόμενα",
    "leseprobeTitel": "Απόσπασμα από το βιβλίο",
    "artikelTitel": "Δωρεάν κεφάλαια από το βιβλίο",
    "artikelTitelBg": "Συνέχεια: δωρεάν κεφάλαια",
    "artikelSub": "Δωρεάν ανάγνωση στο prophotoskills.com (στα γερμανικά) – εδώ συνοπτικά.",
    "weiter": "Συνέχεια στο prophotoskills.com (στα γερμανικά)",
    "weiterApp": "Ολόκληρο στο prophotoskills.com (στα γερμανικά)",
    "fragen": "Ερωτήσεις & απαντήσεις",
    "mehrFragen": "Περισσότερες απαντήσεις στο prophotoskills.com/faq (στα γερμανικά)",
    "kapitel": "κεφάλαια",
    "frei": "Δωρεάν με λογαριασμό",
    "weitere": "Περισσότεροι photoguides",
    "photoguides": "Photoguides",
    "wissen": "Γνώση",
    "titelZusatz": "περιεχόμενα, απόσπασμα & ερωτήσεις",
    "sprachen": "Γλώσσες",
    "auchIn": "Αυτή η σελίδα υπάρχει και στα {l}",
    "uebersichtSub": "Τι πραγματεύονται οι photoguides – με περιεχόμενα, αποσπάσματα και απαντήσεις σε συχνές ερωτήσεις.",
    "uebersichtDesc": "Περιεχόμενα, αποσπάσματα και απαντήσεις για τους photoguides της ProPhotoSkills Next Level, On Location και Beginner."
  },
  "ja": {
    "worum": "この本について",
    "fuer": "対象：",
    "lesen": "PPS Books で読む",
    "lesenFrei": "PPS Books で無料で読む",
    "leseprobe": "試し読み",
    "inhalt": "目次",
    "leseprobeTitel": "本書からの試し読み",
    "artikelTitel": "本書から無料で読める章",
    "artikelTitelBg": "さらに読む：無料の章",
    "artikelSub": "prophotoskills.com で無料で読めます（ドイツ語）――ここでは要約を紹介します。",
    "weiter": "prophotoskills.com で続きを読む（ドイツ語）",
    "weiterApp": "全文は prophotoskills.com で（ドイツ語）",
    "fragen": "よくある質問",
    "mehrFragen": "その他の回答は prophotoskills.com/faq へ（ドイツ語）",
    "kapitel": "章",
    "frei": "アカウントがあれば無料",
    "weitere": "ほかの Photoguide",
    "photoguides": "Photoguides",
    "wissen": "ナレッジ",
    "titelZusatz": "目次・試し読み・質問",
    "sprachen": "言語",
    "auchIn": "このページは{l}でもご覧いただけます",
    "uebersichtSub": "各 Photoguide の内容――目次、試し読み、よくある質問への回答。",
    "uebersichtDesc": "ProPhotoSkills の Photoguide「Next Level」「On Location」「Beginner」の目次、試し読み、よくある質問。"
  }
};

// Kurzzeile für die Buch-Kacheln „Weitere Photoguides“
export const ZEILE: Record<Sprache, Record<string, string>> = {
  "de": {
    "nextlevel": "Wissen, Haltung und Struktur für den Weg in die Werbefotografie",
    "onlocation": "Travel, Location, Insurance und Equipment für Shootings vor Ort",
    "beginner": "Belichtung, Komposition, Licht – kostenlos mit Konto"
  },
  "en": {
    "nextlevel": "Knowledge, attitude and structure on the way into advertising photography",
    "onlocation": "Travel, Location, Insurance and Equipment for shoots on location",
    "beginner": "Exposure, composition, light – free with an account"
  },
  "fr": {
    "nextlevel": "Savoir, attitude et structure pour entrer dans la photographie publicitaire",
    "onlocation": "Travel, Location, Insurance et Equipment pour les shootings sur place",
    "beginner": "Exposition, composition, lumière – gratuit avec un compte"
  },
  "it": {
    "nextlevel": "Conoscenza, atteggiamento e struttura verso la fotografia pubblicitaria",
    "onlocation": "Travel, Location, Insurance ed Equipment per gli shooting sul posto",
    "beginner": "Esposizione, composizione, luce – gratis con un account"
  },
  "es": {
    "nextlevel": "Conocimiento, actitud y estructura hacia la fotografía publicitaria",
    "onlocation": "Travel, Location, Insurance y Equipment para sesiones en exteriores",
    "beginner": "Exposición, composición, luz – gratis con una cuenta"
  },
  "pt": {
    "nextlevel": "Conhecimento, atitude e estrutura rumo à fotografia publicitária",
    "onlocation": "Travel, Location, Insurance e Equipment para sessões em locação",
    "beginner": "Exposição, composição, luz – grátis com uma conta"
  },
  "el": {
    "nextlevel": "Γνώση, στάση και δομή στον δρόμο προς τη διαφημιστική φωτογραφία",
    "onlocation": "Travel, Location, Insurance και Equipment για φωτογραφίσεις επί τόπου",
    "beginner": "Έκθεση, σύνθεση, φως – δωρεάν με λογαριασμό"
  },
  "ja": {
    "nextlevel": "広告写真への道のための知識・姿勢・構造",
    "onlocation": "ロケ撮影のための Travel・Location・Insurance・Equipment",
    "beginner": "露出、構図、光――アカウントがあれば無料"
  }
};

export function istSprache(x: string): x is Sprache {
  return (SPRACHEN as readonly string[]).includes(x);
}

// Adresse einer Wissensseite: Deutsch ohne Sprachkürzel, sonst /wissen/<buch>/<sprache>
export function wissenPfad(buch: string, sprache: Sprache): string {
  return sprache === "de" ? `/wissen/${buch}` : `/wissen/${buch}/${sprache}`;
}

export function wissenFuer(id: string, sprache: Sprache = "de"): Wissen | undefined {
  return WISSEN[sprache]?.[id];
}
