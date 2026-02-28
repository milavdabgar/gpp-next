import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PublicNav } from '@/components/public-nav';
import { Footer } from '@/components/footer';
import { ArrowRight, BookOpen } from 'lucide-react';

const newsletters = [
  {
    id: 'spectrum',
    title: 'Spectrum',
    department: 'Electronics & Communication Engineering',
    description:
      'Annual newsletter of the EC department featuring student achievements, faculty highlights, industrial visits, workshops, innovations, and campus events.',
    latestBand: 'Band III',
    latestYear: '2023–24',
    href: '/newsletters/spectrum/interactive',
  },
];

export default function NewslettersPage() {
  return (
    <>
      <PublicNav />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Newsletters
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Department newsletters published by Government Polytechnic Palanpur.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {newsletters.map((nl) => (
            <Link key={nl.id} href={nl.href} className="group block">
              <Card className="h-full hover:shadow-md transition-shadow border-gray-200 dark:border-gray-700">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline">{nl.latestBand}</Badge>
                      <Badge variant="outline">{nl.latestYear}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl mt-3 group-hover:text-primary transition-colors">
                    {nl.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {nl.department}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {nl.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-primary gap-1 group-hover:gap-2 transition-all">
                    Read newsletter
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
