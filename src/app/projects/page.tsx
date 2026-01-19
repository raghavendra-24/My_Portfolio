import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/project-grid";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects - Raghavendra Raju",
  description:
    "Explore my portfolio of projects in AI/ML, full-stack development, and innovative solutions including Study Genie, JobSetu, and AI-assisted medical diagnostics.",
};

/**
 * Projects page listing portfolio items.
 *
 * @returns Projects page element.
 */
export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-balance font-heading text-4xl font-bold md:text-6xl">Projects</h1>
        <p className="text-balance text-xl text-muted-foreground">
          A collection of projects showcasing my work in AI/ML, full-stack development, and
          innovative solutions built during hackathons and personal learning.
        </p>
      </div>
      <div className="mt-16 mx-auto max-w-6xl">
        <h2 className="sr-only">Project List</h2>
        <ProjectGrid projects={projectsData} />
      </div>
    </div>
  );
}
