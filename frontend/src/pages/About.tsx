import { motion } from 'framer-motion'
import { Globe2, Heart, Leaf, Users } from 'lucide-react'

const values = [
  {
    title: 'Local dedication',
    description:
      'We collaborate with community leaders, historians, winemakers, and artists to ensure every journey uplifts local voices.',
    icon: Users,
  },
  {
    title: 'Regenerative travel',
    description: '10% of every journey funds heritage preservation, rural education, and environmental restoration initiatives.',
    icon: Leaf,
  },
  {
    title: 'Design forward',
    description: 'We blend architecture, soundscapes, and culinary design to transform trips into multi-sensory residencies.',
    icon: Globe2,
  },
  {
    title: 'Hospitality at heart',
    description: 'From arrival to farewell, our concierge team orchestrates thoughtful gestures tailored to each guest.',
    icon: Heart,
  },
]

const AboutPage = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-6 pb-24">
      <header className="pt-16 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/90">Who we are</p>
        <h1 className="mt-4 font-display text-4xl text-white">Armenian Horizons is a collective of cultural producers, guides, designers, and hosts.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70">
          Based in Yerevan, we craft deeply personal journeys across Armenia. From first-time explorers to diaspora returns, our mission is to translate the country&apos;s layered heritage into unforgettable experiences.
        </p>
      </header>

      <section className="grid gap-6 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:grid-cols-2">
        {values.map(({ title, description, icon: Icon }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center gap-3 text-brand-gold">
              <Icon className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">{title}</p>
            </div>
            <p className="text-sm text-white/70">{description}</p>
          </motion.div>
        ))}
      </section>

      <section className="rounded-[2.5rem] border border-brand-gold/20 bg-brand-gold/10 p-8 text-brand-dusk">
        <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-dusk/60">Our manifesto</p>
            <h2 className="mt-3 font-display text-3xl">Travel should transform both guest and host</h2>
            <p className="mt-4 text-sm text-brand-dusk/80">
              We believe in patience over checklists, depth over breadth, and creativity over convention. Our planning starts with a conversation about feelings, intentions, and energy—then we choreograph experiences that mirror those desires.
            </p>
          </div>
          <div className="space-y-3 text-sm text-brand-dusk/80">
            <p>• Boutique network of 50+ local partners</p>
            <p>• Multilingual guides trained in storytelling and hospitality</p>
            <p>• On-call wellness, photography, and design specialists</p>
            <p>• Transparent pricing, carbon reporting, and community contributions</p>
          </div>
        </div>
      </section>

      <section className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8">
        <h2 className="font-display text-3xl text-white">Meet the hosts</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/70">
          Armenian Horizons was founded by a trio of childhood friends: Ani (architect-curator), Tigran (sommelier-historian), and Mariam (mountain guide). Together with a dedicated team, we design days that feel cinematic yet grounded.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            {
              name: 'Ani Arshakyan',
              role: 'Creative Director',
              bio: 'Former museum curator crafting art-led journeys and design residencies.',
            },
            {
              name: 'Tigran Mikayelyan',
              role: 'Sommelier & Historian',
              bio: 'Guides tastings across Armenia’s reborn wine valleys and modern culinary scene.',
            },
            {
              name: 'Mariam Sargsyan',
              role: 'Lead Expedition Host',
              bio: 'Mountaineer and mindfulness coach crafting safe, soulful adventures.',
            },
          ].map((host) => (
            <div key={host.name} className="space-y-2 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-gold/80">{host.role}</p>
              <p className="font-semibold text-white">{host.name}</p>
              <p className="text-sm text-white/70">{host.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
