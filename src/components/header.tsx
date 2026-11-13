import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const PPS_YELLOW = "#f8e800";

/**
 * Kopfzeile im Stil des KI-Coachs (gelber Balken).
 * Google-Play-Regel (KONZEPT_pps-books_v3): in PPS Books keine Links zu
 * Kauf- oder Produktseiten – darum ist das Logo hier kein Link nach draußen.
 */
export function Header({ right }: { right?: ReactNode }) {
  return (
    <header style={{ backgroundColor: PPS_YELLOW }} className="border-b border-black/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src="/assets/photoskills-logo.png"
            alt="ProPhotoSkills"
            className="h-6 sm:h-7 w-auto max-w-[180px] object-contain"
          />
          <span className="truncate font-semibold tracking-tight text-sm sm:text-base text-stone-900/90">
            PPS Books
          </span>
        </Link>
        <div className="flex items-center gap-2 shrink-0">{right}</div>
      </div>
    </header>
  );
}
