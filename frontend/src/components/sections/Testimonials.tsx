import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Our private khachkar carving lesson in Noratus was transformative. Aurora synchronized the master carver, live duduk, and lakefront picnic flawlessly.',
    author: 'Sophia & Malik',
    location: 'Berlin → Yerevan',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1180&auto=format&fit=crop',
  },
  {
    quote:
      'The itinerary layered Armenian jazz clubs over Soviet design walking tours. Every guide felt like an old friend sharing secrets.',
    author: 'Jules',
    location: 'Montréal',
    image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=1180&auto=format&fit=crop',
  },
  {
    quote:
      'Waking up in a family-owned silk farm, then hiking to Tatev with sunrise lit prayers—this is modern pilgrimage. Armenia felt like home.',
    author: 'Priya & Arjun',
    location: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1180&auto=format&fit=crop',
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto mt-32 max-w-6xl px-6">
      <div className="glass-card overflow-hidden p-8">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-500">
              Voices from the route
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Travelers who let Armenia reframe their senses.
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              We partner with soil scientists, jazz archivists, rare grape growers, and mountain monks. Their stories shape every journey we craft.
            </p>
          </div>
          <div className="rounded-3xl border border-white/60 bg-white/70 p-6 text-sm text-slate-600">
            <p className="font-semibold text-brand-700">
              98% of travelers extend their stay after day 5.
            </p>
            <p className="mt-2">
              Expect thoughtfully paced transitions, midnight observatory visits, and thermal springs under the stars.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05 }}
              className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 shadow-glow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <blockquote className="mt-4 text-sm text-slate-600">
                “{testimonial.quote}”
              </blockquote>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
