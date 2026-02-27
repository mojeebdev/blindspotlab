import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { Menu, X, Zap, ArrowUp, Activity } from "lucide-react";


import Hero from "../components/Hero";
import Lab from "../components/Lab";
import StrategicFrameworks from "../components/StrategicFrameworks";
import Vision2026 from "../components/Vision2026";
import AboutSection from "../components/AboutSection";
import Founder from "./Founder";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MobileCTA from "../components/MobileCTA";

const navLinks = [
  { name: "Capabilities", href: "/capabilities" },
  { name: "Audit™", href: "/audit" },
  { name: "Research", href: "/research" },
  { name: "Signals", href: "/signals" },
  { name: "About", href: "/about" },
];

const Index = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setShowFloatingCTA(latest > 0.08);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[#4e24cf] selection:text-white">
      
      {/* 1. REWORKED INTELLIGENCE NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md px-6 py-4 flex justify-between items-center text-white border-b border-white/5">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 flex items-center justify-center shrink-0 overflow-hidden">
            <img src="/logo.png" alt="Blindspot Lab" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter uppercase leading-none">
              BLINDSPOT<span className="text-[#4e24cf]">LAB</span>
            </span>
            <span className="text-[7px] text-gray-500 font-bold uppercase tracking-[0.4em] mt-1 hidden sm:block">
              Intelligence Engine v2026.02
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1 bg-white/5 rounded-full px-4 py-1.5 border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-white transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button
            onClick={() => navigate("/audit")}
            className="px-6 py-2 bg-[#4e24cf] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 shadow-lg shadow-[#4e24cf]/20 transition-all active:scale-95"
          >
            Initialize Audit
          </button>
        </div>

        <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2 text-white">
          <Menu size={24} />
        </button>
      </nav>

      {/* 2. SYSTEM STATUS INDICATOR */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 h-48 w-[1px] bg-white/10 z-40 hidden lg:block">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-[#4e24cf] origin-top shadow-[0_0_10px_#4e24cf]"
          style={{ scaleY }}
        />
        <div className="absolute -left-12 top-0 -rotate-90 origin-right text-[7px] font-mono uppercase tracking-[0.5em] text-gray-600 whitespace-nowrap">
          System_Idle
        </div>
        <div className="absolute -left-12 bottom-0 -rotate-90 origin-right text-[7px] font-mono uppercase tracking-[0.5em] text-[#4e24cf] whitespace-nowrap flex items-center gap-2">
          Live_Feed <Activity size={8} className="animate-pulse" />
        </div>
      </div>

      {/* 3. CORE CONTENT SEQUENCE */}
      <main>
        <Hero />
        <Lab />
        <StrategicFrameworks />
        <Vision2026 />
        <AboutSection />
        <Founder />
        <Contact />
      </main>

      <Footer />
      <MobileCTA />

      {/* FLOATING ACTIONS */}
      <AnimatePresence>
        {showFloatingCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col gap-3"
          >
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:border-[#4e24cf]/50 transition-colors shadow-2xl"
            >
              <ArrowUp size={18} />
            </motion.button>
            <motion.button
              onClick={() => navigate("/audit")}
              className="px-6 py-3 bg-[#4e24cf] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-[#4e24cf]/30 flex items-center gap-2"
            >
              <Zap size={12} fill="currentColor" />
              Init Audit
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[100] bg-black p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
               <span className="font-black text-xl uppercase tracking-tighter text-white">
                BLINDSPOT<span className="text-[#4e24cf]">LAB</span>
              </span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white border border-white/10 rounded-full">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-black uppercase tracking-tighter hover:text-[#4e24cf] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/audit"
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 w-full py-5 bg-[#4e24cf] text-white text-center font-black uppercase tracking-widest rounded-sm"
              >
                Initialize Audit™
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;