"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="AI Hub home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Sparkles className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <span className="block text-lg font-bold tracking-tight text-foreground">AI Hub</span>
            <span className="hidden text-[11px] text-muted-foreground sm:block">
              Solve real tasks with AI
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <Link href="/workflows">
            <Button variant="ghost" size="sm">Workflows</Button>
          </Link>
          <Link href="/tools" className="hidden sm:block">
            <Button variant="ghost" size="sm">AI tools</Button>
          </Link>
          <Link href="/blog" className="hidden md:block">
            <Button variant="ghost" size="sm">Guides</Button>
          </Link>
          <Link href="/workflows">
            <Button size="sm" className="gap-1.5">
              Find a workflow
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
