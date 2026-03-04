import { useRef } from "react";
import { motion, useInView, Variants, Easing } from "framer-motion";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="scroll-mt-20 py-32 px-6 bg-black text-white"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Modern Label */}
        <motion.span 
          variants={itemVariants}
          className="text-[#4e24cf] font-mono text-xs font-bold uppercase tracking-[0.4em] mb-4 block"
        >
          Institutional Philosophy // 01
        </motion.span>

        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-[0.9]"
        >
          The Intelligence Engine for <span className="text-gray-500 underline decoration-[#4e24cf]/50">Asymmetric</span> Advantage.
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12 text-gray-400">
          <div className="md:col-span-3 space-y-8 text-lg leading-relaxed">
            <motion.p
              variants={itemVariants}
              className="text-2xl font-medium text-white tracking-tight"
            >
              Blindspot Lab is not a consultancy. It is a system designed to detect what founders are structurally incapable of seeing.
            </motion.p>

            <motion.p variants={itemVariants}>
              We operate at the intersection of <b>AI Intelligence Engineering</b> and <b>Systems Theory</b>. Our mandate is to bridge the gap between "innovation" and "executable strategy" by identifying the architectural frictions that prevent exponential growth in Web3 and AI ecosystems.
            </motion.p>

            <motion.p variants={itemVariants}>
              The <b>Blindspot Audit™</b> is our primary diagnostic protocol—a high-fidelity intelligence system that analyzes brand logic, market positioning, and growth architecture with clinical objectivity.
            </motion.p>
          </div>

          <div className="md:col-span-2 space-y-6">
            <motion.div
              variants={itemVariants}
              className="bg-[#0a0a0a] p-8 rounded-sm border-l-2 border-[#4e24cf] shadow-2xl"
            >
              <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">
                Intelligence Culture
              </h3>
              <ul className="text-sm space-y-4 text-gray-400 font-mono">
                <li className="flex gap-3"><span className="text-[#4e24cf]">01</span> Objective Truth over Narrative.</li>
                <li className="flex gap-3"><span className="text-[#4e24cf]">02</span> Pattern Recognition as a Service.</li>
                <li className="flex gap-3"><span className="text-[#4e24cf]">03</span> Impact-Weighted Diagnostics.</li>
              </ul>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-xs font-mono uppercase tracking-widest text-gray-600">
              Est. 2025 // Global Intelligence Node
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
