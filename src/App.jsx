import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Showcase from './components/Showcase'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-violet-200 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Showcase />
        <Contact />
        <footer className="py-12 border-t border-white/60 bg-gradient-to-b from-white to-indigo-50/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Quantam Leap. All rights reserved.</p>
            <div className="text-sm text-slate-600">Built with love and intelligence.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
