import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Neon Cybernetic Interface",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Ethereal E-Commerce",
    category: "Fullstack Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Quantum Dashboard",
    category: "Data Visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Selected <span className="text-primary">Works</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, type: "spring", bounce: 0.4 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 shadow-2xl"
            >
              <div className="aspect-[4/5] overflow-hidden bg-black">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent flex flex-col justify-end p-6 lg:p-8">
                <p className="text-[#f97316] font-medium mb-2 tracking-wider uppercase text-xs md:text-sm">{project.category}</p>
                <h3 className="text-2xl lg:text-3xl font-bold text-white transition-colors group-hover:text-[#4f46e5] leading-snug">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
