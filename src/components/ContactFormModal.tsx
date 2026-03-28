import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";
import { contactData } from "@/data/mockData";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal = ({ isOpen, onClose }: ContactFormModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare email content
    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.query}`;
    
    // Redirect to mailto for real-world functionality on static sites
    const mailtoUrl = `mailto:${contactData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Mock submission delay for visual feedback
    await new Promise(resolve => setTimeout(resolve, 1500));

    window.location.href = mailtoUrl;

    toast.success("Opening your email client...");
    
    setIsSubmitting(false);
    // Note: We don't clear form immediately as the mail client might fail to open or user might want to come back
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl neon-glow-primary overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 text-on-surface-variant transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-8">
              <h2 className="text-3xl font-black font-headline tracking-tighter uppercase italic text-foreground">
                Get in <span className="gradient-text">Touch</span>
              </h2>
              <p className="text-on-surface-variant/60 text-sm mt-2 font-label uppercase tracking-widest">
                Start a conversation
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[0.65rem] font-label uppercase tracking-[0.2em] text-primary/60 ml-1">Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40 group-focus-within:text-primary transition-colors" size={18} />
                  <input 
                    required
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/5 focus:border-primary/50 focus:bg-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm outline-none transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[0.65rem] font-label uppercase tracking-[0.2em] text-primary/60 ml-1">Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40 group-focus-within:text-primary transition-colors" size={18} />
                    <input 
                      required
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/5 focus:border-primary/50 focus:bg-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm outline-none transition-all placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[0.65rem] font-label uppercase tracking-[0.2em] text-primary/60 ml-1">Phone</label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40 group-focus-within:text-primary transition-colors" size={18} />
                    <input 
                      required
                      type="tel"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/5 focus:border-primary/50 focus:bg-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm outline-none transition-all placeholder:text-white/20"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[0.65rem] font-label uppercase tracking-[0.2em] text-primary/60 ml-1">Project Details</label>
                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-6 text-on-surface-variant/40 group-focus-within:text-primary transition-colors" size={18} />
                  <textarea 
                    required
                    placeholder="Tell me about your project..."
                    rows={4}
                    value={formData.query}
                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                    className="w-full bg-white/5 border border-white/5 focus:border-primary/50 focus:bg-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm outline-none transition-all resize-none placeholder:text-white/20"
                  />
                </div>
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-gradient-to-br from-primary to-primary-container text-primary-foreground font-black py-5 rounded-[1.25rem] flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 disabled:active:scale-100 transition-all font-label uppercase tracking-[0.2em] text-xs shadow-[0_0_30px_rgba(221,183,255,0.4)]"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                  />
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal;
