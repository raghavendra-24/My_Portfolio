/**
 * @fileoverview Structured data helpers and component for rendering JSON-LD
 * schemas for Person and WebSite entities.
 */
import { createHash } from "node:crypto";
import type React from "react";

/**
 * Builds a JSON-LD Person schema for the portfolio owner.
 *
 * @returns JSON-LD compliant schema object with basic person details.
 */
export function generatePersonSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Raghavendra Raju Palagani",
    url: "https://raghavendrapalagani.com",
    jobTitle: "B.Tech CSE Student & AI Developer",
    description:
      "B.Tech CSE student at RGUKT Nuzvid specializing in AI/ML, full-stack development, and building innovative solutions. Hackathon winner with experience in deep learning, web scraping, and data science.",
    sameAs: [
      "https://github.com/raghavendra-24",
      "https://linkedin.com/in/raghavendrapalagani",
    ],
    knowsAbout: [
      "Machine Learning",
      "Deep Learning",
      "ResNet-50",
      "YOLO",
      "Grad-CAM",
      "TensorFlow",
      "Gemini AI",
      "Speech-to-Text",
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "Python",
      "JavaScript",
      "TypeScript",
      "Web Scraping",
      "BeautifulSoup",
      "Selenium",
      "Data Science",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Tableau",
    ],
  };
}

/**
 * Builds a JSON-LD WebSite schema for the portfolio.
 *
 * @returns JSON-LD compliant WebSite schema object.
 */
export function generateWebsiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Raghavendra Raju Palagani - Portfolio",
    url: "https://raghavendrapalagani.com",
    description:
      "Personal portfolio of Raghavendra Raju Palagani, a B.Tech CSE student at RGUKT Nuzvid specializing in AI/ML, full-stack development, and hackathon-winning projects.",
    author: {
      "@type": "Person",
      name: "Raghavendra Raju Palagani",
    },
  };
}

/**
 * Props for the StructuredData component.
 */
interface StructuredDataProps {
  type: "person" | "website" | "both";
}

/**
 * Creates a stable React key from a JSON-LD schema by hashing its contents and
 * prefixing with the schema's @type and name when present.
 *
 * @param schema Arbitrary JSON-LD schema.
 * @returns Stable key string safe for React keys.
 */
export const createSchemaKey = (schema: Record<string, unknown>): string => {
  const type = typeof schema["@type"] === "string" ? (schema["@type"] as string) : undefined;
  const name = typeof schema.name === "string" ? (schema.name as string) : undefined;
  const baseKey = [type, name].filter(Boolean).join("-");
  const serialized = JSON.stringify(schema);
  const digest = createHash("sha256").update(serialized).digest("hex").slice(0, 12);
  return baseKey ? `${baseKey}-${digest}` : digest;
};

/**
 * Renders one or both JSON-LD schemas as <script type="application/ld+json">.
 *
 * @param type Controls which schemas are emitted.
 * @returns React fragment containing the JSON-LD script elements.
 */
export default function StructuredData({ type }: StructuredDataProps): React.ReactElement {
  const schemas = [];

  if (type === "person" || type === "both") {
    schemas.push(generatePersonSchema());
  }

  if (type === "website" || type === "both") {
    schemas.push(generateWebsiteSchema());
  }

  return (
    <>
      {schemas.map((schema) => {
        const record = schema as Record<string, unknown>;
        return (
          <script
            key={createSchemaKey(record)}
            type="application/ld+json"
            suppressHydrationWarning
            // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD payload is static and controlled.
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        );
      })}
    </>
  );
}
