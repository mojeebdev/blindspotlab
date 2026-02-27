import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Lock, Send, ShieldCheck, Globe } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mreegpqv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast({
          title: "INTAKE PROTOCOL INITIALIZED",
          description: "Founder (@MojeebHQ) will DM you on Telegram. Verify handle to ensure secure handshake.",
          action: (
            <ToastAction altText="Book Call" onClick={() => window.open("https://calendly.com/Blindspotlab1/30min", "_blank")}>
              Priority Sync
            </ToastAction>
          ),
          duration: 8000,
        });
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Transmission Error",
        description: "Protocol failed. Reach out to @MojeebHQ directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-black border-t border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-12 h-12 rounded-full bg-[#4e24cf]/10 flex items-center justify-center mb-6 border border-[#4e24cf]/20"
            >
              <Lock size={18} className="text-[#4e24cf]" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none">
              Engage the <span className="text-[#4e24cf]">Lab</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg text-sm font-mono uppercase tracking-widest">
              Strategic intake for Tier-1 Web3 & AI Teams. 
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* INSTRUCTIONS PANEL */}
            <div className="md:col-span-4 space-y-6">
              <div className="p-6 bg-[#070707] border border-white/5 rounded-sm">
                <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                  <ShieldCheck size={12} className="text-[#4e24cf]" /> Security Protocol
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-mono uppercase">
                  All strategic consultations are handled directly via encrypted Telegram. Expect a handshake within 12-24 hours.
                </p>
              </div>
              
              <div className="p-6 border border-white/5 rounded-sm">
                <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                   Current Node
                </h4>
                <p className="text-xs text-gray-500 font-mono">
                  GMT+1 // GLOBAL REMOTE
                </p>
              </div>
            </div>

            {/* FORM PANEL */}
            <form onSubmit={handleSubmit} className="md:col-span-8 bg-[#0a0a0a] border border-white/10 p-8 rounded-sm space-y-6 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[9px] font-bold text-gray-600 uppercase tracking-widest ml-1">Identity</label>
                  <Input name="name" placeholder="Name" required className="bg-black border-white/10 rounded-sm focus:border-[#4e24cf]/50 h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold text-gray-600 uppercase tracking-widest ml-1">System URL</label>
                  <Input name="project" placeholder="Project / URL" required className="bg-black border-white/10 rounded-sm focus:border-[#4e24cf]/50 h-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-gray-600 uppercase tracking-widest ml-1">Communication Handle</label>
                <Input name="telegram" placeholder="Telegram (@...)" required className="bg-black border-white/10 rounded-sm focus:border-[#4e24cf]/50 h-12" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-gray-600 uppercase tracking-widest ml-1">Primary Bottleneck</label>
                <Textarea name="message" placeholder="Describe the friction you are facing..." required className="bg-black border-white/10 rounded-sm focus:border-[#4e24cf]/50 min-h-[140px] resize-none" />
              </div>
              
              <Button type="submit" disabled={isSubmitting} className="w-full bg-[#4e24cf] text-white hover:bg-[#5a2de0] font-black py-7 uppercase tracking-[0.3em] text-[10px] transition-all rounded-sm shadow-lg shadow-[#4e24cf]/20">
                {isSubmitting ? (
                  <span className="flex items-center gap-2 animate-pulse">Initializing Transmission...</span>
                ) : (
                  <span className="flex items-center gap-2">Request Full Consultation <Send size={12} /></span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
