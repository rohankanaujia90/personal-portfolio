import { motion } from 'framer-motion';

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, rotateX: -30, y: 50, z: -50 },
    visible: { 
      opacity: 1, 
      rotateX: 0,
      y: 0,
      z: 0,
      transition: { duration: 1, type: "spring", bounce: 0.4 }
    }
  };

  return (
    <section id="about" className="py-24 lg:py-32 relative z-10 w-full min-h-screen flex items-center overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto w-full px-6 relative z-20 text-center">
        
        {/* Bio Text Centered & Expanded */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="flex flex-col items-center justify-center bg-black/80 border border-white/10 p-10 md:p-20 lg:p-24 rounded-[3rem] shadow-2xl mx-auto w-full"
        >
          <motion.div variants={textVariants} className="flex flex-col items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#3b82f6]">Me</span>
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-[#a855f7] to-[#3b82f6]"></div>
          </motion.div>

          <motion.h3 variants={textVariants} className="text-xl md:text-2xl text-gray-300 font-semibold mb-8">
            Engineering the Digital Future
          </motion.h3>

          <motion.div variants={textVariants} className="space-y-6 text-gray-300 text-lg leading-relaxed text-left">
            <p>
              I am a passionate <strong className="text-white">Full Stack Developer</strong> who thrives at the intersection of design and engineering. My journey began with a simple curiosity about how the web works, which quickly evolved into a deep-seated drive to build robust, scalable, and visually stunning applications.
            </p>
            <p>
              Whether it's architecting a complex database backend, optimizing server performance, or crafting butter-smooth UI interactions for the frontend, I approach every problem with an engineering mindset and an eye for aesthetics.
            </p>
            <p>
              When I'm not writing code, you can find me exploring new web technologies, contributing to open-source, or refining my skills in UI/UX design. I believe that the best software doesn't just work flawlessly—it creates an unforgettable experience for the user.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
