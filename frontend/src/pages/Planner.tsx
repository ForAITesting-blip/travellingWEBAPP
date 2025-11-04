import { motion } from 'framer-motion'
import { ItineraryPlanner } from '../components/sections/ItineraryPlanner'
import { CallToAction } from '../components/sections/CallToAction'

export function PlannerPage() {
  return (
    <main className="pt-24">
      <section className="mx-auto max-w-5xl px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card overflow-hidden p-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-500">
            Bespoke planning
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Where your Armenian narrative gets scripted.
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-600">
            Define your pace, companions, and inspirations. We orchestrate logistics, special
            access, and cinematic timing.
          </p>
        </motion.div>
      </section>
      <ItineraryPlanner />
      <CallToAction />
    </main>
  )
}
