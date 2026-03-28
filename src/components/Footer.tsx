import { footerData } from "@/data/mockData";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="bg-background w-full py-12 px-8 border-t border-white/5 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-2 items-center md:items-start">
        <motion.span 
          whileHover={{ scale: 1.05 }}
          className="text-lg font-bold text-foreground font-headline tracking-tighter"
        >
          {footerData.brand}
        </motion.span>
        <p className="font-label text-[0.7rem] uppercase tracking-[0.1em] text-on-surface-variant/40">
          {footerData.copyright}
        </p>
      </div>
      <div className="flex gap-8">
        {footerData.socials.map((social) => (
          <motion.a
            key={social.name}
            href={social.link}
            whileHover={{ y: -2, textShadow: "0 0 8px rgba(221,183,255,0.4)" }}
            className="font-label text-[0.75rem] uppercase tracking-[0.1em] text-on-surface-variant/60 hover:text-primary transition-colors transition-transform"
          >
            {social.name}
          </motion.a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
