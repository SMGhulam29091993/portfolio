import { motion } from "framer-motion";
import { projectsData } from "@/data/mockData";
import { ExternalLink, ArrowUpRight, Github } from "lucide-react";
import TiltCard from "./ui/TiltCard";

interface ProjectsSectionProps {
  onContactClick?: () => void;
}

const ProjectsSection = ({ onContactClick }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-32 relative bg-[#050505] overflow-hidden">
       {/* Background Grid with Depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,white/2_1px,transparent_1px),linear-gradient(to_bottom,white/2_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-label text-primary uppercase tracking-[0.2em] text-[0.75rem] mb-4 block"
            >
              Curated Works
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[4rem] md:text-[6.5rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic"
            >
              Proven<br/>
              <span className="gradient-text">Production</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-xs"
          >
            <p className="text-on-surface-variant/60 font-medium leading-relaxed">
              A selection of engineering feats optimized for scale, performance, and user experience.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Container with 3D Tilt */}
              <TiltCard intensity={15} className="flex-1 w-full aspect-video lg:aspect-auto lg:h-[450px] relative group border border-white/10 rounded-[2.5rem] overflow-hidden neon-glow-primary">
                <div className="w-full h-full relative" style={{ transformStyle: "preserve-3d" }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-all duration-700"></div>
                  
                  {/* Floating Action Button */}
                  <motion.div 
                    style={{ transform: "translateZ(50px)" }}
                    className="absolute top-10 right-10 flex gap-4"
                  >
                     <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-2xl"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </motion.div>

                   {/* Tech stack floating tags */}
                  <div 
                    style={{ transform: "translateZ(30px)" }}
                    className="absolute bottom-10 left-10 flex flex-wrap gap-2"
                  >
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[0.6rem] font-label uppercase tracking-widest text-white/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>

              {/* Content side */}
              <div className="flex-1 flex flex-col items-start">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-label text-xs text-primary/60 border border-primary/20 px-3 py-1 rounded-full uppercase tracking-widest">
                    {project.period}
                  </span>
                  <div className="flex items-center gap-2 text-on-surface-variant/40 text-[0.7rem] font-medium tracking-widest uppercase">
                    <Github size={14} /> Source Private
                  </div>
                </div>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tighter uppercase italic leading-none">
                  {project.title}
                </h3>

                <p className="text-xl text-on-surface-variant/80 leading-relaxed mb-10 max-w-xl">
                  {project.description}
                </p>

                <ul className="space-y-4 mb-12">
                  {project.points.slice(0, 3).map((point, i) => (
                    <li key={i} className="flex items-start gap-4 text-on-surface-variant font-medium group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform" />
                      {point}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={onContactClick}
                  className="group flex items-center gap-4 text-primary font-black uppercase font-label tracking-widest text-sm hover:gap-6 transition-all"
                >
                  Project Details
                  <ArrowUpRight className="group-hover:rotate-45 transition-transform" size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 text-center">
          <TiltCard intensity={5}>
            <div 
              className="inline-block glass p-12 md:p-20 rounded-[4rem] text-center border border-white/5 relative overflow-hidden group cursor-pointer"
              onClick={onContactClick}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <h3 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase italic">
                Ready to Start Your<br/>
                <span className="gradient-text">Next System?</span>
              </h3>
              <p className="text-on-surface-variant mb-12 max-w-md mx-auto">
                Let's architect a solution that balances technical excellence with premium design.
              </p>
              <button 
                className="bg-primary text-primary-foreground font-black px-12 py-5 rounded-full hover:scale-105 transition-all shadow-glow font-label uppercase text-sm tracking-widest"
              >
                Launch Inquiry
              </button>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
