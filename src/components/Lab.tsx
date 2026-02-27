import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { ArrowUpRight, Database, SearchCode } from "lucide-react";

const labData = [
  {
    title: "Monad",
    blindspot: "Technical fragmentation.",
    leverage: "UX-centric parallel execution.",
    link: "https://x.com/BlindspotLab/status/1998102240159039538",
    code: "MN-01"
  },
  {
    title: "Coinbase Launchpad",
    blindspot: "High fees & long sale windows.",
    leverage: "RWA vertical dominance & KYC-gated fee reduction.",
    link: "https://x.com/BlindspotLab/status/1997430391570075807",
    code: "CB-04"
  },
  {
    title: "Farcaster",
    blindspot: "Social echo chambers.",
    leverage: "High-signal social flywheels.",
    link: "https://x.com/BlindspotLab/status/2001571711238455434",
    code: "FC-09"
  },
  {
    title: "Hub.xyz",
    blindspot: "Identity fragmentation.",
    leverage: "Unified reputation as a Web3 Social OS.",
    link: "https://x.com/BlindspotLab/status/2000185849716335059",
    code: "HB-12"
  },
  {
    title: "2026 ICO Models",
    blindspot: "Mercenary capital & points fatigue.",
    leverage: "Sustainable distribution for Day 0 believers.",
    link: "https://x.com/BlindspotLab/status/2003594287305429078",
    code: "ICO-26"
  },
  {
    title: "Tokenomics Audit",
    blindspot: "Inflationary loops without utility.",
    leverage: "Deflationary sinks tied to protocol value.",
    link: "https://x.com/BlindspotLab/status/2005534320434299312",
    code: "TK-07"
  },
];

const Lab = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="lab" ref={sectionRef} className="py-32 bg-black overflow-hidden">
      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* SECTION HEADER */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-[#4e24cf] mb-4">
              <Database size={14} />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black">Intel_Archive_v1</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none">
              THE <span className="text-[#4e24cf]">LAB.</span>
            </h2>
          </div>
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest max-w-[300px] leading-relaxed">
            Case studies in identifying structural friction across the Web3 stack.
          </p>
        </div>

        {/* DATA GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {labData.map((card) => (
            <motion.a
              key={card.title}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="bg-black p-8 group relative overflow-hidden transition-all hover:bg-[#050505]"
            >
              {/* Subtle hover accent */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[#4e24cf] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              
              <div className="flex items-start justify-between mb-8">
                <div>
                    <span className="text-[9px] font-mono text-[#4e24cf] mb-1 block">{card.code}</span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tighter group-hover:text-[#4e24cf] transition-colors">
                      {card.title}
                    </h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-700 group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <div className="space-y-6">
                <div>
                  <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-2">
                    <SearchCode size={10} /> Blindspot
                  </span>
                  <p className="text-sm text-gray-400 font-mono leading-relaxed">
                    {card.blindspot}
                  </p>
                </div>

                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#4e24cf] font-bold mb-2 block">
                    Leverage Logic
                  </span>
                  <p className="text-sm text-white font-mono leading-relaxed">
                    {card.leverage}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Lab;