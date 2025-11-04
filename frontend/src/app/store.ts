import { configureStore } from '@reduxjs/toolkit'
import destinationsReducer from '../features/destinations/destinationsSlice'
import itinerariesReducer from '../features/itineraries/itinerariesSlice'
import experiencesReducer from '../features/experiences/experiencesSlice'

export const store = configureStore({
  reducer: {
    destinations: destinationsReducer,
    itineraries: itinerariesReducer,
    experiences: experiencesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
