import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Layers, Target, Search, BarChart, HardHat, Cpu } from "lucide-react";

const pillars = [
  {
    icon: <Layers size={24} />,
    title: "Narrative Architecture",
    desc: "Refining the structural logic of your brand. We eliminate narrative friction to ensure your project's 'One-Liner' resonates with Tier-1 capital and community leads.",
    status: "Active"
  },
  {
    icon: <Target size={24} />,
    title: "Growth Engineering",
    desc: "Moving beyond vanity metrics. We build retention loops and ecosystem flywheels designed for the 2026 market cycle.",
    status: "Operational"
  },
  {
    icon: <Search size={24} />,
    title: "Blindspot Auditing",
    desc: "Our flagship diagnostic protocol. We stress-test your roadmap against market realities to find the cracks before your competitors do.",
    status: "Flagship"
  },
  {
    icon: <BarChart size={24} />,
    title: "Intelligence Signals",
    desc: "Market trend forecasting. We provide the 'signals' within the noise of Web3 and AI to keep your project ahead of the narrative curve.",
    status: "Beta"
  },
  {
    icon: <HardHat size={24} />,
    title: "Advisory Nodes",
    desc: "Direct strategic intervention. High-touch consulting for founders who require an external 'Strategy Officer' for critical milestones.",
    status: "Exclusive"
  }
];

const Capabilities = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4 text-[#4e24cf]">
              <Cpu size={18} />
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold">Lab_Capabilities_Index</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-8">
              System <br /><span className="text-[#4e24cf]">Outputs.</span>
            </h1>
            <p className="max-w-xl text-gray-500 font-mono text-sm leading-relaxed uppercase tracking-widest">
              BLINDSPOTLAB functions as a strategic intelligence layer. We provide the logic, the auditing, and the engineering required to survive hyper-competitive cycles.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-[#070707] border border-white/5 hover:border-[#4e24cf]/30 transition-all relative overflow-hidden"
              >
                <div className="text-[#4e24cf] mb-6 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tighter mb-4 text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8">
                  {pillar.desc}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[8px] font-mono uppercase tracking-widest text-gray-600">Status</span>
                  <span className="text-[8px] font-mono uppercase tracking-widest text-[#4e24cf] bg-[#4e24cf]/10 px-2 py-1 rounded-sm">
                    {pillar.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Capabilities;