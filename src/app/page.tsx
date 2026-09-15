import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  BadgeDollarSign,
  BookOpenCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  Layers3,
  Megaphone,
  PenTool,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const goals = [
  {
    title: "Create content",
    description: "Turn ideas, notes, or source material into useful content faster.",
    icon: PenTool,
    examples: ["30 social posts", "Blog to multi-platform content", "Product descriptions"],
  },
  {
    title: "Grow social media",
    description: "Plan, repurpose, schedule, and improve content without adding busywork.",
    icon: Megaphone,
    examples: ["Content calendar", "Repurposing workflow", "Short-form scripts"],
  },
  {
    title: "Build a website",
    description: "Use AI for planning, copy, code, SEO, QA, and launch preparation.",
    icon: Globe2,
    examples: ["Landing page", "SEO brief", "Website audit"],
  },
  {
    title: "Run a small business",
    description: "Automate repetitive work while keeping important decisions human.",
    icon: BriefcaseBusiness,
    examples: ["Email workflows", "Customer support", "Document processing"],
  },
  {
    title: "Study & learn",
    description: "Use AI to explain, summarize, practice, and organize knowledge.",
    icon: BookOpenCheck,
    examples: ["Study plan", "Research workflow", "Practice questions"],
  },
  {
    title: "Make money online",
    description: "Use AI as leverage for useful services, products, and creator workflows.",
    icon: BadgeDollarSign,
    examples: ["Freelance workflow", "Digital product", "Creator toolkit"],
  },
];

const featuredWorkflows = [
  {
    slug: "turn-one-idea-into-30-social-posts",
    title: "Turn one idea into 30 social posts",
    description:
      "A repeatable system for creating a month of platform-specific content from one strong source idea.",
    icon: Layers3,
    steps: ["Define the source idea", "Generate content angles", "Adapt by platform"],
  },
  {
    slug: "build-a-website-with-ai",
    title: "Plan and build a small website with AI",
    description:
      "Turn a business or project idea into a focused brief, site structure, copy, implementation plan, and launch QA.",
    icon: Globe2,
    steps: ["Write the brief", "Plan pages and copy", "Run launch QA"],
  },
  {
    slug: "start-a-freelance-service-with-ai",
    title: "Turn one skill into a freelance service",
    description:
      "Package a real skill into a focused offer, create proof, find prospects, and standardize delivery.",
    icon: BriefcaseBusiness,
    steps: ["Choose the problem", "Create proof", "Build the delivery system"],
  },
];

const principles = [
  "Start with the user's goal, not a giant tool directory.",
  "Recommend fewer tools with a clear reason for each one.",
  "Show the workflow before asking for a click or purchase.",
  "Disclose affiliate relationships clearly when monetization is added.",
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <section className="border-b">
          <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                Problem first. Tools second.
              </div>

              <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                What do you want to
                <span className="text-primary"> accomplish with AI?</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                AI Hub gives you a practical workflow for the job, explains each step,
                and points you to the right tools only when they are actually useful.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/workflows">
                  <Button size="lg" className="w-full gap-2 sm:w-auto">
                    Explore workflows
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/tools">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Browse AI tools
                  </Button>
                </Link>
              </div>

              <p className="mt-5 text-xs text-muted-foreground">
                No paid placement determines the workflow order in this MVP.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Choose your goal
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Start from the result you need
            </h2>
            <p className="mt-4 text-muted-foreground">
              The same AI tool can be excellent for one job and wrong for another. We organize
              the experience around outcomes instead of hype.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {goals.map((goal) => {
              const Icon = goal.icon;
              return (
                <Card key={goal.title} className="group h-full transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{goal.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-6 text-muted-foreground">{goal.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {goal.examples.map((example) => (
                        <span
                          key={example}
                          className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="workflows" className="border-y bg-card">
          <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Featured workflows
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Useful before monetized
                </h2>
                <p className="mt-4 text-muted-foreground">
                  These are the first workflows we are building. Each one will become a practical
                  step-by-step page with tool choices, alternatives, templates, and measurable outcomes.
                </p>
              </div>
              <Link href="/workflows">
                <Button variant="outline" className="gap-2">
                  View all workflows
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {featuredWorkflows.map((workflow) => {
                const Icon = workflow.icon;
                return (
                  <Link href={`/workflows/${workflow.slug}`} key={workflow.title} className="block h-full">
                  <Card className="h-full transition-shadow hover:shadow-md">
                    <CardHeader>
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl">{workflow.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="leading-6 text-muted-foreground">{workflow.description}</p>
                      <div className="mt-6 space-y-3">
                        {workflow.steps.map((step, index) => (
                          <div key={step} className="flex items-center gap-3 text-sm">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold">
                              {index + 1}
                            </span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <WandSparkles className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                How AI Hub should work
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                A visitor should be able to arrive with a real problem and leave with a clear
                sequence of actions—not another overwhelming list of software.
              </p>
            </div>

            <div className="space-y-4">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="flex gap-3 rounded-xl border bg-card p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-6">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] opacity-80">
                  MVP direction
                </p>
                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  Build workflows people return to.
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 opacity-85">
                  Then layer in email capture, trusted recommendations, affiliate revenue,
                  and our own digital workflow products.
                </p>
              </div>
              <Link href="#workflows">
                <Button variant="secondary" size="lg" className="gap-2">
                  See the first workflows
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
