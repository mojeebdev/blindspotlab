import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { ArrowUpRight, Eye, Radio, Zap } from "lucide-react";

const visionData = [
  {
    title: "Creator Evolution",
    description: "The transition from platform dependence to high-fidelity, decentralized ownership protocols.",
    link: "https://x.com/BlindspotLab/status/2009497216109695467",
    stability: "CRITICAL",
    vector: "v2.1"
  },
  {
    title: "Value-First Products",
    description: "Aggressive removal of over-engineering to solve foundational Day 1 friction points.",
    link: "https://x.com/BlindspotLab/status/2009997538267435511",
    stability: "HIGH",
    vector: "v1.8"
  },
  {
    title: "The Execution Pack",
    description: "Deploying modular productivity systems to bypass the standard founder burnout cycle.",
    link: "https://x.com/BlindspotLab/status/2010457986670448657",
    stability: "STABLE",
    vector: "v4.0"
  },
];

const Vision2026 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="vision" ref={sectionRef} className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background radial highlight for a "Radar" feel */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4e24cf]/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* HEADER */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-[#4e24cf] mb-4">
              <Radio size={14} className="animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black">Forecast_Transmission</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none">
              2026 <span className="text-[#4e24cf]">VISION.</span>
            </h2>
          </div>
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest max-w-[300px] leading-relaxed">
            Projecting structural shifts in digital architecture and creator ecosystems.
          </p>
        </div>

        {/* FORECAST GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {visionData.map((item) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="bg-black p-10 group relative transition-all hover:bg-[#080808] flex flex-col"
            >
              {/* Top Vector Info */}
              <div className="flex justify-between items-center mb-10 text-[9px] font-mono tracking-widest">
                <div className="flex items-center gap-2 text-gray-600">
                  <Zap size={10} className="text-[#4e24cf]" />
                  VECTOR_{item.vector}
                </div>
                <div className={`px-2 py-0.5 rounded-sm ${
                  item.stability === 'CRITICAL' ? 'text-red-500 bg-red-500/10' : 
                  item.stability === 'HIGH' ? 'text-[#4e24cf] bg-[#4e24cf]/10' : 'text-gray-400 bg-white/5'
                }`}>
                  {item.stability}
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tighter group-hover:text-[#4e24cf] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <ArrowUpRight size={14} className="text-gray-700 group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-sm text-gray-500 font-mono leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between opacity-40 group-hover:opacity-100 transition-opacity">
                 <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-gray-600">Scan Feed</span>
                 <Eye size={12} className="text-gray-600 group-hover:text-[#4e24cf]" />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Vision2026;
