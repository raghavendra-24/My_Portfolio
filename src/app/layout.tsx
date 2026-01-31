import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/layout/app-shell";
import StructuredData from "@/components/structured-data";
import { ThemeScript } from "@/components/theme";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "error";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? "https://raghavendrapalagani.com"),
  title: {
    template: "%s | Raghavendra Raju",
    default: "Raghavendra Raju Palagani - B.Tech CSE Student & AI Developer",
  },
  description:
    "B.Tech CSE student at RGUKT Nuzvid specializing in AI/ML, full-stack development, and building innovative solutions. Hackathon winner and AI enthusiast.",
  icons: {
    icon: "/headshot/headshot-2024.png",
    apple: "/headshot/headshot-2024.png",
  },
  openGraph: {
    type: "website",
    title: "Raghavendra Raju Palagani - B.Tech CSE Student & AI Developer",
    description:
      "B.Tech CSE student at RGUKT Nuzvid specializing in AI/ML, full-stack development, and building innovative solutions. Hackathon winner and AI enthusiast.",
    images: [
      {
        url: "/screenshots/hero-preview.png",
        width: 1200,
        height: 630,
        alt: "Raghavendra Raju Palagani - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghavendra Raju Palagani - B.Tech CSE Student & AI Developer",
    description:
      "B.Tech CSE student at RGUKT Nuzvid specializing in AI/ML, full-stack development, and building innovative solutions.",
    images: ["/screenshots/hero-preview.png"],
  },
  keywords: [
    "Raghavendra Raju Palagani",
    "AI/ML Developer",
    "Full-Stack Developer",
    "RGUKT Nuzvid",
    "B.Tech CSE",
    "Machine Learning",
    "Deep Learning",
    "ResNet",
    "YOLO",
    "Grad-CAM",
    "React",
    "Next.js",
    "Python",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "FastAPI",
    "Study Genie",
    "JobSetu",
    "MLOps",
    "YOLOv8",
    "Real-Time Detection",
    "Web Scraping",
    "Data Science",
    "Hackathon Winner",
    "NPTEL Cloud Computing",
    "TensorFlow",
    "Gemini AI",
    "Speech-to-Text",
  ],
  authors: [{ name: "Raghavendra Raju Palagani" }],
  creator: "Raghavendra Raju Palagani",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={inter.className}>
        <AppShell>{children}</AppShell>
        <StructuredData type="both" />
      </body>
    </html>
  );
}
