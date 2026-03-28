import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onContactClick?: () => void;
}

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Work", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = ({ onContactClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    setMobileOpen(false);
    target.scrollIntoView({ behavior: "smooth" });
  };

  const handleHireMe = (e: React.MouseEvent) => {
    if (onContactClick) {
      e.preventDefault();
      onContactClick();
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? "glass-nav py-4" : "bg-transparent py-6"
    }`}>
      <div className="flex justify-between items-center px-10 max-w-[1440px] mx-auto">
        <motion.div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-black tracking-tighter text-foreground cursor-pointer uppercase"
        >
          SMG2F
        </motion.div>

        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-foreground/70 font-medium hover:text-primary transition-all duration-300 font-label text-xs uppercase tracking-widest relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a 
            href="/SMGhulam_CV.pdf"
            download="SMGhulam_CV.pdf"
            className="text-on-surface-variant hover:text-primary transition-colors font-label text-[0.65rem] uppercase tracking-widest px-4 py-2 border border-white/5 rounded-full hover:bg-white/5"
          >
            CV
          </a>
          <button 
            onClick={handleHireMe}
            className="bg-gradient-to-br from-primary to-primary-container text-primary-foreground font-bold px-8 py-3 rounded-full neon-glow-primary active:scale-95 transition-all duration-300 font-label text-xs uppercase tracking-widest"
          >
            Hire Me
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/5 py-8 px-10 space-y-6"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block text-2xl font-bold text-foreground/80 hover:text-primary uppercase tracking-tighter"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={handleHireMe}
              className="w-full bg-gradient-to-br from-primary to-primary-container text-primary-foreground font-bold py-4 rounded-xl"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
