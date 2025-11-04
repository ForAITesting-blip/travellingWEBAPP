import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../hooks'
import {
  fetchExperiences,
  selectExperiences,
  selectExperiencesStatus,
} from '../../features/experiences/experiencesSlice'

export function ExperiencesMosaic() {
  const dispatch = useAppDispatch()
  const experiences = useAppSelector(selectExperiences)
  const status = useAppSelector(selectExperiencesStatus)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchExperiences())
    }
  }, [dispatch, status])

  return (
    <section className="mx-auto mt-32 max-w-7xl px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="section-title">Immersive experiences</h2>
          <p className="section-subtitle">
            Pair wild hikes with sacred chants, or farm-to-table tastings with silk-screen workshops.
            Our curators harmonize contrasts for unforgettable days.
          </p>
        </div>
        <div className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Designed with 47 local storytellers
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[2fr_3fr]">
        <motion.div
          className="glass-card h-full overflow-hidden"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1472740373171-1a34f91da01b?q=80&w=1974&auto=format&fit=crop"
            alt="Wine tasting"
            className="h-72 w-full object-cover"
          />
          <div className="space-y-4 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-500">
              Signature experience
            </p>
            <h3 className="text-2xl font-semibold text-slate-900">
              Ararat Valley wine & polyphony night
            </h3>
            <p className="text-sm text-slate-600">
              Blend your own Areni vintage guided by a seventh-generation vintner, followed by
              haunting folk polyphony inside a candlelit cave chapel.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-slate-500">
              <span className="rounded-full bg-brand-50 px-3 py-1 text-brand-600">4 hours</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">Focus: wine</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">Evening</span>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {status === 'loading' &&
            Array.from({ length: 4 }).map((_, index) => (
              <div
                key={`experience-placeholder-${index}`}
                className="h-60 animate-pulse rounded-3xl border border-white/60 bg-white/60"
              />
            ))}
          {status !== 'loading' &&
            experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <img
                src={experience.images[0]}
                alt={experience.title}
                className="h-40 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                  <span>{experience.focus}</span>
                  <span>{experience.intensity}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{experience.title}</h3>
                <p className="text-sm text-slate-600">{experience.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                  <span className="rounded-full bg-slate-100 px-3 py-1">{experience.duration}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">{experience.location}</span>
                </div>
              </div>
            </motion.article>
            ))}
          {status === 'succeeded' && experiences.length === 0 && (
            <p className="text-sm text-slate-500">
              No experiences found right now. Check back soon for new collaborations.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
