import type { Metadata } from "next";
import Navbar, { AnalyticsEvent, TrackedLink } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { workflows } from "@/lib/workflows";
import { ArrowRight, Clock3, Target } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AI Workflow Library",
  description:
    "Practical step-by-step AI workflows for content, social media, websites, small business, study, and online work.",
};

export default function WorkflowsPage() {
  return (
    <>
      <Navbar />
      <AnalyticsEvent eventName="workflow_library_view" />
      <main className="flex-grow">
        <section className="border-b bg-card">
          <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                AI workflow library
              </p>
              <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Start with the job. Then choose the AI.
              </h1>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Each workflow turns a real goal into a sequence of actions, recommended tools,
                alternatives, and a completion checklist. No giant software list required.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {workflows.map((workflow) => (
              <Card key={workflow.slug} className="flex h-full flex-col">
                <CardHeader>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {workflow.category}
                  </p>
                  <CardTitle className="mt-2 text-2xl">{workflow.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="leading-7 text-muted-foreground">{workflow.summary}</p>
                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex gap-3">
                      <Target className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{workflow.outcome}</span>
                    </div>
                    <div className="flex gap-3 text-muted-foreground">
                      <Clock3 className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{workflow.timeEstimate}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <TrackedLink
                    href={`/workflows/${workflow.slug}`}
                    className="w-full"
                    eventName="workflow_open"
                    eventParams={{
                      source: "workflow_library",
                      workflow_slug: workflow.slug,
                      workflow_title: workflow.title,
                      workflow_category: workflow.category,
                    }}
                  >
                    <Button className="w-full gap-2">
                      Open workflow
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </TrackedLink>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
