
// This is a Server Component by default
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Tool } from "@/types";
import { ArrowLeft, ExternalLink, Tag, Info, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Updated mock data fetching function
async function getToolDetails(id: string): Promise<Tool | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  const mockTools: Tool[] = [
    { id: "t1", name: "ChatGPT", description: "Versatile AI assistant for text generation and more. OpenAI's flagship model for advanced text, audio, and image understanding.", logoUrl: "https://placehold.co/128x128.png", link: "https://chat.openai.com/", tags: ["Freemium", "LLM", "OpenAI", "Multimodal"], category: "Text Generation" },
    { id: "t2", name: "Claude", description: "AI assistant known for thoughtful, human-like conversations. Focuses on safety and helpfulness.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.anthropic.com/index/claude", tags: ["Freemium", "Conversational", "Anthropic", "Ethical AI"], category: "Text Generation" },
    { id: "t3", name: "Google Gemini", description: "Excels in creative tasks and document summarization. Google's powerful multimodal AI.", logoUrl: "https://placehold.co/128x128.png", link: "https://gemini.google.com/", tags: ["Freemium", "Multimodal", "Google", "Creative"], category: "Text Generation" },
    { id: "t4", name: "Jasper AI", description: "AI writing assistant tailored for marketers and content creators. Helps create high-quality marketing copy.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.jasper.ai/", tags: ["Paid", "Free Trial", "Copywriting", "Marketing"], category: "Marketing" },
    { id: "t5", name: "Copy.ai", description: "AI-powered writing generators for marketing and more. Produces various forms of marketing content.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.copy.ai/tools", tags: ["Freemium", "Content Generation", "Marketing Automation"], category: "Marketing" },
    { id: "t6", name: "Writesonic", description: "AI writing for blogs, marketing & ads with SEO optimization. Includes tools like Article Writer and Paraphraser.", logoUrl: "https://placehold.co/128x128.png", link: "https://writesonic.com/", tags: ["Freemium", "SEO", "Blogging", "Ad Copy"], category: "Marketing" },
    { id: "t7", name: "Rytr", description: "Affordable AI writing tool for various content creation needs. Offers multiple use cases and tones.", logoUrl: "https://placehold.co/128x128.png", link: "https://rytr.me/", tags: ["Freemium", "Affordable", "Content Creation", "Versatile"], category: "Text Generation" },
    { id: "t8", name: "Frase", description: "AI-driven blog post creation & SEO research. Helps optimize content for search engines.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.frase.io/", tags: ["Paid", "Free Trial", "SEO", "Content Optimization", "Research"], category: "Research" },
    { id: "t9", name: "Grammarly", description: "AI writing tools for effortless writing and editing. Provides grammar, spelling, and style checks.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.grammarly.com/ai/ai-writing-tools", tags: ["Freemium", "Writing Assistant", "Editing", "Proofreading"], category: "Productivity" },
    { id: "t10", name: "INK Editor", description: "AI writing assistant for SEO-friendly content creation. Combines AI writing with SEO optimization features.", logoUrl: "https://placehold.co/128x128.png", link: "https://inkforall.com/", tags: ["Freemium", "SEO Content", "AI Editor", "Optimization"], category: "Productivity" },
    { id: "t11", name: "Wordtune", description: "AI-powered writing assistant for rewriting and improving content. Helps rephrase sentences and adjust tone.", logoUrl: "https://placehold.co/128x128.png", link: "https://www.wordtune.com/", tags: ["Freemium", "Rewriter", "Editing", "Clarity"], category: "Productivity" },
    { id: "t12", name: "QuillBot", description: "AI-powered paraphrasing and summarization tool. Useful for academic writing and content reworking.", logoUrl: "https://placehold.co/128x128.png", link: "https://quillbot.com/", tags: ["Freemium", "Paraphraser", "Summarizer", "Academic"], category: "Productivity" },
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
  ];
  return mockTools.find(tool => tool.id === id) || null;
}

