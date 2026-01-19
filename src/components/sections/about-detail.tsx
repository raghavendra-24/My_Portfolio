import { Award, Brain, Building2, Code, GraduationCap, Trophy } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { achievements } from "@/data/achievements";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { hobbies } from "@/data/hobbies";
import { codingProfiles, skillCategories } from "@/data/skills";

/**
 * Render the About Detail page content.
 *
 * @returns {JSX.Element} About detail layout.
 */
export function AboutDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-24">
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10">
              <Image
                src="/headshot/headshot-2024.png"
                alt="Raghavendra Raju Palagani"
                fill
                sizes="192px"
                priority
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Raghavendra Raju Palagani</h1>
              <p className="text-xl text-muted-foreground mb-4">
                Machine Learning Engineer (CV/DL)
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/10">
                  <Brain className="w-3 h-3 mr-2" aria-hidden="true" /> Machine Learning (CV/DL)
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Code className="w-3 h-3 mr-2" aria-hidden="true" /> Competitive Programming (DSA)
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Trophy className="w-3 h-3 mr-2" aria-hidden="true" /> Hackathon Runner-Up ×2
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <GraduationCap className="w-3 h-3 mr-2" aria-hidden="true" /> RGUKT Nuzvid
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />
              About Me
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Computer Science & Engineering student at RGUKT Nuzvid focused on Machine Learning,
                Computer Vision, and Deep Learning. CGPA: 8.76.
              </p>
              <p>
                Strong algorithmic foundation with 230+ DSA problems solved across LeetCode and
                GeeksforGeeks, LeetCode rating 1600+, and competitive programming experience.
              </p>
              <p>
                Built applied ML systems including Study Genie (collaborative AI learning platform),
                JobSetu (AI-driven mock interview system), and an AI-assisted radiology diagnosis
                tool.
              </p>
              <p>
                Recognized with 2nd Runner-Up positions at Peekuthon and HackSprint hackathons for
                practical ML-driven solutions.
              </p>
            </div>
          </Card>
        </div>

        {/* Coding Profiles Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Trophy className="w-8 h-8 text-primary" aria-hidden="true" />
            DSA Journey & Coding Profiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {codingProfiles.map((profile) => (
              <a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10 hover:border-primary/30 transition-all hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{profile.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-1">{profile.platform}</h3>
                      <p className="text-sm text-muted-foreground mb-3">@{profile.username}</p>
                      <div className="flex flex-wrap gap-2">
                        {profile.stats.map((stat) => (
                          <Badge
                            key={stat}
                            variant="outline"
                            className="bg-yellow-500/10 text-yellow-600"
                          >
                            {stat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Code className="w-8 h-8 text-primary" aria-hidden="true" />
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card
                key={category.name}
                className="p-6 backdrop-blur-xl bg-card/50 border-primary/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.Icon className={`w-6 h-6 ${category.color}`} aria-hidden="true" />
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className={`${category.color}`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary" aria-hidden="true" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card
                key={`${exp.title}-${exp.startDate}`}
                className="p-6 backdrop-blur-xl bg-card/50 border-primary/10"
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.location}
                      {exp.isRemote ? " (Remote)" : ""}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  {exp.achievements.map((achievement) => (
                    <li key={`${exp.title}-${achievement.text}`} className="flex">
                      <span className="mr-2">•</span>
                      <span className="flex-1">{achievement.text}</span>
                    </li>
                  ))}
                </ul>
                {exp.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={`${exp.title}-${skill.name}`}
                        variant="outline"
                        className="bg-primary/5"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Award className="w-8 h-8 text-primary" aria-hidden="true" />
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement) => {
              const cardContent = (
                <div key={achievement.title} className="flex items-start gap-4">
                  <span className="text-4xl">{achievement.icon}</span>
                  <div>
                    <h3 className="font-semibold mb-1">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    {achievement.date && (
                      <p className="text-xs text-muted-foreground mt-2">{achievement.date}</p>
                    )}
                    {achievement.link && (
                      <p className="text-xs text-primary mt-1">Click to verify →</p>
                    )}
                  </div>
                </div>
              );

              return achievement.link ? (
                <a
                  key={achievement.title}
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10 hover:border-primary/30 hover:scale-[1.02] transition-all">
                    {cardContent}
                  </Card>
                </a>
              ) : (
                <Card
                  key={achievement.title}
                  className="p-6 backdrop-blur-xl bg-card/50 border-primary/10 hover:border-primary/30 transition-colors"
                >
                  {cardContent}
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-20">
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" aria-hidden="true" />
              Education
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{education.degree}</h3>
                    <p className="text-muted-foreground">{education.school}</p>
                  </div>
                  <div className="text-right mt-1 md:mt-0">
                    <p className="text-sm text-muted-foreground">
                      {education.startDate} - {education.endDate}
                    </p>
                    <p className="text-sm font-medium text-primary">CGPA: {education.gpa}</p>
                  </div>
                </div>
                <div className="mt-3">
                  {education.honors.map((honor, index) => (
                    <Badge
                      key={honor.name}
                      variant="outline"
                      className={`bg-primary/5 mb-2 ${index > 0 ? "ml-2" : ""}`}
                    >
                      {honor.name}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Activities and Societies:</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                    {education.activities.map((activity) => (
                      <li key={activity.name}>{activity.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-primary"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Activities & Interests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby) => (
                <div key={hobby.name} className="space-y-2">
                  <Badge variant="outline" className="bg-primary/5 text-base py-2 px-3">
                    {hobby.emoji} {hobby.name}
                  </Badge>
                  <p className="text-sm text-muted-foreground pl-2">{hobby.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
