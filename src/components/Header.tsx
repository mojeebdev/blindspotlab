import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom"; 
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Capabilities", href: "/capabilities", type: "anchor" },
  { name: "Blindspot Audit™", href: "/audit", type: "page" },
  { name: "Research", href: "/research", type: "page" },
  { name: "Signals", href: "/signals", type: "page" },
  { name: "About", href: "/about", type: "anchor" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (link: typeof navLinks[0]) => {
    setIsMenuOpen(false);
    
    if (link.type === "anchor") {
      if (location.pathname === "/") {
       
        const id = link.href.split('#')[1];
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        
        navigate(link.href);
      }
    }
  };

  const handleCtaClick = () => {
    setIsMenuOpen(false);
    if (location.pathname === "/") {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate("/contact");
      }
    } else {
      navigate("/contact");
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5"
      >
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            
            {/* BRAND LOGO */}
            <Link to="/" className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-10 h-10 shrink-0 overflow-hidden">
                <img src="/logo.png" alt="Blindspot Lab Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-display text-lg font-bold tracking-wider text-white uppercase">
                BLINDSPOT<span className="text-[#4e24cf]">LAB</span>
              </span>
            </Link>
            
            <div className="flex items-center gap-4 md:gap-8">
              <ul className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {link.type === "page" ? (
                      <Link
                        to={link.href}
                        className="font-body text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleLinkClick(link)}
                        className="font-body text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              
              <Button
                size="sm"
                className="hidden md:inline-flex font-display text-[10px] font-black tracking-widest uppercase px-5 py-2 bg-[#4e24cf] hover:bg-[#4e24cf]/90 text-white hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300 rounded-full"
                onClick={handleCtaClick}
              >
                Schedule a Strategy Audit
              </Button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-white hover:text-[#4e24cf] transition-colors duration-300"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden bg-black border-l border-white/10"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-12">
                   <div className="w-8 h-8 overflow-hidden">
                    <img src="/logo.png" alt="" className="w-full h-full object-contain" />
                  </div>
                  <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white hover:text-[#4e24cf]">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <ul className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      {link.type === "page" ? (
                        <Link
                          to={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="font-display text-xl font-black tracking-tighter uppercase text-white hover:text-[#4e24cf] text-left block"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleLinkClick(link)}
                          className="font-display text-xl font-black tracking-tighter uppercase text-white hover:text-[#4e24cf] text-left block w-full bg-transparent border-none p-0"
                        >
                          {link.name}
                        </button>
                      )}
                    </li>
                  ))}
                  {/* Mobile CTA */}
                  <li className="pt-4">
                    <Button 
                      className="w-full bg-[#4e24cf] text-white uppercase font-black tracking-widest text-[10px] py-6"
                      onClick={handleCtaClick}
                    >
                      Audit Now
                    </Button>
                  </li>
                </ul>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;