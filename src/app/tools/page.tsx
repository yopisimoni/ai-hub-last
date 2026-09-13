"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ToolCard from "@/components/tools/ToolCard";
import CategoryFilter from "@/components/tools/CategoryFilter";
import type { Category, Tool } from "@/types";
import { Input } from "@/components/ui/input";
import { BarChart3, Search as SearchIcon, ThumbsUp, Zap } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

export default function ToolsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [tools, setTools] = useState<Tool[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<"name" | "newest" | "popular">("name");

  useEffect(() => {
    const fetchTools = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/tools");
        if (!response.ok) {
          throw new Error(
            `Failed to fetch tools: ${response.status}${response.statusText ? ` ${response.statusText}` : ""}`
          );
        }
        const data: Tool[] = await response.json();
        setTools(data);
      } catch (error) {
        console.error("Error fetching tools:", error);
        toast({
          title: "Tool directory unavailable",
          description:
            "The workflow experience still works. The legacy tool database connection needs to be configured before this directory is production-ready.",
          variant: "destructive",
        });
        setTools([]);
      }
      setIsLoading(false);
    };

    fetchTools();
  }, []);

  const filteredTools = useMemo(() => {
    const sortedTools = [...tools];

    if (sortBy === "newest") {
      sortedTools.sort(
        (a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      );
    } else if (sortBy === "popular") {
      sortedTools.sort((a, b) => b.upvotes - a.upvotes);
    } else {
      sortedTools.sort((a, b) => a.name.localeCompare(b.name));
    }

    return sortedTools.filter((tool) => {
      const matchesCategory =
        selectedCategory === "All" || tool.category === selectedCategory;
      const normalizedSearch = searchTerm.toLowerCase();
      const matchesSearch =
        tool.name.toLowerCase().includes(normalizedSearch) ||
        tool.description.toLowerCase().includes(normalizedSearch) ||
        tool.tags?.some((tag) => tag.toLowerCase().includes(normalizedSearch));

      return matchesCategory && matchesSearch;
    });
  }, [tools, searchTerm, selectedCategory, sortBy]);

  return (
    <>
      <Navbar />
      <main className="container mx-auto flex-grow px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Tool directory
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Find the right tool after you know the job
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            AI Hub is workflow-first. Use this directory when you want to compare the tools
            that can execute a specific step.
          </p>
        </div>

        <div className="mx-auto mb-6 max-w-xl">
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search tools by name, description, or tags..."
              className="h-12 w-full rounded-xl border-2 pl-12 pr-4 text-base shadow-sm focus:border-primary"
              onChange={(event) => setSearchTerm(event.target.value)}
              value={searchTerm}
              aria-label="Search tools"
            />
          </div>
        </div>

        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="mb-6 flex items-center justify-between gap-4 px-1">
          <p className="text-sm text-muted-foreground">
            {isLoading
              ? "Loading tools..."
              : `${filteredTools.length} tool${filteredTools.length !== 1 ? "s" : ""} found`}
          </p>
          <div className="flex gap-2">
            <Button
              variant={sortBy === "name" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("name")}
            >
              <BarChart3 className="mr-1.5 h-3.5 w-3.5" /> Name
            </Button>
            <Button
              variant={sortBy === "newest" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("newest")}
            >
              <Zap className="mr-1.5 h-3.5 w-3.5" /> Newest
            </Button>
            <Button
              variant={sortBy === "popular" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("popular")}
            >
              <ThumbsUp className="mr-1.5 h-3.5 w-3.5" /> Popular
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <Skeleton className="h-14 w-14 rounded-lg" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-9 w-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <SearchIcon
              className="mx-auto h-16 w-16 text-muted-foreground/70"
              strokeWidth={1.5}
            />
            <h2 className="mt-4 text-xl font-semibold">No tools available yet</h2>
            <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
              The legacy tool database still needs production configuration. The new AI Hub
              workflow layer does not depend on it.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
