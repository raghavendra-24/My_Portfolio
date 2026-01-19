export interface Achievement {
  title: string;
  description: string;
  icon: string;
  date?: string;
  link?: string;
}

export const achievements: Achievement[] = [
  {
    title: "Deep Learning Specialization – Coursera",
    description:
      "Completed the Deep Learning Specialization from DeepLearning.AI, covering neural networks, hyperparameter tuning, CNNs, RNNs, and sequence models.",
    icon: "🧠",
    date: "2025",
    link: "https://www.credly.com/earner/earned/badge/14e91f03-24c3-4ce1-96ad-2d8db37b3378",
  },
  {
    title: "Top 2% Performer – NPTEL Cloud Computing",
    description:
      "Demonstrated strong proficiency in cloud fundamentals and distributed systems through nationwide certification.",
    icon: "🏆",
    date: "2024",
  },
  {
    title: "2nd Runner-up – Peekuthon Hackathon",
    description:
      "Built Study Genie, an AI-powered collaborative learning platform. Organized by Everest Engineering.",
    icon: "🥉",
    date: "2025",
  },
  {
    title: "Semi-finalist – CMR Hackathon",
    description: "Developed an AI-powered education platform that reached the semi-finals.",
    icon: "🎯",
    date: "February 2025",
  },
  {
    title: "2nd Runner-up – HackSprint Hackathon",
    description:
      "Presented an AI-Assisted Radiology Diagnosis system with explainable AI using Grad-CAM.",
    icon: "🥉",
    date: "2025",
  },
];
