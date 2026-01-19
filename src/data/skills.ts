import { Brain, Code, Database, Trophy } from "lucide-react";
import type { ElementType } from "react";

export interface SkillCategory {
  name: string;
  Icon: ElementType;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    Icon: Brain,
    color: "bg-purple-500/10 text-purple-500",
    skills: [
      "Deep Learning",
      "Neural Networks",
      "ResNet-50",
      "YOLO",
      "Grad-CAM",
      "TensorFlow",
      "Gemini AI",
      "Speech-to-Text",
    ],
  },
  {
    name: "DSA & Competitive Programming",
    Icon: Trophy,
    color: "bg-yellow-500/10 text-yellow-500",
    skills: [
      "180+ LeetCode Problems",
      "LeetCode Rating 1600+",
      "50 Days Badge",
      "50+ GFG Problems",
      "Arrays & Strings",
      "Trees & Graphs",
      "Dynamic Programming",
      "Binary Search",
    ],
  },
  {
    name: "Programming Languages",
    Icon: Code,
    color: "bg-green-500/10 text-green-500",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "C++",
      "SQL",
      "Git",
      "Linux",
    ],
  },
  {
    name: "Data Science",
    Icon: Database,
    color: "bg-orange-500/10 text-orange-500",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Tableau",
      "BeautifulSoup",
      "Selenium",
      "Data Visualization",
    ],
  },
];

// Coding Profiles
export interface CodingProfile {
  platform: string;
  username: string;
  url: string;
  stats: string[];
  icon: string;
}

export const codingProfiles: CodingProfile[] = [
  {
    platform: "LeetCode",
    username: "lora_24",
    url: "https://leetcode.com/u/lora_24/",
    stats: ["180+ Problems Solved", "Contest Rating: 1600+", "50 Days Badge"],
    icon: "🏆",
  },
  {
    platform: "GeeksforGeeks",
    username: "raghavendrap41gw",
    url: "https://www.geeksforgeeks.org/profile/raghavendrap41gw",
    stats: ["50+ Problems Solved"],
    icon: "💻",
  },
];
