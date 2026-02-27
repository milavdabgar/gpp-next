import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Globe, Phone, MapPin } from 'lucide-react';

export default function SpectrumNewsletterPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">
          Spectrum Newsletter
        </h1>
        <p className="text-xl text-gray-600 mb-2 dark:text-gray-400">
          Electronics & Communication Engineering Department
        </p>
        <p className="text-lg text-gray-500 mb-4 dark:text-gray-400">
          Government Polytechnic, Palanpur
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <Badge variant="outline" className="text-lg px-4 py-2">
            Band III
          </Badge>
          <Badge variant="outline" className="text-lg px-4 py-2">
            2023-24
          </Badge>
        </div>
      </div>

      {/* Newsletter Preview Card */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Newsletter Overview</CardTitle>
          <CardDescription>
            Annual newsletter showcasing department achievements, faculty excellence, 
            student success stories, and technological innovations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">85%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Placement Rate</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Research Papers</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">150+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Students</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">₹4.8L</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Package</div>
            </div>
          </div>

          <div className="prose max-w-none">
            <h3>Featured Content</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li>Principal&apos;s Message & Vision</li>
              <li>HOD&apos;s Message & Department Updates</li>
              <li>Faculty Achievements & Research</li>
              <li>Student Excellence & Awards</li>
              <li>Placement Success Stories</li>
              <li>Industry Partnerships</li>
              <li>Infrastructure Development</li>
              <li>Future Roadmap & Vision 2030</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>
            Get in touch with the Electronics & Communication Engineering Department
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Government Polytechnic, Deesa Road<br />
                    Palanpur, Banaskantha<br />
                    Gujarat - 385001, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Principal: +91-2742-251793<br />
                    EC Department: +91-2742-251794
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    principal.gpp@gujaratpoly.in<br />
                    hod.ec.gpp@gujaratpoly.in
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Globe className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium">Website</p>
                  <a 
                    href="https://www.gpp.edu.in" 
                    className="text-sm text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.gpp.edu.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
