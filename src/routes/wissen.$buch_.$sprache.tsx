import { createFileRoute, notFound } from "@tanstack/react-router";

import { WissenSeite } from "@/components/wissen-seite";
import { WISSEN, istSprache } from "@/lib/wissen";
import { wissenKopf } from "@/lib/wissen-kopf";

// v23: Wissensseite in einer anderen Sprache – /wissen/<buch>/<sprache> (en, fr, it, es, pt, el, ja).
// Deutsch steht unter /wissen/<buch> (ohne Kürzel); /wissen/<buch>/de gibt es nicht (404) – keine doppelte Seite.
export const Route = createFileRoute("/wissen/$buch_/$sprache")({
  loader: ({ params }) => {
    const s = params.sprache;
    if (!istSprache(s) || s === "de") throw notFound();
    const w = WISSEN[s][params.buch];
    if (!w) throw notFound();
    return { id: params.buch, w, sprache: s };
  },
  head: ({ params }) => (istSprache(params.sprache) && params.sprache !== "de" ? wissenKopf(params.buch, params.sprache) : { meta: [{ title: "PPS Books" }] }),
  component: Seite,
});

function Seite() {
  const { id, w, sprache } = Route.useLoaderData();
  return <WissenSeite id={id} w={w} sprache={sprache} />;
}
