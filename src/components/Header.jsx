import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-[#050505]/50 backdrop-blur-lg border-b border-white/5"
      >
        <a href="#" className="text-2xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
          Rohan Kanaujia<span className="text-[#f97316]">.</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#projects" className="hover:text-white transition-colors">Work</a>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all shadow-lg cursor-pointer"
          >
            Get in Touch
          </button>
        </nav>
      </motion.header>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            ></motion.div>
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
              className="relative bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl w-full max-w-md shadow-2xl z-10"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              
              <h3 className="text-3xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-slate-400 mb-8">Choose how you'd like to get in touch with me.</p>
              
              <div className="space-y-4">
                {/* LinkedIn Button */}
                <a 
                  href="https://linkedin.com/in/rohan-kanaujia" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[#0077b5]/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">LinkedIn</h4>
                    <p className="text-sm text-slate-400">Connect professionally</p>
                  </div>
                </a>
                
                {/* GitHub Button */}
                <a 
                  href="https://github.com/rohan-kanaujia" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">GitHub</h4>
                    <p className="text-sm text-slate-400">Check out my code</p>
                  </div>
                </a>
                
                {/* Email Button */}
                <a 
                  href="mailto:rohan@example.com" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[#f97316]/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#f97316]/10 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">Send Email</h4>
                    <p className="text-sm text-slate-400">Drop me a message</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
