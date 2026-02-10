import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Indus Net Technologies",
    role: "Associate Software Engineer",
    period: "Sept 2024 – Present",
    location: "Kolkata",
    highlights: [
      "Built a Health Risk Assessment Application to assess and predict future health risks for users.",
      "Migrated entire database from Firebase (nested format) to MongoDB with normalization for dynamic admin panel use.",
      "Developed both admin panel (React.js + PrimeReact) and mobile app backend (Node.js + Nest.js).",
      "Integrated RAG system with OpenAI's GPT-4 for personalized wellness plans.",
    ],
    tech: [
      "React Native",
      "Nest.js",
      "React.js",
      "MongoDB",
      "Tanstack Query",
      "OpenAI",
    ],
  },
  {
    company: "DCG Data Core System",
    role: "Project Associate",
    period: "Jan 2024 – Sept 2024",
    location: "Kolkata",
    highlights: [
      "Developed an Ed-Tech platform to bridge the gap between school and college.",
      "Integrated RESTful APIs to enhance platform functionality.",
      "Designed responsive UI for enhanced user experience.",
    ],
    tech: ["React.js", "Node.js", "REST APIs"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading title="Experience" subtitle="My professional journey" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="relative pl-12 md:pl-20">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full bg-primary pulse-glow"
                />

                <div className="glass rounded-2xl p-6 md:p-8 hover-glow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground flex items-center gap-2">
                        <Briefcase size={18} className="text-primary" />
                        {exp.company}
                      </h3>
                      <p className="text-primary font-medium">{exp.role}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-muted-foreground text-sm flex gap-2"
                      >
                        <span className="text-primary mt-1 shrink-0">▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
