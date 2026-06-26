import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    ),
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap", "WordPress", "Framer Motion", "TypeScript", "Three.js"]
  },
  {
    title: "Backend & Systems",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
    ),
    skills: ["Node.js", "Python", "C++", "PostgreSQL", "mySQL", "MongoDB", "GraphQL", "Redis", "AWS"]
  },
  {
    title: "Data Science & AI",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"></path></svg>
    ),
    skills: ["Machine Learning", "NLP", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"]
  },
  {
    title: "Design & UX",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
    ),
    skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Design Systems", "Webflow"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative z-10 w-full">
      
      <div className="max-w-7xl mx-auto w-full relative z-30">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#4f46e5]">Arsenal</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#f97316] to-[#4f46e5] rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ perspective: 1200 }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, rotateX: -40, y: 80, z: -150 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0, z: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.9, delay: index * 0.15, type: "spring", bounce: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-[rgba(20,20,20,0.9)] border border-white/10 p-8 rounded-3xl hover:bg-[rgba(30,30,30,0.9)] transition-colors group shadow-2xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#4f46e5]/10 flex items-center justify-center text-[#4f46e5] mb-8 group-hover:bg-[#4f46e5] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(79,70,229,0.2)] group-hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 text-sm font-medium rounded-full bg-black/40 text-slate-300 border border-white/5 hover:border-[#f97316]/50 hover:text-white cursor-default transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
