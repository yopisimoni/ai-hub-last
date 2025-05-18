
"use client"; 

import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ToolCard from "@/components/tools/ToolCard";
import CategoryFilter from "@/components/tools/CategoryFilter";
import type { Tool, Category } from "@/types";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, ThumbsUp, Zap, BarChart3 } from "lucide-react"; // Renamed Search to SearchIcon
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"; 

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [tools, setTools] = useState<Tool[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<"name" | "newest" | "popular">("name");


 useEffect(() => {
    const fetchTools = async () => {
      setIsLoading(true);
      try {
        // Simulate API delay and then set tools.
        // In a real app, you would fetch from Firebase or an API here.
        const mockTools: Tool[] = [
          // Text Generation
          { id: "t1", name: "ChatGPT", description: "Versatile AI assistant for text generation and more. OpenAI's flagship model for advanced text, audio, and image understanding.", logoUrl: "https://placehold.co/128x128.png", link: "https://chat.openai.com/", tags: ["Freemium", "LLM", "OpenAI", "Multimodal"], category: "Text Generation" },
          { id: "t2", name: "Claude", description: "AI assistant known for thoughtful, human-like conversations. Focuses on safety and helpfulness.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.anthropic.com/index/claude", tags: ["Freemium", "Conversational", "Anthropic", "Ethical AI"], category: "Text Generation" },
          { id: "t3", name: "Google Gemini", description: "Excels in creative tasks and document summarization. Google's powerful multimodal AI.", logoUrl: "https://placehold.co/128x128.png", link: "https://gemini.google.com/", tags: ["Freemium", "Multimodal", "Google", "Creative"], category: "Text Generation" },
          { id: "t7", name: "Rytr", description: "Affordable AI writing tool for various content creation needs. Offers multiple use cases and tones.", logoUrl: "https://placehold.co/128x128.png", link: "https://rytr.me/", tags: ["Freemium", "Affordable", "Content Creation", "Versatile"], category: "Text Generation" },
          
          // Marketing (Combined with Text Generation where appropriate)
          { id: "t4", name: "Jasper AI", description: "AI writing assistant tailored for marketers and content creators. Helps create high-quality marketing copy.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.jasper.ai/", tags: ["Paid", "Free Trial", "Copywriting", "Marketing"], category: "Marketing" },
          { id: "t5", name: "Copy.ai", description: "AI-powered writing generators for marketing and more. Produces various forms of marketing content.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.copy.ai/tools", tags: ["Freemium", "Content Generation", "Marketing Automation"], category: "Marketing" },
          { id: "t6", name: "Writesonic", description: "AI writing for blogs, marketing & ads with SEO optimization. Includes tools like Article Writer and Paraphraser.", logoUrl: "https://placehold.co/128x128.png", link: "https://writesonic.com/", tags: ["Freemium", "SEO", "Blogging", "Ad Copy"], category: "Marketing" },
         
          // Productivity (Combined with Text Generation where appropriate)
          { id: "t9", name: "Grammarly", description: "AI writing tools for effortless writing and editing. Provides grammar, spelling, and style checks.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.grammarly.com/ai/ai-writing-tools", tags: ["Freemium", "Writing Assistant", "Editing", "Proofreading"], category: "Productivity" },
          { id: "t10", name: "INK Editor", description: "AI writing assistant for SEO-friendly content creation. Combines AI writing with SEO optimization features.", logoUrl: "https://placehold.co/128x128.png", link: "https://inkforall.com/", tags: ["Freemium", "SEO Content", "AI Editor", "Optimization"], category: "Productivity" },
          { id: "t11", name: "Wordtune", description: "AI-powered writing assistant for rewriting and improving content. Helps rephrase sentences and adjust tone.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.wordtune.com/", tags: ["Freemium", "Rewriter", "Editing", "Clarity"], category: "Productivity" },
          { id: "t12", name: "QuillBot", description: "AI-powered paraphrasing and summarization tool. Useful for academic writing and content reworking.", logoUrl: "https://placehold.co/128x128.png", link: "https://quillbot.com/", tags: ["Freemium", "Paraphraser", "Summarizer", "Academic"], category: "Productivity" },

          // Image Generation
          { id: "t13", name: "Midjourney", description: "AI-powered image generator known for artistic outputs. Produces highly detailed and imaginative visuals.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.midjourney.com/", tags: ["Paid", "Artistic", "High Quality", "Discord"], category: "Image Generation" },
          { id: "t14", name: "DALL·E 3", description: "OpenAI's text-to-image model for detailed images. Known for strong prompt adherence and integration with ChatGPT.", logoUrl: "https://placehold.co/128x128.png", link: "https://openai.com/dall-e", tags: ["Freemium", "OpenAI", "Detailed", "Prompt Adherence"], category: "Image Generation" },
          { id: "t15", name: "Stable Diffusion", description: "Open-source text-to-image model offering customization. Widely used and adaptable for various artistic styles.", logoUrl: "https://placehold.co/128x128.png", link: "https://stability.ai/", tags: ["Free", "Open Source", "Customizable", "Community"], category: "Image Generation" },
          { id: "t16", name: "Adobe Firefly", description: "Adobe's AI image generator integrated into Creative Cloud. Designed for commercial safety and ethical sourcing.", logoUrl: "https://placehold.co/128x128.png", link: "https://firefly.adobe.com/", tags: ["Free Trial", "Paid", "Adobe", "Integrated", "Commercial Safe"], category: "Image Generation" },
          { id: "t17", name: "Runway Gen-4", description: "Advanced AI model for video and image generation. Offers tools for text-to-video and image-to-video.", logoUrl: "https://placehold.co/128x128.png", link: "https://runwayml.com/", tags: ["Free Trial", "Paid", "Video", "Multimodal", "Creative Suite"], category: "Image Generation" },
          { id: "t18", name: "Ideogram", description: "Text-to-image model capable of generating legible text within images. Focuses on typography in generated visuals.", logoUrl: "https://placehold.co/128x128.png", link: "https://ideogram.ai/", tags: ["Freemium", "Text in Image", "Typography", "Beta"], category: "Image Generation" },
          { id: "t19", name: "DeepSeek Janus Pro", description: "AI image generation model offering detailed images. Aims for high-resolution and intricate visual outputs.", logoUrl: "https://placehold.co/128x128.png", link: "https://deepseek.com/", tags: ["Free", "Detailed", "High Resolution", "Research"], category: "Image Generation" },
          { id: "t20", name: "Dream by Wombo", description: "AI-powered app for creating artworks from text prompts. User-friendly mobile application for artistic creations.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.wombo.art/", tags: ["Freemium", "Mobile App", "Artistic", "User-Friendly"], category: "Image Generation" },
          { id: "t21", name: "Artbreeder", description: "Collaborative AI art platform for creating and modifying images. Allows users to 'breed' images together.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.artbreeder.com/", tags: ["Freemium", "Collaborative", "Image Editing", "Genealogical Art"], category: "Image Generation" },
          { id: "t22", name: "NightCafe", description: "AI art generator offering various styles and creation methods. Provides multiple algorithms and community features.", logoUrl: "https://placehold.co/128x128.png", link: "https://creator.nightcafe.studio/", tags: ["Freemium", "Multiple Styles", "Community", "Print on Demand"], category: "Image Generation" },
          { id: "t23", name: "Deep Dream Generator", description: "AI tool for generating surreal and abstract images. Known for its distinctive 'deep dream' visual style.", logoUrl: "https://placehold.co/128x128.png", link: "https://deepdreamgenerator.com/", tags: ["Freemium", "Surreal", "Abstract", "Artistic Filters"], category: "Image Generation" },
          { id: "t24", name: "StarryAI", description: "AI art generator that turns text prompts into artworks. Offers different AI models for various artistic outputs.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.starryai.com/", tags: ["Freemium", "Artistic", "Text to Art", "NFTs"], category: "Image Generation" },

          // Code Assistant
          { id: "t25", name: "GitHub Copilot", description: "AI-powered code completion tool for developers. Integrates with popular IDEs.", logoUrl: "https://placehold.co/128x128.png", link: "https://github.com/features/copilot", tags: ["Paid", "Code Completion", "IDE Integration", "GitHub"], category: "Code Assistant" },
          { id: "t26", name: "Tabnine", description: "AI code assistant for faster coding. Supports multiple languages and IDEs.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.tabnine.com/", tags: ["Freemium", "Code Completion", "Developer Tool", "Productivity"], category: "Code Assistant" },
          { id: "t27", name: "Codeium", description: "AI-powered code generation and completion tool. Offers free access for individual developers.", logoUrl: "https://placehold.co/128x128.png", link: "https://codeium.com/", tags: ["Free", "Code Generation", "Autocomplete", "IDE Extension"], category: "Code Assistant" },
          { id: "t28", name: "Amazon CodeWhisperer", description: "AI coding companion for AWS developers. Optimized for AWS services.", logoUrl: "https://placehold.co/128x128.png", link: "https://aws.amazon.com/codewhisperer/", tags: ["Freemium", "AWS", "Developer Tool", "Cloud"], category: "Code Assistant" },
          { id: "t29", name: "AskCodi", description: "AI assistant for generating code snippets and documentation. Helps with various coding tasks.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.askcodi.com/", tags: ["Freemium", "Code Snippets", "Documentation", "Developer Assistant"], category: "Code Assistant" },
          { id: "t30", name: "Codiga", description: "Static code analysis and automated code reviews. Focuses on code quality and security.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.codiga.io/", tags: ["Freemium", "Code Analysis", "Code Review", "Static Analysis"], category: "Code Assistant" },
          { id: "t31", name: "Replit", description: "Online IDE with AI-powered code assistance. Collaborative coding environment.", logoUrl: "https://placehold.co/128x128.png", link: "https://replit.com/", tags: ["Freemium", "Online IDE", "AI Coding", "Collaboration"], category: "Code Assistant" },
          { id: "t32", name: "CodeT5", description: "Open-source AI model for code understanding and generation. From Salesforce Research.", logoUrl: "https://placehold.co/128x128.png", link: "https://github.com/salesforce/CodeT5", tags: ["Free", "Open Source", "Code Model", "Research"], category: "Code Assistant" },
          { id: "t33", name: "OpenAI Codex", description: "AI system that translates natural language to code. Powers GitHub Copilot.", logoUrl: "https://placehold.co/128x128.png", link: "https://openai.com/blog/openai-codex", tags: ["Freemium", "OpenAI", "Natural Language Coding", "API"], category: "Code Assistant" },
          { id: "t34", name: "Sourcegraph Cody", description: "AI-powered code search and navigation tool. Helps understand large codebases.", logoUrl: "https://placehold.co/128x128.png", link: "https://sourcegraph.com/cody", tags: ["Freemium", "Code Search", "Code Navigation", "Enterprise"], category: "Code Assistant" },
          { id: "t35", name: "DeepCode AI", description: "AI-powered code review tool for detecting bugs and vulnerabilities. Acquired by Snyk.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.deepcode.ai/", tags: ["Freemium", "Security", "Bug Detection", "Code Quality"], category: "Code Assistant" },
          { id: "t36", name: "Figstack", description: "AI tool for understanding and documenting code. Translates code between languages.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.figstack.com/", tags: ["Freemium", "Code Documentation", "Code Understanding", "Language Translation"], category: "Code Assistant" },
          
          // Audio & Music
          { id: "t37", name: "Suno AI", description: "AI music generator with intuitive interface. Create original songs with AI.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.suno.ai/", tags: ["Freemium", "Music Generation", "Intuitive", "Song Creation"], category: "Audio & Music" },
          { id: "t38", name: "Beatoven AI", description: "AI-powered tool for creating royalty-free music. Ideal for video creators and podcasters.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.beatoven.ai/", tags: ["Freemium", "Royalty-Free", "Background Music", "Content Creators"], category: "Audio & Music" },
          { id: "t39", name: "Soundraw", description: "AI music generator for creating original tracks. Customize mood, genre, and length.", logoUrl: "https://placehold.co/128x128.png", link: "https://soundraw.io/", tags: ["Free Trial", "Paid", "Original Music", "Customizable"], category: "Audio & Music" },
          { id: "t40", name: "AIVA", description: "AI composer for creating music for various purposes. For soundtracks, games, and more.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.aiva.ai/", tags: ["Freemium", "AI Composer", "Soundtracks", "Emotional Music"], category: "Audio & Music" },
          { id: "t41", name: "Amper Music", description: "AI music composition tool for content creators. Create custom music tracks quickly (Note: Acquired by Shutterstock).", logoUrl: "https://placehold.co/128x128.png", link: "https://www.ampermusic.com/", tags: ["Free Trial", "Paid", "Content Creators", "Shutterstock"], category: "Audio & Music" },
          { id: "t42", name: "Jukebox", description: "OpenAI's neural network for generating music. Generates music with vocals in various genres.", logoUrl: "https://placehold.co/128x128.png", link: "https://openai.com/blog/jukebox", tags: ["Free", "OpenAI", "Music Generation", "Research", "Vocals"], category: "Audio & Music" },
          { id: "t43", name: "Boomy", description: "AI-powered music creation platform for generating songs. Create and release music easily.", logoUrl: "https://placehold.co/128x128.png", link: "https://boomy.com/", tags: ["Freemium", "Song Generation", "Platform", "Music Distribution"], category: "Audio & Music" },
          { id: "t44", name: "Loudly", description: "AI music generator for creating tracks in various genres. Offers a large library of sounds.", logoUrl: "https://placehold.co/128x128.png", link: "https://loudly.com/", tags: ["Freemium", "Genre Variety", "Tracks", "Music Library"], category: "Audio & Music" },
          { id: "t45", name: "Melobytes", description: "AI tool for generating music and visuals from text. Converts text into songs and abstract videos.", logoUrl: "https://placehold.co/128x128.png", link: "https://melobytes.com/", tags: ["Free", "Text to Music", "Visuals", "Experimental"], category: "Audio & Music" },
          { id: "t46", name: "Ecrett Music", description: "AI music generator for creating background music. Simple interface for video creators.", logoUrl: "https://placehold.co/128x128.png", link: "https://ecrettmusic.com/", tags: ["Free Trial", "Paid", "Background Music", "Video Editing"], category: "Audio & Music" },
          { id: "t47", name: "Humtap", description: "AI-powered music creation app for mobile devices. Create music by humming or tapping.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.humtap.com/", tags: ["Freemium", "Mobile App", "Music Creation", "Intuitive"], category: "Audio & Music" },
          { id: "t48", name: "Amadeus Code", description: "AI songwriting assistant for creating melodies. Helps overcome writer's block.", logoUrl: "https://placehold.co/128x128.png", link: "https://amadeuscode.com/", tags: ["Freemium", "Songwriting", "Melody Assistant", "iOS App"], category: "Audio & Music" },

          // Video Editing
          { id: "t49", name: "Runway", description: "AI-powered video editing and generation platform. Includes features like text-to-video, image-to-video, and advanced editing tools.", logoUrl: "https://placehold.co/128x128.png", link: "https://runwayml.com/", tags: ["Free Trial", "Paid", "Video Generation", "Platform", "AI Magic Tools"], category: "Video Editing" },
          { id: "t50", name: "Descript", description: "All-in-one video and podcast editing tool with AI features. Offers transcription, overdub, and screen recording.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.descript.com/", tags: ["Freemium", "Podcast Editing", "Transcription", "Overdub", "Screen Recording"], category: "Video Editing" },
          { id: "t51", name: "Synthesia", description: "AI video generation platform for creating professional videos. Uses AI avatars and text-to-speech.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.synthesia.io/", tags: ["Free Trial", "Paid", "AI Avatars", "Professional", "Text-to-Video"], category: "Video Editing" },
          { id: "t52", name: "Pictory", description: "AI tool for creating short videos from long content. Automatically extracts key highlights.", logoUrl: "https://placehold.co/128x128.png", link: "https://pictory.ai/", tags: ["Free Trial", "Paid", "Content Repurposing", "Short Form", "Article-to-Video"], category: "Video Editing" },
          { id: "t53", name: "Wisecut", description: "AI-powered video editor that automates editing tasks. Features auto-cut, smart background music, and subtitles.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.wisecut.video/", tags: ["Freemium", "Automated Editing", "Auto Cut", "Subtitles", "Smart Background Music"], category: "Video Editing" },
          { id: "t54", name: "Magisto", description: "AI video editor for creating marketing videos. Uses AI to analyze footage and create emotionally resonant stories.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.magisto.com/", tags: ["Freemium", "Marketing", "Social Media", "Automated Storytelling"], category: "Video Editing" },
          { id: "t55", name: "Veed.io", description: "Online video editing platform with AI features. Includes tools for subtitles, transcription, and screen recording.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.veed.io/", tags: ["Freemium", "Online Editor", "Subtitles", "Transcription", "Collaboration"], category: "Video Editing" },
          { id: "t56", name: "Lumen5", description: "AI-powered video creation platform for social media content. Transforms blog posts and articles into videos.", logoUrl: "https://placehold.co/128x128.png", link: "https://lumen5.com/", tags: ["Freemium", "Social Media", "Blog to Video", "Content Marketing"], category: "Video Editing" },
          { id: "t57", name: "Animoto", description: "Video creation tool with AI-driven templates. Easy drag-and-drop interface for creating slideshows and marketing videos.", logoUrl: "https://placehold.co/128x128.png", link: "https://animoto.com/", tags: ["Freemium", "Templates", "Slideshows", "Marketing", "User-Friendly"], category: "Video Editing" },
          { id: "t58", name: "Kapwing", description: "Online video editor with AI tools for content creation. Offers features like Smart Cut, auto-subtitling, and meme generation.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.kapwing.com/", tags: ["Freemium", "Online Editor", "Memes", "Subtitles", "Smart Cut"], category: "Video Editing" },
          { id: "t59", name: "InVideo", description: "AI-powered video editor for creating promotional videos. Provides a vast library of templates and stock media.", logoUrl: "https://placehold.co/128x128.png", link: "https://invideo.io/", tags: ["Freemium", "Promotional", "Templates", "Stock Media", "Marketing"], category: "Video Editing" },
          { id: "t60", name: "Clipchamp", description: "Microsoft's video editor with AI features. Offers timeline editing, templates, and stock assets.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.clipchamp.com/", tags: ["Freemium", "Microsoft", "Windows", "Timeline Editing", "Templates"], category: "Video Editing" },
          
          // Productivity (General)
          { id: "t61", name: "Notion AI", description: "AI-powered workspace for notes, docs, and tasks. Integrates AI assistance directly into your Notion pages.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.notion.so/product/ai", tags: ["Freemium", "Workspace", "Notes", "Tasks", "Documentation"], category: "Productivity" },
          { id: "t62", name: "Grammarly (General)", description: "AI writing assistant for clear and effective communication. Helps improve grammar, spelling, punctuation, and style across various platforms.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.grammarly.com/", tags: ["Freemium", "Writing Aid", "Communication", "Proofreading", "Style Checker"], category: "Productivity" },
          { id: "t63", name: "Otter.ai", description: "AI-powered transcription and meeting notes tool. Automatically transcribes audio and video, identifies speakers, and generates summaries.", logoUrl: "https://placehold.co/128x128.png", link: "https://otter.ai/", tags: ["Freemium", "Transcription", "Meeting Notes", "Audio to Text", "Summaries"], category: "Productivity" },
          { id: "t64", name: "Todoist", description: "Task management app with AI-powered features. Uses AI to help organize tasks, suggest due dates, and manage projects.", logoUrl: "https://placehold.co/128x128.png", link: "https://todoist.com/", tags: ["Freemium", "Task Management", "AI Features", "To-Do List", "Project Planning"], category: "Productivity" },
          { id: "t65", name: "Motion", description: "AI-powered calendar and task manager. Uses AI to automatically schedule tasks and optimize your day.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.usemotion.com/", tags: ["Free Trial", "Paid", "Calendar", "Task Manager", "Time Blocking", "Scheduling"], category: "Productivity" },
          { id: "t66", name: "ClickUp", description: "Productivity platform with AI features for task management. Offers a comprehensive suite of tools including AI for summarizing, writing, and automating tasks.", logoUrl: "https://placehold.co/128x128.png", link: "https://clickup.com/", tags: ["Freemium", "Project Management", "AI Features", "Task Automation", "Collaboration"], category: "Productivity" },
          { id: "t67", name: "Evernote", description: "Note-taking app with AI-powered organization. Helps capture, organize, and find information with AI-enhanced search and suggestions.", logoUrl: "https://placehold.co/128x128.png", link: "https://evernote.com/", tags: ["Freemium", "Note Taking", "Organization", "Information Management", "Search"], category: "Productivity" },
          { id: "t68", name: "Zapier", description: "Automation tool with AI integrations for workflows. Connects apps and automates tasks, with AI capabilities for smarter workflows.", logoUrl: "https://placehold.co/128x128.png", link: "https://zapier.com/", tags: ["Freemium", "Automation", "Workflow", "Integration", "No-Code"], category: "Productivity" },
          { id: "t69", name: "Slack", description: "Collaboration platform with AI-powered features. Integrates AI for summaries, search enhancements, and workflow automation within messaging.", logoUrl: "https://placehold.co/128x128.png", link: "https://slack.com/", tags: ["Freemium", "Collaboration", "Communication", "AI Features", "Team Messaging"], category: "Productivity" },
          { id: "t70", name: "Microsoft 365 Copilot", description: "AI assistant integrated into Microsoft Office apps. Provides AI-powered assistance in Word, Excel, PowerPoint, Outlook, and Teams.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.microsoft.com/en-us/microsoft-365", tags: ["Paid", "Microsoft Office", "AI Assistant", "Word", "Excel", "PowerPoint"], category: "Productivity" },
          { id: "t71", name: "Google Workspace AI", description: "AI features integrated into Google's productivity suite. Enhances Docs, Sheets, Slides, Meet, and Gmail with generative AI capabilities.", logoUrl: "https://placehold.co/128x128.png", link: "https://workspace.google.com/", tags: ["Paid", "Google Suite", "AI Features", "Docs", "Sheets", "Gmail"], category: "Productivity" },
          { id: "t72", name: "HyperWrite", description: "AI writing assistant for productivity and content creation. Helps generate text, rewrite content, and overcome writer's block.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.hyperwriteai.com/", tags: ["Freemium", "Writing Assistant", "Content Creation", "Text Generation"], category: "Productivity" },
          
          // Research
          { id: "t8", name: "Frase", description: "AI-driven blog post creation & SEO research. Helps optimize content for search engines.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.frase.io/", tags: ["Paid", "Free Trial", "SEO", "Content Optimization", "Research"], category: "Research" },
          { id: "t73", name: "Semantic Scholar", description: "AI-powered academic search engine.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.semanticscholar.org/", tags: ["Free", "Academic Search", "Research"], category: "Research" },
          { id: "t74", name: "Scite", description: "Smart citations for academic research.", logoUrl: "https://placehold.co/128x128.png", link: "https://scite.ai/", tags: ["Freemium", "Citations", "Research"], category: "Research" },
          { id: "t75", name: "Research Rabbit", description: "Tool for discovering and visualizing research papers.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.researchrabbit.ai/", tags: ["Free", "Paper Discovery", "Visualization"], category: "Research" },
          { id: "t76", name: "Connected Papers", description: "Tool for exploring academic paper connections.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.connectedpapers.com/", tags: ["Free", "Paper Connections", "Graph View"], category: "Research" },
          { id: "t77", name: "Litmaps", description: "Research discovery and mapping tool.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.litmaps.com/", tags: ["Freemium", "Discovery", "Mapping"], category: "Research" },
          { id: "t78", name: "Consensus", description: "AI-powered search engine for scientific research.", logoUrl: "https://placehold.co/128x128.png", link: "https://consensus.app/", tags: ["Free", "Scientific Search", "Evidence-based"], category: "Research" },
          { id: "t79", name: "Explainpaper", description: "Tool for simplifying complex academic papers.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.explainpaper.com/", tags: ["Free", "Paper Simplification", "Explanation"], category: "Research" },
        
          // Education
          { id: "t80", name: "Khanmigo (Khan Academy)", description: "AI-powered tutor and coach by Khan Academy for personalized learning.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.khanacademy.org/khan-labs", tags: ["Free Pilot", "Paid Pilot", "Tutoring", "Personalized Learning"], category: "Education" },
          { id: "t81", name: "Duolingo Max", description: "Advanced AI language learning experience powered by GPT-4.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.duolingo.com/", tags: ["Paid", "Language Learning", "GPT-4"], category: "Education" },
          { id: "t82", name: "Quizlet", description: "AI tools to help students study efficiently with smart flashcards and practice tests.", logoUrl: "https://placehold.co/128x128.png", link: "https://quizlet.com/", tags: ["Freemium", "Study Tools", "Flashcards", "Practice Tests"], category: "Education" },
          { id: "t83", name: "Socratic by Google", description: "AI-powered learning app that helps students solve and understand problems.", logoUrl: "https://placehold.co/128x128.png", link: "https://socratic.org/", tags: ["Free", "Problem Solver", "Homework Help", "Google"], category: "Education" },
          { id: "t84", name: "Gradescope", description: "AI-assisted grading and feedback tool for teachers and instructors.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.gradescope.com/", tags: ["Free for Educators", "Institutional Pricing", "Grading", "Feedback"], category: "Education" },
          { id: "t85", name: "Edmodo", description: "AI-enhanced learning management system for teachers and students.", logoUrl: "https://placehold.co/128x128.png", link: "https://new.edmodo.com/", tags: ["Freemium", "LMS", "Classroom Management"], category: "Education" },
          { id: "t86", name: "Century Tech", description: "AI-driven platform offering personalized learning paths for students.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.century.tech/", tags: ["Institution Pricing", "Personalized Learning", "K-12"], category: "Education" },
          { id: "t87", name: "Querium", description: "AI tutor focused on STEM subjects, helping students prepare for tests.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.querium.com/", tags: ["Free Trial", "Paid", "STEM", "Test Prep"], category: "Education" },
          { id: "t88", name: "Cognii", description: "Virtual AI tutor using natural language to assist with open response questions.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.cognii.com/", tags: ["Institution Pricing", "Virtual Tutor", "Natural Language"], category: "Education" },
          { id: "t89", name: "Knowji", description: "AI-powered language vocabulary app based on cognitive science.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.knowji.com/", tags: ["Paid", "Vocabulary", "Language Learning", "Cognitive Science"], category: "Education" },
          { id: "t90", name: "ELSA Speak", description: "AI-powered English speaking coach using speech recognition and feedback.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.elsaspeak.com/", tags: ["Free Trial", "Paid", "English Speaking", "Pronunciation Coach"], category: "Education" },
          { id: "t91", name: "AI Dungeon - Infinite Learning", description: "Gamified AI story creation for improving reading and creative skills.", logoUrl: "https://placehold.co/128x128.png", link: "https://play.aidungeon.io/", tags: ["Freemium", "Gamification", "Story Creation", "Reading Skills"], category: "Education" },
        ];
        setTools(mockTools);
      } catch (error) {
        console.error("Error setting mock tools:", error);
      }
      setIsLoading(false);
    };
    setTimeout(fetchTools, 800);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredTools = useMemo(() => {
    let sortedTools = [...tools];
    // Sorting logic (mock for now, real implementation would depend on data structure)
    if (sortBy === "newest") {
      // sortedTools.sort((a, b) => (b.dateAdded || 0) - (a.dateAdded || 0));
    } else if (sortBy === "popular") {
      // sortedTools.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
    } else { // name
      sortedTools.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    return sortedTools.filter(tool => {
      const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm) ||
                            tool.description.toLowerCase().includes(searchTerm) ||
                            tool.tags.some(tag => tag.toLowerCase().includes(searchTerm));
      return matchesCategory && matchesSearch;
    });
  }, [tools, searchTerm, selectedCategory, sortBy]);
  
  return (
    <>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-10 pt-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Discover the Best AI Tools
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Explore a curated collection of cutting-edge AI tools to boost your productivity, creativity, and innovation.
          </p>
        </div>
        
        <div className="mb-6 max-w-xl mx-auto">
            <div className="relative">
              <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                placeholder="Search tools by name, description, or tags..."
                className="w-full pl-12 pr-4 py-3 text-base rounded-xl border-2 focus:border-primary shadow-sm h-12"
                onChange={handleSearchChange}
                value={searchTerm}
                aria-label="Search tools"
              />
            </div>
        </div>

        <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        
        <div className="flex justify-between items-center mb-6 px-1">
          <p className="text-sm text-muted-foreground">
            {isLoading ? 'Loading tools...' : `${filteredTools.length} tool${filteredTools.length !== 1 ? 's' : ''} found`}
          </p>
          <div className="flex gap-2">
            <Button variant={sortBy === "name" ? "default" : "outline"} size="sm" onClick={() => setSortBy("name")} className="rounded-md text-xs px-3 py-1 h-8">
              <BarChart3 className="mr-1.5 h-3.5 w-3.5"/> Name
            </Button>
            <Button variant={sortBy === "newest" ? "default" : "outline"} size="sm" onClick={() => setSortBy("newest")} className="rounded-md text-xs px-3 py-1 h-8">
              <Zap className="mr-1.5 h-3.5 w-3.5"/> Newest
            </Button>
            <Button variant={sortBy === "popular" ? "default" : "outline"} size="sm" onClick={() => setSortBy("popular")} className="rounded-md text-xs px-3 py-1 h-8">
              <ThumbsUp className="mr-1.5 h-3.5 w-3.5"/> Popular
            </Button>
          </div>
        </div>


        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
            {Array.from({ length: 12 }).map((_, index) => ( 
              <Card key={index} className="flex flex-col h-full rounded-xl">
                <CardHeader className="p-4">
                  <div className="flex items-start gap-4">
                    <Skeleton className="h-14 w-14 rounded-lg" />
                    <div className="flex-1 space-y-2 pt-1">
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow space-y-1.5">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
                <CardFooter className="p-4 border-t">
                  <Skeleton className="h-9 w-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <SearchIcon className="mx-auto h-16 w-16 text-muted-foreground/70" strokeWidth={1.5}/>
            <h3 className="mt-4 text-xl font-semibold text-foreground">No Tools Found</h3>
            <p className="mt-1.5 text-md text-muted-foreground">
              Try adjusting your search or filters.
            </p>
            { (searchTerm || selectedCategory !== "All") && 
              <Button variant="outline" className="mt-6" onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}>
                Clear Filters & Search
              </Button>
            }
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
