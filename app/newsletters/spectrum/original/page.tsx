'use client';

import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Printer } from 'lucide-react';

export default function OriginalHTMLNewsletterPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePrint = () => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.print();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Toolbar */}
      <div className="sticky top-0 z-50 bg-white border-b shadow-sm dark:bg-gray-900 dark:border-gray-700">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Spectrum Newsletter</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Original Design Version</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
              className="flex items-center space-x-2"
            >
              <Printer className="h-4 w-4" />
              <span>Print</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Newsletter Content */}
      <div className="container mx-auto px-4 py-6">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <iframe
              ref={iframeRef}
              src="/newsletters/spectrum-band-3.html"
              className="w-full border-0"
              style={{ height: '100vh', minHeight: '800px' }}
              title="Spectrum Newsletter"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
