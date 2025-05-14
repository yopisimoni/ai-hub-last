
"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, UserCircle, Rss } from "lucide-react"; // Added Rss for Blog icon
import { useState, useEffect } from 'react';


// Placeholder for a real logo
const AppLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-primary">
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
  </svg>
);


export default function Navbar() {
  // In a real app, useAuth hook would provide this
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Simulate checking auth status, replace with actual auth check
    // For example, if using Firebase:
    // const unsubscribe = onAuthStateChanged(auth, (user) => {
    //   setIsAdmin(!!user && user.email === "admin@example.com"); // or check custom claims
    // });
    // return () => unsubscribe();
  }, []);


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <AppLogo />
          <span className="text-xl font-semibold text-foreground tracking-tight">AI Tool Finder</span>
        </Link>
        
        <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md ml-4 mr-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search tools..."
              className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border bg-background focus:bg-card"
              // Add onChange and value props for search functionality
            />
          </div>
        </div>

        <nav className="flex items-center gap-2 sm:gap-4">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="text-sm">
              <Rss className="mr-1.5 h-4 w-4" /> Blog
            </Button>
          </Link>
          {isMounted && ( // Prevents hydration mismatch for auth-dependent UI
            isAdmin ? (
              <Link href="/admin">
                <Button variant="ghost" size="sm">Admin Panel</Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                  <UserCircle className="mr-1.5 h-4 w-4" />
                  Login
                </Button>
              </Link>
            )
          )}
          {!isMounted && ( // Skeleton for login button during mount
             <Button variant="outline" size="sm" disabled className="border-primary text-primary">
                <UserCircle className="mr-1.5 h-4 w-4" />
                Login
              </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
