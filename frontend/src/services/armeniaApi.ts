import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

export interface HeroContent {
  title: string
  subtitle: string
  description: string
  ctaPrimary: string
  ctaSecondary: string
  media: {
    type: 'video' | 'image'
    url: string
    thumbnail?: string
  }
}

export interface Destination {
  id: string
  name: string
  region: string
  description: string
  highlights: string[]
  seasons: string[]
  activities: string[]
  image: string
  gallery: string[]
  coordinates: [number, number]
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  duration: string
  rating: number
  tags: string[]
}

type DestinationFilters = {
  season?: string
  region?: string
  tag?: string
}

type ItineraryFilters = {
  season?: string
  pace?: string
}

type ExperienceFilters = {
  category?: string
  season?: string
}

export interface Itinerary {
  id: string
  title: string
  durationDays: number
  season: string
  audience: string
  pace: 'Relaxed' | 'Balanced' | 'Adventurous'
  summary: string
  highlights: string[]
  mapUrl: string
  schedule: Array<{
    day: number
    title: string
    description: string
    activities: string[]
    tips: string[]
  }>
}

export interface Experience {
  id: string
  title: string
  category: string
  description: string
  location: string
  season: string
  duration: string
  intensity: string
  media: {
    image: string
    video?: string
  }
  spots: number
  priceFrom: number
}

export interface Festival {
  id: string
  name: string
  month: string
  location: string
  description: string
  theme: string
  image: string
}

export interface Story {
  id: string
  traveler: string
  country: string
  quote: string
  journey: string
  image: string
  rating: number
}

export interface CustomPlanRequest {
  name: string
  email: string
  travelWindow: string
  preferences: string[]
  message?: string
}

export interface CustomPlanResponse {
  success: boolean
  recommendation: {
    title: string
    summary: string
    highlights: string[]
    nextSteps: string[]
  }
}

export const armeniaApi = createApi({
  reducerPath: 'armeniaApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getHero: builder.query<HeroContent, void>({
      query: () => '/hero',
    }),
    getDestinations: builder.query<Destination[], DestinationFilters | void>({
      query: (params) => {
        if (!params) {
          return '/destinations'
        }

        const queryParams = Object.entries(params).reduce<Record<string, string>>((acc, [key, value]) => {
          if (value) acc[key] = value
          return acc
        }, {})

        return {
          url: '/destinations',
          params: Object.keys(queryParams).length ? queryParams : undefined,
        }
      },
    }),
    getItineraries: builder.query<Itinerary[], ItineraryFilters | void>({
      query: (params) => {
        if (!params) {
          return '/itineraries'
        }

        const queryParams = Object.entries(params).reduce<Record<string, string>>((acc, [key, value]) => {
          if (value) acc[key] = value
          return acc
        }, {})

        return {
          url: '/itineraries',
          params: Object.keys(queryParams).length ? queryParams : undefined,
        }
      },
    }),
    getExperiences: builder.query<Experience[], ExperienceFilters | void>({
      query: (params) => {
        if (!params) {
          return '/experiences'
        }

        const queryParams = Object.entries(params).reduce<Record<string, string>>((acc, [key, value]) => {
          if (value) acc[key] = value
          return acc
        }, {})

        return {
          url: '/experiences',
          params: Object.keys(queryParams).length ? queryParams : undefined,
        }
      },
    }),
    getFestivals: builder.query<Festival[], void>({
      query: () => '/festivals',
    }),
    getStories: builder.query<Story[], void>({
      query: () => '/stories',
    }),
    createCustomPlan: builder.mutation<CustomPlanResponse, CustomPlanRequest>({
      query: (body) => ({
        url: '/plan',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useGetHeroQuery,
  useGetDestinationsQuery,
  useGetItinerariesQuery,
  useGetExperiencesQuery,
  useGetFestivalsQuery,
  useGetStoriesQuery,
  useCreateCustomPlanMutation,
} = armeniaApi
