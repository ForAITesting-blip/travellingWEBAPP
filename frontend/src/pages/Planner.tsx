import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, CalendarDays, CheckCircle2, Compass, Loader2, Sparkles } from 'lucide-react'
import {
  useCreateCustomPlanMutation,
  useGetExperiencesQuery,
  useGetItinerariesQuery,
} from '../services/armeniaApi'
import type { CustomPlanRequest } from '../services/armeniaApi'

const interests = [
  'Heritage & History',
  'Culinary & Wine',
  'Art & Design',
  'Outdoor Adventure',
  'Wellness & Mindful',
  'Family Friendly',
  'Photography',
  'Nightlife & Music',
]

const paceOptions: Array<'Relaxed' | 'Balanced' | 'Adventurous'> = ['Relaxed', 'Balanced', 'Adventurous']

const PlannerPage = () => {
  const { data: itineraries = [] } = useGetItinerariesQuery()
  const { data: experiences = [] } = useGetExperiencesQuery()
  const [createPlan, { isLoading, data: planResponse, isSuccess }] = useCreateCustomPlanMutation()

  const [form, setForm] = useState<CustomPlanRequest>({
    name: '',
    email: '',
    travelWindow: '',
    preferences: [],
    message: '',
  })

  const [preferredSeason, setPreferredSeason] = useState<string>('Autumn')
  const [pace, setPace] = useState<'Relaxed' | 'Balanced' | 'Adventurous'>('Balanced')

  const recommendedItineraries = useMemo(() => {
    return itineraries.filter((itinerary) => {
      const matchesSeason = itinerary.season === preferredSeason
      const matchesPace = itinerary.pace === pace
      const matchesPreference =
        form.preferences.length === 0 ||
        form.preferences.some((preference) => itinerary.highlights.some((highlight) => highlight.includes(preference.split(' ')[0])))
      return matchesSeason && matchesPace && matchesPreference
    })
  }, [itineraries, preferredSeason, pace, form.preferences])

  const curatedExperiences = useMemo(() => {
    return experiences
      .filter((experience) => experience.season === preferredSeason)
      .slice(0, 4)
  }, [experiences, preferredSeason])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.name || !form.email || !form.travelWindow || form.preferences.length === 0) {
      return
    }
    await createPlan(form)
  }

  return (
    <div className="mx-auto max-w-5xl space-y-16 px-6 pb-24">
      <header className="pt-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-brand-gold/90">
          <Sparkles className="h-3 w-3" /> Tailored Journey Builder
        </div>
        <h1 className="mt-6 font-display text-4xl text-white">Co-create your Armenian narrative</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70">
          Adjust season, pace, and interests. Preview curated itineraries and signature experiences we can weave into a bespoke itinerary just for you.
        </p>
      </header>

      <section className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 lg:grid-cols-[1.4fr,1fr]">
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Preferences</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {['Spring', 'Summer', 'Autumn', 'Winter'].map((season) => (
                <button
                  key={season}
                  onClick={() => setPreferredSeason(season)}
                  className={`rounded-2xl border px-4 py-3 text-sm transition ${
                    preferredSeason === season ? 'border-brand-gold bg-brand-gold/20 text-brand-gold' : 'border-white/10 text-white/70 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {season}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Pace</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {paceOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setPace(option)}
                  className={`rounded-2xl border px-4 py-3 text-sm transition ${
                    pace === option ? 'border-brand-gold bg-brand-gold/20 text-brand-gold' : 'border-white/10 text-white/70 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Interests</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {interests.map((interest) => {
                const active = form.preferences.includes(interest)
                return (
                  <button
                    type="button"
                    key={interest}
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        preferences: active
                          ? prev.preferences.filter((pref) => pref !== interest)
                          : [...prev.preferences, interest],
                      }))
                    }
                    className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                      active ? 'border-brand-gold bg-brand-gold/20 text-brand-gold' : 'border-white/10 text-white/70 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {interest}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Live summary</p>
          <div className="mt-4 space-y-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3 text-white">
                <CalendarDays className="h-4 w-4 text-brand-gold" />
                <span>{preferredSeason} window</span>
              </div>
              <p className="mt-2 text-xs text-white/60">
                Expect {preferredSeason === 'Winter' ? 'snow-capped panoramas and cozy hearthside tastings.' : preferredSeason === 'Summer' ? 'alpine lakes with warm evenings under the stars.' : 'rich harvest colors and celebratory festivals.'}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3 text-white">
                <Compass className="h-4 w-4 text-brand-gold" />
                <span>{pace} pacing</span>
              </div>
              <p className="mt-2 text-xs text-white/60">
                {pace === 'Relaxed'
                  ? 'Longer stays in each region, abundant downtime, spa or slow food focus.'
                  : pace === 'Balanced'
                    ? 'A curated rhythm of signature experiences with restorative pauses.'
                    : 'High-energy adventures, sunrise starts, adrenaline and summit views.'}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3 text-white">
                <BookOpen className="h-4 w-4 text-brand-gold" />
                <span>{form.preferences.length || 0} interests</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                {form.preferences.map((preference) => (
                  <span key={preference} className="rounded-full bg-white/10 px-3 py-1">
                    {preference}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Suggested itineraries</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {(recommendedItineraries.length > 0 ? recommendedItineraries : itineraries.slice(0, 2)).map((itinerary) => (
            <motion.article
              key={itinerary.id}
              whileHover={{ y: -6 }}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>{itinerary.durationDays} days · {itinerary.audience}</span>
                <span>{itinerary.pace}</span>
              </div>
              <h3 className="font-display text-2xl text-white">{itinerary.title}</h3>
              <p className="text-sm text-white/70">{itinerary.summary}</p>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
                <p className="uppercase tracking-[0.3em] text-brand-gold/80">Highlights</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {itinerary.highlights.slice(0, 6).map((highlight) => (
                    <span key={highlight} className="rounded-full bg-white/10 px-3 py-1">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-3 text-xs text-white/70">
                {itinerary.schedule.slice(0, 3).map((day) => (
                  <div key={day.day} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="uppercase tracking-[0.2em] text-brand-gold/80">Day {day.day} · {day.title}</p>
                    <p className="mt-2">{day.description}</p>
                    <div className="mt-2 flex flex-wrap gap-2 text-[0.7rem]">
                      {day.activities.slice(0, 3).map((activity) => (
                        <span key={activity} className="rounded-full bg-white/10 px-3 py-1">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4 text-sm text-white/80">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Request your curated itinerary</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span>Name</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  required
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 focus:border-brand-gold focus:outline-none"
                  placeholder="Ani Hakobyan"
                />
              </label>
              <label className="space-y-2">
                <span>Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                  required
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 focus:border-brand-gold focus:outline-none"
                  placeholder="you@email.com"
                />
              </label>
            </div>
            <label className="space-y-2">
              <span>Travel window</span>
              <input
                type="text"
                value={form.travelWindow}
                onChange={(event) => setForm((prev) => ({ ...prev, travelWindow: event.target.value }))}
                required
                className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 focus:border-brand-gold focus:outline-none"
                placeholder="Late September - Early October"
              />
            </label>
            <label className="space-y-2">
              <span>Additional notes</span>
              <textarea
                rows={4}
                value={form.message}
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-gold focus:outline-none"
                placeholder="Must include vineyard lunch, optional helicopter transfer."
              />
            </label>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-gold to-amber-500 px-6 py-3 text-sm font-semibold text-brand-dusk disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
              {isLoading ? 'Designing...' : 'Receive my curated plan'}
            </button>
          </form>

          <div className="space-y-4 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">What happens next</p>
            <div className="space-y-3">
              {[
                'A travel architect will connect within 24 hours with a proposal.',
                'We refine accommodations, logistics, and exclusive access until perfect.',
                'Receive a sensory itinerary app with offline maps, audio guides, and concierge chat.',
              ].map((step) => (
                <div key={step} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-brand-gold" />
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Curated Pairings</p>
              <ul className="mt-3 space-y-2 text-xs">
                {curatedExperiences.map((experience) => (
                  <li key={experience.id}>• {experience.title} ({experience.location})</li>
                ))}
              </ul>
            </div>

            {isSuccess && planResponse && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl border border-brand-gold/40 bg-brand-gold/10 p-6 text-brand-gold"
              >
                <p className="text-xs uppercase tracking-[0.3em]">Preview</p>
                <h3 className="mt-2 font-display text-xl text-white">{planResponse.recommendation.title}</h3>
                <p className="mt-2 text-sm text-white/80">{planResponse.recommendation.summary}</p>
                <ul className="mt-3 space-y-1 text-sm text-white/80">
                  {planResponse.recommendation.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PlannerPage
