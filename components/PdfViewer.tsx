"use client";

import { useState } from "react";
import { FileText, AlertCircle, Loader2 } from "lucide-react";

interface PdfViewerProps {
  /** The public URL of the PDF file, e.g. /documents/nba/ec-esar-nba-2026.pdf */
  url: string;
  /** Accessible title for the iframe */
  title?: string;
}

type LoadState = "loading" | "loaded" | "error";

/**
 * Renders an embedded PDF viewer.
 * - Shows a loading skeleton while the iframe is initialising.
 * - Falls back gracefully with a friendly message and the expected file path
 *   when the PDF has not yet been uploaded.
 *
 * To display the PDF, place the file at:
 *   public/<url>   (e.g. public/documents/nba/ec-esar-nba-2026.pdf)
 */
export function PdfViewer({ url, title = "PDF Document" }: PdfViewerProps) {
  const [state, setState] = useState<LoadState>("loading");

  return (
    <div className="w-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      {/* Header bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <FileText className="h-4 w-4 text-primary flex-shrink-0" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
          {title}
        </span>
      </div>

      {/* Viewer area */}
      <div className="relative min-h-[600px]">

        {/* Loading skeleton */}
        {state === "loading" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900">
            <Loader2 className="h-8 w-8 animate-spin" />
            <p className="text-sm">Loading document…</p>
          </div>
        )}

        {/* Error / not-yet-uploaded fallback */}
        {state === "error" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center bg-gray-50 dark:bg-gray-900">
            <AlertCircle className="h-10 w-10 text-amber-500" />
            <div>
              <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
                PDF not yet available
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                The document will appear here once it is uploaded.
              </p>
            </div>
            <div className="rounded-lg border border-dashed border-amber-400/60 bg-amber-50 dark:bg-amber-900/20 px-5 py-3 text-left max-w-md">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 uppercase tracking-wide mb-1">
                Upload instructions
              </p>
              <p className="text-xs text-amber-700 dark:text-amber-400">
                Place the PDF file at:
              </p>
              <code className="mt-1 block text-xs font-mono break-all text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/40 rounded px-2 py-1">
                public{url}
              </code>
              <p className="mt-2 text-xs text-amber-700 dark:text-amber-400">
                Then redeploy or restart the server. No code changes are needed.
              </p>
            </div>
          </div>
        )}

        {/* iframe — always rendered; shown once loaded */}
        <iframe
          src={url}
          title={title}
          className={`w-full min-h-[600px] border-0 transition-opacity duration-300 ${
            state === "loaded" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onLoad={() => setState("loaded")}
          onError={() => setState("error")}
        />
      </div>
    </div>
  );
}
