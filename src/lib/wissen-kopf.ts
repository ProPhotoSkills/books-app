// v23: Kopf (Titel, Beschreibung, canonical, hreflang, Open Graph, JSON-LD) einer Wissensseite – je Sprache
import { gateUrl } from "@/lib/books";
import { LABEL, SEITE, SPRACHEN, WISSEN, wissenPfad, type Sprache, type Wissen } from "@/lib/wissen";

const OG_LOCALE: Record<Sprache, string> = {
  de: "de_DE", en: "en_US", fr: "fr_FR", it: "it_IT", es: "es_ES", pt: "pt_BR", el: "el_GR", ja: "ja_JP",
};

export function wissenKopf(buch: string, sprache: Sprache) {
  const w = WISSEN[sprache][buch];
  if (!w) return { meta: [{ title: "PPS Books" }] };
  const url = `${SEITE}${wissenPfad(buch, sprache)}`;
  return {
    meta: [
      { title: `${w.titel} – ${LABEL[sprache].titelZusatz} | PPS Books` },
      { name: "description", content: w.kurz },
      { property: "og:type", content: "book" },
      { property: "og:title", content: w.titel },
      { property: "og:description", content: w.kurz },
      { property: "og:url", content: url },
      { property: "og:image", content: gateUrl(`/cover/${buch}/${sprache}`) },
      { property: "og:locale", content: OG_LOCALE[sprache] },
    ],
    links: [
      { rel: "canonical", href: url },
      ...SPRACHEN.map((l) => ({ rel: "alternate", hrefLang: l, href: `${SEITE}${wissenPfad(buch, l)}` })),
      { rel: "alternate", hrefLang: "x-default", href: `${SEITE}${wissenPfad(buch, "de")}` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd(buch, sprache, w, url)) }],
  };
}

function jsonLd(id: string, sprache: Sprache, w: Wissen, url: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Book",
        "@id": `${url}#buch`,
        name: w.titel,
        description: w.worum.join(" "),
        url,
        image: gateUrl(`/cover/${id}/${sprache}`),
        inLanguage: sprache,
        bookFormat: "https://schema.org/EBook",
        author: { "@type": "Person", name: "Eric P." },
        publisher: { "@type": "Organization", name: "ProPhotoSkills", url: "https://prophotoskills.com/" },
        isAccessibleForFree: id === "beginner",
        hasPart: w.inhalt.flatMap((g) => g.kapitel).map((k, i) => ({ "@type": "Chapter", position: i + 1, name: k })),
        ...(w.artikel.length ? { subjectOf: w.artikel.map((a) => ({ "@type": "Article", headline: a.titel, url: a.url, inLanguage: "de" })) } : {}),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#fragen`,
        inLanguage: sprache,
        mainEntity: w.fragen.map((f) => ({ "@type": "Question", name: f.frage, acceptedAnswer: { "@type": "Answer", text: f.antwort } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Books", item: `${SEITE}/` },
          { "@type": "ListItem", position: 2, name: LABEL[sprache].wissen, item: `${SEITE}/wissen` },
          { "@type": "ListItem", position: 3, name: w.titel, item: url },
        ],
      },
    ],
  };
}
