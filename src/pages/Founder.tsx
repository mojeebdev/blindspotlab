import { useRef } from "react";
import { motion, useInView, Variants, Easing } from "framer-motion";
import { ExternalLink, ShieldCheck, Terminal } from "lucide-react";

const Founder = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, filter: "grayscale(100%)" },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "grayscale(100%)", 
      transition: { duration: 0.6, ease: easeOut } 
    }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
  };

  return (
    <section id="founder" ref={sectionRef} className="py-24 bg-black border-t border-white/5">
      <motion.div 
        className="container mx-auto px-6" 
        variants={containerVariants} 
        initial="hidden" 
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-5xl mx-auto">
          
          {/* Image Side - The "Architect" Visual */}
          <motion.div variants={imageVariants} className="w-56 h-56 md:w-72 md:h-72 relative shrink-0 group">
            {/* The "Pulse" Background */}
            <div className="absolute inset-0 bg-[#4e24cf] rounded-none -rotate-3 z-0 opacity-10 group-hover:rotate-0 transition-transform duration-700" />
            
            <img 
              src="https://mojeeb.xyz/mojeeb-2026-headshot.jpg" 
              alt="Mojeeb - Lead Architect" 
              className="relative z-10 w-full h-full object-cover border border-white/10 hover:grayscale-0 transition-all duration-700 shadow-[0_0_50px_rgba(78,36,207,0.15)]" 
            />

            {/* Tactical Status Badge */}
            <div className="absolute -bottom-4 -right-4 z-20 bg-black border border-[#4e24cf]/30 px-4 py-2 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#4e24cf] animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-white uppercase tracking-[0.2em]">
                System Lead
              </span>
            </div>
          </motion.div>

          {/* Text Side - The "Philosophy" */}
          <motion.div variants={textVariants} className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <Terminal size={14} className="text-[#4e24cf]" />
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#4e24cf] font-bold">
                Founder // Lead Strategist
              </h2>
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
              Mojeeb <span className="text-gray-600">.Systems</span>
            </h3>

            <p className="text-white text-xl font-medium leading-snug mb-6 tracking-tight">
              Designing high-fidelity growth systems and ecosystem strategy. 
              <span className="text-[#4e24cf]"> Engineering longevity into the 2026 cycle.</span>
            </p>

            <p className="text-gray-400 text-md leading-relaxed mb-10 font-light max-w-xl">
              I founded <span className="text-white font-semibold">Blindspot Lab</span> to bridge the gap between speculative chaos and structural certainty. My focus is on the architecture of influence—building the research protocols and AI frameworks that allow protocols to thrive where others dissolve.
            </p>

            {/* Tactical Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 items-center">
              <a 
                href="https://x.com/mojeebeth" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-2 text-gray-500 hover:text-white transition-all font-bold text-[10px] uppercase tracking-[0.3em]"
              >
                X.COM <ExternalLink size={10} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a 
                href="https://mojeeb.xyz/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-2 text-gray-500 hover:text-white transition-all font-bold text-[10px] uppercase tracking-[0.3em]"
              >
                INTEL <ExternalLink size={10} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Founder;