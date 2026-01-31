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
    title: "Real-Time Person Detection with MLOps Monitoring",
    description:
      "A deployable computer vision system for low-latency people detection using YOLOv8-Nano trained on CrowdHuman dataset, " +
      "achieving ~66% mAP@50 with ~8.5 ms ONNX inference latency (~117 FPS). Features statistical input drift monitoring " +
      "based on brightness and contrast distributions to detect environmental shifts. FastAPI backend provides WebSocket-based " +
      "real-time inference and Prometheus metrics, while React frontend using WebRTC enables browser-based webcam analysis. " +
      "Deployed via CI/CD on Render (backend) and Vercel (frontend), with model artifacts loaded from HuggingFace at runtime.",
    image: "/projects/realtime-detection.png",
    technologies: [
      "YOLOv8",
      "ONNX",
      "FastAPI",
      "WebSocket",
      "Prometheus",
      "React",
      "WebRTC",
      "MLOps",
      "CI/CD",
      "HuggingFace",
    ],
    category: "AI & Machine Learning",
    links: {
      github: "https://github.com/raghavendra-24/realtime-detection-mlops",
      live: "https://realtime-detection-mlops.vercel.app/",
    },
    featured: true,
  },
]);
