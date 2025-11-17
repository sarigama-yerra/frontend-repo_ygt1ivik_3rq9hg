import { motion } from 'framer-motion'

const logos = ['Notion', 'Slack', 'HubSpot', 'Salesforce', 'GSheet', 'Airtable']

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24 bg-gradient-to-b from-indigo-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Stacks we elevate</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">We integrate across your tools to orchestrate measurable impact.</p>
        </div>

        <div className="mt-12 overflow-hidden">
          <motion.div
            className="flex items-center gap-10"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...logos, ...logos].map((name, idx) => (
              <div key={idx} className="px-6 py-3 rounded-xl border border-white/60 bg-white/70 backdrop-blur text-slate-700 text-sm font-medium shadow-sm">
                {name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
