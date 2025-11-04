import { motion } from 'framer-motion'
import { Quote, Sparkles, Star } from 'lucide-react'
import { useGetStoriesQuery } from '../services/armeniaApi'

const StoriesPage = () => {
  const { data: stories = [], isLoading } = useGetStoriesQuery()

  return (
    <div className="mx-auto max-w-5xl space-y-16 px-6 pb-24">
      <header className="pt-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-brand-gold/90">
          <Sparkles className="h-3 w-3" /> Living Stories
        </div>
        <h1 className="mt-6 font-display text-4xl text-white">Every traveler writes a new chapter</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70">
          Intimate notes, love letters, milestone celebrations, and heritage journeys. Filter by mood and let these reflections inspire your own path in Armenia.
        </p>
      </header>

      <section className="space-y-8">
        {isLoading && (
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-44 animate-pulse rounded-3xl border border-white/10 bg-white/5" />
            ))}
          </div>
        )}

        {!isLoading && (
          <div className="space-y-6">
            {stories.map((story) => (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8"
              >
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-brand-gold/20">
                  <Quote className="h-24 w-24" />
                </div>
                <div className="relative grid gap-6 md:grid-cols-[auto,1fr]">
                  <img
                    src={story.image}
                    alt={story.traveler}
                    className="h-24 w-24 rounded-full border border-white/20 object-cover"
                  />
                  <div className="space-y-3">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-3">
                        <p className="font-semibold text-white">{story.traveler}</p>
                        <span className="text-xs uppercase tracking-[0.3em] text-white/60">{story.country}</span>
                        <div className="ml-auto flex gap-1 text-brand-gold">
                          {Array.from({ length: Math.round(story.rating) }).map((_, starIndex) => (
                            <Star key={starIndex} className="h-4 w-4 fill-brand-gold" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">{story.journey}</p>
                    </div>
                    <p className="text-lg text-white/80">“{story.quote}”</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default StoriesPage
