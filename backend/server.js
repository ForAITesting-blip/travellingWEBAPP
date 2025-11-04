import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { destinations, experiences, itineraries } from './data/travelData.js'

const app = express()

app.use(cors({ origin: '*', credentials: false }))
app.use(express.json())
app.use(morgan('dev'))

const PORT = process.env.PORT || 5000

app.get('/', (_req, res) => {
  res.json({
    name: 'Aurora Armenia Travel API',
    version: '1.0.0',
    endpoints: ['/api/destinations', '/api/experiences', '/api/itineraries'],
  })
})

app.get('/api/destinations', (_req, res) => {
  res.json(destinations)
})

app.get('/api/experiences', (_req, res) => {
  res.json(experiences)
})

app.get('/api/itineraries', (_req, res) => {
  res.json(itineraries)
})

app.post('/api/custom-itineraries', (req, res) => {
  const { name, email, preferences } = req.body ?? {}
  if (!name || !email) {
    res.status(400).json({ message: 'Name and email are required.' })
    return
  }

  res.status(201).json({
    message: 'We received your dream brief! Expect a curated outline within 24 hours.',
    payload: {
      name,
      email,
      preferences,
      referenceId: `AA-${Date.now().toString(36)}`,
    },
  })
})

app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.originalUrl} not found.` })
})

app.use((err, _req, res, _next) => {
  console.error('Unexpected error', err)
  res.status(500).json({ message: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`Aurora Armenia API running on http://localhost:${PORT}`)
})