export default async function ToolDetailPage({ params }: { params: { id: string } }) {
  const tool = await getToolDetails(params.id);

  if (!tool) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <Info className="mx-auto h-16 w-16 text-destructive mb-4" />
          <h1 className="text-3xl font-semibold">Tool Not Found</h1>
          <p className="text-muted-foreground mt-2">Sorry, we couldn't find the details for this tool.</p>
          <Link href="/" className="mt-8 inline-block">
            <Button variant="default">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Tools
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button variant="outline" size="sm" asChild className="text-sm hover:bg-accent hover:text-accent-foreground">
            <Link href="/" >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all tools
            </Link>
          </Button>
        </div>

        <Card className="overflow-hidden shadow-xl rounded-xl">
          <CardHeader className="p-6 sm:p-8 bg-card border-b">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              <Image
                src={tool.logoUrl || "https://placehold.co/128x128.png"}
                alt={`${tool.name} logo`}
                width={120}
                height={120}
                className="rounded-xl border-2 border-border object-contain shadow-md shrink-0 aspect-square"
                data-ai-hint="logo brand"
              />
              <div className="flex-1">
                <Badge variant="secondary" className="mb-2 text-sm font-medium py-1 px-2.5">{tool.category}</Badge>
                <CardTitle className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">{tool.name}</CardTitle>
                <Button asChild size="lg" className="mt-6 w-full sm:w-auto text-base">
                  <Link href={tool.link} target="_blank" rel="noopener noreferrer">
                    Visit {tool.name} <ExternalLink className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 sm:p-8">
            <section aria-labelledby="about-tool-heading">
              <h2 id="about-tool-heading" className="text-2xl font-semibold mb-4 text-foreground">About {tool.name}</h2>
              <div className="prose prose-sm sm:prose-base max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                <p>{tool.description}</p>
              </div>
            </section>

            {tool.tags && tool.tags.length > 0 && (
              <section aria-labelledby="tags-heading" className="mt-8">
                <h3 id="tags-heading" className="text-xl font-semibold mb-3 text-foreground flex items-center">
                  <Tag className="mr-2 h-5 w-5 text-primary" /> Tags & Keywords
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm px-3 py-1 font-normal">{tag}</Badge>
                  ))}
                </div>
              </section>
            )}
            
            {/* Placeholder for additional sections */}
            <section aria-labelledby="features-heading" className="mt-8 pt-6 border-t">
               <h3 id="features-heading" className="text-xl font-semibold mb-4 text-foreground">Key Features (Example)</h3>
               <ul className="space-y-2">
                 {["Advanced AI algorithms", "User-friendly interface", "Scalable for enterprise use", "Comprehensive documentation"].map(feature => (
                    <li key={feature} className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2.5 shrink-0" />
                      {feature}
                    </li>
                 ))}
               </ul>
            </section>

          </CardContent>
          <CardFooter className="p-6 sm:p-8 border-t bg-secondary/20">
             <p className="text-xs text-muted-foreground italic">
                Information about {tool.name} is subject to change. Please visit the official website for the most up-to-date details. (Last mock update: {new Date().toLocaleDateString()})
             </p>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const mockToolIds = [
    "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10", "t11", "t12",
    "t13", "t14", "t15", "t16", "t17", "t18", "t19", "t20", "t21", "t22", "t23", "t24",
    "t25", "t26", "t27", "t28", "t29", "t30", "t31", "t32", "t33", "t34", "t35", "t36",
    "t37", "t38", "t39", "t40", "t41", "t42", "t43", "t44", "t45", "t46", "t47", "t48",
    "t49", "t50", "t51", "t52", "t53", "t54", "t55", "t56", "t57", "t58", "t59", "t60",
    "t61", "t62", "t63", "t64", "t65", "t66", "t67", "t68", "t69", "t70", "t71", "t72"
  ]; 
  return mockToolIds.map((id) => ({ id }));
}
