export interface Achievement {
  text: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isRemote?: boolean;
  achievements: Achievement[];
  skills: Skill[];
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "DevSecEngOps",
    location: "India",
    startDate: "March 2024",
    endDate: "July 2025",
    isRemote: true,
    achievements: [
      {
        text: "Developed automated web scraping solutions using Python with BeautifulSoup and Selenium.",
      },
      {
        text: "Extracted data from multiple online sources to support internal analytics and reporting.",
      },
      {
        text: "Performed data cleaning and validation to ensure data accuracy and consistency.",
      },
      {
        text: "Optimized scraping pipelines for reliability in dynamic web environments.",
      },
    ],
    skills: [
      { name: "Python" },
      { name: "BeautifulSoup" },
      { name: "Selenium" },
      { name: "Web Scraping" },
      { name: "Data Cleaning" },
      { name: "Automation" },
    ],
  },
  {
    title: "Data Science Intern",
    company: "SmartED Innovations",
    location: "India",
    startDate: "October 2023",
    endDate: "November 2023",
    achievements: [
      {
        text: "Analyzed large datasets to derive actionable insights for decision-making.",
      },
      {
        text: "Performed data cleaning, transformation, and preprocessing using Python.",
      },
      {
        text: "Built visualizations using Matplotlib, Seaborn, and Tableau.",
      },
      {
        text: "Collaborated with cross-functional teams to deliver data-driven outcomes.",
      },
    ],
    skills: [
      { name: "Python" },
      { name: "Data Analysis" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "Tableau" },
      { name: "Data Visualization" },
    ],
  },
];

export const previousExperiences: Experience[] = [];
