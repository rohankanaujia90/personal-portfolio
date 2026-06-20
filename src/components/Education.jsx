import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "ABES Engineering College, Ghaziabad",
    period: "2025 — 2029",
    description: "Specialized in Software Engineering and Human-Computer Interaction. Built multiple full-stack projects and graduated with Honors."
  },
  {
    degree: "Minor in Artificial Intelligence",
    institution: "IIT Ropar",
    period: "2024 — 2025",
    description: "Focused on Mathematics, Physics, and Computer Science. Actively participated in coding competitions."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#4f46e5]">Education</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#f97316] to-[#4f46e5] rounded-full mx-auto"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-[#4f46e5] before:via-[#f97316] before:to-transparent space-y-12">
          
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring", bounce: 0.4 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050505] bg-[#4f46e5] group-hover:bg-[#f97316] group-hover:scale-125 shadow-[0_0_20px_rgba(79,70,229,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all duration-500"></div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors shadow-2xl group-hover:border-white/20">
                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between mb-4 gap-4">
                  <div>
                    <h3 className="font-bold text-2xl text-white mb-1 leading-snug">{item.degree}</h3>
                    <h4 className="text-[#4f46e5] font-medium text-lg">{item.institution}</h4>
                  </div>
                  <span className="text-[#f97316] font-mono text-sm px-4 py-1.5 rounded-full bg-[#f97316]/10 border border-[#f97316]/20 inline-block shrink-0">
                    {item.period}
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
