// src/app/admin/dashboard/page.tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Edit3, FileText, Users, Settings, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Mock data for dashboard summary - replace with actual data fetching
const dashboardStats = {
  totalTools: 78,
  totalBlogPosts: 12,
  totalUsers: 250,
};

const recentActivities = [
  { id: 1, type: "New Tool Added", description: "Super Search AI", time: "2 hours ago" },
  { id: 2, type: "Blog Post Published", description: "'The Future of AI Ethics'", time: "5 hours ago" },
  { id: 3, type: "User Registered", description: "john.doe@example.com", time: "1 day ago" },
];

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center">
            <LayoutDashboard className="mr-3 h-8 w-8 text-primary" />
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">Welcome back, Admin! Manage your AI Tool Finder platform.</p>
        </header>

        {/* Quick Stats Section */}
        <section aria-labelledby="quick-stats-heading" className="mb-8">
          <h2 id="quick-stats-heading" className="text-xl font-semibold text-foreground mb-4">Quick Stats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-lg rounded-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Tools</CardTitle>
                <Edit3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardStats.totalTools}</div>
                <p className="text-xs text-muted-foreground">+5 this month</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Blog Posts</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardStats.totalBlogPosts}</div>
                <p className="text-xs text-muted-foreground">+2 this month</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardStats.totalUsers}</div>
                <p className="text-xs text-muted-foreground">+15 this month</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Management Sections */}
        <section aria-labelledby="management-sections-heading" className="mb-8">
          <h2 id="management-sections-heading" className="text-xl font-semibold text-foreground mb-4">Management Sections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-md hover:shadow-xl transition-shadow rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Edit3 className="mr-2 h-5 w-5 text-primary" /> Manage Tools
                </CardTitle>
                <CardDescription>Add, edit, or remove AI tools from the directory.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/admin/tools">Go to Tools Management</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-xl transition-shadow rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <FileText className="mr-2 h-5 w-5 text-primary" /> Manage Blog Posts
                </CardTitle>
                <CardDescription>Create, edit, or publish blog articles.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/admin/blog">Go to Blog Management</Link>
                </Button>
              </CardContent>
            </Card>
             <Card className="shadow-md hover:shadow-xl transition-shadow rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Users className="mr-2 h-5 w-5 text-primary" /> User Management
                </CardTitle>
                <CardDescription>View and manage user accounts and roles.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/admin/users">Go to User Management</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-xl transition-shadow rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <BarChart3 className="mr-2 h-5 w-5 text-primary" /> Site Analytics
                </CardTitle>
                <CardDescription>View website traffic and user engagement.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/admin/analytics">View Analytics</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-xl transition-shadow rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Settings className="mr-2 h-5 w-5 text-primary" /> Platform Settings
                </CardTitle>
                <CardDescription>Configure general settings for the AI Tool Finder.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/admin/settings">Go to Settings</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Recent Activity Section */}
        <section aria-labelledby="recent-activity-heading">
            <h2 id="recent-activity-heading" className="text-xl font-semibold text-foreground mb-4">Recent Activity</h2>
            <Card className="shadow-lg rounded-xl">
                <CardContent className="p-6">
                    {recentActivities.length > 0 ? (
                        <ul className="space-y-4">
                            {recentActivities.map(activity => (
                                <li key={activity.id} className="flex items-center justify-between pb-2 border-b border-border last:border-b-0 last:pb-0">
                                    <div>
                                        <p className="font-medium text-foreground">{activity.type}</p>
                                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                                    </div>
                                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-muted-foreground">No recent activity to display.</p>
                    )}
                </CardContent>
            </Card>
        </section>

      </main>
      <Footer />
    </div>
  );
}
