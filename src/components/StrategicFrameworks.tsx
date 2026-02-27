import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { ArrowUpRight, BookOpen, Hash } from "lucide-react";

const frameworksData = [
  {
    title: "Community Foundations",
    description: "EQ and Communication as the foundation of protocol trust.",
    link: "https://mojeebhq.medium.com/the-subtle-act-of-not-giving-a-fvck-about-your-community-community-building-31043b5160aa",
    readTime: "6 MIN",
    id: "STRAT-01"
  },
  {
    title: "The Feedback Engine",
    description: "Knowing when to ship based on high-signal user reflection.",
    link: "https://mojeebhq.medium.com/the-subtle-act-of-not-giving-a-fvck-about-your-community-community-building-6afe90b633f4",
    readTime: "8 MIN",
    id: "STRAT-02"
  },
  {
    title: "Incentive Architecture",
    description: "Stop fvcking over early users; prioritize long-term skin-in-the-game.",
    link: "https://mojeebhq.medium.com/community-rewards-done-right-stop-fvcking-over-your-early-users-e3ac552c3f9b",
    readTime: "5 MIN",
    id: "STRAT-03"
  },
];

const StrategicFrameworks = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section id="frameworks" ref={sectionRef} className="py-32 bg-black border-t border-white/5">
      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* HEADER */}
        <div className="mb-20">
          <div className="flex items-center gap-2 text-[#4e24cf] mb-4">
            <BookOpen size={14} />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Knowledge_Base</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">
            Strategic <span className="text-[#4e24cf]">Frameworks</span>
          </h2>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {frameworksData.map((item) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="bg-black p-10 group relative transition-all hover:bg-[#050505] flex flex-col min-h-[320px]"
            >
              {/* Data ID Badge */}
              <div className="flex justify-between items-start mb-12">
                <div className="flex items-center gap-2 text-[9px] font-mono text-gray-500">
                  <Hash size={10} className="text-[#4e24cf]" />
                  {item.id}
                </div>
                <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest border border-white/10 px-2 py-1">
                   {item.readTime}
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white uppercase tracking-tighter mb-4 group-hover:text-[#4e24cf] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 font-mono leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-[9px] font-bold text-[#4e24cf] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                Access Document <ArrowUpRight size={12} />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StrategicFrameworks;