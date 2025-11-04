import { motion } from 'framer-motion'
import { DestinationsShowcase } from '../components/sections/DestinationsShowcase'
import { SeasonalHighlights } from '../components/sections/SeasonalHighlights'

export function DestinationsPage() {
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
            Explore deeply
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Regions of Armenia, remixed for the modern wanderer.
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-600">
            Traverse between silk road forts, alpine lakes, and jazz-soaked boulevards. Every
            destination we feature is stewarded by local hosts committed to regenerative travel.
          </p>
        </motion.div>
      </section>
      <DestinationsShowcase />
      <SeasonalHighlights />
    </main>
  )
}
