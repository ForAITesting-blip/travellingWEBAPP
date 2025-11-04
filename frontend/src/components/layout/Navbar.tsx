import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Plane, Mountain } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { useAppDispatch } from '../../app/hooks'
import { setPlannerVisibility } from '../../features/ui/uiSlice'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Experiences', to: '/experiences' },
  { label: 'Plan', to: '/plan' },
  { label: 'Stories', to: '/stories' },
  { label: 'About', to: '/about' },
]

const Navbar = () => {
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-xl bg-brand-dusk/80 shadow-lg shadow-black/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-3 text-white">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-gold to-amber-500 shadow-soft">
            <Mountain className="h-6 w-6" />
          </span>
          <div>
            <p className="font-display text-xl leading-none">Armenian Horizons</p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Journey Curated</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition hover:text-white ${isActive ? 'text-brand-gold' : 'text-white/70'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <button
            onClick={() => dispatch(setPlannerVisibility(true))}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-gold to-amber-500 px-5 py-3 text-sm font-semibold text-brand-dusk shadow-soft transition hover:scale-[1.02]"
          >
            <Plane className="h-4 w-4" /> Plan A Journey
          </button>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/80 lg:hidden"
          onClick={() => setIsOpen((state) => !state)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="lg:hidden"
          >
            <div className="space-y-2 border-t border-white/10 bg-brand-dusk/95 px-6 py-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isActive ? 'bg-white/10 text-brand-gold' : 'text-white/80 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="flex items-center justify-between pt-4">
                <ThemeToggle />
                <button
                  onClick={() => {
                    dispatch(setPlannerVisibility(true))
                    setIsOpen(false)
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-gold to-amber-500 px-4 py-2 text-xs font-semibold text-brand-dusk"
                >
                  <Plane className="h-4 w-4" /> Start Planning
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
