
// src/app/blog/page.tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { BlogPost } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, UserCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data - replace with Firebase fetching or a CMS
const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "the-future-of-ai-in-2025",
    title: "The Future of AI: Predictions for 2025",
    date: "2024-07-15",
    excerpt: "Explore our bold predictions for the advancements and impact of artificial intelligence in the coming year. What new frontiers will AI conquer?",
    content: "<p>The year 2025 is poised to be a landmark year for artificial intelligence. We anticipate breakthroughs in several key areas, including more human-like conversational AI, wider adoption of AI in healthcare for diagnostics, and increasingly sophisticated AI-driven creative tools. Generative AI will continue its rapid evolution, producing content almost indistinguishable from human-created works.</p><p>Ethical considerations and regulatory frameworks will also mature, attempting to keep pace with the technological advancements. Expect to see more discussions around AI safety, bias mitigation, and the societal impact of widespread AI integration. The workforce will continue to adapt, with new roles emerging that require collaboration with AI systems.</p><p>Ultimately, 2025 will likely solidify AI's role as a transformative technology, deeply embedded in various aspects of our daily lives and industries.</p>",
    imageUrl: "https://placehold.co/600x400.png",
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
    imageUrl: "https://placehold.co/600x400.png",
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
    imageUrl: "https://placehold.co/600x400.png",
    author: "Creative AI Corner",
    tags: ["Image Generation", "AI Tools", "Review"],
    category: "Tool Reviews",
  },
];

async function getBlogPosts(): Promise<BlogPost[]> {
  // In a real app, fetch this from Firebase or your CMS
  await new Promise(resolve => setTimeout(resolve, 200)); // Simulate API delay
  return mockBlogPosts;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="text-center mb-12 pt-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            AI Tool Finder Blog
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and news from the world of artificial intelligence.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground">No blog posts yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl">
                <Link href={`/blog/${post.slug}`} className="block">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint="blog abstract"
                  />
                </Link>
                <CardHeader className="p-5">
                  {post.category && <Badge variant="secondary" className="mb-2 text-xs">{post.category}</Badge>}
                  <CardTitle className="text-xl font-semibold leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                   <CardDescription className="text-xs text-muted-foreground mt-1.5 flex items-center gap-4">
                    <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="flex items-center gap-1.5"><UserCircle className="h-3.5 w-3.5" /> {post.author}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-5 pt-0 flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="p-5 border-t">
                  <Button asChild variant="outline" size="sm" className="w-full hover:bg-primary hover:text-primary-foreground">
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
