import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Compass, Globe2, Mountain, Sparkles, Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import {
  useGetDestinationsQuery,
  useGetExperiencesQuery,
  useGetFestivalsQuery,
  useGetHeroQuery,
  useGetItinerariesQuery,
  useGetStoriesQuery,
} from '../services/armeniaApi'

const sectionTitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const HomePage = () => {
  const { data: hero, isLoading: heroLoading } = useGetHeroQuery()
  const { data: destinations } = useGetDestinationsQuery()
  const { data: itineraries } = useGetItinerariesQuery()
  const { data: experiences } = useGetExperiencesQuery()
  const { data: festivals } = useGetFestivalsQuery()
  const { data: stories } = useGetStoriesQuery()

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-b-[3rem] bg-gradient-hero">
        <div className="absolute inset-0">
          {hero?.media.type === 'video' ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={hero.media.thumbnail}
              className="h-full w-full object-cover opacity-50"
            >
              <source src={hero.media.url} type="video/mp4" />
            </video>
          ) : (
            <img src={hero?.media.url} alt="Armenia landscape" className="h-full w-full object-cover opacity-60" />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dusk/90 via-brand-dusk/75 to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-32 pt-32 md:flex-row md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: heroLoading ? 0.4 : 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.4em] text-brand-gold/90">
              <Sparkles className="h-3 w-3" /> Signature Journeys
            </div>
            <h1 className="mt-6 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {hero?.title || 'Design a deeply personal journey through Armenia.'}
            </h1>
            <p className="mt-5 text-lg text-white/80">
              {hero?.description ||
                'Uncover monasteries carved into cliffs, taste ancient wines, and walk history-rich streets with specialists who know every hidden story.'}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/plan"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-gold to-amber-500 px-8 py-3 text-sm font-semibold text-brand-dusk shadow-soft"
              >
                {hero?.ctaPrimary || 'Craft my itinerary'} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/destinations"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/90 backdrop-blur"
              >
                {hero?.ctaSecondary || 'Explore destinations'}
              </Link>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                { label: 'Tailored Seasons', value: '4', sub: 'Distinct climate zones' },
                { label: 'Signature Journeys', value: '40+', sub: 'Curated & private' },
                { label: 'Trusted Experts', value: '98%', sub: 'Guest satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
                  <p className="text-2xl font-semibold text-brand-gold">{stat.value}</p>
                  <p className="mt-1 font-semibold text-white">{stat.label}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">{stat.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className="relative w-full max-w-md"
          >
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-gold/80">Upcoming Signature</p>
              <div className="mt-4 space-y-4">
                {(itineraries || []).slice(0, 3).map((item) => (
                  <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      {item.durationDays} Days · {item.season}
                    </p>
                    <p className="mt-2 font-display text-xl text-white">{item.title}</p>
                    <p className="mt-2 text-sm text-white/70">{item.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-brand-gold/90">
                      {item.highlights.slice(0, 3).map((highlight) => (
                        <span key={highlight} className="rounded-full bg-brand-gold/10 px-3 py-1">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <motion.div variants={sectionTitleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 text-brand-gold/90">
            <Compass className="h-5 w-5" />
            <span className="text-xs uppercase tracking-[0.3em]">Destinations</span>
          </div>
          <h2 className="mt-3 font-display text-3xl text-white">Navigate four seasons of Armenia</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70">
            From the wine valleys of Vayots Dzor to the glassy waters of Lake Sevan, our curated destinations blend nature, culture, and hospitality.
          </p>
        </motion.div>

        <div className="mt-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 1.6 },
              1024: { slidesPerView: 2.2 },
            }}
            className="pb-14"
          >
            {(destinations || []).slice(0, 6).map((destination) => (
              <SwiperSlide key={destination.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative h-[420px] overflow-hidden rounded-3xl border border-white/10"
                >
                  <img src={destination.image} alt={destination.name} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dusk via-brand-dusk/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 space-y-4 p-6">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-brand-gold">
                      <Mountain className="h-4 w-4" /> {destination.region}
                    </div>
                    <h3 className="font-display text-2xl text-white">{destination.name}</h3>
                    <p className="line-clamp-3 text-sm text-white/70">{destination.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs text-white/70">
                      {destination.seasons.slice(0, 2).map((season) => (
                        <span key={season} className="rounded-full bg-white/10 px-3 py-1">
                          {season}
                        </span>
                      ))}
                      <span className="rounded-full bg-brand-gold/10 px-3 py-1 text-brand-gold">{destination.rating.toFixed(1)} / 5</span>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur">
          <div className="text-sm text-white/70">
            Too many choices? Let our travel architects design a path that matches your energy.
          </div>
          <Link
            to="/plan"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-gold to-amber-500 px-5 py-2 text-sm font-semibold text-brand-dusk"
          >
            Start curation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(35,53,84,0.7),transparent_65%)]" />
        <div className="relative mx-auto max-w-6xl space-y-12 px-6 py-24">
          <motion.div
            variants={sectionTitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 text-brand-gold/90">
              <Globe2 className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.3em]">Experiential Travel</span>
            </div>
            <h2 className="mt-3 font-display text-3xl text-white">Curated for the curious</h2>
            <p className="mt-2 text-sm text-white/70">Meet the people shaping Armenia today—chefs, artisans, winemakers, historians—and feel the pulse of the Caucasus.</p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {(experiences || []).slice(0, 6).map((experience) => (
              <motion.article
                key={experience.id}
                whileHover={{ y: -6 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={experience.media.image}
                    alt={experience.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dusk/80 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-brand-gold">
                    {experience.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="font-display text-xl text-white">{experience.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{experience.description}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between text-xs text-white/60">
                    <span>{experience.location}</span>
                    <span>{experience.duration}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-white/80 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Seasonal Focus</p>
              <p className="mt-3 text-sm">We adjust experiences weekly based on harvests, festivals, and local insight.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Insider Access</p>
              <p className="mt-3 text-sm">Gain after-hours entry to monasteries, atelier visits with contemporary artists, and private tastings.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Responsible Travel</p>
              <p className="mt-3 text-sm">10% of proceeds fund heritage preservation and rural community projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <motion.div variants={sectionTitleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 text-brand-gold/90">
            <Star className="h-5 w-5" />
            <span className="text-xs uppercase tracking-[0.3em]">Cultural Calendar</span>
          </div>
          <h2 className="mt-3 font-display text-3xl text-white">Live the rhythm of Armenia</h2>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {(festivals || []).map((festival) => (
            <motion.div
              key={festival.id}
              whileHover={{ y: -4 }}
              className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-4"
            >
              <div className="h-20 w-20 overflow-hidden rounded-2xl">
                <img src={festival.image} alt={festival.name} className="h-full w-full object-cover" />
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">
                  {festival.month} · {festival.location}
                </p>
                <p className="font-semibold text-white">{festival.name}</p>
                <p className="text-white/70">{festival.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6">
        <motion.div variants={sectionTitleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/90">Stories</p>
          <h2 className="mt-3 font-display text-3xl text-white">Guest reflections</h2>
          <p className="mt-2 text-sm text-white/70">Hear from explorers who trusted us with their milestones, honeymoons, and returns to heritage.</p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {(stories || []).slice(0, 4).map((story) => (
            <motion.blockquote
              key={story.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-4">
                <img src={story.image} alt={story.traveler} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-white">{story.traveler}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">{story.country}</p>
                </div>
                <div className="ml-auto flex gap-1 text-brand-gold">
                  {Array.from({ length: Math.round(story.rating) }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-brand-gold" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-white/80">“{story.quote}”</p>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">{story.journey}</p>
            </motion.blockquote>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-brand-gold/20 bg-gradient-to-br from-brand-gold/20 via-brand-gold/5 to-transparent px-6 py-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]" />
        <div className="relative space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-brand-dusk/80">
            <Sparkles className="h-4 w-4" /> Limited 2025 Residencies
          </p>
          <h2 className="font-display text-3xl text-brand-dusk sm:text-4xl">Stay in design-led heritage homes</h2>
          <p className="mx-auto max-w-2xl text-sm text-brand-dusk/80">
            We partner with local architects restoring historic homes, creating intimate residences with curated art, soundscapes, and farm-to-table dining.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Dilijan Forest Loft', 'Yerevan Art Deco Suite', 'Areni Vineyard Villa'].map((residence) => (
              <span key={residence} className="rounded-full border border-brand-dusk/20 bg-white/70 px-4 py-2 text-xs font-semibold text-brand-dusk">
                {residence}
              </span>
            ))}
          </div>
          <Link
            to="/plan"
            className="inline-flex items-center gap-2 rounded-full bg-brand-dusk px-6 py-3 text-sm font-semibold text-brand-gold"
          >
            Reserve residency <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
