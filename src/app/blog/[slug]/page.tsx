
// src/app/blog/[slug]/page.tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { BlogPost } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarDays, UserCircle, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data - In a real app, fetch this from Firebase or your CMS
const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "the-future-of-ai-in-2025",
    title: "The Future of AI: Predictions for 2025",
    date: "2024-07-15",
    excerpt: "Explore our bold predictions for the advancements and impact of artificial intelligence in the coming year. What new frontiers will AI conquer?",
    content: "<p>The year 2025 is poised to be a landmark year for artificial intelligence. We anticipate breakthroughs in several key areas, including more human-like conversational AI, wider adoption of AI in healthcare for diagnostics, and increasingly sophisticated AI-driven creative tools. Generative AI will continue its rapid evolution, producing content almost indistinguishable from human-created works.</p><p>Ethical considerations and regulatory frameworks will also mature, attempting to keep pace with the technological advancements. Expect to see more discussions around AI safety, bias mitigation, and the societal impact of widespread AI integration. The workforce will continue to adapt, with new roles emerging that require collaboration with AI systems.</p><p>Ultimately, 2025 will likely solidify AI's role as a transformative technology, deeply embedded in various aspects of our daily lives and industries.</p>",
    imageUrl: "https://placehold.co/800x450.png",
    author: "AI Insights Team",
    tags: ["AI Predictions", "Future Tech", "2025"],
    category: "AI Insights",
  },
  {
    id: "2",
    slug: "getting-started-with-llms",
    title: "A Beginner's Guide to Large Language Models (LLMs)",
    date: "2024-06-28",
    excerpt: "New to Large Language Models? This guide breaks down the basics, explaining what LLMs are, how they work, and their potential applications.",
    content: "<p>Large Language Models (LLMs) have taken the world by storm. But what exactly are they? At their core, LLMs are sophisticated AI models trained on vast amounts of text data to understand, generate, and manipulate human language. They power applications like chatbots, content creation tools, and code assistants.</p><p>Understanding LLMs involves grasping concepts like neural networks, transformers (the architecture behind many modern LLMs), and training data. While complex, the fundamental idea is to predict the next word in a sequence, allowing them to generate coherent and contextually relevant text.</p><p>The potential applications are vast, from revolutionizing customer service to aiding scientific research. As LLMs become more accessible, their impact will only continue to grow.</p>",
    imageUrl: "https://placehold.co/800x450.png",
    author: "Dr. Lexi Byte",
    tags: ["LLM", "Beginner Guide", "AI Education"],
    category: "Tutorials",
  },
  {
    id: "3",
    slug: "top-5-ai-image-generators",
    title: "Top 5 AI Image Generators You Should Try in 2024",
    date: "2024-05-10",
    excerpt: "We review the leading AI image generation tools, comparing their features, ease of use, and the quality of their outputs. Find the perfect tool for your creative projects.",
    content: "<p>The landscape of AI image generation is constantly evolving, with new tools and updates emerging regularly. In this review, we look at five of the top contenders in 2024 that are pushing the boundaries of creativity.</p><ol><li><strong>Midjourney:</strong> Known for its artistic and often surreal outputs, excellent for conceptual art.</li><li><strong>DALL-E 3:</strong> OpenAI's model, integrated with ChatGPT, excels at prompt understanding and generating detailed scenes.</li><li><strong>Stable Diffusion:</strong> An open-source powerhouse, highly customizable but with a steeper learning curve.</li><li><strong>Adobe Firefly:</strong> Integrated into Adobe's Creative Cloud, focuses on commercially safe and ethically sourced training data.</li><li><strong>Leonardo.Ai:</strong> Offers a suite of tools and fine-tuned models, great for game assets and consistent character generation.</li></ol><p>Each tool has its strengths and weaknesses, so the best choice depends on your specific needs and technical comfort level. Experimentation is key!</p>",
    imageUrl: "https://placehold.co/800x450.png",
    author: "Creative AI Corner",
    tags: ["Image Generation", "AI Tools", "Review"],
    category: "Tool Reviews",
  },
];

async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // In a real app, fetch this from Firebase or your CMS
  await new Promise(resolve => setTimeout(resolve, 100)); // Simulate API delay
  const post = mockBlogPosts.find((p) => p.slug === slug);
  return post || null;
}

export async function generateStaticParams() {
  // In a real app, fetch all slugs from your data source
  return mockBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl font-semibold">Post Not Found</h1>
          <p className="text-muted-foreground mt-2">Sorry, we couldn't find this blog post.</p>
          <Button asChild variant="outline" className="mt-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
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
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        <Card className="overflow-hidden shadow-xl rounded-xl">
          <CardHeader className="p-0">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={1200}
              height={500}
              className="w-full h-auto max-h-[500px] object-cover"
              data-ai-hint="blog header abstract"
              priority // Prioritize loading hero image
            />
          </CardHeader>
          <CardContent className="p-6 sm:p-8 lg:p-10">
            {post.category && (
                <Badge variant="default" className="mb-3 text-sm py-1 px-3 bg-primary text-primary-foreground">
                  {post.category}
                </Badge>
            )}
            <CardTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              {post.title}
            </CardTitle>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6 pb-6 border-b">
              <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="flex items-center gap-1.5"><UserCircle className="h-4 w-4" /> By {post.author}</span>
            </div>
            
            <article 
                className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-foreground/90 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {post.tags && post.tags.length > 0 && (
              <section aria-labelledby="tags-heading" className="mt-10 pt-6 border-t">
                <h3 id="tags-heading" className="text-lg font-semibold mb-3 text-foreground flex items-center">
                  <Tag className="mr-2 h-5 w-5 text-primary" /> Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm px-3 py-1 font-normal">{tag}</Badge>
                  ))}
                </div>
              </section>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

// Add some basic styling for the article content if not using Tailwind Typography plugin
// This is a simple placeholder. For rich text, consider a Markdown parser and Tailwind Typography plugin.
// You might need to add this to your globals.css or a style tag in this component if you don't use the plugin.
// For this example, the 'prose' classes from Tailwind Typography (if installed) would handle this.
// If not installed, the HTML tags will have default browser styling.
// We'll rely on browser defaults or the Tailwind Typography plugin if the user adds it later.
// A simple style for list items if prose is not available:
// <style jsx global>{`
//   article ol, article ul { margin-left: 1.5rem; margin-bottom: 1rem; }
//   article li { margin-bottom: 0.25rem; }
//   article p { margin-bottom: 1rem; }
// `}</style>
