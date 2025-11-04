import { motion } from 'framer-motion'
import { ArrowUpRightIcon, PlayIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const stats = [
  { label: 'UNESCO sites', value: 3 },
  { label: 'Altitude range (m)', value: '375-4090' },
  { label: 'Artisan partners', value: 47 },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529850108142-90855a43f27c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="space-y-8 text-white"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
              Beyond Ordinary Armenia
            </span>
            <h1 className="font-display text-5xl leading-tight tracking-tight sm:text-6xl">
              Craft a luminous journey across Armenia&apos;s peaks and monasteries.
            </h1>
            <p className="max-w-2xl text-lg text-white/80">
              From the jazz cellars of Yerevan to dawn prayers echoing in Tatev&apos;s canyon,
              we choreograph experiences that blend culture, cuisine, and wild landscapes.
              Travel with boutique hosts and artisan storytellers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/planner"
                className="group relative flex items-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-700 shadow-glow transition hover:-translate-y-0.5"
              >
                Start your bespoke route
                <ArrowUpRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <a
                href="https://www.youtube.com/watch?v=tm1KV7ZyKmw"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                <PlayIcon className="h-5 w-5" />
                Watch Aurora Stories
              </a>
            </div>
            <dl className="grid gap-6 text-white/80 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/30 bg-white/10 p-4 backdrop-blur">
                  <dt className="text-xs uppercase tracking-[0.25em]">{item.label}</dt>
                  <dd className="mt-2 text-2xl font-semibold text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="glass-card relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1935&auto=format&fit=crop"
                alt="Lake Sevan"
                className="h-80 w-full rounded-3xl object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 space-y-4 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent p-6 text-white">
                <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                  signature highlight
                </p>
                <p className="text-lg font-semibold">Sunrise over Lake Sevan</p>
                <p className="text-sm text-white/70">
                  Glide across sapphire waters with a master fisherman before tasting freshly baked
                  lavash on Noratus peninsula.
                </p>
              </div>
            </div>
            <motion.div
              className="absolute -bottom-16 -left-6 hidden w-40 rounded-3xl bg-white/70 p-4 text-sm shadow-xl backdrop-blur md:block"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <p className="font-semibold text-brand-700">Curated by Ani</p>
              <p className="mt-2 text-xs text-slate-600">
                Local anthropologist turned travel designer. Specialist in monastic rituals & wine routes.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_65%)]" />
    </section>
  )
}
