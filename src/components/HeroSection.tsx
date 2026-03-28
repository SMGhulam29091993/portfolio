import { motion, useScroll, useTransform } from "framer-motion";
import { heroData } from "@/data/mockData";
import TiltCard from "./ui/TiltCard";

interface HeroSectionProps {
  onContactClick?: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="min-h-screen flex flex-col justify-center px-10 relative overflow-hidden pt-20 bg-[#050505]">
      {/* Background Decor with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" 
      />
      
      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(221,183,255,1)]" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-on-surface-variant font-label">
                {heroData.badge}
              </span>
            </motion.div>

            <div className="flex flex-col gap-2 mb-10">
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] font-black leading-[0.8] tracking-tighter uppercase italic text-foreground"
              >
                {heroData.title.first}
              </motion.h1>
              <motion.h1 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] font-black leading-[0.8] tracking-tighter uppercase italic gradient-text pl-0 md:pl-20"
              >
                {heroData.title.middle}
              </motion.h1>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] font-black leading-[0.8] tracking-tighter uppercase italic text-foreground text-right"
              >
                {heroData.title.last}
              </motion.h1>
            </div>
          </div>

          <TiltCard intensity={15} className="hidden lg:block relative w-96 h-[500px] rounded-[4rem] overflow-hidden group">
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.4 }}
               className="w-full h-full border border-white/10 neon-glow-primary overflow-hidden rounded-[4rem]"
            >
              <img 
                src="/My_plain_BG.png" 
                alt="Profile"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40"></div>
              
              {/* Internal 3D Floating Element */}
              <div 
                style={{ transform: "translateZ(50px)" }} 
                className="absolute top-10 left-10 py-2 px-4 glass rounded-xl border border-white/10 backdrop-blur-3xl text-[0.6rem] font-label uppercase tracking-widest text-primary font-black shadow-2xl"
              >
                Engineer 01
              </div>
            </motion.div>
          </TiltCard>
        </div>

        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mt-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-md"
          >
            <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed font-body">
              {heroData.description}
            </p>
            <div className="mt-8 flex items-center gap-4 text-on-surface-variant/40 font-label text-xs uppercase tracking-widest">
              <span className="w-10 h-[1px] bg-white/10" />
              {heroData.trustText}
            </div>
          </motion.div>

          {/* Social icons for mobile/tablet when lg image is hidden */}
          <div className="lg:hidden w-32 h-32 rounded-3xl overflow-hidden border border-white/10 mb-[-2rem] self-start md:self-auto">
             <img 
              src="/My_plain_BG.png" 
              alt="Profile"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, delay: 1 }}
            onClick={onContactClick}
            className="bg-primary text-primary-foreground font-black px-12 py-6 rounded-full text-xl uppercase tracking-wider font-label neon-glow-primary active:shadow-inner"
          >
            {heroData.cta}
          </motion.button>
        </div>
      </div>

      {/* Modern Aesthetic Element: Floating Perspective Grid with Parallax */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden pointer-events-none opacity-20"
      >
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-full bg-[linear-gradient(to_right,white/5_1px,transparent_1px),linear-gradient(to_bottom,white/5_1px,transparent_1px)] bg-[size:100px_100px] [transform:perspective(500px)_rotateX(60deg)_translateY(50px)]" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
