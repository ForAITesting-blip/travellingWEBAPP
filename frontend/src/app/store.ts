import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { armeniaApi } from '../services/armeniaApi'
import uiReducer from '../features/ui/uiSlice'

export const store = configureStore({
  reducer: {
    [armeniaApi.reducerPath]: armeniaApi.reducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(armeniaApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
