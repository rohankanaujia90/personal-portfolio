import { motion, useScroll, useTransform } from 'framer-motion';
import rohanImg from '../assets/rohan.png';

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax scroll effects
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const imageY = useTransform(scrollY, [0, 500], [0, 40]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden px-4 md:px-8 lg:px-12 pt-32 lg:pt-40 pb-16">
      {/* Background is now handled globally in App.jsx */}
      
      <motion.div 
        style={{ opacity: heroOpacity }}
        className="z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-12 items-center"
      >
        
        {/* Left Column: Image */}
        <motion.div 
          style={{ y: imageY }}
          className="order-2 lg:order-1 flex justify-center lg:justify-end relative pb-12 lg:pb-0 lg:pr-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            /* Main container restored to a larger size for small screens since it's not side-by-side */
            className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-80 lg:h-80 mx-auto mt-4 lg:mt-0"
          >
            {/* Small Orange Circle (Top Left) */}
            <div className="absolute -top-8 -left-12 w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#f97316] z-0 shadow-lg"></div>
            
            {/* Large Blue Circle (Base) */}
            <div className="absolute inset-0 rounded-full bg-[#4f46e5] z-0 shadow-xl"></div>
            
            {/* Image Layer 1: Clipped to the circle (perfect rounded bottom) */}
            <div className="absolute inset-0 rounded-full overflow-hidden z-10">
              <img 
                src={rohanImg} 
                alt="Profile Base" 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[135%] max-w-none object-contain object-bottom"
              />
            </div>

            {/* Image Layer 2: Top half only, popping out of the circle */}
            {/* clipPath hides the bottom 50% of this container, letting the perfectly clipped Image Layer 1 show through at the bottom */}
            <div 
              className="absolute inset-0 z-20" 
              style={{ clipPath: 'inset(-100% -50% 50% -50%)' }}
            >
              <img 
                src={rohanImg} 
                alt="Profile Top" 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[135%] max-w-none object-contain object-bottom"
              />
            </div>
            
          </motion.div>
        </motion.div>

        {/* Right Column: Text */}
        <motion.div 
          style={{ y: textY }}
          className="order-1 lg:order-2 text-center lg:text-left -mt-4 lg:-mt-16"
        >
          <motion.h1 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 text-white leading-tight"
          >
            Rohan <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#4f46e5]">Kanaujia</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-8 mx-auto lg:mx-0 max-w-xl leading-relaxed"
          >
            Creative Technologist & Designer. I blend elegant code with striking aesthetics to build immersive, high-performance digital experiences.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center lg:justify-start"
          >
            <a href="#projects" className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base bg-[#4f46e5] hover:bg-[#4338ca] rounded-full text-white font-medium transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)]">
              Explore My Work
            </a>
          </motion.div>
        </motion.div>
        
      </motion.div>
    </section>
  );
}
