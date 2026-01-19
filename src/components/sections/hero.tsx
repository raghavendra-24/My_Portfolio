import { FileDown, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  // Replace this with your actual Google Drive resume link
  const resumeLink = "https://drive.google.com/file/d/1giB8zW3DcwHRLxFHoH-0KCmae6ld3kkz/view?usp=drive_link";

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          {/* Seeking Internship Banner */}
          <div className="bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium animate-pulse">
            🎯 Actively Seeking Summer 2026 Internships
          </div>

          <div className="shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/10">
              <Image
                src="/headshot/headshot-2024.png"
                alt="Raghavendra Raju Palagani"
                fill
                sizes="(max-width: 768px) 192px, 256px"
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I&apos;m Raghavendra Raju
            </h1>
            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl">
              Machine Learning Engineer (CV/DL) • Deep Learning Practitioner • 230+ DSA Problems • 2× Hackathon Runner-Up
            </p>

            {/* Email & LinkedIn */}
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <a
                href="mailto:raghavendrapalagani671@gmail.com"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                raghavendrapalagani671@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/raghavendrapalagani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <FileDown className="w-4 h-4 mr-2" />
                See My Resume
              </a>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
