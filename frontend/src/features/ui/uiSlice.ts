import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UiState {
  theme: 'dark' | 'light'
  selectedSeason: string | null
  selectedRegion: string | null
  showPlanner: boolean
}

const initialState: UiState = {
  theme: 'dark',
  selectedSeason: null,
  selectedRegion: null,
  showPlanner: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark'
    },
    setSeason: (state, action: PayloadAction<string | null>) => {
      state.selectedSeason = action.payload
    },
    setRegion: (state, action: PayloadAction<string | null>) => {
      state.selectedRegion = action.payload
    },
    togglePlanner: (state) => {
      state.showPlanner = !state.showPlanner
    },
    setPlannerVisibility: (state, action: PayloadAction<boolean>) => {
      state.showPlanner = action.payload
    },
  },
})

export const { toggleTheme, setSeason, setRegion, togglePlanner, setPlannerVisibility } = uiSlice.actions

export default uiSlice.reducer
