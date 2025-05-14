
import type { Tool } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Tag } from "lucide-react";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-card rounded-xl">
      <CardHeader className="p-4">
        <div className="flex items-start gap-4">
          <Image
            src={tool.logoUrl || "https://placehold.co/64x64.png"}
            alt={`${tool.name} logo`}
            width={56}
            height={56}
            className="rounded-lg border object-contain aspect-square"
            data-ai-hint="logo brand"
          />
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg font-semibold leading-tight truncate">
              <Link href={`/tools/${tool.id}`} className="hover:text-primary transition-colors">
                {tool.name}
              </Link>
            </CardTitle>
            <Badge variant="secondary" className="mt-1.5 text-xs font-medium">{tool.category}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
          {tool.description}
        </p>
        {tool.tags && tool.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 items-center">
             <Tag className="h-3.5 w-3.5 text-muted-foreground" />
            {tool.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs px-1.5 py-0.5 font-normal">{tag}</Badge>
            ))}
            {tool.tags.length > 3 && (
              <Badge variant="outline" className="text-xs px-1.5 py-0.5 font-normal">+{tool.tags.length - 3} more</Badge>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 border-t">
        <Button asChild variant="default" size="sm" className="w-full">
          <Link href={tool.link} target="_blank" rel="noopener noreferrer">
            Visit Site <ArrowUpRight className="ml-1.5 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
