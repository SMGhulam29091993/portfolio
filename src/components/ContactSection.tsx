import { motion } from "framer-motion";
import { contactData, footerData } from "@/data/mockData";
import { Mail, Phone, MapPin, Github, Linkedin, Code } from "lucide-react";

interface ContactSectionProps {
  onContactClick?: () => void;
}

const ContactSection = ({ onContactClick }: ContactSectionProps) => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="font-label text-primary uppercase tracking-[0.2em] text-[0.75rem] mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[3.5rem] md:text-[5rem] font-black font-headline tracking-tighter leading-[0.9] uppercase italic"
          >
            Let's <span className="gradient-text">Build</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass max-w-5xl mx-auto p-8 md:p-16 lg:p-24 rounded-[3rem] relative overflow-hidden neon-glow-primary"
        >
          <p className="text-on-surface-variant text-xl leading-relaxed mb-16 max-w-2xl mx-auto">
            {contactData.message}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="flex flex-col gap-8 items-center lg:items-start lg:pl-8">
              <motion.a
                href={`mailto:${contactData.email}`}
                whileHover={{ x: 5 }}
                className="flex items-center gap-5 text-lg md:text-xl font-bold tracking-tight text-foreground transition-all italic group"
              >
                <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-[0_0_20px_rgba(221,183,255,0.2)]">
                  <Mail size={24} />
                </div>
                <span className="break-all text-left underline decoration-primary/20 hover:decoration-primary">{contactData.email}</span>
              </motion.a>
              <motion.a
                href={`tel:${contactData.phone}`}
                whileHover={{ x: 5 }}
                className="flex items-center gap-5 text-lg md:text-xl font-bold tracking-tight text-foreground transition-all italic group"
              >
                <div className="p-4 bg-secondary/10 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300 shadow-[0_0_20px_rgba(76,215,246,0.2)]">
                  <Phone size={24} />
                </div>
                <span className="underline decoration-secondary/20 hover:decoration-secondary">{contactData.phone}</span>
              </motion.a>
            </div>

            <div className="flex flex-col gap-8 items-center lg:items-start lg:pl-8">
              <motion.a
                href={`https://linkedin.com/in/${contactData.linkedinHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-5 text-lg md:text-xl font-bold tracking-tight text-foreground transition-all italic group"
              >
                <div className="p-4 bg-white/5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Linkedin size={24} />
                </div>
                <span className="underline decoration-white/10 hover:decoration-primary">@{contactData.linkedinHandle}</span>
              </motion.a>
              <motion.a
                href={`https://github.com/${contactData.githubHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-5 text-lg md:text-xl font-bold tracking-tight text-foreground transition-all italic group"
              >
                <div className="p-4 bg-white/5 rounded-2xl text-foreground group-hover:bg-white group-hover:text-background transition-all duration-300">
                  <Github size={24} />
                </div>
                <span className="underline decoration-white/10 hover:decoration-white">@{contactData.githubHandle}</span>
              </motion.a>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-10">
             <button 
              onClick={onContactClick}
              className="bg-primary text-primary-foreground font-black px-12 py-5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(221,183,255,0.4)] font-label uppercase tracking-widest text-sm neon-glow-primary"
             >
               Open Message Form
             </button>
             <span className="flex items-center gap-3 text-on-surface-variant/40 font-label uppercase tracking-[0.2em] text-[0.7rem] italic">
              <MapPin size={18} className="text-primary/40" />
              {contactData.location}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
