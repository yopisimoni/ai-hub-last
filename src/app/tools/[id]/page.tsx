
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

// Mock data fetching function - replace with actual Firebase data fetching
async function getToolDetails(id: string): Promise<Tool | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  const mockTools: Tool[] = [
    { id: "1", name: "GPT-4o", description: "OpenAI's newest flagship model, GPT-4o ('o' for 'omni'), can reason across audio, vision, and text in real time. It matches GPT-4 Turbo performance on text in English and code, with significant improvement on text in non-English languages, while also being much faster and 50% cheaper in the API. GPT-4o is especially better at vision and audio understanding compared to existing models.", logoUrl: "https://placehold.co/128x128.png", link: "https://openai.com/index/hello-gpt-4o/", tags: ["LLM", "Multimodal", "OpenAI", "Real-time", "Vision", "Audio"], category: "Text Generation" },
    { id: "2", name: "Midjourney V6", description: "Midjourney V6 is an advanced AI image generator renowned for its artistic capabilities and photorealistic outputs. It offers enhanced prompt understanding, improved image coherence, and the ability to generate text within images. V6 provides users with greater control over their creations, pushing the boundaries of AI-generated art.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.midjourney.com", tags: ["Image Generation", "Art", "Photorealism", "AI Art", "Prompting"], category: "Image Generation" },
    { id: "3", name: "GitHub Copilot Workspace", description: "GitHub Copilot Workspace is an AI-powered development environment designed to streamline the coding process from idea to execution. It assists developers in planning, building, testing, and debugging code by providing intelligent suggestions, generating boilerplate, and offering contextual insights directly within their workspace.", logoUrl: "https://placehold.co/128x128.png", link: "https://github.com/features/copilot", tags: ["Code", "Developer Tool", "IDE", "AI Pair Programmer", "Productivity"], category: "Code Assistant" },
  ]; // Add more mock tools to cover other IDs if needed for testing
  return mockTools.find(tool => tool.id === id) || mockTools[0]; // Fallback to first tool for demo
}

export default async function ToolDetailPage({ params }: { params: { id: string } }) {
  const tool = await getToolDetails(params.id);

  // Even with fallback, good to keep a check
  if (!tool) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <Info className="mx-auto h-16 w-16 text-destructive mb-4" />
          <h1 className="text-3xl font-semibold">Tool Not Found</h1>
          <p className="text-muted-foreground mt-2">Sorry, we couldn't find the details for this tool.</p>
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
            
            {/* Placeholder for additional sections */}
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
                Information about {tool.name} is subject to change. Please visit the official website for the most up-to-date details. (Last mock update: {new Date().toLocaleDateString()})
             </p>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

// Optional: Generate static paths if you have a fixed set of tools and want to pre-render them
// This should be dynamic based on actual data source in a real app
export async function generateStaticParams() {
  const mockToolIds = ["1", "2", "3", "4", "5", "6", "7", "8"]; 
  return mockToolIds.map((id) => ({ id }));
}
