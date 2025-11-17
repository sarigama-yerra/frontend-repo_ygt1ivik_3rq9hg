import { motion } from 'framer-motion'
import { Cpu, GraduationCap, Bot, Workflow } from 'lucide-react'

const services = [
  {
    icon: Cpu,
    title: 'Automations',
    desc: 'End-to-end workflows that eliminate repetitive work across your stack.',
    effect: 'from-indigo-200/60 to-violet-200/60',
  },
  {
    icon: GraduationCap,
    title: 'AI Education',
    desc: 'Workshops and enablement so your teams adopt AI confidently and safely.',
    effect: 'from-amber-200/60 to-pink-200/60',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    desc: 'Specialized agents that reason, plan, and act securely in your environment.',
    effect: 'from-fuchsia-200/60 to-indigo-200/60',
  },
  {
    icon: Workflow,
    title: 'Technical Services',
    desc: 'Systems design, data pipelines, and integrations for durable foundations.',
    effect: 'from-blue-200/60 to-teal-200/60',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-300/40 to-amber-300/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">Crafted like couture — tailored engagements that compound into advantage.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, effect }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true, margin: '-80px' }}
              className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md"
            >
              <div className={`absolute inset-px rounded-2xl bg-gradient-to-br ${effect} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} aria-hidden />
              <div className="relative">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 text-white grid place-items-center shadow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{desc}</p>

                <div className="mt-6 h-24 relative overflow-hidden rounded-lg bg-white/60 border border-white/50">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute inset-0"
                  >
                    {/* Micro animation motif per service */}
                    <ServiceMotif index={i} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceMotif({ index }) {
  // Each card gets a different animated motif to hint capability
  switch (index) {
    case 0:
      // Automations: flowing nodes
      return (
        <svg className="w-full h-full" viewBox="0 0 300 100">
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity=".35" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
            </radialGradient>
          </defs>
          <motion.circle cx="50" cy="50" r="18" fill="url(#g1)" animate={{ cx: [50, 120, 200, 260], r: [18, 12, 18, 12] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.circle cx="80" cy="50" r="8" fill="#0f172a" animate={{ cx: [80, 150, 230, 300] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
        </svg>
      )
    case 1:
      // Education: layered build
      return (
        <div className="w-full h-full grid place-items-center">
          <motion.div className="w-10 h-2 rounded bg-slate-900" initial={{ scaleX: 0 }} animate={{ scaleX: [0, 1, 0.6, 1] }} transition={{ repeat: Infinity, duration: 3 }} />
          <motion.div className="w-16 h-2 rounded bg-slate-700 mt-1" initial={{ scaleX: 0 }} animate={{ scaleX: [0, 1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 3, delay: .2 }} />
          <motion.div className="w-24 h-2 rounded bg-slate-500 mt-1" initial={{ scaleX: 0 }} animate={{ scaleX: [0, 1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 3, delay: .4 }} />
        </div>
      )
    case 2:
      // Agents: orbiting dots
      return (
        <div className="w-full h-full grid place-items-center">
          <motion.div className="relative w-14 h-14 rounded-full border border-slate-300/70" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
            <div className="absolute inset-1 rounded-full" />
            <motion.span className="absolute top-1/2 -mt-1 left-0 w-2 h-2 rounded-full bg-slate-900" animate={{ x: [0, 48, 96, 48, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} />
          </motion.div>
        </div>
      )
    default:
      // Tech services: circuit traces
      return (
        <svg className="w-full h-full" viewBox="0 0 300 100">
          <motion.path d="M10 50 Q 80 10, 150 50 T 290 50" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 0.6, 1] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
        </svg>
      )
  }
}
