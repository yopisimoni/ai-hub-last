
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
           <Button variant="outline" size="sm" asChild className="text-sm hover:bg-accent hover:text-accent-foreground">
            <Link href="/" >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
        <Card className="shadow-lg rounded-xl">
          <CardHeader className="p-6 sm:p-8 border-b">
            <CardTitle className="text-3xl font-bold text-foreground">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 prose prose-sm sm:prose-base max-w-none text-muted-foreground leading-relaxed">
            <p>Your privacy is important to us. It is AI Tool Finder's policy to respect your privacy regarding any information we may collect from you across our website, [Your Website URL], and other sites we own and operate.</p>

            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Information we collect</h2>
            <p>Log data: When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.</p>
            <p>Device data: We may also collect data about the device you’re using to access our website. This data may include the device type, operating system, unique device identifiers, device settings, and geo-location data.</p>
            <p>Personal information: We may ask for personal information, such as your name and email address.</p>

            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Legal bases for processing</h2>
            <p>We will process your personal information lawfully, fairly and in a transparent manner. We collect and process information about you only where we have legal bases for doing so.</p>

            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Use of information</h2>
            <p>We may use the information we collect for a variety of purposes, including to:</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Provide, operate, and maintain our website;</li>
              <li>Improve, personalize, and expand our website;</li>
              <li>Understand and analyze how you use our website;</li>
              <li>Develop new products, services, features, and functionality;</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes;</li>
              <li>Send you emails;</li>
              <li>Find and prevent fraud.</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Security of your personal information</h2>
            <p>We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
            
            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">5. Links to other sites</h2>
            <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
            
            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">6. Changes to this policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

            <p className="mt-8"><em>Last updated: {new Date().toLocaleDateString()}</em></p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
