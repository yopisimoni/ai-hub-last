import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-card print:hidden">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-base font-semibold text-foreground">AI Hub</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Practical AI workflows that start with your goal, not with a giant list of tools.
              Recommendations may eventually include affiliate links, always disclosed clearly.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link href="/workflows" className="transition-colors hover:text-primary">Workflows</Link>
            <Link href="/tools" className="transition-colors hover:text-primary">AI tools</Link>
            <Link href="/blog" className="transition-colors hover:text-primary">Guides</Link>
            <Link href="/terms" className="transition-colors hover:text-primary">Terms</Link>
            <Link href="/privacy" className="transition-colors hover:text-primary">Privacy</Link>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} AI Hub. Built around useful workflows first.
        </div>
      </div>
    </footer>
  );
}
