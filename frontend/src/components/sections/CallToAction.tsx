import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function CallToAction() {
  return (
    <section className="relative mx-auto mt-32 max-w-6xl px-6 pb-32">
      <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_top_left,rgba(98,72,247,0.28),transparent_55%)]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative overflow-hidden rounded-[3rem] bg-slate-950 px-10 py-16 text-white shadow-[0_40px_120px_rgba(20,16,56,0.45)]"
      >
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              Ready to glow up your travel
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Let&apos;s compose your luminous Armenian story.
            </h2>
            <p className="mt-4 text-sm text-white/70">
              Share your dream dates, travel inspirations, and any must-have rituals. Our concierge team replies within 24 hours with a cinematic outline.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/60">
              <div className="rounded-full border border-white/30 px-4 py-2">
                Private drivers & translations
              </div>
              <div className="rounded-full border border-white/30 px-4 py-2">
                Access to closed-door monasteries
              </div>
              <div className="rounded-full border border-white/30 px-4 py-2">
                Chef-led culinary chapters
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
            <form className="space-y-4 text-sm text-slate-900">
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-white/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-200"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Where we can reach you"
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-white/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-200"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-white/60">
                  What sparks joy?
                </label>
                <textarea
                  rows={3}
                  placeholder="Sunrise hikes, wine archaeology, monastery chanting..."
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-white/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-200"
                />
              </div>
              <Link
                to="/planner"
                className="flex items-center justify-center rounded-2xl bg-gradient-to-r from-brand-500 to-accent px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.01]"
              >
                Submit dream brief
              </Link>
              <p className="text-xs text-white/60">
                We keep your details sacred. Expect a curated PDF moodboard within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
