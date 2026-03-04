import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, Calendar, Terminal } from "lucide-react";
import { Link } from "react-router-dom"; 
import { Button } from "@/components/ui/button";

const ContactSuccess = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full text-center relative z-10"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#4e24cf]/10 border border-[#4e24cf]/30 mb-8 shadow-[0_0_50px_rgba(78,36,207,0.2)]">
          <CheckCircle2 size={40} className="text-[#4e24cf]" />
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none">
          TRANSMISSION <br /><span className="text-[#4e24cf]">RECEIVED.</span>
        </h1>
        
        <div className="space-y-6 mb-12">
          <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em] leading-loose">
            Your data has been indexed. The Lab founder <span className="text-white">(@MojeebHQ)</span> will initiate a secure handshake via Telegram within 12h.
          </p>
          
          <div className="p-4 bg-[#070707] border border-white/5 inline-block rounded-sm">
            <p className="text-[10px] font-mono text-[#4e24cf] uppercase tracking-widest flex items-center gap-2">
              <Terminal size={12} /> Status: Awaiting_Manual_Review
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <Button 
            asChild
            className="bg-[#4e24cf] hover:bg-[#5a2de0] text-white font-black py-7 px-8 uppercase tracking-[0.2em] text-[10px] rounded-none shadow-[0_0_20px_rgba(78,36,207,0.3)]"
          >
            <a href="https://calendly.com/Blindspotlab1/30min" target="_blank" rel="noopener noreferrer">
              <Calendar size={14} className="mr-2" /> Bypass Queue (Priority Sync)
            </a>
          </Button>
          
          
          <Button 
            asChild
            variant="outline"
            className="border-white/10 text-white font-black py-7 px-8 uppercase tracking-[0.2em] text-[10px] rounded-none hover:bg-white/5"
          >
            <Link to="/">
              <ArrowLeft size={14} className="mr-2" /> Return to Terminal
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSuccess;