"use client";

import { useEffect, type ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

type AnalyticsValue = string | number | boolean | undefined;
type AnalyticsParams = Record<string, AnalyticsValue>;

type AnalyticsWindow = Window & {
  gtag?: (
    command: "event",
    eventName: string,
    params?: Record<string, string | number | boolean>
  ) => void;
  dataLayer?: Array<Record<string, unknown>>;
};

function cleanParams(params: AnalyticsParams = {}) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined)
  ) as Record<string, string | number | boolean>;
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  const analyticsWindow = window as AnalyticsWindow;
  const eventParams = cleanParams(params);

  if (typeof analyticsWindow.gtag === "function") {
    analyticsWindow.gtag("event", eventName, eventParams);
    return;
  }

  if (Array.isArray(analyticsWindow.dataLayer)) {
    analyticsWindow.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }
}

export function AnalyticsEvent({
  eventName,
  eventParams = {},
}: {
  eventName: string;
  eventParams?: AnalyticsParams;
}) {
  const serializedParams = JSON.stringify(eventParams);

  useEffect(() => {
    trackEvent(
      eventName,
      JSON.parse(serializedParams) as Record<string, string | number | boolean>
    );
  }, [eventName, serializedParams]);

  return null;
}

export function TrackedLink({
  href,
  eventName,
  eventParams,
  className,
  ariaLabel,
  children,
}: {
  href: string;
  eventName: string;
  eventParams?: AnalyticsParams;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackEvent(eventName, eventParams)}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <TrackedLink
          href="/"
          eventName="navigation_click"
          eventParams={{ location: "navbar", target: "home" }}
          className="flex items-center gap-2.5"
          ariaLabel="AI Hub home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Sparkles className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <span className="block text-lg font-bold tracking-tight text-foreground">AI Hub</span>
            <span className="hidden text-[11px] text-muted-foreground sm:block">
              Solve real tasks with AI
            </span>
          </div>
        </TrackedLink>

        <nav className="flex items-center gap-1 sm:gap-2">
          <TrackedLink
            href="/workflows"
            eventName="navigation_click"
            eventParams={{ location: "navbar", target: "workflows" }}
          >
            <Button variant="ghost" size="sm">Workflows</Button>
          </TrackedLink>
          <TrackedLink
            href="/tools"
            eventName="navigation_click"
            eventParams={{ location: "navbar", target: "tools" }}
            className="hidden sm:block"
          >
            <Button variant="ghost" size="sm">AI tools</Button>
          </TrackedLink>
          <TrackedLink
            href="/blog"
            eventName="navigation_click"
            eventParams={{ location: "navbar", target: "guides" }}
            className="hidden md:block"
          >
            <Button variant="ghost" size="sm">Guides</Button>
          </TrackedLink>
          <TrackedLink
            href="/workflows"
            eventName="cta_click"
            eventParams={{ location: "navbar", target: "find_workflow" }}
          >
            <Button size="sm" className="gap-1.5">
              Find a workflow
              <ArrowRight className="h-4 w-4" />
            </Button>
          </TrackedLink>
        </nav>
      </div>
    </header>
  );
}
