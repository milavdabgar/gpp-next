import Link from "next/link";
import { PublicNav } from "@/components/public-nav";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { getSortedAnnouncements } from "@/data/announcements";
import { Calendar, ChevronRight, Megaphone, Tag } from "lucide-react";

export const metadata = {
  title: "Announcements | Government Polytechnic Palanpur",
  description:
    "Latest announcements, notices, and updates from Government Polytechnic Palanpur.",
};

const CATEGORY_STYLES: Record<string, string> = {
  admission:     "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-800",
  exam:          "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 border-amber-200 dark:border-amber-800",
  recruitment:   "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 border-green-200 dark:border-green-800",
  event:         "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 border-purple-200 dark:border-purple-800",
  result:        "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300 border-rose-200 dark:border-rose-800",
  scholarship:   "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300 border-teal-200 dark:border-teal-800",
  accreditation: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
  general:       "bg-gray-100 text-gray-700 dark:bg-gray-700/50 dark:text-gray-300 border-gray-200 dark:border-gray-700",
};

const CATEGORY_LABELS: Record<string, string> = {
  admission:     "Admission",
  exam:          "Examination",
  recruitment:   "Recruitment",
  event:         "Events",
  result:        "Results",
  scholarship:   "Scholarship / SSIP",
  accreditation: "NBA Accreditation",
  general:       "General",
};

export default function AnnouncementsPage() {
  const items = getSortedAnnouncements();

  return (
    <div className="flex flex-col min-h-screen">
      <PublicNav />

      <main className="flex-1 bg-gray-50 dark:bg-gray-950">
        {/* Page header */}
        <section className="bg-primary/5 dark:bg-primary/10 py-10 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <Megaphone className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Announcements
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              Latest notices, updates, and important information from Government Polytechnic Palanpur.
            </p>
          </div>
        </section>

        {/* List */}
        <section className="py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {items.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400 py-20">
                No announcements at the moment. Please check back later.
              </p>
            ) : (
              <ul className="space-y-3">
                {items.map((ann) => (
                  <li key={ann.id}>
                    {ann.hasDetailPage ? (
                      <Link
                        href={`/announcements/${ann.slug}`}
                        className="group flex items-start gap-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-5 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-sm transition-all"
                      >
                        <AnnRow ann={ann} />
                        <ChevronRight className="ml-auto h-5 w-5 text-gray-300 dark:text-gray-600 group-hover:text-primary flex-shrink-0 mt-0.5 transition-colors" />
                      </Link>
                    ) : (
                      <div className="flex items-start gap-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-5">
                        <AnnRow ann={ann} />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// --------------------------------------------------------------
// Sub-component for the row content (shared between link & div)
// --------------------------------------------------------------
function AnnRow({ ann }: { ann: ReturnType<typeof getSortedAnnouncements>[number] }) {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex flex-wrap items-center gap-2 mb-1.5">
        {ann.isNew && (
          <span className="inline-flex items-center rounded-full bg-primary px-2 py-px text-[10px] font-bold text-primary-foreground uppercase tracking-wider">
            NEW
          </span>
        )}
        <span
          className={`inline-flex items-center gap-1 rounded-full border px-2 py-px text-[11px] font-semibold capitalize ${
            CATEGORY_STYLES[ann.category] ?? CATEGORY_STYLES.general
          }`}
        >
          <Tag className="h-2.5 w-2.5" />
          {CATEGORY_LABELS[ann.category] ?? ann.category}
        </span>
        <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
          <Calendar className="h-3 w-3" />
          {ann.date}
        </span>
      </div>
      <p className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-primary transition-colors leading-snug">
        {ann.title}
      </p>
    </div>
  );
}
