import { motion } from "framer-motion";
import { skillsData } from "@/data/mockData";
import { Cpu, Globe, Database, Layers, Layout } from "lucide-react";
import TiltCard from "./ui/TiltCard";

const categoryIcons: Record<string, any> = {
  "Languages": Cpu,
  "Frontend": Globe,
  "Backend": Database,
  "Databases & ORM": Layers,
  "Architecture & Ops": Layout,
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-label text-primary uppercase tracking-[0.2em] text-[0.75rem] mb-4 block"
          >
            Technical Arsenal
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[4rem] md:text-[6.5rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic"
          >
            Power<br/>
            <span className="gradient-text">Spectrum</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => {
            const Icon = categoryIcons[category.category] || Cpu;
            return (
              <TiltCard key={index} intensity={10} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-10 rounded-[3rem] border border-white/5 hover:border-primary/20 transition-all duration-500 h-full flex flex-col group relative overflow-hidden"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-primary/10 transition-colors">
                    <Icon size={120} strokeWidth={0.5} />
                  </div>

                  <div className="relative z-10" style={{ transformStyle: "preserve-3d" }}>
                    <div className="inline-flex p-4 bg-primary/10 rounded-2xl text-primary mb-8 group-hover:scale-110 transition-transform shadow-glow-sm" style={{ transform: "translateZ(30px)" }}>
                      <Icon size={24} />
                    </div>
                    
                    <h3 className="text-2xl font-black mb-10 tracking-tighter uppercase italic" style={{ transform: "translateZ(20px)" }}>
                      {category.category}
                    </h3>

                    <div className="flex flex-wrap gap-3" style={{ transform: "translateZ(10px)" }}>
                      {category.skills.map((skill, si) => (
                        <span 
                          key={si}
                          className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-[0.7rem] font-label uppercase tracking-widest text-on-surface-variant/80 hover:bg-primary/20 hover:text-primary transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
