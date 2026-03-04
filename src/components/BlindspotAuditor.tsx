import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  Terminal, 
  ShieldAlert, 
  Cpu, 
  Download, 
  ChevronRight, 
  Activity, 
  Database 
} from "lucide-react";
import { Button } from "@/components/ui/button";


const SuccessState = ({ onReset }: { onReset: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-2xl mx-auto p-8 border border-[#4e24cf]/30 bg-[#050505] relative overflow-hidden"
    >
      {/* Scanning Line Animation */}
      <motion.div 
        animate={{ y: [-100, 400] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[1px] bg-[#4e24cf]/30 z-0"
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-[#4e24cf]/10 flex items-center justify-center border border-[#4e24cf]/40">
              <CheckCircle2 size={18} className="text-[#4e24cf]" />
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">Analysis_Complete</h3>
              <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">ID: BLINDSPOT-SEC-992</p>
            </div>
          </div>
          <div className="text-right hidden sm:block">
            <span className="text-[8px] font-mono text-[#4e24cf] uppercase tracking-widest block">Security_Tier</span>
            <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Alpha_Restricted</span>
          </div>
        </div>

        <div className="space-y-4 mb-10">
          <div className="p-4 bg-white/5 border border-white/10 flex gap-4">
            <ShieldAlert size={16} className="text-[#4e24cf] shrink-0" />
            <div className="space-y-1">
              <span className="text-[9px] font-black uppercase tracking-widest text-white block">Logic_Vulnerability</span>
              <p className="text-[11px] text-gray-400 font-mono uppercase tracking-tight leading-relaxed">
                Foundational narrative friction detected. System suggests a pivot to high-signal community flywheels.
              </p>
            </div>
          </div>

          <div className="p-4 bg-white/5 border border-white/10 flex gap-4">
            <Database size={16} className="text-gray-500 shrink-0" />
            <div className="space-y-1">
              <span className="text-[9px] font-black uppercase tracking-widest text-white block">Protocol_Stability</span>
              <p className="text-[11px] text-gray-400 font-mono uppercase tracking-tight leading-relaxed">
                Sustainability index: 64%. Early user incentives require aggressive modular restructuring.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button 
            className="bg-[#4e24cf] hover:bg-[#5a2de0] text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-none py-7 shadow-glow"
            onClick={() => window.location.href = "/contact"}
          >
            Engage Strategist
          </Button>
          <Button 
            variant="outline"
            className="border-white/10 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-none py-7"
            onClick={onReset}
          >
            New Diagnostic
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN AUDITOR COMPONENT ---
const BlindspotAuditor = () => {
  const [status, setStatus] = useState<'idle' | 'analyzing' | 'success'>('idle');
  const [formData, setFormData] = useState({
    project: "",
    goal: "",
    bottleneck: ""
  });

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('analyzing');
    // Simulate Lab Processing Time
    setTimeout(() => {
      setStatus('success');
    }, 3000);
  };

  return (
    <div className="py-24 relative max-w-4xl mx-auto px-6">
      <AnimatePresence mode="wait">
        {status === 'idle' && (
          <motion.div
            key="idle-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="space-y-12"
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="h-[1px] flex-grow bg-white/10" />
               <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-gray-500">Intake_Form</span>
               <div className="h-[1px] flex-grow bg-white/10" />
            </div>

            <form onSubmit={handleAudit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Project_Name</label>
                  <input 
                    required
                    className="w-full bg-white/5 border border-white/10 p-4 font-mono text-sm text-white focus:border-[#4e24cf] transition-colors outline-none"
                    placeholder="E.G. NEURAL_PROTOCOL"
                    onChange={(e) => setFormData({...formData, project: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Primary_Target</label>
                  <input 
                    required
                    className="w-full bg-white/5 border border-white/10 p-4 font-mono text-sm text-white focus:border-[#4e24cf] transition-colors outline-none"
                    placeholder="E.G. MAINNET_LAUNCH"
                    onChange={(e) => setFormData({...formData, goal: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Critical_Blindspot_Description</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 p-4 font-mono text-sm text-white focus:border-[#4e24cf] transition-colors outline-none resize-none"
                  placeholder="WHAT IS THE ONE THING YOU'RE AFRAID YOU'RE MISSING?"
                  onChange={(e) => setFormData({...formData, bottleneck: e.target.value})}
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#4e24cf] hover:bg-[#5a2de0] text-white font-black text-[10px] uppercase tracking-[0.3em] py-8 rounded-none group"
              >
                Run System Diagnostic <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
              </Button>
            </form>
          </motion.div>
        )}

        {status === 'analyzing' && (
          <motion.div 
            key="analyzing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-20 flex flex-col items-center"
          >
            <div className="relative mb-8">
               <div className="w-24 h-24 border border-white/5 rounded-full" />
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border-t-2 border-[#4e24cf] rounded-full shadow-[0_0_15px_rgba(78,36,207,0.5)]" 
               />
               <Cpu className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#4e24cf] opacity-50" size={24} />
            </div>
            <div className="space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.6em] text-[#4e24cf] animate-pulse">Running_Diagnostic_Scripts</p>
              <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-gray-600">Cross_Referencing_Archive_v2.026</p>
            </div>
          </motion.div>
        )}

        {status === 'success' && (
          <SuccessState key="success" onReset={() => setStatus('idle')} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlindspotAuditor;