import { motion } from 'framer-motion'

const seasonalHighlights = [
  {
    season: 'Spring equinox',
    months: 'March – April',
    highlight: 'Illuminated monastery fresco restoration workshop in Geghard.',
    tip: 'Cherry blossoms peak late April along the Hrazdan gorge in Yerevan.',
  },
  {
    season: 'Summer altitude escapes',
    months: 'June – August',
    highlight: 'Heli-drop picnic on Aragats plateau with astronomer-led stargazing.',
    tip: 'Pack layers—temperatures swing 20°C between lakefront sunrise and canyon twilight.',
  },
  {
    season: 'Autumn vintage & jazz',
    months: 'September – October',
    highlight: 'Exclusive pass to Areni Wine Festival, followed by underground jazz in Yerevan.',
    tip: 'Reserve extra nights for the Gata baking ritual in Khachik village.',
  },
  {
    season: 'Winter glow',
    months: 'December – February',
    highlight: 'Thermal spring retreats in Jermuk with snowshoe access to forest monasteries.',
    tip: 'Combine with Christmas liturgy (Jan 6) in Echmiadzin for ethereal choral soundscapes.',
  },
]

export function SeasonalHighlights() {
  return (
    <section className="mx-auto mt-32 max-w-5xl px-6" id="seasons">
      <div className="text-center">
        <h2 className="section-title text-center">Design with seasons in mind</h2>
        <p className="section-subtitle mx-auto">
          Armenia shapeshifts with the sun. Align your travel story with rare festivals, harvests, and cosmic events.
        </p>
      </div>

      <div className="relative mt-16 border-l border-dashed border-brand-200 pl-8">
        {seasonalHighlights.map((item, index) => (
          <motion.div
            key={item.season}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08 }}
            className="relative mb-14 rounded-3xl bg-white/80 p-6 shadow-glow"
          >
            <span className="absolute -left-12 top-6 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent text-xs font-semibold text-white shadow-lg">
              {index + 1}
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">
              {item.season}
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-slate-900">{item.highlight}</h3>
              <span className="rounded-full bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                {item.months}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600">{item.tip}</p>
          </motion.div>
        ))}
        <div className="absolute bottom-0 left-0 h-8 w-8 -translate-x-[18px] rounded-full border-4 border-brand-200 bg-white" />
      </div>
    </section>
  )
}
