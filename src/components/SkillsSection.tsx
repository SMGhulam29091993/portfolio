import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "HTML/CSS"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "React Native", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Nest.js"],
  },
  {
    title: "Databases & ORM",
    skills: ["MongoDB", "PostgreSQL", "TypeORM", "Prisma"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "DSA"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <SectionHeading title="Skills" subtitle="Technologies I work with" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <AnimatedSection key={cat.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 hover-glow h-full"
            >
              <h3 className="font-display font-semibold text-primary mb-4 text-lg">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * j }}
                    className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-foreground/80 border border-border/50 hover:border-primary/40 hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
