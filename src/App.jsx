import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Header from './components/Header'
import Skills from './components/Skills'
import Education from './components/Education'

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-slate-200 font-sans selection:bg-primary/30 relative overflow-hidden">
      
      {/* Global Premium Noise/Grain Overlay */}
      <div 
        className="fixed inset-0 opacity-[0.03] mix-blend-screen pointer-events-none z-50"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      {/* Global Ambient Spotlights */}
      <div className="fixed top-[-10%] right-[10%] w-[800px] aspect-square bg-[#4f46e5]/10 rounded-full blur-[160px] opacity-70 pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] left-[10%] w-[600px] aspect-square bg-[#f97316]/5 rounded-full blur-[150px] opacity-50 pointer-events-none z-0"></div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  )
}

export default App
