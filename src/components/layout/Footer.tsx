
export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-card print:hidden">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} AI Tool Finder. All rights reserved.</p>
        <p className="mt-1">
          Discover the future, one tool at a time.
        </p>
      </div>
    </footer>
  );
}
