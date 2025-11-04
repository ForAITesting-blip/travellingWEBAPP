import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Compass, Filter, Map, Mountain, Sunrise, X } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setRegion, setSeason } from '../features/ui/uiSlice'
import type { Destination } from '../services/armeniaApi'
import { useGetDestinationsQuery } from '../services/armeniaApi'

const chipVariants = {
  rest: { y: 0, opacity: 0.7 },
  hover: { y: -2, opacity: 1 },
}

const DestinationsPage = () => {
  const dispatch = useAppDispatch()
  const selectedSeason = useAppSelector((state) => state.ui.selectedSeason)
  const selectedRegion = useAppSelector((state) => state.ui.selectedRegion)

  const { data: destinations = [], isLoading } = useGetDestinationsQuery()

  const seasons = useMemo(
    () => Array.from(new Set(destinations.flatMap((destination) => destination.seasons))).sort(),
    [destinations],
  )

  const regions = useMemo(
    () => Array.from(new Set(destinations.map((destination) => destination.region))).sort(),
    [destinations],
  )

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const matchSeason = selectedSeason ? destination.seasons.includes(selectedSeason) : true
      const matchRegion = selectedRegion ? destination.region === selectedRegion : true
      return matchSeason && matchRegion
    })
  }, [destinations, selectedSeason, selectedRegion])

  const [activeDestination, setActiveDestination] = useState<Destination | null>(null)

  useEffect(() => {
    if (filteredDestinations.length > 0) {
      setActiveDestination(filteredDestinations[0])
    } else {
      setActiveDestination(null)
    }
  }, [filteredDestinations])

  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 pb-24">
      <header className="pt-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-brand-gold/90">
          <Compass className="h-3 w-3" /> Destination Atlas
        </div>
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <h1 className="font-display text-4xl text-white">Traverse Armenia&apos;s living landscapes</h1>
            <p className="text-sm text-white/70">
              Filter by season and region to reveal when Armenia is in full bloom. Each destination is curated with immersive experiences, culinary highlights, and cultural connections.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
            <p className="uppercase tracking-[0.3em] text-brand-gold">Climate Guide</p>
            <p className="mt-2">Spring for apricot blossoms · Summer for lake retreats · Autumn for harvests · Winter for alpine escapes</p>
          </div>
        </div>
      </header>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
            <Filter className="h-4 w-4" /> Refine Search
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Season</span>
            <motion.button
              variants={chipVariants}
              initial="rest"
              whileHover="hover"
              onClick={() => dispatch(setSeason(null))}
              className={`rounded-full border px-4 py-1 text-xs transition ${
                !selectedSeason ? 'border-brand-gold bg-brand-gold/20 text-brand-gold' : 'border-white/10 text-white/60 hover:border-white/30 hover:text-white'
              }`}
            >
              All
            </motion.button>
            {seasons.map((season) => (
              <motion.button
                key={season}
                variants={chipVariants}
                initial="rest"
                whileHover="hover"
                onClick={() => dispatch(setSeason(season))}
                className={`rounded-full border px-4 py-1 text-xs transition ${
                  selectedSeason === season
                    ? 'border-brand-gold bg-brand-gold/20 text-brand-gold'
                    : 'border-white/10 text-white/60 hover:border-white/30 hover:text-white'
                }`}
              >
                {season}
              </motion.button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Region</span>
            <motion.button
              variants={chipVariants}
              initial="rest"
              whileHover="hover"
              onClick={() => dispatch(setRegion(null))}
              className={`rounded-full border px-4 py-1 text-xs transition ${
                !selectedRegion ? 'border-brand-gold bg-brand-gold/20 text-brand-gold' : 'border-white/10 text-white/60 hover:border-white/30 hover:text-white'
              }`}
            >
              All
            </motion.button>
            {regions.map((region) => (
              <motion.button
                key={region}
                variants={chipVariants}
                initial="rest"
                whileHover="hover"
                onClick={() => dispatch(setRegion(region))}
                className={`rounded-full border px-4 py-1 text-xs transition ${
                  selectedRegion === region
                    ? 'border-brand-gold bg-brand-gold/20 text-brand-gold'
                    : 'border-white/10 text-white/60 hover:border-white/30 hover:text-white'
                }`}
              >
                {region}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          {isLoading && (
            <div className="grid gap-4 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-72 animate-pulse rounded-3xl bg-white/5" />
              ))}
            </div>
          )}

          {!isLoading && filteredDestinations.length === 0 && (
            <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
              <div>
                No destinations match your selections. Adjust filters to reveal more hidden gems.
              </div>
              <button
                onClick={() => {
                  dispatch(setSeason(null))
                  dispatch(setRegion(null))
                }}
                className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70"
              >
                Reset
              </button>
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2">
            {filteredDestinations.map((destination) => (
              <motion.article
                key={destination.id}
                layoutId={destination.id}
                whileHover={{ y: -6 }}
                onClick={() => setActiveDestination(destination)}
                className={`cursor-pointer overflow-hidden rounded-3xl border transition ${
                  activeDestination?.id === destination.id ? 'border-brand-gold bg-brand-gold/10' : 'border-white/10 bg-white/5 hover:border-brand-gold/50'
                }`}
              >
                <div className="relative h-52">
                  <img src={destination.image} alt={destination.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dusk/80 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-brand-gold">
                    <Mountain className="h-4 w-4" /> {destination.region}
                  </div>
                </div>
                <div className="space-y-3 p-5">
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>{destination.duration}</span>
                    <span>{destination.difficulty}</span>
                  </div>
                  <h3 className="font-display text-xl text-white">{destination.name}</h3>
                  <p className="text-sm text-white/70">{destination.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-white/70">
                    {destination.activities.slice(0, 3).map((activity) => (
                      <span key={activity} className="rounded-full bg-white/10 px-3 py-1">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {activeDestination && (
            <motion.aside
              key={activeDestination.id}
              layout
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ type: 'spring', stiffness: 160, damping: 20 }}
              className="sticky top-32 space-y-6 self-start rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Spotlight</p>
                  <h2 className="mt-2 font-display text-2xl text-white">{activeDestination.name}</h2>
                  <p className="mt-3 text-sm text-white/70">{activeDestination.description}</p>
                </div>
                <button onClick={() => setActiveDestination(null)} className="rounded-full border border-white/10 p-2 text-white/60 hover:text-white">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-3 text-xs text-white/70">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="uppercase tracking-[0.3em] text-brand-gold/80">Season Window</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {activeDestination.seasons.map((season) => (
                      <span key={season} className="rounded-full bg-brand-gold/10 px-3 py-1 text-brand-gold">
                        {season}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="uppercase tracking-[0.3em] text-brand-gold/80">Highlights</p>
                  <ul className="mt-2 space-y-1">
                    {activeDestination.highlights.map((highlight) => (
                      <li key={highlight}>• {highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="uppercase tracking-[0.3em] text-brand-gold/80">Coordinates</p>
                  <p className="mt-2">Lat {activeDestination.coordinates[0].toFixed(2)} · Long {activeDestination.coordinates[1].toFixed(2)}</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl">
                <img src={activeDestination.gallery[0]} alt={`${activeDestination.name} gallery`} className="h-40 w-full object-cover" />
              </div>

              <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-gold to-amber-500 px-4 py-3 text-xs font-semibold text-brand-dusk">
                Craft stay & logistics
              </button>
            </motion.aside>
          )}
        </AnimatePresence>
      </section>

      <section className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-80 lg:h-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(205,163,73,0.3),_transparent_70%)]" />
            <div className="absolute inset-6 rounded-[2rem] border border-white/10 bg-gradient-to-tr from-brand-dusk/90 via-brand-dusk/30 to-transparent p-6">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-gold">
                <Map className="h-4 w-4" /> Emotional Geography
              </div>
              <p className="mt-4 font-display text-2xl text-white">Design your own rhythm</p>
              <p className="mt-3 text-sm text-white/70">
                Combine mountain monasteries with jazz nights in Yerevan. Our planners balance travel time, culinary breaks, and scenic pauses.
              </p>
              <div className="mt-5 space-y-2 text-xs text-white/60">
                <p>• Private drivers fluent in local dialects</p>
                <p>• Boutique stays and vineyard villas</p>
                <p>• Insider-only tastings and atelier visits</p>
              </div>
            </div>
          </div>
          <div className="space-y-6 p-8 text-sm text-white/70">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-gold/80">
                <Sunrise className="h-4 w-4" /> Optimal Pairings
              </div>
              <ul className="mt-3 space-y-2">
                <li>• Pair Lake Sevan sunrise with a Dilijan forest bath</li>
                <li>• Combine Garni Temple acoustics with Geghard choir</li>
                <li>• Enjoy Areni harvest lunches after Tatev aerial tram</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Always Included</p>
              <p className="mt-3">Dedicated concierge · Adaptive pacing · Same-day flexibility · Impact contributions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DestinationsPage
