"use client";

import Link from "next/link";
import { useRef } from "react";
import { getSortedAnnouncements } from "@/data/announcements";
import { Megaphone } from "lucide-react";

const CATEGORY_COLORS: Record<string, string> = {
  admission:     "bg-blue-600",
  exam:          "bg-amber-600",
  recruitment:   "bg-green-700",
  event:         "bg-purple-600",
  result:        "bg-rose-600",
  scholarship:   "bg-teal-600",
  accreditation: "bg-indigo-600",
  general:       "bg-gray-600",
};

export function AnnouncementTicker() {
  const items = getSortedAnnouncements();
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate items for seamless infinite loop
  const doubled = [...items, ...items];

  const handleMouseEnter = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div className="bg-primary text-primary-foreground border-b border-primary/80 w-full overflow-hidden">
      <div className="flex items-stretch min-h-[38px]">
        {/* Label */}
        <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-primary-foreground/10 border-r border-primary-foreground/20 text-sm font-semibold tracking-wide whitespace-nowrap select-none">
          <Megaphone className="h-3.5 w-3.5 flex-shrink-0" aria-hidden />
          <span className="hidden sm:inline">Announcements</span>
          <span className="sm:hidden">News</span>
        </div>

        {/* Scrolling track */}
        <div
          className="flex-1 overflow-hidden relative flex items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={trackRef}
            className="animate-marquee flex items-center gap-0 whitespace-nowrap"
            aria-live="off"
            aria-label="Announcements ticker"
          >
            {doubled.map((ann, idx) => (
              <span key={`${ann.id}-${idx}`} className="flex items-center">
                {/* Separator */}
                <span className="mx-3 opacity-40 select-none" aria-hidden>|</span>

                {/* NEW badge */}
                {ann.isNew && (
                  <span className="mr-1.5 inline-flex items-center rounded-sm bg-white/20 px-1 py-px text-[10px] font-bold uppercase tracking-wider border border-white/30">
                    NEW
                  </span>
                )}

                {/* Category dot */}
                <span
                  className={`mr-1.5 inline-block h-2 w-2 rounded-full flex-shrink-0 ${CATEGORY_COLORS[ann.category] ?? "bg-gray-400"} opacity-80`}
                  title={ann.category}
                  aria-hidden
                />

                {/* Title – hyperlinked if it has a detail page */}
                {ann.hasDetailPage ? (
                  <Link
                    href={`/announcements/${ann.slug}`}
                    className="text-sm text-primary-foreground/95 hover:text-white hover:underline underline-offset-2 transition-colors"
                    tabIndex={idx >= items.length ? -1 : 0}
                    aria-hidden={idx >= items.length}
                  >
                    {ann.title}
                  </Link>
                ) : (
                  <span className="text-sm text-primary-foreground/90">
                    {ann.title}
                  </span>
                )}

                {/* Date */}
                <span className="ml-2 text-xs text-primary-foreground/60 flex-shrink-0">
                  ({ann.date})
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* "View All" link */}
        <div className="flex-shrink-0 flex items-center px-3 border-l border-primary-foreground/20 bg-primary-foreground/10">
          <Link
            href="/announcements"
            className="text-xs font-semibold text-primary-foreground/90 hover:text-white whitespace-nowrap hover:underline underline-offset-2 transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
}
