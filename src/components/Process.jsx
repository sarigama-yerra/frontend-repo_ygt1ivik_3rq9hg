import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Discover',
    desc: 'We map opportunities with stakeholders, systems, and success metrics.',
  },
  {
    title: 'Design',
    desc: 'Blueprints for agents, automations, and data flows with security by design.',
  },
  {
    title: 'Deploy',
    desc: 'Iterative launches with observability, tuning, and human-in-the-loop.',
  },
  {
    title: 'Scale',
    desc: 'We extend capabilities across teams, regions, and functions.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/3 right-10 h-64 w-64 rounded-full bg-gradient-to-tr from-fuchsia-300/40 to-indigo-300/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Our way</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">A refined path to reliable AI outcomes.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true, margin: '-80px' }}
              className="relative p-6 rounded-2xl border border-white/60 bg-white/70 backdrop-blur shadow-sm"
            >
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-200 to-fuchsia-200 leading-none select-none">
                {`0${i + 1}`}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
