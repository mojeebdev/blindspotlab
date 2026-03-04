import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-20">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#4e24cf]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <section className="py-20 px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
            Direct <span className="text-[#4e24cf]">Channel.</span>
          </h1>
          <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.4em]">
            Bypass the noise. Secure your strategic audit.
          </p>
        </section>

        
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;