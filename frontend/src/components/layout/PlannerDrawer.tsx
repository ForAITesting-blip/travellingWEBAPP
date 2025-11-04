import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Loader2, PlaneTakeoff, Sparkles, X } from 'lucide-react'
import { useCreateCustomPlanMutation } from '../../services/armeniaApi'
import { setPlannerVisibility } from '../../features/ui/uiSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

const preferenceOptions = [
  'Ancient Monasteries',
  'Culinary Journeys',
  'Mountain Adventures',
  'Wine & Vineyards',
  'Art & Design',
  'Family Friendly',
  'Spiritual Retreats',
  'Urban Discoveries',
]

const PlannerDrawer = () => {
  const dispatch = useAppDispatch()
  const showPlanner = useAppSelector((state) => state.ui.showPlanner)
  const [form, setForm] = useState({
    name: '',
    email: '',
    travelWindow: '',
    preferences: [] as string[],
    message: '',
  })
  const [createPlan, { isLoading, isSuccess, data }] = useCreateCustomPlanMutation()

  const isValid = useMemo(
    () => form.name && form.email && form.travelWindow && form.preferences.length > 0,
    [form],
  )

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isValid) return
    await createPlan(form)
  }

  const togglePreference = (preference: string) => {
    setForm((prev) => ({
      ...prev,
      preferences: prev.preferences.includes(preference)
        ? prev.preferences.filter((item) => item !== preference)
        : [...prev.preferences, preference],
    }))
  }

  return (
    <AnimatePresence>
      {showPlanner && (
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-end justify-end bg-black/60 backdrop-blur"
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 180, damping: 20 }}
            className="h-full w-full max-w-xl overflow-y-auto border-l border-white/10 bg-brand-dusk/95 p-8 text-white shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-brand-gold">
                  <Sparkles className="h-3 w-3" /> Tailored Armenia
                </p>
                <h2 className="mt-4 font-display text-3xl">Design Your Journey</h2>
                <p className="mt-2 text-sm text-white/70">
                  Share your travel style and we’ll craft a completely bespoke itinerary with insider access and hidden gems.
                </p>
              </div>
              <button
                onClick={() => dispatch(setPlannerVisibility(false))}
                className="rounded-full border border-white/10 p-2 text-white/60 hover:text-white"
                aria-label="Close planner"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm">
                  <span className="text-white/70">Name</span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                    placeholder="Ani Hakobyan"
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 focus:border-brand-gold focus:outline-none"
                  />
                </label>
                <label className="space-y-2 text-sm">
                  <span className="text-white/70">Email</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                    placeholder="you@email.com"
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 focus:border-brand-gold focus:outline-none"
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm">
                <span className="text-white/70">Ideal Travel Window</span>
                <input
                  type="text"
                  required
                  value={form.travelWindow}
                  onChange={(event) => setForm((prev) => ({ ...prev, travelWindow: event.target.value }))}
                  placeholder="Late September - Early October"
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 focus:border-brand-gold focus:outline-none"
                />
              </label>

              <div>
                <p className="text-sm text-white/70">What excites you most?</p>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {preferenceOptions.map((option) => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => togglePreference(option)}
                      className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm transition ${
                        form.preferences.includes(option)
                          ? 'border-brand-gold bg-brand-gold/20 text-brand-gold'
                          : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {option}
                      {form.preferences.includes(option) && <span className="text-xs uppercase tracking-[0.2em]">Selected</span>}
                    </button>
                  ))}
                </div>
              </div>

              <label className="space-y-2 text-sm">
                <span className="text-white/70">Tell us more (optional)</span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                  placeholder="Private tastings? Sunrise hikes? Let us know."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-gold focus:outline-none"
                />
              </label>

              <button
                type="submit"
                disabled={!isValid || isLoading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-gold to-amber-500 px-6 py-4 text-sm font-semibold text-brand-dusk transition disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <PlaneTakeoff className="h-4 w-4" />}
                {isLoading ? 'Designing your plan...' : 'Request Curated Itinerary'}
              </button>

              <AnimatePresence>
                {isSuccess && data && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    className="rounded-2xl border border-brand-gold/40 bg-brand-gold/10 p-6 text-sm text-brand-gold"
                  >
                    <h3 className="font-display text-lg text-white">{data.recommendation.title}</h3>
                    <p className="mt-2 text-white/80">{data.recommendation.summary}</p>
                    <ul className="mt-4 space-y-2 text-white/80">
                      {data.recommendation.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-gold" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-white/70">
                      <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Next steps</p>
                      <ul className="mt-2 space-y-1">
                        {data.recommendation.nextSteps.map((step) => (
                          <li key={step}>• {step}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

export default PlannerDrawer
