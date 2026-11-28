import { createFileRoute, notFound } from "@tanstack/react-router";

import { WissenSeite } from "@/components/wissen-seite";
import { WISSEN } from "@/lib/wissen";
import { wissenKopf } from "@/lib/wissen-kopf";

// Öffentliche Wissensseite je Buch, Deutsch: /wissen/nextlevel, /wissen/onlocation, /wissen/beginner
// (v22; v23: andere Sprachen unter /wissen/<buch>/<sprache>, siehe wissen.$buch.$sprache.tsx)
export const Route = createFileRoute("/wissen/$buch")({
  loader: ({ params }) => {
    const w = WISSEN.de[params.buch];
    if (!w) throw notFound();
    return { id: params.buch, w };
  },
  head: ({ params }) => wissenKopf(params.buch, "de"),
  component: Seite,
});

function Seite() {
  const { id, w } = Route.useLoaderData();
  return <WissenSeite id={id} w={w} sprache="de" />;
}
