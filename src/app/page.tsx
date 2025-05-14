
"use client"; 

import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ToolCard from "@/components/tools/ToolCard";
import CategoryFilter from "@/components/tools/CategoryFilter";
import type { Tool, Category } from "@/types";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, ThumbsUp, Zap, BarChart3 } from "lucide-react"; // Renamed Search to SearchIcon
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"; // Added Card imports

// Mock data - replace with Firebase fetching
const mockTools: Tool[] = [
  { id: "t1", name: "ChatGPT", description: "Versatile AI assistant for text generation and more.", logoUrl: "https://placehold.co/64x64.png", link: "https://chat.openai.com/", tags: ["Freemium", "LLM", "OpenAI"], category: "Text Generation" },
  { id: "t2", name: "Claude", description: "AI assistant known for thoughtful, human-like conversations.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.anthropic.com/index/claude", tags: ["Freemium", "Conversational", "Anthropic"], category: "Text Generation" },
  { id: "t3", name: "Google Gemini", description: "Excels in creative tasks and document summarization.", logoUrl: "https://placehold.co/64x64.png", link: "https://gemini.google.com/", tags: ["Freemium", "Multimodal", "Google"], category: "Text Generation" },
  { id: "t4", name: "Jasper AI", description: "AI writing assistant tailored for marketers and content creators.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.jasper.ai/", tags: ["Paid", "Free Trial", "Copywriting"], category: "Marketing" },
  { id: "t5", name: "Copy.ai", description: "AI-powered writing generators for marketing and more.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.copy.ai/tools", tags: ["Freemium", "Content Generation", "Marketing"], category: "Marketing" },
  { id: "t6", name: "Writesonic", description: "AI writing for blogs, marketing & ads with SEO optimization.", logoUrl: "https://placehold.co/64x64.png", link: "https://writesonic.com/", tags: ["Freemium", "SEO", "Blogging"], category: "Marketing" },
  { id: "t7", name: "Rytr", description: "Affordable AI writing tool for various content creation.", logoUrl: "https://placehold.co/64x64.png", link: "https://rytr.me/", tags: ["Freemium", "Affordable", "Content Creation"], category: "Text Generation" },
  { id: "t8", name: "Frase", description: "AI-driven blog post creation & SEO research.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.frase.io/", tags: ["Paid", "Free Trial", "SEO", "Research"], category: "Research" },
  { id: "t9", name: "Grammarly", description: "AI writing tools for effortless writing and editing.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.grammarly.com/ai/ai-writing-tools", tags: ["Freemium", "Writing Assistant", "Editing"], category: "Productivity" },
  { id: "t10", name: "INK Editor", description: "AI writing assistant for SEO-friendly content creation.", logoUrl: "https://placehold.co/64x64.png", link: "https://inkforall.com/", tags: ["Freemium", "SEO Content", "AI Editor"], category: "Productivity" },
  { id: "t11", name: "Wordtune", description: "AI-powered writing assistant for rewriting and improving content.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.wordtune.com/", tags: ["Freemium", "Rewriter", "Editing"], category: "Productivity" },
  { id: "t12", name: "QuillBot", description: "AI-powered paraphrasing and summarization tool.", logoUrl: "https://placehold.co/64x64.png", link: "https://quillbot.com/", tags: ["Freemium", "Paraphraser", "Summarizer"], category: "Productivity" },
  { id: "t13", name: "Midjourney", description: "AI-powered image generator known for artistic outputs.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.midjourney.com/", tags: ["Paid", "Artistic", "High Quality"], category: "Image Generation" },
  { id: "t14", name: "DALL·E 3", description: "OpenAI's text-to-image model for detailed images.", logoUrl: "https://placehold.co/64x64.png", link: "https://openai.com/dall-e", tags: ["Freemium", "OpenAI", "Detailed"], category: "Image Generation" },
  { id: "t15", name: "Stable Diffusion", description: "Open-source text-to-image model offering customization.", logoUrl: "https://placehold.co/64x64.png", link: "https://stability.ai/", tags: ["Free", "Open Source", "Customizable"], category: "Image Generation" },
  { id: "t16", name: "Adobe Firefly", description: "Adobe's AI image generator integrated into Creative Cloud.", logoUrl: "https://placehold.co/64x64.png", link: "https://firefly.adobe.com/", tags: ["Free Trial", "Paid", "Adobe", "Integrated"], category: "Image Generation" },
  { id: "t17", name: "Runway Gen-4", description: "Advanced AI model for video and image generation.", logoUrl: "https://placehold.co/64x64.png", link: "https://runwayml.com/", tags: ["Free Trial", "Paid", "Video", "Multimodal"], category: "Image Generation" },
  { id: "t18", name: "Ideogram", description: "Text-to-image model capable of generating legible text within images.", logoUrl: "https://placehold.co/64x64.png", link: "https://ideogram.ai/", tags: ["Freemium", "Text in Image", "Typography"], category: "Image Generation" },
  { id: "t19", name: "DeepSeek Janus Pro", description: "AI image generation model offering detailed images.", logoUrl: "https://placehold.co/64x64.png", link: "https://deepseek.com/", tags: ["Free", "Detailed", "High Resolution"], category: "Image Generation" },
  { id: "t20", name: "Dream by Wombo", description: "AI-powered app for creating artworks from text prompts.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.wombo.art/", tags: ["Freemium", "Mobile App", "Artistic"], category: "Image Generation" },
  { id: "t21", name: "Artbreeder", description: "Collaborative AI art platform for creating and modifying images.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.artbreeder.com/", tags: ["Freemium", "Collaborative", "Image Editing"], category: "Image Generation" },
  { id: "t22", name: "NightCafe", description: "AI art generator offering various styles and creation methods.", logoUrl: "https://placehold.co/64x64.png", link: "https://creator.nightcafe.studio/", tags: ["Freemium", "Multiple Styles", "Community"], category: "Image Generation" },
  { id: "t23", name: "Deep Dream Generator", description: "AI tool for generating surreal and abstract images.", logoUrl: "https://placehold.co/64x64.png", link: "https://deepdreamgenerator.com/", tags: ["Freemium", "Surreal", "Abstract"], category: "Image Generation" },
  { id: "t24", name: "StarryAI", description: "AI art generator that turns text prompts into artworks.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.starryai.com/", tags: ["Freemium", "Artistic", "Text to Art"], category: "Image Generation" },
  { id: "t25", name: "GitHub Copilot", description: "AI-powered code completion tool for developers.", logoUrl: "https://placehold.co/64x64.png", link: "https://github.com/features/copilot", tags: ["Paid", "Code Completion", "IDE Integration"], category: "Code Assistant" },
  { id: "t26", name: "Tabnine", description: "AI code assistant for faster coding.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.tabnine.com/", tags: ["Freemium", "Code Completion", "Developer Tool"], category: "Code Assistant" },
  { id: "t27", name: "Codeium", description: "AI-powered code generation and completion tool.", logoUrl: "https://placehold.co/64x64.png", link: "https://codeium.com/", tags: ["Free", "Code Generation", "Autocomplete"], category: "Code Assistant" },
  { id: "t28", name: "Amazon CodeWhisperer", description: "AI coding companion for AWS developers.", logoUrl: "https://placehold.co/64x64.png", link: "https://aws.amazon.com/codewhisperer/", tags: ["Freemium", "AWS", "Developer Tool"], category: "Code Assistant" },
  { id: "t29", name: "AskCodi", description: "AI assistant for generating code snippets and documentation.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.askcodi.com/", tags: ["Freemium", "Code Snippets", "Documentation"], category: "Code Assistant" },
  { id: "t30", name: "Codiga", description: "Static code analysis and automated code reviews.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.codiga.io/", tags: ["Freemium", "Code Analysis", "Code Review"], category: "Code Assistant" },
  { id: "t31", name: "Replit", description: "Online IDE with AI-powered code assistance.", logoUrl: "https://placehold.co/64x64.png", link: "https://replit.com/", tags: ["Freemium", "Online IDE", "AI Coding"], category: "Code Assistant" },
  { id: "t32", name: "CodeT5", description: "Open-source AI model for code understanding and generation.", logoUrl: "https://placehold.co/64x64.png", link: "https://github.com/salesforce/CodeT5", tags: ["Free", "Open Source", "Code Model"], category: "Code Assistant" },
  { id: "t33", name: "OpenAI Codex", description: "AI system that translates natural language to code.", logoUrl: "https://placehold.co/64x64.png", link: "https://openai.com/blog/openai-codex", tags: ["Freemium", "OpenAI", "Natural Language Coding"], category: "Code Assistant" },
  { id: "t34", name: "Sourcegraph Cody", description: "AI-powered code search and navigation tool.", logoUrl: "https://placehold.co/64x64.png", link: "https://sourcegraph.com/cody", tags: ["Freemium", "Code Search", "Code Navigation"], category: "Code Assistant" },
  { id: "t35", name: "DeepCode AI", description: "AI-powered code review tool for detecting bugs and vulnerabilities.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.deepcode.ai/", tags: ["Freemium", "Security", "Bug Detection"], category: "Code Assistant" },
  { id: "t36", name: "Figstack", description: "AI tool for understanding and documenting code.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.figstack.com/", tags: ["Freemium", "Code Documentation", "Code Understanding"], category: "Code Assistant" },
];

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [tools, setTools] = useState<Tool[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<"name" | "newest" | "popular">("name");


  useEffect(() => {
    setIsLoading(true);
    // Simulate fetching data
    setTimeout(() => {
      setTools(mockTools);
      setIsLoading(false);
    }, 800); 
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredTools = useMemo(() => {
    let sortedTools = [...tools];
    // Sorting logic (mock for now, real implementation would depend on data structure)
    if (sortBy === "newest") {
      // sortedTools.sort((a, b) => (b.dateAdded || 0) - (a.dateAdded || 0));
    } else if (sortBy === "popular") {
      // sortedTools.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
    } else { // name
      sortedTools.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    return sortedTools.filter(tool => {
      const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm) ||
                            tool.description.toLowerCase().includes(searchTerm) ||
                            tool.tags.some(tag => tag.toLowerCase().includes(searchTerm));
      return matchesCategory && matchesSearch;
    });
  }, [tools, searchTerm, selectedCategory, sortBy]);
  
  return (
    <>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-10 pt-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Discover the Best AI Tools
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Explore a curated collection of cutting-edge AI tools to boost your productivity, creativity, and innovation.
          </p>
        </div>
        
        <div className="mb-6 max-w-xl mx-auto">
            <div className="relative">
              <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                placeholder="Search tools by name, description, or tags..."
                className="w-full pl-12 pr-4 py-3 text-base rounded-xl border-2 focus:border-primary shadow-sm h-12"
                onChange={handleSearchChange}
                value={searchTerm}
                aria-label="Search tools"
              />
            </div>
        </div>

        <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        
        <div className="flex justify-between items-center mb-6 px-1">
          <p className="text-sm text-muted-foreground">
            {isLoading ? 'Loading tools...' : `${filteredTools.length} tool${filteredTools.length !== 1 ? 's' : ''} found`}
          </p>
          <div className="flex gap-2">
            <Button variant={sortBy === "name" ? "default" : "outline"} size="sm" onClick={() => setSortBy("name")} className="rounded-md text-xs px-3 py-1 h-8">
              <BarChart3 className="mr-1.5 h-3.5 w-3.5"/> Name
            </Button>
            <Button variant={sortBy === "newest" ? "default" : "outline"} size="sm" onClick={() => setSortBy("newest")} className="rounded-md text-xs px-3 py-1 h-8">
              <Zap className="mr-1.5 h-3.5 w-3.5"/> Newest
            </Button>
            <Button variant={sortBy === "popular" ? "default" : "outline"} size="sm" onClick={() => setSortBy("popular")} className="rounded-md text-xs px-3 py-1 h-8">
              <ThumbsUp className="mr-1.5 h-3.5 w-3.5"/> Popular
            </Button>
          </div>
        </div>


        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
            {Array.from({ length: 12 }).map((_, index) => ( 
              <Card key={index} className="flex flex-col h-full rounded-xl">
                <CardHeader className="p-4">
                  <div className="flex items-start gap-4">
                    <Skeleton className="h-14 w-14 rounded-lg" />
                    <div className="flex-1 space-y-2 pt-1">
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow space-y-1.5">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
                <CardFooter className="p-4 border-t">
                  <Skeleton className="h-9 w-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <SearchIcon className="mx-auto h-16 w-16 text-muted-foreground/70" strokeWidth={1.5}/>
            <h3 className="mt-4 text-xl font-semibold text-foreground">No Tools Found</h3>
            <p className="mt-1.5 text-md text-muted-foreground">
              Try adjusting your search or filters.
            </p>
            { (searchTerm || selectedCategory !== "All") && 
              <Button variant="outline" className="mt-6" onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}>
                Clear Filters & Search
              </Button>
            }
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

