import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    institution: "IBS",
    degree: "PGPM",
    period: "2019 – 2021",
    grade: "CGPA - 7.79",
    location: "Kolkata, WB",
  },
  {
    icon: GraduationCap,
    institution: "Ideal Institute of Engineering (MAKAUT)",
    degree: "Bachelor of Technology",
    period: "2012 – 2016",
    grade: "CGPA - 7.72",
    location: "Kalyani, WB",
  },
  {
    icon: BookOpen,
    institution: "Coding Ninjas",
    degree: "Full Stack Web Development",
    period: "March 2023 – December 2024",
    grade: "",
    location: "Backend • Frontend • Python • DSA",
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading
        title="Education"
        subtitle="Academic background & training"
      />

      <div className="grid gap-6">
        {education.map((edu, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="glass rounded-2xl p-6 md:p-8 hover-glow flex gap-4">
              <div className="p-2 rounded-xl bg-primary/10 text-primary h-fit shrink-0">
                <edu.icon size={22} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg">
                      {edu.institution}
                    </h3>
                    <p className="text-primary text-sm">{edu.degree}</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
                <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                  {edu.grade && <span>{edu.grade}</span>}
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
