import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

import currencyConverterImg from '../assets/currencyConverter.png';
import youtubeImg from '../assets/youtube.png';
import airbnbImg from '../assets/airbnb.png';

const projects = [
  {
    id: 1,
    title: "Real Time Currency Converter",
    category: "React.js",
    image: currencyConverterImg
  },
  {
    id: 2,
    title: "Youtube Homepage Clone",
    category: "HTML, CSS",
    image: youtubeImg
  },
  {
    id: 3,
    title: "Airbnb Clone",
    category: "React.js",
    image: airbnbImg
  }
];

const HolographicCard = ({ project, index }) => {
  const ref = useRef(null);
  
  // Motion values to track mouse position (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs to make the movement fluid and bouncy
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse positions to 3D rotation angles
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Map mouse positions to dynamic lighting/glare position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const background = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`;

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate relative percentage (-0.5 to 0.5)
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, type: "spring" }}
      style={{ perspective: 1200 }} // Establishes the 3D space
      className="group w-full aspect-[4/5] z-10"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d" 
        }}
        className="relative w-full h-full rounded-3xl overflow-visible bg-white/5 border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(79,70,229,0.3)]"
      >
        {/* The Card Background Plane (Pushed Back in Z space) */}
        <div 
          className="absolute inset-0 rounded-3xl overflow-hidden bg-black"
          style={{ transform: "translateZ(-20px)" }}
        >
          <img 
            src={project.image} 
            alt="Background blur"
            className="w-full h-full object-cover opacity-20 group-hover:opacity-10 scale-110 transition-all duration-500"
          />
        </div>

        {/* The Popped-Out Holographic Screen (Pulled Forward in Z space) */}
        <motion.div
          className="absolute inset-4 lg:inset-6 rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.4)] transition-shadow duration-500"
          style={{ 
            transform: "translateZ(60px)",
            transformStyle: "preserve-3d"
          }}
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Dynamic Holographic Glare Overlay tracking mouse */}
          <motion.div 
            className="absolute inset-0 z-20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background }}
          />
          
          {/* Cyberpunk Holographic edge lighting */}
          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#06b6d4]/0 via-transparent to-[#ec4899]/0 group-hover:from-[#06b6d4]/30 group-hover:to-[#ec4899]/30 mix-blend-screen transition-colors duration-500 pointer-events-none" />
        </motion.div>

        {/* 3D Floating Text Content (Highest Z Space) */}
        <motion.div 
          className="absolute bottom-4 left-4 right-4 p-6 rounded-xl bg-black/80 border border-white/10 pointer-events-none flex flex-col justify-end transition-all duration-500"
          style={{ transform: "translateZ(100px)" }}
        >
          <p className="text-[#06b6d4] font-bold mb-1 tracking-wider uppercase text-xs md:text-sm drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
            {project.category}
          </p>
          <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight drop-shadow-lg">
            {project.title}
          </h3>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#ec4899]">Works</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#06b6d4] to-[#ec4899] rounded-full mx-auto md:mx-0 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 perspective-1000">
          {projects.map((project, index) => (
            <HolographicCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
