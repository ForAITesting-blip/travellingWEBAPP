import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Destination } from '../types';

interface DestinationsState {
  destinations: Destination[];
  selectedDestination: Destination | null;
  loading: boolean;
  error: string | null;
  filter: string;
}

const initialState: DestinationsState = {
  destinations: [],
  selectedDestination: null,
  loading: false,
  error: null,
  filter: 'all',
};

const API_URL = 'http://localhost:5000/api';

export const fetchDestinations = createAsyncThunk(
  'destinations/fetchDestinations',
  async (category: string = 'all') => {
    const response = await fetch(`${API_URL}/destinations?category=${category}`);
    return response.json();
  }
);

export const fetchDestinationById = createAsyncThunk(
  'destinations/fetchDestinationById',
  async (id: number) => {
    const response = await fetch(`${API_URL}/destinations/${id}`);
    return response.json();
  }
);

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    clearSelectedDestination: (state) => {
      state.selectedDestination = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDestinations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDestinations.fulfilled, (state, action) => {
        state.loading = false;
        state.destinations = action.payload;
      })
      .addCase(fetchDestinations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch destinations';
      })
      .addCase(fetchDestinationById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDestinationById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedDestination = action.payload;
      })
      .addCase(fetchDestinationById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch destination';
      });
  },
});

export const { setFilter, clearSelectedDestination } = destinationsSlice.actions;
export default destinationsSlice.reducer;
