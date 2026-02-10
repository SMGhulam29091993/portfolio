import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { ExternalLink, Brain } from "lucide-react";

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading title="Projects" subtitle="Things I've built" />

      <AnimatedSection>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="glass rounded-2xl p-8 md:p-10 hover-glow group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/10 text-primary">
                <Brain size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground">
                  Second Brain
                </h3>
                <a
                  href="https://app.second-brain.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm hover:underline flex items-center gap-1"
                >
                  app.second-brain.live <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            A full-stack application enabling users to save, manage, and
            retrieve web links with AI-powered content analysis. Integrated
            Google's Gemini AI for automatic URL processing, generating
            summaries and relevant tags.
          </p>

          <ul className="space-y-2 mb-6">
            {[
              "JWT authentication with bcrypt hashing & email OTP verification via Nodemailer",
              "Gemini AI integration for URL analysis, summarization & auto-tagging",
              "Modular backend architecture with Zod schema validation",
              "State management with Zustand & data fetching via Tanstack Query",
            ].map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-primary mt-0.5 shrink-0">▹</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {[
              "MERN",
              "TypeScript",
              "JWT",
              "Zustand",
              "Zod",
              "Tanstack Query",
              "Nodemailer",
              "Gemini AI",
            ].map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatedSection>
    </div>
  </section>
);

export default ProjectsSection;
