import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';

const certs = [
  { title: "React.js for Beginners", issuer: "Simplilearn", date: "June 2026", color: "from-[#06b6d4] to-[#3b82f6]" },
  { title: "JavaScript for Beginners", issuer: "HackerRank", date: "June 2026", color: "from-[#06b6d4] to-[#3b82f6]" },
  { title: "JavaScript Intermediate", issuer: "HackerRank", date: "2022", color: "from-[#10b981] to-[#059669]" },
  { title: "CSS Beginners", issuer: "HackerRank", date: "2022", color: "from-[#4f46e5] to-[#7c3aed]" },
];

const HolographicCard = ({ cert, index }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movements using physics spring
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  // Map mouse positions to 3D rotation angles
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Calculate dynamic glare position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareOpacity = useTransform(mouseXSpring, [-0.5, 0, 0.5], [0, 0.5, 0]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Reset rotations gracefully when mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      animate={{ y: [0, -10, 0] }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.4,
        y: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }
      }}
      style={{ perspective: 1200 }}
      className="w-full h-full relative"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative w-full h-full min-h-[260px] rounded-2xl bg-gradient-to-br ${cert.color} p-[2px] cursor-pointer group shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
      >
        {/* Inner Glass Card Content */}
        <div
          className="w-full h-full bg-[#0a0a0a]/95 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden"
          style={{ transform: "translateZ(30px)" }}
        >

          {/* Holographic Glare Effect */}
          <motion.div
            className="absolute inset-0 z-0 pointer-events-none rounded-2xl mix-blend-overlay"
            style={{
              background: "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 60%)",
              opacity: glareOpacity,
              left: glareX,
              top: glareY,
              transform: "translate(-50%, -50%)",
              width: "200%",
              height: "200%"
            }}
          />

          <div className="relative z-10 flex flex-col items-start w-full">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 shadow-sm backdrop-blur-sm">
              <span className={`text-xs uppercase tracking-widest font-bold bg-clip-text text-transparent bg-gradient-to-r ${cert.color}`}>
                {cert.issuer}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              {cert.title}
            </h3>
          </div>

          <div className="relative z-10 flex justify-between items-end mt-8">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-medium">Issued</span>
              <span className="text-lg font-semibold text-white/80 group-hover:text-white transition-colors">{cert.date}</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shadow-inner border border-white/10 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Certifications() {
  const sectionRef = useRef(null);

  // 3D Scroll tracking for the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to 3D rotation, scale, and opacity
  const sectionRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="py-32 relative w-full min-h-screen flex flex-col items-center z-10 overflow-hidden"
      style={{ perspective: '1500px' }}
    >

      {/* Animated Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.15)_0%,_transparent_70%)] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -100, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)] pointer-events-none"
      />

      <motion.div
        style={{ rotateX: sectionRotateX, scale: sectionScale, opacity: sectionOpacity, transformStyle: "preserve-3d" }}
        className="max-w-[1400px] w-full px-6 relative z-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center md:text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#3b82f6]">Certifications</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#10b981] to-[#3b82f6] rounded-full mx-auto md:mx-0 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl">
            A collection of my professional credentials and continued learning paths. Hover over the cards to experience the 3D interaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <HolographicCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
