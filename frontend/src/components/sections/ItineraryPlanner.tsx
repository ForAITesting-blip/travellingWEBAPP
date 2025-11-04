import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../hooks'
import {
  fetchItineraries,
  hydrateRecommendations,
  selectPlannerPreferences,
  selectRecommendedItineraries,
  selectItineraryStatus,
  setGroupType,
  setTravelMonth,
  setTravelPace,
  toggleFocus,
} from '../../features/itineraries/itinerariesSlice'

const travelMonthOptions = [
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
]

export function ItineraryPlanner() {
  const dispatch = useAppDispatch()
  const preferences = useAppSelector(selectPlannerPreferences)
  const recommendations = useAppSelector(selectRecommendedItineraries)
  const status = useAppSelector(selectItineraryStatus)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchItineraries())
    }
  }, [dispatch, status])

  return (
    <section className="mx-auto mt-32 max-w-7xl px-6" id="planner">
      <div className="glass-card overflow-hidden p-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-500">
              Tailor your pace
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Compose a journey matched to your energy, companions, and month.
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Tell us how you travel best. We&apos;ll align routes with festivals, seasonal foods,
              and panorama-perfect sunrise calls across Armenia.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Travel pace
                </label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['relaxed', 'balanced', 'see-it-all'].map((pace) => (
                    <button
                      key={pace}
                      onClick={() => dispatch(setTravelPace(pace as typeof preferences.travelPace))}
                      className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition ${
                        preferences.travelPace === pace
                          ? 'bg-brand-500 text-white shadow-glow'
                          : 'bg-white/80 text-slate-600 hover:bg-white'
                      }`}
                    >
                      {pace.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Group style
                </label>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {['solo', 'couple', 'family', 'friends'].map((group) => (
                    <button
                      key={group}
                      onClick={() => dispatch(setGroupType(group as typeof preferences.groupType))}
                      className={`rounded-2xl border px-4 py-3 text-sm font-medium capitalize transition ${
                        preferences.groupType === group
                          ? 'border-transparent bg-gradient-to-r from-brand-500 to-accent text-white shadow-glow'
                          : 'border-slate-200 bg-white/70 text-slate-600 hover:border-brand-400 hover:text-brand-500'
                      }`}
                    >
                      {group}
                    </button>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  What should shine?
                </label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['culture', 'outdoor', 'culinary', 'wellness', 'family'].map((focus) => {
                    const active = preferences.focus.includes(focus as typeof preferences.focus[number])
                    return (
                      <button
                        key={focus}
                        onClick={() => dispatch(toggleFocus(focus as typeof preferences.focus[number]))}
                        className={`rounded-full px-4 py-2 text-sm capitalize transition ${
                          active
                            ? 'bg-slate-900 text-white'
                            : 'bg-white/70 text-slate-600 hover:bg-white'
                        }`}
                      >
                        {focus}
                      </button>
                    )
                  })}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Preferred month
                </label>
                <select
                  value={preferences.travelMonth ?? ''}
                  onChange={(event) =>
                    dispatch(setTravelMonth(event.target.value || null))
                  }
                  className="mt-3 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-600 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                >
                  <option value="">Any month</option>
                  {travelMonthOptions.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={() => dispatch(hydrateRecommendations())}
                  className="w-full rounded-2xl bg-gradient-to-r from-brand-500 to-accent px-5 py-3 text-sm font-semibold text-white shadow-glow"
                >
                  Refresh matches
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-glow">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Tailored itineraries
              </p>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {status === 'loading' ? 'Scouting mountain passes...' : 'Your top matches'}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {status === 'loading'
                  ? 'Gathering input from local guides and seasonal calendars.'
                  : 'We suggest three journeys aligned with your vibe. Mix and match days to craft the perfect arc.'}
              </p>
            </div>

            <div className="space-y-4">
              {recommendations.map((itinerary, index) => (
                <motion.article
                  key={itinerary.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/90 p-6 shadow-glow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                        {itinerary.theme}
                      </span>
                      <h4 className="mt-3 text-lg font-semibold text-slate-900">
                        {itinerary.title}
                      </h4>
                      <p className="mt-2 text-sm text-slate-600">{itinerary.overview}</p>
                    </div>
                    <span className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                      {itinerary.durationDays} days
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                    {itinerary.bestFor.map((item) => (
                      <span key={item} className="rounded-full bg-slate-100 px-3 py-1">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 grid gap-3 text-xs text-slate-500 sm:grid-cols-2">
                    {itinerary.dayByDay.slice(0, 2).map((day) => (
                      <div key={day.day} className="rounded-2xl bg-slate-50/70 p-3">
                        <p className="font-semibold text-slate-600">
                          Day {day.day}: {day.title}
                        </p>
                        <p className="mt-1 text-slate-500">{day.summary}</p>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}
              {recommendations.length === 0 && status === 'succeeded' && (
                <p className="text-sm text-slate-500">
                  Adjust your focus or pace to surface itineraries that resonate.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
