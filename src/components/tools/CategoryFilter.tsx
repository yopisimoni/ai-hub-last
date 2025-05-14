
"use client";

import type { Category } from "@/types";
import { categories } from "@/types"; // Import actual categories
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  selectedCategory: Category | "All";
  onSelectCategory: (category: Category | "All") => void;
}

export default function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="py-4">
      <h3 className="text-md font-semibold mb-3 px-1 text-foreground">Filter by Category</h3>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-2 pb-2.5 px-1">
          <Button
            variant={selectedCategory === "All" ? "default" : "outline"}
            size="sm"
            onClick={() => onSelectCategory("All")}
            className={cn(
              "shrink-0 rounded-full px-4 py-1.5 text-sm",
              selectedCategory === "All" && "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            All Tools
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => onSelectCategory(category)}
              className={cn(
                "shrink-0 rounded-full px-4 py-1.5 text-sm",
                selectedCategory === category && "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              {category}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
