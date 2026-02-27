import Header from "../components/Header";
import Footer from "../components/Footer";
import BlindspotAuditor from "../components/BlindspotAuditor";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Activity, BarChart3, Binary, ChevronRight } from "lucide-react";

const AuditPage = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#4e24cf] selection:text-white">
      <Header />

      <main className="pt-32">
        {/* 1. HERO / PROTOCOL INTRO */}
        <section className="pb-24 px-6 relative overflow-hidden">
          {/* Decorative Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-sm border border-[#4e24cf]/30 bg-[#4e24cf]/5 mb-10 backdrop-blur-sm"
            >
              <Activity size={14} className="text-[#4e24cf] animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/70">
                Diagnostic_Protocol_v4.0
              </span>
            </motion.div>
            
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 uppercase leading-none">
              STRATEGY <br /><span className="text-[#4e24cf]">AUDITOR.</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-mono uppercase tracking-widest">
              Deploying high-fidelity diagnostics to identify structural decay in Web3 and AI architectures.
            </p>
          </div>
        </section>

        {/* 2. THE CORE ENGINE (Embedded Component) */}
        <section className="border-y border-white/5 bg-[#030303]">
           <BlindspotAuditor />
        </section>

        {/* 3. DIAGNOSTIC PHASES (The "Science") */}
        <section className="py-32 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
              <div className="max-w-sm">
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">The Logic Layer</h2>
                <p className="text-xs text-gray-500 font-mono uppercase tracking-widest leading-loose">
                  Our algorithm processes your project data through three distinct verification tiers.
                </p>
              </div>
              <div className="text-[10px] font-mono text-[#4e24cf] uppercase tracking-[0.4em] pt-4">
                Analysis_Sequence_001-003
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
              {[
                {
                  icon: <BarChart3 size={24} />,
                  title: "Logic Mapping",
                  desc: "Cross-referencing narrative structure against 500+ institutional-grade frameworks to eliminate friction."
                },
                {
                  icon: <ShieldCheck size={24} />,
                  title: "Stress Testing",
                  desc: "Simulating market resistance and 'Point Fatigue' to identify where your roadmap will fracture."
                },
                {
                  icon: <Zap size={24} />,
                  title: "Instant Intel",
                  desc: "Synthesis via an LLM layer fine-tuned on elite tier-1 strategy consulting patterns."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-black p-10 group hover:bg-[#050505] transition-all">
                  <div className="text-[#4e24cf] mb-8 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="font-black uppercase tracking-tighter text-xl mb-4">{item.title}</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-mono uppercase tracking-widest">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. UPGRADE PATH (CTA) */}
        <section className="py-40 px-6 relative overflow-hidden bg-black">
          {/* Glowing background accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-[#4e24cf]/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-8">
               <Binary size={32} className="text-[#4e24cf]" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">
              REQUEST HUMAN <span className="text-[#4e24cf]">INTERVENTION.</span>
            </h2>
            <p className="text-gray-500 mb-12 text-xs uppercase tracking-[0.3em] leading-loose max-w-2xl mx-auto">
              AI identifies the patterns. We engineer the solutions. 
              Engage for a full-scale manual audit of your ecosystem logic.
            </p>
            
            <motion.a 
              href="/#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-4 bg-[#4e24cf] text-white px-12 py-6 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#5a2de0] transition-all shadow-[0_0_40px_rgba(78,36,207,0.3)]"
            >
              Initialize Direct Channel <ChevronRight size={14} />
            </motion.a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AuditPage;