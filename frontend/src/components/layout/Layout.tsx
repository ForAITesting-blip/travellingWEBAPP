import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import PlannerDrawer from './PlannerDrawer'
import ScrollToTop from './ScrollToTop'
import { useAppSelector } from '../../app/hooks'

const Layout = ({ children }: { children: ReactNode }) => {
  const theme = useAppSelector((state) => state.ui.theme)

  useEffect(() => {
    const body = document.body
    if (theme === 'light') {
      body.classList.add('bg-brand-sand', 'text-brand-blue')
      body.classList.remove('bg-brand-dusk', 'text-white')
    } else {
      body.classList.add('bg-brand-dusk', 'text-white')
      body.classList.remove('bg-brand-sand', 'text-brand-blue')
    }
  }, [theme])

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden ${
        theme === 'dark' ? 'bg-brand-dusk text-white' : 'bg-brand-sand text-brand-blue'
      } transition-colors duration-500`}
    >
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(205,163,73,0.25),transparent_55%)]" />
      <Navbar />
      <ScrollToTop />
      <motion.main
        key={theme}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="pt-24"
      >
        {children}
      </motion.main>
      <Footer />
      <PlannerDrawer />
    </div>
  )
}

export default Layout
