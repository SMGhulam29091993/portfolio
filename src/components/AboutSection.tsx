import { motion, useScroll, useTransform } from "framer-motion";
import { aboutData } from "@/data/mockData";
import { Zap, Code, ShieldCheck, Cpu } from "lucide-react";
import TiltCard from "./ui/TiltCard";

const AboutSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.1, 0.3], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.3], [-5, 0]);

  return (
    <section id="about" className="min-h-screen pt-32 pb-24 overflow-hidden relative bg-[#050505]">
      {/* Massive Background Text */}
      <div className="absolute left-10 top-20 text-[12rem] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter uppercase whitespace-nowrap">
        Full Stack
      </div>

      <div className="max-w-7xl mx-auto px-8 mb-24 relative">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-7xl md:text-[8.5rem] font-black tracking-tighter leading-[0.8] text-foreground relative z-10 uppercase italic"
        >
          CORE<br/>
          <span className="gradient-text">IDENTITY</span>
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: Cinematic Identity Card with 3D Tilt */}
        <motion.div 
          style={{ scale, rotateZ: rotate }}
          className="lg:col-span-5 relative group"
        >
          <div className="absolute -inset-8 bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>
          
          <TiltCard intensity={25} className="relative aspect-[3/4.5] group">
            <div className="w-full h-full glass rounded-[3rem] overflow-hidden border border-white/10 neon-glow-primary relative" style={{ transformStyle: "preserve-3d" }}>
              {/* Profile Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/My_plain_BG.png" 
                  alt="Profile"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
              </div>

              {/* Technical Overlays with independent Z-offsets */}
              <div className="absolute inset-0 z-10 pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]"></div>
                
                <motion.div 
                  style={{ transform: "translateZ(80px)" }} 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-10 right-10 flex flex-col gap-2 items-end"
                >
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-2xl px-3 py-1.5 rounded-lg border border-white/10 shadow-2xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-[0.5rem] font-label text-white/80 tracking-widest uppercase">System.Active</span>
                  </div>
                  <div className="text-[0.5rem] font-label text-white/30 tracking-widest">LOC: 22.5726° N, 88.3639° E</div>
                </motion.div>

                <div style={{ transform: "translateZ(60px)" }} className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
                  <div>
                    <div className="text-primary font-black text-2xl tracking-tighter uppercase italic leading-none mb-1 shadow-primary/20 shadow-sm">SMG2F</div>
                    <div className="text-white/40 text-[0.5rem] font-label uppercase tracking-widest">Engineer 01-A-IND</div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-2xl shadow-xl">
                    <ShieldCheck size={20} className="text-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Right: Content Section */}
        <div className="lg:col-span-7 flex flex-col">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="relative pt-8"
          >
            <div className="font-label text-[0.7rem] uppercase tracking-[0.3em] text-primary mb-10 flex items-center gap-4">
              <span className="w-16 h-[1px] bg-primary/40"></span>
              Full Stack Developer
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-px font-bold tracking-tight mb-12 leading-[1.1] text-foreground italic">
              Crafting digital realms where <span className="text-neutral-500 font-light">form</span> meets <span className="gradient-text font-black">{aboutData.highlight}</span>.
            </h2>

            <div className="space-y-8 text-on-surface-variant text-xl leading-relaxed max-w-2xl font-body">
              {aboutData.description.map((para, i) => (
                <p key={i} className={i === 0 ? "text-foreground font-medium" : ""}>
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {aboutData.tags.map((tag, i) => (
                <TiltCard key={i} intensity={10}>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white/5 p-6 rounded-[2rem] border border-white/5 flex flex-col gap-4 hover:bg-white/10 hover:border-primary/20 transition-all cursor-default group h-full"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className={`p-3 bg-${tag.color}/10 rounded-xl text-${tag.color} w-fit group-hover:scale-110 transition-transform`} style={{ transform: "translateZ(20px)" }}>
                      {tag.icon === 'terminal' && <Cpu size={20} />}
                      {tag.icon === 'zap' && <Zap size={20} />}
                      {tag.icon === 'deployed_code' && <Code size={20} />}
                    </div>
                    <span className="font-label text-xs uppercase tracking-widest leading-snug" style={{ transform: "translateZ(10px)" }}>{tag.label}</span>
                  </motion.div>
                </TiltCard>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-20 flex flex-wrap gap-16 items-center border-t border-white/5 pt-12">
              {aboutData.stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl font-black text-foreground tracking-tighter leading-none">{stat.value}</div>
                  <div className="font-label text-[0.6rem] uppercase tracking-widest text-on-surface-variant/40 mt-3">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
