import { motion } from "framer-motion";
import { experienceData } from "@/data/mockData";
import { Briefcase, MapPin } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="font-label text-primary uppercase tracking-[0.2em] text-[0.75rem] mb-4 block"
          >
            Professional Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[3.5rem] md:text-[5rem] font-black font-headline tracking-tighter leading-[0.9] uppercase italic"
          >
            Industry <br/> <span className="gradient-text">Experience</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-16">
            {experienceData.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12 md:pl-24"
              >
                {/* Neon Timeline Dot */}
                <div className="absolute left-[13px] md:left-[29px] top-2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_15px_rgba(221,183,255,0.8)] z-10" />
                
                <div className="glass p-8 md:p-12 rounded-[2rem] hover:bg-white/[0.03] transition-all duration-500 group neon-glow-secondary">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                      <h3 className="text-2xl font-bold font-headline tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-secondary font-label text-xs uppercase tracking-widest font-bold">
                          {exp.role}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <div className="flex items-center gap-1 text-on-surface-variant/60 text-xs">
                          <MapPin size={12} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant/40 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-4 max-w-2xl">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-on-surface-variant/80 text-sm leading-relaxed flex gap-3">
                        <span className="text-primary font-bold mt-1">/</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags from Experience (Optional if wanted) */}
                  <div className="flex flex-wrap gap-2 mt-8 opacity-40 group-hover:opacity-100 transition-opacity">
                    {/* You can add specific tech tags here if needed */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
