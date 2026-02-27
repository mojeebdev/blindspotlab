import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const MobileCTA = () => {
  const navigate = useNavigate();
  const location = useLocation();

  
  const handleAction = () => {
    if (location.pathname === "/") {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate("/#contact");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-[60] md:hidden"
    >
      <div 
        className="p-4 flex flex-col gap-2"
        style={{
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(78, 36, 207, 0.3)'
        }}
      >
        {/* SMALL SYSTEM STATUS TAG */}
        <div className="flex justify-between items-center px-1">
           <span className="text-[7px] font-mono text-gray-500 uppercase tracking-[0.3em]">Ready_for_Intake</span>
           <span className="text-[7px] font-mono text-[#4e24cf] uppercase tracking-[0.3em] animate-pulse">Node_Active</span>
        </div>

        <Button
          size="lg"
          className="w-full font-black text-[10px] tracking-[0.2em] uppercase py-7 bg-[#4e24cf] hover:bg-[#5a2de0] text-white rounded-sm border border-white/10 shadow-[0_0_20px_rgba(78,36,207,0.2)] transition-all active:scale-[0.98]"
          onClick={handleAction}
        >
          <Zap size={14} className="mr-2 fill-current" />
          Request Strategy Sync
        </Button>
      </div>
    </motion.div>
  );
};

export default MobileCTA;
