import { configureStore } from '@reduxjs/toolkit';
import destinationsReducer from './destinationsSlice';
import toursReducer from './toursSlice';

export const store = configureStore({
  reducer: {
    destinations: destinationsReducer,
    tours: toursReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
