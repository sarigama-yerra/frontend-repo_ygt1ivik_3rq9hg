import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100vh] overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/40 to-white/70" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-indigo-900 to-amber-700"
          >
            Quantam Leap
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-5 text-lg sm:text-xl text-slate-700"
          >
            We are an AI agency crafting premium automations, AI agents, and education that transform how teams operate. Royal aesthetics. Real outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#services" className="pointer-events-auto inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm shadow hover:shadow-lg transition-all">
              Explore Services
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 text-white px-6 py-3 text-sm shadow hover:shadow-lg transition-all">
              Start a Project
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
