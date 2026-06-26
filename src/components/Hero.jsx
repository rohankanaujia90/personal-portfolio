import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import rohanImg from '../assets/rohan.png';

export default function Hero() {
  const { scrollY } = useScroll();
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Unified Zoom Effect: Scale up and fade out the entire section
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.15]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Horizontal parallax on scroll for desktop
  const textX = useTransform(scrollY, [0, 500], [0, -150]);
  const imageX = useTransform(scrollY, [0, 500], [0, 150]);

  // Scale up on scroll for mobile
  const textScale = useTransform(scrollY, [0, 500], [1, 1.2]);

  return (
    <section className="h-screen w-full relative overflow-hidden bg-transparent border-b border-white/10">
      
      <motion.div 
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="w-full h-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-8 z-10"
      >
        
        {/* Left Column: Text & CTAs */}
        <motion.div 
          style={{ 
            x: isMobile ? 0 : textX,
            scale: isMobile ? textScale : 1
          }}
          className="order-2 lg:order-1 h-full self-center w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center text-center lg:text-left h-full pt-4 lg:pt-16 lg:pb-0"
          >
            <div className="lg:mt-0">
              <h2 className="text-lg sm:text-xl text-gray-400 mb-1 font-medium tracking-wide">
                Hello, I'm
              </h2>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 text-white leading-tight">
                Rohan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#3b82f6]">Kanaujia</span>
              </h1>

              <h3 className="text-xl sm:text-2xl text-gray-300 font-medium mb-4">
                Full Stack Developer
              </h3>

              <p className="text-sm sm:text-base text-gray-400 mb-6 max-w-md mx-auto lg:mx-0 leading-relaxed">
                I build clean, scalable and user-friendly web applications that solve real-world problems.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start mb-8">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#resume"
                  className="px-5 py-2.5 bg-[#a855f7] text-white font-semibold rounded-md shadow-lg shadow-[#a855f7]/20 hover:shadow-[#a855f7]/40 transition-all flex items-center gap-2 text-sm sm:text-base"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                  Download Resume
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="px-5 py-2.5 bg-transparent border border-gray-600 text-white font-semibold rounded-md hover:border-white transition-all flex items-center gap-2 text-sm sm:text-base"
                >
                  View My Work
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex flex-col items-center lg:items-start gap-2 mb-auto lg:mb-0">
                <p className="text-xs text-gray-500 font-medium">Connect with me</p>
                <div className="flex gap-2">
                  <SocialIcon href="https://github.com/rohankanaujia90" path="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  <SocialIcon href="https://www.linkedin.com/in/rohan-kanaujia-887895356" path="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Image with Glow */}
        <motion.div 
          style={{ x: imageX }}
          className="hidden lg:block order-1 lg:order-2 h-full w-full"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center items-end relative h-full w-full"
          >
            {/* Subtle Glow Behind Image */}
            <div className="absolute inset-0 top-1/4 bg-[#a855f7]/10 rounded-full blur-[80px] md:blur-[120px] z-0"></div>
            
            <img 
              src={rohanImg} 
              alt="Rohan Kanaujia" 
              className="relative z-10 w-full object-contain object-bottom drop-shadow-2xl max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl max-h-[85vh] self-end"
              style={{ margin: 0, padding: 0 }}
            />
          </motion.div>
        </motion.div>
        
      </motion.div>
    </section>
  );
}

function SocialIcon({ href, path }) {
  return (
    <a 
      href={href} 
      className="text-gray-500 hover:text-[#a855f7] transition-colors p-2 hover:bg-white/5 rounded-full"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d={path} />
      </svg>
    </a>
  );
}
