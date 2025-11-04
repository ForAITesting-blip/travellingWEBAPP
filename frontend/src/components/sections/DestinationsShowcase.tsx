import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../hooks'
import {
  clearFilters,
  fetchDestinations,
  selectDestinationsStatus,
  selectDestinationFilters,
  selectFilteredDestinations,
  setCategory,
  setRegion,
  toggleSeason,
} from '../../features/destinations/destinationsSlice'
import type { Destination } from '../../types'

const categories: { id: Destination['category'] | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'culture', label: 'Culture' },
  { id: 'nature', label: 'Nature' },
  { id: 'adventure', label: 'Adventure' },
  { id: 'wellness', label: 'Wellness' },
  { id: 'culinary', label: 'Culinary' },
]

const seasons = ['Spring', 'Summer', 'Autumn', 'Winter']

const regions = ['all', 'Yerevan', 'Lake Sevan', 'Dilijan', 'Tatev', 'Gyumri', 'Ararat Valley']

export function DestinationsShowcase() {
  const dispatch = useAppDispatch()
  const filters = useAppSelector(selectDestinationFilters)
  const destinations = useAppSelector(selectFilteredDestinations)
  const status = useAppSelector(selectDestinationsStatus)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDestinations())
    }
  }, [dispatch, status])

  return (
    <section className="mx-auto mt-24 max-w-7xl px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="section-title">Destinations curated with locals</h2>
          <p className="section-subtitle">
            Navigate Armenia by mood. Filter by travel style, region, and season for insider-only
            experiences guided by historians, mountaineers, and vintners.
          </p>
        </div>
        <button
          type="button"
          onClick={() => dispatch(clearFilters())}
          className="self-start rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 transition hover:border-brand-400 hover:text-brand-500"
        >
          Reset filters
        </button>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-[2fr_3fr]">
        <div className="glass-card space-y-8 p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Travel style
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => dispatch(setCategory(category.id))}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    filters.category === category.id
                      ? 'bg-gradient-to-r from-brand-500 to-accent text-white shadow-glow'
                      : 'bg-white/70 text-slate-600 hover:bg-white'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Regions
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => dispatch(setRegion(region as Destination['region'] | 'all'))}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    filters.region === region
                      ? 'border-transparent bg-brand-500 text-white shadow-glow'
                      : 'border-slate-200 text-slate-600 hover:border-brand-400 hover:text-brand-500'
                  }`}
                >
                  {region === 'all' ? 'Whole country' : region}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Perfect seasons
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {seasons.map((season) => {
                const active = filters.seasons.includes(season)
                return (
                  <button
                    key={season}
                    onClick={() => dispatch(toggleSeason(season))}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      active
                        ? 'bg-slate-900 text-white'
                        : 'bg-white/70 text-slate-600 hover:bg-white'
                    }`}
                  >
                    {season}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {status === 'loading' &&
            Array.from({ length: 4 }).map((_, index) => (
              <div
                key={`placeholder-${index}`}
                className="h-72 animate-pulse rounded-3xl border border-white/60 bg-white/60"
              />
            ))}
          {status !== 'loading' &&
            destinations.map((destination, index) => (
            <motion.article
              key={destination.id}
              className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <img
                src={destination.coverImage}
                alt={destination.name}
                className="h-48 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">
                    {destination.region}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    {destination.duration}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{destination.name}</h3>
                <p className="text-sm text-slate-600">{destination.shortDescription}</p>
                <ul className="flex flex-wrap gap-2 text-xs text-slate-500">
                  {destination.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight} className="rounded-full bg-slate-100 px-3 py-1">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
            ))}
          {status === 'succeeded' && destinations.length === 0 && (
            <p className="text-sm text-slate-500">
              No destinations match your filters. Try exploring another season or region.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
