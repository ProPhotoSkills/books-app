import { createFileRoute, notFound } from "@tanstack/react-router";

import { Reader } from "@/components/reader";
import { findBook } from "@/lib/books";

export const Route = createFileRoute("/lesen/$buch")({
  loader: ({ params }) => {
    const book = findBook(params.buch);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.book.title ?? "Buch"} – PPS Books` }],
  }),
  component: ReaderPage,
});

function ReaderPage() {
  const { book } = Route.useLoaderData();
  return <Reader book={book} />;
}
