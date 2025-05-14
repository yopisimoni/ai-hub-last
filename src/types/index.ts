
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
