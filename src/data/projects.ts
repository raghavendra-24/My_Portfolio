import { projectsSchema } from "@/lib/schemas/project";

export const projectsData = projectsSchema.parse([
  {
    id: "1",
    title: "Study Genie – AI-Powered Learning Platform",
    description:
      "An AI-driven learning platform that auto-generates books, quizzes, flashcards, and animated concept explanations. " +
      "Features real-time collaborative study rooms with AI chat assistant, shared notes, and file sharing. " +
      "Integrated payment gateway for booking live 1-on-1 doubt-clearing sessions with instant video meeting links and SMS alerts.",
    image: "/projects/study-genie.png",
    technologies: [
      "React",
      "Next.js",
      "AI/ML",
      "Real-time Collaboration",
      "Payment Gateway",
      "Video Conferencing",
      "SMS Integration",
      "Node.js",
      "Tailwind CSS",
    ],
    category: "AI & Machine Learning",
    links: {
      github: "https://github.com/raghavendra-24",
      live: "https://studygenie-eduplatform.netlify.app",
    },
    featured: true,
  },
  {
    id: "2",
    title: "JobSetu – AI-Powered Job Search Platform",
    description:
      "An AI mock interview system using real-time speech-to-text (Groq Whisper) and Gemini AI-based answer evaluation " +
      "with STAR-method analysis and relevancy scoring. Features multiple interviewer personas (HR, Technical, Executive) " +
      "with filler-word detection, speaking pace analysis (WPM), and AI-generated improved responses. " +
      "Engineered browser-native audio/video recording using MediaRecorder API with cross-browser compatibility.",
    image: "/projects/jobsetu.png",
    technologies: [
      "React",
      "Groq Whisper",
      "Gemini AI",
      "Speech-to-Text",
      "MediaRecorder API",
      "Real-time Analysis",
      "Node.js",
      "Tailwind CSS",
    ],
    category: "AI & Machine Learning",
    links: {
      github: "https://github.com/raghavendra-24",
      live: "https://jobsetu.ai",
    },
    featured: true,
  },
  {
    id: "3",
    title: "AI-Assisted Radiology Diagnosis",
    description:
      "A medical imaging AI system featuring ResNet-50 models for X-ray classification and MRI scan analysis. " +
      "Applied YOLO for precise brain tumor detection on MRI scans. Used Grad-CAM to generate explainable heatmaps, " +
      "improving clinical trust. Includes a chatbot interface enabling scan upload and interactive diagnostic queries.",
    image: "/projects/study-genie.png",
    technologies: [
      "Python",
      "ResNet-50",
      "YOLO",
      "Grad-CAM",
      "Deep Learning",
      "Medical Imaging",
      "TensorFlow",
      "Explainable AI",
      "Chatbot",
    ],
    category: "AI & Machine Learning",
    links: {
      github: "https://github.com/raghavendra-24",
    },
    featured: true,
  },
]);
