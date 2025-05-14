
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

// Updated mock data fetching function
async function getToolDetails(id: string): Promise<Tool | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  const mockTools: Tool[] = [
    { id: "t1", name: "ChatGPT", description: "Versatile AI assistant for text generation and more. OpenAI's flagship model for advanced text, audio, and image understanding.", logoUrl: "https://placehold.co/128x128.png", link: "https://chat.openai.com/", tags: ["Freemium", "LLM", "OpenAI", "Multimodal"], category: "Text Generation" },
    { id: "t2", name: "Claude", description: "AI assistant known for thoughtful, human-like conversations. Focuses on safety and helpfulness.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.anthropic.com/index/claude", tags: ["Freemium", "Conversational", "Anthropic", "Ethical AI"], category: "Text Generation" },
    { id: "t3", name: "Google Gemini", description: "Excels in creative tasks and document summarization. Google's powerful multimodal AI.", logoUrl: "https://placehold.co/128x128.png", link: "https://gemini.google.com/", tags: ["Freemium", "Multimodal", "Google", "Creative"], category: "Text Generation" },
    { id: "t4", name: "Jasper AI", description: "AI writing assistant tailored for marketers and content creators. Helps create high-quality marketing copy.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.jasper.ai/", tags: ["Paid", "Free Trial", "Copywriting", "Marketing"], category: "Marketing" },
    { id: "t5", name: "Copy.ai", description: "AI-powered writing generators for marketing and more. Produces various forms of marketing content.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.copy.ai/tools", tags: ["Freemium", "Content Generation", "Marketing Automation"], category: "Marketing" },
    { id: "t6", name: "Writesonic", description: "AI writing for blogs, marketing & ads with SEO optimization. Includes tools like Article Writer and Paraphraser.", logoUrl: "https://placehold.co/128x128.png", link: "https://writesonic.com/", tags: ["Freemium", "SEO", "Blogging", "Ad Copy"], category: "Marketing" },
    { id: "t7", name: "Rytr", description: "Affordable AI writing tool for various content creation needs. Offers multiple use cases and tones.", logoUrl: "https://placehold.co/128x128.png", link: "https://rytr.me/", tags: ["Freemium", "Affordable", "Content Creation", "Versatile"], category: "Text Generation" },
    { id: "t8", name: "Frase", description: "AI-driven blog post creation & SEO research. Helps optimize content for search engines.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.frase.io/", tags: ["Paid", "Free Trial", "SEO", "Content Optimization", "Research"], category: "Research" },
    { id: "t9", name: "Grammarly", description: "AI writing tools for effortless writing and editing. Provides grammar, spelling, and style checks.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.grammarly.com/ai/ai-writing-tools", tags: ["Freemium", "Writing Assistant", "Editing", "Proofreading"], category: "Productivity" },
    { id: "t10", name: "INK Editor", description: "AI writing assistant for SEO-friendly content creation. Combines AI writing with SEO optimization features.", logoUrl: "https://placehold.co/128x128.png", link: "https://inkforall.com/", tags: ["Freemium", "SEO Content", "AI Editor", "Optimization"], category: "Productivity" },
    { id: "t11", name: "Wordtune", description: "AI-powered writing assistant for rewriting and improving content. Helps rephrase sentences and adjust tone.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.wordtune.com/", tags: ["Freemium", "Rewriter", "Editing", "Clarity"], category: "Productivity" },
    { id: "t12", name: "QuillBot", description: "AI-powered paraphrasing and summarization tool. Useful for academic writing and content reworking.", logoUrl: "https://placehold.co/128x128.png", link: "https://quillbot.com/", tags: ["Freemium", "Paraphraser", "Summarizer", "Academic"], category: "Productivity" },
  ];
  return mockTools.find(tool => tool.id === id) || null;
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

export async function generateStaticParams() {
  const mockToolIds = ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10", "t11", "t12"]; 
  return mockToolIds.map((id) => ({ id }));
}
