import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";

export const metadata: Metadata = {
  title: "Raghavendra Raju Palagani - B.Tech CSE Student & AI Developer",
  description:
    "Portfolio of Raghavendra Raju Palagani, a B.Tech CSE student at RGUKT Nuzvid specializing in AI/ML, full-stack development, and building innovative solutions like Study Genie, JobSetu, and AI-assisted medical diagnostics.",
  openGraph: {
    type: "website",
    title: "Raghavendra Raju Palagani - B.Tech CSE Student & AI Developer",
    description:
      "Portfolio of Raghavendra Raju Palagani, a B.Tech CSE student at RGUKT Nuzvid specializing in AI/ML and full-stack development.",
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
      "Portfolio of Raghavendra Raju Palagani, a B.Tech CSE student at RGUKT Nuzvid specializing in AI/ML and full-stack development.",
    images: ["/screenshots/hero-preview.png"],
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <FeaturedProjects />
    </div>
  );
}
