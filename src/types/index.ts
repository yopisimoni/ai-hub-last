
export interface Tool {
  id: string;
  name: string;
  description: string;
  logoUrl: string; // URL to the tool's logo
  link: string; // URL to the tool's website
  tags: string[];
  category: string;
}

export const categories = [
  "Text Generation",
  "Image Generation",
  "Code Assistant",
  "Audio & Music",
  "Video Editing",
  "Productivity",
  "Research",
  "Marketing",
  "Data Analysis",
  "Education",
] as const;

export type Category = typeof categories[number];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string; // ISO 8601 format e.g., "2024-05-15"
  excerpt: string;
  content: string; // Full content, could be Markdown or HTML
  imageUrl: string;
  author: string;
  tags?: string[];
  category?: string; // Optional category for blog posts
}

export const blogCategories = [
  "AI Insights",
  "Tool Reviews",
  "Tutorials",
  "Industry News",
  "Future of AI",
] as const;

export type BlogCategory = typeof blogCategories[number];
