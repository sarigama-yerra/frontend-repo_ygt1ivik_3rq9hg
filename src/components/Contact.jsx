import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      if (res.ok) setStatus('Thanks — we will reach out shortly.')
      else setStatus('Something went wrong. Please try again.')
    } catch (e) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-gradient-to-tr from-amber-300/40 to-fuchsia-300/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Begin your leap</h2>
            <p className="mt-3 text-slate-600">Tell us about your goals and we’ll craft a path that compounds.</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>• Typical kickoff within 7 days</li>
              <li>• Global, remote-first collaboration</li>
              <li>• Security and compliance built-in</li>
            </ul>
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-6 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-lg border-slate-200 focus:border-indigo-400 focus:ring-indigo-200" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-lg border-slate-200 focus:border-indigo-400 focus:ring-indigo-200" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows="4" required className="mt-1 w-full rounded-lg border-slate-200 focus:border-indigo-400 focus:ring-indigo-200" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 text-white px-6 py-3 text-sm shadow hover:shadow-lg transition-all">
                Send message
              </button>
              <p className="text-sm text-slate-600 h-5">{status}</p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
