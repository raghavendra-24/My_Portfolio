import type { Metadata } from "next";
import { AboutDetail } from "@/components/sections/about-detail";

export const metadata: Metadata = {
  title: "About - Raghavendra Raju | B.Tech CSE Student & AI Developer",
  description:
    "Learn more about Raghavendra Raju Palagani, a B.Tech CSE student at RGUKT Nuzvid specializing in AI/ML, full-stack development, and hackathon-winning projects.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <AboutDetail />
    </div>
  );
}
