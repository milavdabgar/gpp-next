import { notFound } from "next/navigation";
import Link from "next/link";
import { PublicNav } from "@/components/public-nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { getAnnouncementBySlug, getSortedAnnouncements } from "@/data/announcements";
import { ArrowLeft, Calendar, Download, FileText, Tag } from "lucide-react";
import { PdfViewer } from "@/components/PdfViewer";

// ------------------------------------------------------------------
// Generate static params from the announcements data
// ------------------------------------------------------------------
export async function generateStaticParams() {
  return getSortedAnnouncements()
    .filter((a) => a.hasDetailPage)
    .map((a) => ({ slug: a.slug }));
}

// ------------------------------------------------------------------
// Metadata
// ------------------------------------------------------------------
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ann = getAnnouncementBySlug(slug);
  if (!ann) return { title: "Announcement Not Found" };
  return {
    title: `${ann.title} | GP Palanpur`,
    description: `${ann.category} announcement from Government Polytechnic Palanpur dated ${ann.date}`,
  };
}

// ------------------------------------------------------------------
// Category badge colours
// ------------------------------------------------------------------
const CATEGORY_STYLES: Record<string, string> = {
  admission:     "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  exam:          "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  recruitment:   "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  event:         "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
  result:        "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
  scholarship:   "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
  accreditation: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
  general:       "bg-gray-100 text-gray-800 dark:bg-gray-700/60 dark:text-gray-300",
};

// ------------------------------------------------------------------
// Page
// ------------------------------------------------------------------
export default async function AnnouncementDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ann = getAnnouncementBySlug(slug);

  if (!ann || !ann.hasDetailPage) {
    notFound();
  }

  // Sidebar: 4 most recent other announcements for quick navigation
  const related = getSortedAnnouncements()
    .filter((a) => a.id !== ann.id && a.hasDetailPage)
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <PublicNav />

      <main className="flex-1 bg-gray-50 dark:bg-gray-950 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

          {/* Back button */}
          <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2 text-gray-600 dark:text-gray-400">
            <Link href="/announcements">
              <ArrowLeft className="mr-1.5 h-4 w-4" />
              All Announcements
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ── Main content ── */}
            <article className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {ann.isNew && (
                  <span className="inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground uppercase tracking-wider">
                    NEW
                  </span>
                )}
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${
                    CATEGORY_STYLES[ann.category] ?? CATEGORY_STYLES.general
                  }`}
                >
                  <Tag className="h-3 w-3" />
                  {ann.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <Calendar className="h-3 w-3" />
                  {ann.date}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-snug mb-6">
                {ann.title}
              </h1>

              {/* Body */}
              {ann.content ? (
                <div
                  className="prose prose-gray dark:prose-invert max-w-none text-gray-700 dark:text-gray-300
                             prose-headings:font-semibold prose-headings:text-gray-900 dark:prose-headings:text-white
                             prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                             prose-ul:list-disc prose-ul:pl-5 prose-li:my-1"
                  dangerouslySetInnerHTML={{ __html: ann.content }}
                />
              ) : (
                <p className="text-gray-500 dark:text-gray-400 italic">
                  No additional details available.
                </p>
              )}

              {/* Attachment — PDF viewer + download */}
              {ann.attachment && (
                <div className="mt-8 space-y-4">
                  {ann.attachment.url.endsWith('.pdf') && (
                    <PdfViewer url={ann.attachment.url} title={ann.attachment.label} />
                  )}
                  <a
                    href={ann.attachment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/5 hover:bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    {ann.attachment.label}
                  </a>
                </div>
              )}
            </article>

            {/* ── Sidebar ── */}
            <aside className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-5">
                <h2 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
                  Recent Announcements
                </h2>
                {related.length === 0 ? (
                  <p className="text-sm text-gray-500 dark:text-gray-400">No other announcements.</p>
                ) : (
                  <ul className="space-y-3">
                    {related.map((r) => (
                      <li key={r.id}>
                        <Link
                          href={`/announcements/${r.slug}`}
                          className="group block"
                        >
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-primary transition-colors leading-snug line-clamp-2">
                            {r.title}
                          </p>
                          <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-500">{r.date}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
                  <Link
                    href="/announcements"
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    View all announcements →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
