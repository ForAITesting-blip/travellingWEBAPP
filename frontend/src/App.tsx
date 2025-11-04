import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Navigation } from './components/layout/Navigation'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/Home'
import { DestinationsPage } from './pages/Destinations'
import { ExperiencesPage } from './pages/Experiences'
import { PlannerPage } from './pages/Planner'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

function PageMotion({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(98,72,247,0.1),transparent_55%)]">
      <Navigation />
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageMotion>
                <HomePage />
              </PageMotion>
            }
          />
          <Route
            path="/destinations"
            element={
              <PageMotion>
                <DestinationsPage />
              </PageMotion>
            }
          />
          <Route
            path="/experiences"
            element={
              <PageMotion>
                <ExperiencesPage />
              </PageMotion>
            }
          />
          <Route
            path="/planner"
            element={
              <PageMotion>
                <PlannerPage />
              </PageMotion>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
