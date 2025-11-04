import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { api } from '../../api/client'
import type { Itinerary } from '../../types'
import type { RootState } from '../../app/store'

export interface PlannerPreferences {
  travelPace: 'relaxed' | 'balanced' | 'see-it-all'
  focus: Itinerary['theme'][]
  groupType: 'solo' | 'couple' | 'family' | 'friends'
  travelMonth: string | null
}

interface ItinerariesState {
  items: Itinerary[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  preferences: PlannerPreferences
  recommended: Itinerary[]
}

const initialState: ItinerariesState = {
  items: [],
  status: 'idle',
  error: null,
  preferences: {
    travelPace: 'balanced',
    focus: ['culture'],
    groupType: 'couple',
    travelMonth: null,
  },
  recommended: [],
}

export const fetchItineraries = createAsyncThunk<Itinerary[]>(
  'itineraries/fetchAll',
  async () => {
    const { data } = await api.get<Itinerary[]>('/itineraries')
    return data
  },
)

const itinerariesSlice = createSlice({
  name: 'itineraries',
  initialState,
  reducers: {
    setTravelPace(state, action: PayloadAction<PlannerPreferences['travelPace']>) {
      state.preferences.travelPace = action.payload
      state.recommended = getRecommendations(state.items, state.preferences)
    },
    setGroupType(state, action: PayloadAction<PlannerPreferences['groupType']>) {
      state.preferences.groupType = action.payload
      state.recommended = getRecommendations(state.items, state.preferences)
    },
    toggleFocus(state, action: PayloadAction<Itinerary['theme']>) {
      const focus = action.payload
      if (state.preferences.focus.includes(focus)) {
        state.preferences.focus = state.preferences.focus.filter((f) => f !== focus)
      } else {
        state.preferences.focus = [...state.preferences.focus, focus]
      }
      if (state.preferences.focus.length === 0) {
        state.preferences.focus = ['culture']
      }
      state.recommended = getRecommendations(state.items, state.preferences)
    },
    setTravelMonth(state, action: PayloadAction<string | null>) {
      state.preferences.travelMonth = action.payload
      state.recommended = getRecommendations(state.items, state.preferences)
    },
    hydrateRecommendations(state) {
      state.recommended = getRecommendations(state.items, state.preferences)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItineraries.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchItineraries.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
        state.recommended = getRecommendations(action.payload, state.preferences)
      })
      .addCase(fetchItineraries.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Unable to load itineraries'
      })
  },
})

function getRecommendations(
  itineraries: Itinerary[],
  preferences: PlannerPreferences,
): Itinerary[] {
  return itineraries
    .map((itinerary) => {
      let score = 0
      if (preferences.focus.includes(itinerary.theme)) {
        score += 3
      }
      if (preferences.travelPace === 'relaxed' && itinerary.durationDays <= 5) {
        score += 2
      }
      if (preferences.travelPace === 'see-it-all' && itinerary.durationDays >= 7) {
        score += 2
      }
      if (
        preferences.groupType === 'family' &&
        itinerary.bestFor.includes('families')
      ) {
        score += 2
      }
      if (
        preferences.groupType === 'couple' &&
        itinerary.bestFor.includes('couples')
      ) {
        score += 2
      }
      if (
        preferences.groupType === 'solo' &&
        itinerary.bestFor.includes('solo travelers')
      ) {
        score += 2
      }
      if (
        preferences.groupType === 'friends' &&
        itinerary.bestFor.includes('friends')
      ) {
        score += 2
      }
      return { itinerary, score }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ itinerary }) => itinerary)
}

export const {
  setTravelPace,
  setGroupType,
  toggleFocus,
  setTravelMonth,
  hydrateRecommendations,
} = itinerariesSlice.actions

export const selectItineraries = (state: RootState) => state.itineraries.items
export const selectItineraryStatus = (state: RootState) => state.itineraries.status
export const selectPlannerPreferences = (state: RootState) =>
  state.itineraries.preferences
export const selectRecommendedItineraries = (state: RootState) =>
  state.itineraries.recommended

export default itinerariesSlice.reducer
