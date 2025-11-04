export type TravelRegion = 'Yerevan' | 'Lake Sevan' | 'Dilijan' | 'Tatev' | 'Gyumri' | 'Ararat Valley'

export interface Destination {
  id: string
  name: string
  region: TravelRegion | string
  category: 'culture' | 'nature' | 'adventure' | 'wellness' | 'culinary'
  shortDescription: string
  description: string
  highlights: string[]
  bestSeasons: string[]
  duration: string
  coverImage: string
  coordinates?: {
    lat: number
    lng: number
  }
}

export interface Experience {
  id: string
  title: string
  focus: 'heritage' | 'outdoor' | 'food' | 'crafts' | 'wine'
  description: string
  duration: string
  intensity: 'relaxed' | 'moderate' | 'active'
  images: string[]
  location: string
  seasonTips: string
}

export interface DayPlan {
  day: number
  title: string
  summary: string
  activities: string[]
  travelTime?: string
}

export interface Itinerary {
  id: string
  title: string
  theme: 'culture' | 'outdoor' | 'culinary' | 'wellness' | 'family'
  durationDays: number
  difficulty: 'easy' | 'moderate' | 'challenging'
  bestFor: string[]
  heroImage: string
  route: string[]
  overview: string
  dayByDay: DayPlan[]
}

export interface ApiState<T> {
  items: T
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}
