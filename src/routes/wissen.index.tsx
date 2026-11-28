import { createFileRoute } from "@tanstack/react-router";

import { WissenRahmen, WeitereBuecher } from "@/components/wissen-seite";
import { LABEL, SEITE } from "@/lib/wissen";

// v22: Übersicht der Wissensseiten – /wissen
export const Route = createFileRoute("/wissen/")({
  head: () => ({
    meta: [
      { title: "Wissen zu den Photoguides | PPS Books" },
      {
        name: "description",
        content: LABEL.de.uebersichtDesc,
      },
    ],
    links: [{ rel: "canonical", href: `${SEITE}/wissen` }],
  }),
  component: Uebersicht,
});

function Uebersicht() {
  return (
    <WissenRahmen>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: "#f8e800", textShadow: "0 2px 18px rgba(0,0,0,0.45), 0 1px 3px rgba(0,0,0,0.35)" }}>
        Wissen
      </h1>
      <p className="mt-3 max-w-2xl text-lg font-medium text-stone-900 drop-shadow-sm">
        {LABEL.de.uebersichtSub}
      </p>
      <WeitereBuecher />
    </WissenRahmen>
  );
}
