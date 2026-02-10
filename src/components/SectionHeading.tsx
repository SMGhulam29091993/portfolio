import { motion } from "framer-motion";

const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="text-center mb-16">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-display font-bold mb-4"
    >
      <span className="gradient-text">{title}</span>
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground max-w-xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="h-0.5 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-6"
    />
  </div>
);

export default SectionHeading;
