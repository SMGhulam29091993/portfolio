import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Code2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/30"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary font-display text-sm md:text-base tracking-[0.3em] uppercase mb-6"
          >
            Full Stack Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">S M Ghulam</span>
            <br />
            <span className="gradient-text glow-text">Ghaus Faiyaz</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body"
          >
            Building scalable web applications with the MERN stack. Passionate
            about performance, clean architecture & user experience.
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
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
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="glass glow-border rounded-xl p-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { duration: 2, repeat: Infinity },
          }}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={24} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
