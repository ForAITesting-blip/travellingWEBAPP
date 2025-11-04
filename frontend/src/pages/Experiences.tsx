import { motion } from 'framer-motion'
import { ExperiencesMosaic } from '../components/sections/ExperiencesMosaic'
import { Testimonials } from '../components/sections/Testimonials'

export function ExperiencesPage() {
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
            Experiences elevated
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Curated chapters across Armenia&apos;s senses.
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-600">
            We collaborate with master artisans, astronomers, and culinary innovators to create
            singular moments. Choose a chapter, or stitch multiple to form your own odyssey.
          </p>
        </motion.div>
      </section>
      <ExperiencesMosaic />
      <Testimonials />
    </main>
  )
}
