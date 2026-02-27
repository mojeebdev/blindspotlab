import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AlertTriangle, Terminal } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 overflow-hidden relative">
      {/* Glitch Effect Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      
      <div className="max-w-md w-full text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 flex justify-center"
        >
          <div className="p-4 border border-[#4e24cf]/30 bg-[#4e24cf]/5 rounded-sm">
            <AlertTriangle size={48} className="text-[#4e24cf] animate-pulse" />
          </div>
        </motion.div>

        <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">
          Signal <span className="text-[#4e24cf]">Lost.</span>
        </h1>
        
        <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-12 leading-relaxed">
          The requested coordinate does not exist within the current lab parameters. Error_Code: 404_NULL_SECTOR.
        </p>

        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-white/5 border border-white/10 text-white font-mono text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-[#4e24cf] hover:border-[#4e24cf] transition-all"
          >
            <Terminal size={14} />
            Return to Command Center
          </motion.button>
        </Link>
      </div>

      {/* Aesthetic Coordinates */}
      <div className="absolute bottom-10 left-10 text-[8px] font-mono text-gray-800 uppercase tracking-widest">
        System_State: Disconnected
      </div>
    </div>
  );
};

export default NotFound;