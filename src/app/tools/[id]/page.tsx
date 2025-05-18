
// This is a Server Component by default
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Tool } from "@/types";
import { ArrowLeft, ExternalLink, Tag, Info, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Function to fetch all tools from the API
async function getAllTools(): Promise<Tool[]> {
  // For server-side fetching, use the full URL or ensure your environment is configured for relative paths
  // For local development, this should work if the Next.js dev server is serving both the app and the API.
  // In production, ensure NEXT_PUBLIC_APP_URL is set or use a relative path if your setup allows.
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'; // Fallback for local dev
  
  try {
    const response = await fetch(`${baseUrl}/api/tools`, {
      // You might want to add caching strategies here for production
      // e.g., next: { revalidate: 3600 } // Revalidate every hour
      cache: 'no-store', // For development, or if data changes very frequently
    });

    if (!response.ok) {
      console.error(`Failed to fetch tools for getToolDetails/generateStaticParams: ${response.status} ${response.statusText}`);
      const errorBody = await response.text();
      console.error("Error body:", errorBody);
      return []; // Return empty array on error to prevent build failure if possible, or throw
    }
    const tools = await response.json();
    return tools;
  } catch (error) {
    console.error("Exception fetching tools for getToolDetails/generateStaticParams:", error);
    return []; // Return empty array on exception
  }
}


async function getToolDetails(id: string): Promise<Tool | null> {
  const tools = await getAllTools();
  if (!tools || tools.length === 0) {
    return null;
  }
  const tool = tools.find(tool => tool.id === id);
  return tool || null;
}

export default async function ToolDetailPage({ params }: { params: { id: string } }) {
  const tool = await getToolDetails(params.id);

  if (!tool) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <Info className="mx-auto h-16 w-16 text-destructive mb-4" />
          <h1 className="text-3xl font-semibold">Tool Not Found</h1>
          <p className="text-muted-foreground mt-2">Sorry, we couldn't find the details for this tool, or there was an issue fetching data.</p>
          <Link href="/" className="mt-8 inline-block">
            <Button variant="default">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Tools
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button variant="outline" size="sm" asChild className="text-sm hover:bg-accent hover:text-accent-foreground">
            <Link href="/" >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all tools
            </Link>
          </Button>
        </div>

        <Card className="overflow-hidden shadow-xl rounded-xl">
          <CardHeader className="p-6 sm:p-8 bg-card border-b">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              <Image
                src={tool.logoUrl || "https://placehold.co/128x128.png"}
                alt={`${tool.name} logo`}
                width={120}
                height={120}
                className="rounded-xl border-2 border-border object-contain shadow-md shrink-0 aspect-square"
                data-ai-hint="logo brand"
              />
              <div className="flex-1">
                <Badge variant="secondary" className="mb-2 text-sm font-medium py-1 px-2.5">{tool.category}</Badge>
                <CardTitle className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">{tool.name}</CardTitle>
                <Button asChild size="lg" className="mt-6 w-full sm:w-auto text-base">
                  <Link href={tool.link} target="_blank" rel="noopener noreferrer">
                    Visit {tool.name} <ExternalLink className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 sm:p-8">
            <section aria-labelledby="about-tool-heading">
              <h2 id="about-tool-heading" className="text-2xl font-semibold mb-4 text-foreground">About {tool.name}</h2>
              <div className="prose prose-sm sm:prose-base max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                <p>{tool.description}</p>
              </div>
            </section>

            {tool.tags && tool.tags.length > 0 && (
              <section aria-labelledby="tags-heading" className="mt-8">
                <h3 id="tags-heading" className="text-xl font-semibold mb-3 text-foreground flex items-center">
                  <Tag className="mr-2 h-5 w-5 text-primary" /> Tags & Keywords
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm px-3 py-1 font-normal">{tag}</Badge>
                  ))}
                </div>
              </section>
            )}
            
            <section aria-labelledby="features-heading" className="mt-8 pt-6 border-t">
               <h3 id="features-heading" className="text-xl font-semibold mb-4 text-foreground">Key Features (Example)</h3>
               <ul className="space-y-2">
                 {["Advanced AI algorithms", "User-friendly interface", "Scalable for enterprise use", "Comprehensive documentation"].map(feature => (
                    <li key={feature} className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2.5 shrink-0" />
                      {feature}
                    </li>
                 ))}
               </ul>
            </section>

          </CardContent>
          <CardFooter className="p-6 sm:p-8 border-t bg-secondary/20">
             <p className="text-xs text-muted-foreground italic">
                Information about {tool.name} is subject to change. Please visit the official website for the most up-to-date details. (Data fetched: {new Date().toLocaleDateString()})
             </p>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const tools = await getAllTools();
  if (!tools || tools.length === 0) {
    console.warn("generateStaticParams: No tools found, cannot generate static paths.");
    return [];
  }
  return tools.map((tool) => ({ 
    id: tool.id 
  }));
}
