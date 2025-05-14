
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
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
            <CardTitle className="text-3xl font-bold text-foreground">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 prose prose-sm sm:prose-base max-w-none text-muted-foreground leading-relaxed">
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
            <p>Welcome to AI Tool Finder! These terms and conditions outline the rules and regulations for the use of AI Tool Finder's Website, located at [Your Website URL].</p>
            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use AI Tool Finder if you do not agree to take all of the terms and conditions stated on this page.</p>

            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Intellectual Property Rights</h2>
            <p>Other than the content you own, under these Terms, AI Tool Finder and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.</p>

            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Publishing any Website material in any other media;</li>
              <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
              <li>Publicly performing and/or showing any Website material;</li>
              <li>Using this Website in any way that is or may be damaging to this Website;</li>
              <li>Using this Website in any way that impacts user access to this Website;</li>
              <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
              <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
              <li>Using this Website to engage in any advertising or marketing.</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Your Content</h2>
            <p>In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant AI Tool Finder a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p>
            <p>Your Content must be your own and must not be invading any third-party’s rights. AI Tool Finder reserves the right to remove any of Your Content from this Website at any time without notice.</p>

            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">5. No warranties</h2>
            <p>This Website is provided “as is,” with all faults, and AI Tool Finder express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p>

            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">6. Limitation of liability</h2>
            <p>In no event shall AI Tool Finder, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. AI Tool Finder, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
            
            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">7. Governing Law & Jurisdiction</h2>
            <p>These Terms will be governed by and interpreted in accordance with the laws of [Your State/Country], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your State/Country] for the resolution of any disputes.</p>

            <p className="mt-8"><em>Last updated: {new Date().toLocaleDateString()}</em></p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
