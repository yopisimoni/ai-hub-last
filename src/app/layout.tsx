import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  title: {
    default: "AI Hub — Solve Real Tasks with AI",
    template: "%s | AI Hub",
  },
  description:
    "Practical AI workflows for content, social media, websites, small business, learning, and online work. Start with the problem, then use the right tools.",
  keywords: [
    "AI workflows",
    "AI tools",
    "ChatGPT workflows",
    "AI productivity",
    "AI for small business",
    "AI content creation",
  ],
  openGraph: {
    title: "AI Hub — Solve Real Tasks with AI",
    description:
      "Start with what you want to accomplish. Get a practical AI workflow and the right tools for the job.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased min-h-screen flex flex-col"
        )}
      >
        {children}
        <Toaster />

        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', {
                  send_page_view: true
                });
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
