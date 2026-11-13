import { createFileRoute } from "@tanstack/react-router";

import { Reader } from "@/components/reader";

// Das Buch kommt beim Öffnen vom Tor books-gate: /buch/<buch>/<sprache>
export const Route = createFileRoute("/lesen/$buch/$sprache")({
  head: () => ({ meta: [{ title: "PPS Books" }] }),
  component: ReaderPage,
});

function ReaderPage() {
  const { buch, sprache } = Route.useParams();
  return <Reader buchId={buch} sprache={sprache} />;
}
