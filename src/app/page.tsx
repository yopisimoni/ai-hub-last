
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
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

// Mock data - replace with Firebase fetching
const mockTools: Tool[] = [
  { id: "1", name: "GPT-4o", description: "OpenAI's newest flagship model, integrating text, audio, and image understanding and generation.", logoUrl: "https://placehold.co/64x64.png", link: "https://openai.com/index/hello-gpt-4o/", tags: ["LLM", "Multimodal", "OpenAI"], category: "Text Generation" },
  { id: "2", name: "Midjourney V6", description: "Advanced AI image generator known for its artistic and photorealistic outputs.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.midjourney.com", tags: ["Image Generation", "Art", "Photorealism"], category: "Image Generation" },
  { id: "3", name: "GitHub Copilot Workspace", description: "AI-powered development environment that helps plan, build, and test code.", logoUrl: "https://placehold.co/64x64.png", link: "https://github.com/features/copilot", tags: ["Code", "Developer", "IDE"], category: "Code Assistant" },
  { id: "4", name: "ElevenLabs", description: "AI voice generator for realistic text-to-speech and voice cloning.", logoUrl: "https://placehold.co/64x64.png", link: "https://elevenlabs.io", tags: ["Voice", "TTS", "Audio"], category: "Audio & Music" },
  { id: "5", name: "HeyGen", description: "AI video generation platform for creating talking avatar videos from text.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.heygen.com", tags: ["Video", "Avatar", "Marketing"], category: "Video Editing" },
  { id: "6", name: "Perplexity AI", description: "Conversational AI search engine that provides direct answers with citations.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.perplexity.ai", tags: ["Search", "Research", "Answers"], category: "Research" },
  { id: "7", name: "Claude 3 Opus", description: "Anthropic's most powerful model, excelling at complex reasoning and long-context tasks.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.anthropic.com/claude", tags: ["LLM", "Reasoning", "Anthropic"], category: "Text Generation"},
  { id: "8", name: "Beautiful.ai", description: "AI-powered presentation software that designs slides for you automatically.", logoUrl: "https://placehold.co/64x64.png", link: "https://www.beautiful.ai", tags: ["Presentation", "Design", "Productivity"], category: "Productivity"},
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
            {Array.from({ length: 8 }).map((_, index) => (
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

