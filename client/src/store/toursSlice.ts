import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Tour } from '../types';

interface ToursState {
  tours: Tour[];
  selectedTour: Tour | null;
  loading: boolean;
  error: string | null;
}

const initialState: ToursState = {
  tours: [],
  selectedTour: null,
  loading: false,
  error: null,
};

const API_URL = 'http://localhost:5000/api';

export const fetchTours = createAsyncThunk(
  'tours/fetchTours',
  async () => {
    const response = await fetch(`${API_URL}/tours`);
    return response.json();
  }
);

export const fetchTourById = createAsyncThunk(
  'tours/fetchTourById',
  async (id: number) => {
    const response = await fetch(`${API_URL}/tours/${id}`);
    return response.json();
  }
);

const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    clearSelectedTour: (state) => {
      state.selectedTour = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.loading = false;
        state.tours = action.payload;
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch tours';
      })
      .addCase(fetchTourById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTourById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedTour = action.payload;
      })
      .addCase(fetchTourById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch tour';
      });
  },
});

export const { clearSelectedTour } = toursSlice.actions;
export default toursSlice.reducer;
