import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getWorkflow, workflows } from "@/lib/workflows";
import { ArrowLeft, CheckCircle2, Clock3, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function generateStaticParams() {
  return workflows.map((workflow) => ({ slug: workflow.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const workflow = getWorkflow(slug);

  if (!workflow) {
    return { title: "Workflow not found" };
  }

  return {
    title: workflow.title,
    description: workflow.summary,
  };
}

export default async function WorkflowPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const workflow = getWorkflow(slug);

  if (!workflow) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <section className="border-b bg-card">
          <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <Link
              href="/workflows"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to workflow library
            </Link>

            <div className="mt-8 max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {workflow.category}
              </p>
              <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                {workflow.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                {workflow.summary}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border bg-background p-4">
                  <Users className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-xs font-semibold uppercase text-muted-foreground">For</p>
                  <p className="mt-1 text-sm">{workflow.audience}</p>
                </div>
                <div className="rounded-xl border bg-background p-4">
                  <Target className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-xs font-semibold uppercase text-muted-foreground">Outcome</p>
                  <p className="mt-1 text-sm">{workflow.outcome}</p>
                </div>
                <div className="rounded-xl border bg-background p-4">
                  <Clock3 className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-xs font-semibold uppercase text-muted-foreground">Estimated time</p>
                  <p className="mt-1 text-sm">{workflow.timeEstimate}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto grid gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_0.8fr] lg:px-8">
          <div>
            <h2 className="text-2xl font-bold">Step-by-step workflow</h2>
            <div className="mt-6 space-y-5">
              {workflow.steps.map((step, index) => (
                <Card key={step.title}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                        {index + 1}
                      </span>
                      <CardTitle className="pt-1 text-xl">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pl-[4.75rem]">
                    <p className="leading-7 text-muted-foreground">{step.description}</p>
                    {step.output && (
                      <div className="mt-4 rounded-lg bg-secondary p-3 text-sm">
                        <span className="font-semibold">Output:</span> {step.output}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold">Recommended tools</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tools are listed because they fit a step in the workflow. Affiliate links are not active in this MVP.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {workflow.tools.map((tool) => (
                <Card key={tool.name}>
                  <CardHeader>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium">{tool.purpose}</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{tool.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold">Alternatives</h2>
            <div className="mt-5 space-y-3">
              {workflow.alternatives.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <aside>
            <div className="sticky top-24 rounded-2xl border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold">Completion checklist</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Use this to confirm the workflow produced something usable.
              </p>
              <div className="mt-5 space-y-3">
                {workflow.checklist.map((item) => (
                  <div key={item} className="flex gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/workflows" className="mt-6 block">
                <Button className="w-full">Browse more workflows</Button>
              </Link>
              <Link href="/tools" className="mt-3 block">
                <Button variant="outline" className="w-full">
                  Browse the tool directory
                </Button>
              </Link>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
