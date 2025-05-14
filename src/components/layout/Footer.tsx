
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-card print:hidden">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
        <div className="flex justify-center gap-x-6 gap-y-2 flex-wrap mb-4">
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} AI Tool Finder. All rights reserved.</p>
        <p className="mt-1">
          Discover the future, one tool at a time.
        </p>
      </div>
    </footer>
  );
}
