import { useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { Clock, Flame, MapPin, Sparkles, Waves } from 'lucide-react'
import { useGetExperiencesQuery } from '../services/armeniaApi'

const ExperiencesPage = () => {
  const { data: experiences = [], isLoading } = useGetExperiencesQuery()
  const categories = useMemo(
    () => Array.from(new Set(experiences.map((experience) => experience.category))).sort(),
    [experiences],
  )

  const [activeCategory, setActiveCategory] = useState<string | null>(categories[0] ?? null)

  const filteredExperiences = useMemo(() => {
    if (!activeCategory) return experiences
    return experiences.filter((experience) => experience.category === activeCategory)
  }, [experiences, activeCategory])

  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 pb-24">
      <header className="pt-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-brand-gold/90">
          <Sparkles className="h-3 w-3" /> Experiential Armenia
        </div>
        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h1 className="font-display text-4xl text-white">Experiences choreographed by artisans, chefs, guides, and historians.</h1>
            <p className="text-sm text-white/70">
              Every itinerary weaves moments with locals shaping modern Armenia. Choose your vibe and pace—we’ll synchronize logistics, storytelling, and sensory immersion.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">How it works</p>
            <ul className="mt-3 space-y-2">
              <li>• Select experiences that resonate</li>
              <li>• Blend with destinations for a signature flow</li>
              <li>• Add optional access: helicopter transfers, chef tables, heritage experts</li>
            </ul>
          </div>
        </div>
      </header>

      <LayoutGroup>
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Curate by mood</div>
          <div className="mt-4 flex flex-wrap gap-3">
            <motion.button
              layout
              onClick={() => setActiveCategory(null)}
              className={`relative overflow-hidden rounded-full border px-5 py-2 text-xs font-semibold transition ${
                activeCategory === null ? 'border-brand-gold bg-brand-gold/20 text-brand-gold' : 'border-white/10 text-white/70 hover:border-white/30 hover:text-white'
              }`}
            >
              <span>All</span>
              {activeCategory === null && (
                <motion.div layoutId="active-pill" className="absolute inset-0 -z-10 rounded-full bg-brand-gold/10" />
              )}
            </motion.button>
            {categories.map((category) => {
              const isActive = activeCategory === category
              return (
                <motion.button
                  key={category}
                  layout
                  onClick={() => setActiveCategory(category)}
                  className={`relative overflow-hidden rounded-full border px-5 py-2 text-xs font-semibold transition ${
                    isActive ? 'border-brand-gold bg-brand-gold/20 text-brand-gold' : 'border-white/10 text-white/70 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <span>{category}</span>
                  {isActive && <motion.div layoutId="active-pill" className="absolute inset-0 -z-10 rounded-full bg-brand-gold/10" />}
                </motion.button>
              )
            })}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {isLoading &&
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="h-72 animate-pulse rounded-3xl border border-white/10 bg-white/5" />
              ))}

            <AnimatePresence>
              {!isLoading &&
                filteredExperiences.map((experience) => (
                  <motion.article
                    layout
                    key={experience.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4 }}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                  >
                    <div className="relative h-44">
                      <img src={experience.media.image} alt={experience.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dusk/90 via-transparent to-transparent" />
                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-brand-gold">
                        {experience.season}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 p-6">
                      <div className="space-y-2">
                        <h3 className="font-display text-xl text-white">{experience.title}</h3>
                        <p className="text-sm text-white/70">{experience.description}</p>
                      </div>
                      <div className="mt-auto space-y-2 text-xs text-white/60">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" /> {experience.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" /> {experience.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <Waves className="h-4 w-4" /> {experience.intensity}
                        </div>
                        <div className="flex items-center justify-between pt-2 text-sm text-brand-gold">
                          <span>From ${experience.priceFrom.toLocaleString()}</span>
                          <span>{experience.spots} spots</span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
            </AnimatePresence>
          </div>
        </section>
      </LayoutGroup>

      <section className="grid gap-6 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Signature layers</p>
          <h2 className="font-display text-3xl text-white">Compose like a symphony</h2>
          <p className="text-sm text-white/70">
            Blend culinary, adventure, and cultural threads. We adjust tempo daily—linger longer at monasteries when the choir chants, or pivot to a vineyard tasting when the harvest calls.
          </p>
          <ul className="space-y-3 text-sm text-white/70">
            <li>• Morning movement: sunrise hikes, hot-air ascents, guided meditation</li>
            <li>• Midday immersion: chef collaborations, artisan studios, wine craftsmanship</li>
            <li>• Evening glow: jazz clubs, star-gazing, private folk ensembles</li>
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-gold/30 via-brand-gold/10 to-transparent p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.25),transparent_65%)]" />
          <div className="relative space-y-3 text-sm text-brand-dusk">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-dusk/10 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.3em]">Case Study · 7 nights</p>
            <h3 className="font-display text-2xl">Jazz & Highlands Residency</h3>
            <p>
              Day 1 Yerevan jazz speakeasy · Day 2 Garni percussion circle · Day 3 Areni amphitheatre dinner · Day 4 Dilijan design lab · Day 5 Mount Aragats sunrise trek · Day 6 Wine blending ceremony · Day 7 Farewell with Komitas quartet.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {['Driver + host', 'Photographer add-on', 'Spa partner', 'Philanthropy briefing'].map((tag) => (
                <span key={tag} className="rounded-full border border-brand-dusk/10 bg-white/70 px-3 py-1 text-brand-dusk/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2.5rem] border border-brand-gold/20 bg-brand-gold/10 p-8 text-brand-dusk">
        <div className="grid gap-6 lg:grid-cols-[1.5fr,1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-dusk/60">Beyond the itinerary</p>
            <h2 className="mt-3 font-display text-3xl">Residency-style hosting</h2>
            <p className="mt-4 text-sm text-brand-dusk/80">
              We match each group with a resident curator—sommelier, historian, or mountaineer—who shapes the narrative in real-time, adapting to weather, mood, and serendipity.
            </p>
          </div>
          <div className="rounded-3xl border border-brand-dusk/10 bg-white/70 p-6 text-sm">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-brand-dusk/60">
              <Flame className="h-4 w-4" /> Hot off the press
            </div>
            <ul className="mt-3 space-y-2 text-brand-dusk/80">
              <li>• 2025 grape harvest residencies now open</li>
              <li>• New collab: ceramics ateliers in Gyumri</li>
              <li>• Limited seats: heli-drop skiing on Mount Aragats</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExperiencesPage
