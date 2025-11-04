import express from 'express'
import cors from 'cors'
import {
  hero,
  destinations,
  itineraries,
  experiences,
  festivals,
  stories,
  planners,
  CustomPlanRequest,
} from './data'

const app = express()
const PORT = process.env.PORT || 4000

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:4173', 'http://127.0.0.1:5173'],
  }),
)
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.get('/api/hero', (_req, res) => {
  res.json(hero)
})

app.get('/api/destinations', (req, res) => {
  const { season, region, tag } = req.query
  const filtered = destinations.filter((destination) => {
    const matchSeason = season ? destination.seasons.includes(String(season)) : true
    const matchRegion = region ? destination.region === String(region) : true
    const matchTag = tag ? destination.tags.includes(String(tag)) : true
    return matchSeason && matchRegion && matchTag
  })
  res.json(filtered)
})

app.get('/api/itineraries', (req, res) => {
  const { season, pace } = req.query
  const filtered = itineraries.filter((itinerary) => {
    const matchSeason = season ? itinerary.season === String(season) : true
    const matchPace = pace ? itinerary.pace === String(pace) : true
    return matchSeason && matchPace
  })
  res.json(filtered)
})

app.get('/api/experiences', (req, res) => {
  const { category, season } = req.query
  const filtered = experiences.filter((experience) => {
    const matchCategory = category ? experience.category === String(category) : true
    const matchSeason = season ? experience.season === String(season) : true
    return matchCategory && matchSeason
  })
  res.json(filtered)
})

app.get('/api/festivals', (_req, res) => {
  res.json(festivals)
})

app.get('/api/stories', (_req, res) => {
  res.json(stories)
})

app.post('/api/plan', (req, res) => {
  const payload = req.body as CustomPlanRequest

  if (!payload?.name || !payload?.email || !payload?.travelWindow || !payload?.preferences?.length) {
    return res.status(400).json({ success: false, message: 'Missing required fields.' })
  }

  const recommendation = planners.generateRecommendation(payload)

  res.json({ success: true, recommendation })
})

app.listen(PORT, () => {
  console.log(`Armenian Horizons API running on port ${PORT}`)
})
