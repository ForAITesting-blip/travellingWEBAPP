import { Hero } from '../components/sections/Hero'
import { DestinationsShowcase } from '../components/sections/DestinationsShowcase'
import { ExperiencesMosaic } from '../components/sections/ExperiencesMosaic'
import { SeasonalHighlights } from '../components/sections/SeasonalHighlights'
import { ItineraryPlanner } from '../components/sections/ItineraryPlanner'
import { Testimonials } from '../components/sections/Testimonials'
import { CallToAction } from '../components/sections/CallToAction'

export function HomePage() {
  return (
    <main>
      <Hero />
      <DestinationsShowcase />
      <ExperiencesMosaic />
      <SeasonalHighlights />
      <ItineraryPlanner />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
