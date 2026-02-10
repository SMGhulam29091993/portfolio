import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, MapPin, Github, Linkedin, Code2 } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="container mx-auto max-w-3xl text-center">
      <SectionHeading
        title="Get In Touch"
        subtitle="Let's build something amazing together"
      />

      <AnimatedSection>
        <div className="glass rounded-2xl p-8 md:p-12 hover-glow">
          <p className="text-muted-foreground mb-8 text-lg">
            I'm currently open to new opportunities. Whether you have a project
            in mind or just want to connect, feel free to reach out!
          </p>

          <div className="flex flex-col gap-4 items-center mb-10">
            <a
              href="mailto:smghulam.ghausfaiyaz19@gmail.com"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} className="text-primary" />
              smghulam.ghausfaiyaz19@gmail.com
            </a>
            <a
              href="tel:9007045010"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <Phone size={18} className="text-primary" />
              9007045010
            </a>
            <span className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              Kolkata, West Bengal
            </span>
          </div>

          <div className="flex justify-center gap-4">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              {
                icon: Linkedin,
                href: "https://linkedin.com",
                label: "LinkedIn",
              },
              { icon: Code2, href: "https://leetcode.com", label: "LeetCode" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-secondary text-muted-foreground hover:text-primary hover:border-primary/40 border border-border/50 transition-colors duration-300"
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
