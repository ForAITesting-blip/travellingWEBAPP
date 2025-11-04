import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { api } from '../../api/client'
import type { Destination } from '../../types'
import type { RootState } from '../../app/store'

export interface DestinationFilters {
  category: Destination['category'] | 'all'
  region: Destination['region'] | 'all'
  seasons: string[]
}

interface DestinationsState {
  items: Destination[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  filters: DestinationFilters
}

const initialState: DestinationsState = {
  items: [],
  status: 'idle',
  error: null,
  filters: {
    category: 'all',
    region: 'all',
    seasons: [],
  },
}

export const fetchDestinations = createAsyncThunk<Destination[]>(
  'destinations/fetchAll',
  async () => {
    const { data } = await api.get<Destination[]>('/destinations')
    return data
  },
)

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<DestinationFilters['category']>) {
      state.filters.category = action.payload
    },
    setRegion(state, action: PayloadAction<DestinationFilters['region']>) {
      state.filters.region = action.payload
    },
    toggleSeason(state, action: PayloadAction<string>) {
      const season = action.payload
      if (state.filters.seasons.includes(season)) {
        state.filters.seasons = state.filters.seasons.filter((s) => s !== season)
      } else {
        state.filters.seasons.push(season)
      }
    },
    clearFilters(state) {
      state.filters = initialState.filters
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDestinations.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchDestinations.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchDestinations.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Unable to load destinations'
      })
  },
})

export const { setCategory, setRegion, toggleSeason, clearFilters } =
  destinationsSlice.actions

export const selectDestinations = (state: RootState) => state.destinations.items
export const selectDestinationFilters = (state: RootState) =>
  state.destinations.filters
export const selectDestinationsStatus = (state: RootState) => state.destinations.status
export const selectFilteredDestinations = (state: RootState) => {
  const { filters, items } = state.destinations
  return items.filter((destination) => {
    const categoryMatch =
      filters.category === 'all' || destination.category === filters.category
    const regionMatch = filters.region === 'all' || destination.region === filters.region
    const seasonsMatch =
      filters.seasons.length === 0 ||
      filters.seasons.every((season) => destination.bestSeasons.includes(season))
    return categoryMatch && regionMatch && seasonsMatch
  })
}

export default destinationsSlice.reducer
