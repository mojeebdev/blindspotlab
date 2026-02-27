import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, Send, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true }} 
      className="py-16 bg-black border-t border-white/5 relative overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4e24cf]/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* 1. BRANDING & STATUS */}
          <div className="md:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center shrink-0 border border-white/10 rounded-sm bg-white/5 p-1.5">
                <img 
                  src="/logo.png" 
                  alt="Blindspot Lab" 
                  className="w-full h-full object-contain opacity-80" 
                />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase text-white">
                BLINDSPOT<span className="text-[#4e24cf]">LAB</span>
              </span>
            </Link>
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-loose max-w-[280px]">
              A strategic intelligence layer for the next cycle of digital architecture.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4e24cf] animate-pulse" />
              <span className="text-[8px] font-mono text-gray-400 uppercase tracking-[0.3em]">System_Heartbeat_Active</span>
            </div>
          </div>

          {/* 2. SITEMAP */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Protocol</h4>
              <ul className="space-y-2">
                {['Capabilities', 'Audit', 'Research', 'Signals'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="text-[10px] font-mono text-gray-500 hover:text-[#4e24cf] transition-colors uppercase tracking-widest">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Lab</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-[10px] font-mono text-gray-500 hover:text-[#4e24cf] transition-colors uppercase tracking-widest">Origins</a></li>
                <li><a href="https://mojeebhq.medium.com" target="_blank" className="text-[10px] font-mono text-gray-500 hover:text-[#4e24cf] transition-colors uppercase tracking-widest">Medium</a></li>
              </ul>
            </div>
          </div>

          {/* 3. TRANSMISSION ENTRY */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Secure_Inquiry</h4>
            <a 
              href="mailto:Blindspotlab1@gmail.com" 
              className="group flex items-center justify-between border border-white/10 p-4 bg-white/5 hover:border-[#4e24cf]/50 transition-all"
            >
              <span className="text-[10px] font-mono text-gray-400 group-hover:text-white uppercase tracking-widest transition-colors">Open Channel</span>
              <Send size={12} className="text-[#4e24cf]" />
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[8px] font-mono text-gray-600 uppercase tracking-[0.5em]">
            © {currentYear} BLINDSPOTLAB // ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://x.com/Blindspotlab" target="_blank" className="text-gray-500 hover:text-white transition-colors">
              <Twitter size={14} />
            </a>
            <a href="https://mojeebhq.medium.com" target="_blank" className="flex items-center gap-2 group">
              <div className="w-5 h-5 border border-white/10 group-hover:border-[#4e24cf] rounded-full flex items-center justify-center text-[8px] font-mono transition-colors">M</div>
              <span className="text-[8px] font-mono text-gray-500 group-hover:text-white uppercase tracking-widest transition-colors">Medium</span>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
