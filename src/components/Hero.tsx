import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Database, Target, BrainCircuit } from "lucide-react";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* 1. TACTICAL OVERLAYS & VIDEO BACKGROUND */}
      <motion.div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ y: backgroundY }}>
        
        {/* --- VIDEO BACKGROUND --- */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen"
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
        {/* ------------------------- */}

        <div className="absolute -top-10 -right-10 opacity-[0.02] rotate-6">
          <img src="/logo.png" alt="" className="w-[900px] h-[900px] object-contain invert" />
        </div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4e24cf]/15 rounded-full blur-[140px]"
          style={{ scale: glowScale }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </motion.div>

      {/* 2. MAIN CONTENT ENGINE */}
      <motion.div
        className="container mx-auto px-6 relative z-10"
        style={{ y: textY, opacity, scale }}
      >
        <div className="max-w-5xl mx-auto text-center">
          
          {/* CREDIBILITY LINE (Positioning) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-sm bg-white/5 border border-white/10 mb-10 backdrop-blur-xl"
          >
            <BrainCircuit className="w-4 h-4 text-[#4e24cf]" />
            <span className="text-[9px] uppercase tracking-[0.5em] text-white/70 font-black">
              Applied_Intelligence_Lab // Strategic_Diagnostics
            </span>
          </motion.div>

          {/* HEADLINE (Clear Claim) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9] uppercase"
          >
            WE FIND WHAT YOUR<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              BUSINESS CANNOT SEE.
            </span>
          </motion.h1>

          {/* SUBTEXT (Mechanism) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-base md:text-xl text-gray-500 mb-16 max-w-3xl mx-auto font-mono uppercase tracking-widest leading-relaxed"
          >
            BlindspotLab audits product strategy, growth systems, and communication gaps before they become <span className="text-white">expensive failures</span>.
          </motion.p>

          {/* ACTION DEPLOYMENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-px bg-white/10 p-px border border-white/5"
          >
            <Button
              className="w-full sm:w-auto bg-[#4e24cf] hover:bg-[#5a2de0] text-white px-12 py-8 text-[10px] uppercase tracking-[0.3em] font-black rounded-none border-none transition-all group"
              onClick={() => navigate('/audit')}
            >
              Initialize Audit <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="ghost"
              className="w-full sm:w-auto bg-black text-white hover:bg-white/5 px-12 py-8 text-[10px] uppercase tracking-[0.3em] font-black rounded-none border-none"
              onClick={() => navigate('/capabilities')}
            >
              View Mechanisms
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* 3. PERIPHERAL DATA POINTS (Credibility) */}
      <motion.div
        className="absolute bottom-12 left-12 hidden lg:flex items-center gap-6"
        style={{ opacity }}
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Target size={12} className="text-[#4e24cf]" />
            <span className="text-[8px] text-white font-mono uppercase tracking-widest">Targeting: Structural_Alpha</span>
          </div>
          <span className="text-[8px] text-gray-600 font-mono uppercase tracking-[0.4em]">Status: Operational // Data_Nodes: 500+</span>
        </div>
      </motion.div>

      {/* SCROLL TRANSITION */}
      <motion.div
        className="absolute bottom-12 right-12 flex flex-col items-center gap-4"
        style={{ opacity }}
      >
        <span className="text-[8px] text-gray-500 uppercase tracking-[0.5em] rotate-90 origin-right translate-y-12 whitespace-nowrap">
          Scroll_To_Enter
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#4e24cf] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;