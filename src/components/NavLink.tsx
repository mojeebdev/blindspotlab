import { Link, NavLink } from "react-router-dom";
import { Activity, Terminal } from "lucide-react";

export const Navbar = () => {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) => 
    `text-[10px] font-bold uppercase tracking-widest transition-all ${
      isActive 
        ? "text-[#4e24cf]" 
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex justify-between items-center">
      
      {/* Branding Section */}
      <Link to="/" className="flex items-center gap-3 group">
        <div className="relative w-9 h-9 shrink-0 overflow-hidden flex items-center justify-center rounded bg-transparent">
          <img 
            src="/logo.png" 
            alt="Blindspot Lab" 
            className="relative z-10 w-full h-full object-contain pointer-events-none" 
          />
        </div>

        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tighter text-white leading-none uppercase">
            BLINDSPOT<span className="text-[#4e24cf]">LAB</span>
          </span>
          <span className="text-[8px] text-gray-500 font-bold uppercase tracking-[0.3em] mt-1">
            Intelligence Engine v2026.02
          </span>
        </div>
      </Link>
      
      {/* System Status - Keeps the "Lab" feel */}
      <div className="hidden lg:flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Activity size={12} className="text-[#4e24cf] animate-pulse" />
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">System: Live</span>
        </div>
        <div className="flex items-center gap-2">
          <Terminal size={12} className="text-gray-300/50" />
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Node: 2026_SERIES</span>
        </div>
      </div>

      {/* Reworked Navigation Links */}
      <div className="hidden md:flex gap-6 items-center">
        <NavLink to="/capabilities" className={navLinkStyle}>Capabilities</NavLink>
        <NavLink to="/audit" className={navLinkStyle}>Blindspot Audit™</NavLink>
        <NavLink to="/research" className={navLinkStyle}>Research</NavLink>
        <NavLink to="/signals" className={navLinkStyle}>Signals</NavLink>
        <NavLink to="/about" className={navLinkStyle}>About</NavLink>

        <Link 
          to="/audit"
          className="bg-[#4e24cf] text-white ml-2 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-[#4e24cf]/20"
        >
          Initialize Audit
        </Link>
      </div>
    </nav>
  );
};