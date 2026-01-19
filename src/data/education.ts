export interface Honor {
  name: string;
}

export interface Activity {
  name: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  honors: Honor[];
  activities: Activity[];
}

export const education: Education = {
  degree: "Bachelor of Technology (B.Tech), Computer Science & Engineering",
  school: "RGUKT Nuzvid",
  location: "Andhra Pradesh, India",
  startDate: "2023",
  endDate: "Present",
  gpa: "8.76",
  honors: [
    { name: "Top 2% NPTEL Cloud Computing" },
    { name: "2nd Runner-up Peekuthon Hackathon" },
    { name: "Semi-finalist CMR Hackathon" },
    { name: "2nd Runner-up HackSprint Hackathon" },
  ],
  activities: [
    { name: "Coordinator – 7-Day Workshop on AI/ML Technologies (EPAIT)" },
    { name: "Sports Coordinator – CSE Department" },
    { name: "NSS Volunteer since Sept 2023" },
  ],
};
