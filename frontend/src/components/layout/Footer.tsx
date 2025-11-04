import { motion } from 'framer-motion'
import { Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="border-t border-white/5 bg-brand-dusk/60"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl text-brand-gold">Armenian Horizons</p>
          <p className="mt-3 text-sm text-white/70">
            Crafted journeys, immersive culture, and unforgettable experiences across Armenia's mountains, monasteries, and modern cities.
          </p>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.3em] text-brand-gold/90">Visit</h3>
          <p className="mt-4 flex items-start gap-2 text-sm text-white/70">
            <MapPin className="mt-0.5 h-4 w-4 text-brand-gold" /> 5 Vardanants Street, Yerevan, Armenia
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-white/70">
            <Phone className="h-4 w-4 text-brand-gold" /> +374 10 123 456
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm uppercase tracking-[0.3em] text-brand-gold/90">Explore</h3>
          <nav className="flex flex-col gap-2 text-sm text-white/70">
            <Link to="/destinations" className="hover:text-white">
              Signature Destinations
            </Link>
            <Link to="/experiences" className="hover:text-white">
              Curated Experiences
            </Link>
            <Link to="/plan" className="hover:text-white">
              Tailored Planning
            </Link>
            <Link to="/stories" className="hover:text-white">
              Traveler Stories
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.3em] text-brand-gold/90">Stay Inspired</h3>
          <p className="mt-3 text-sm text-white/70">Subscribe for seasonal itineraries and cultural highlights.</p>
          <form className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="h-11 flex-1 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-brand-gold focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-brand-gold to-amber-500 px-5 text-sm font-semibold text-brand-dusk"
            >
              Join
            </button>
          </form>
          <div className="mt-4 flex items-center gap-3 text-white/70">
            <Mail className="h-4 w-4 text-brand-gold" /> hello@armenianhorizons.travel
          </div>
          <div className="mt-3 flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:text-brand-gold"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 bg-brand-dusk/80 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Armenian Horizons. Crafted with love in Yerevan.
      </div>
    </motion.footer>
  )
}

export default Footer
