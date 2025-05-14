
"use client"; // Keep as client component for form handling

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// This will be replaced by a proper Firebase login form later
export default function LoginPage() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder for Firebase login logic
    alert("Login functionality to be implemented with Firebase.");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/30">
        <Card className="w-full max-w-md shadow-2xl rounded-xl">
          <CardHeader className="text-center p-6 sm:p-8">
            <CardTitle className="text-3xl font-bold tracking-tight">Admin Login</CardTitle>
            <CardDescription className="mt-2">Enter your credentials to access the admin panel.</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6 p-6 sm:p-8">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="admin@example.com" required 
                       className="h-11 text-base focus:border-primary"/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" required 
                       className="h-11 text-base focus:border-primary"/>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 p-6 sm:p-8 border-t">
              <Button type="submit" className="w-full h-11 text-base">
                Sign In
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                This is a placeholder login form. Firebase Authentication will be implemented.
              </p>
              <Button variant="ghost" asChild className="text-sm text-primary hover:text-primary/90">
                <Link href="/">
                  <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to Home
                </Link>
              </Button>
            </CardFooter>
          </form>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
