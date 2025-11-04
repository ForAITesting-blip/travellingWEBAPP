import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../api/client'
import type { Experience } from '../../types'
import type { RootState } from '../../app/store'

interface ExperiencesState {
  items: Experience[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: ExperiencesState = {
  items: [],
  status: 'idle',
  error: null,
}

export const fetchExperiences = createAsyncThunk<Experience[]>(
  'experiences/fetchAll',
  async () => {
    const { data } = await api.get<Experience[]>('/experiences')
    return data
  },
)

const experiencesSlice = createSlice({
  name: 'experiences',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperiences.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchExperiences.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchExperiences.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Unable to load experiences'
      })
  },
})

export const selectExperiences = (state: RootState) => state.experiences.items
export const selectExperiencesStatus = (state: RootState) =>
  state.experiences.status

export default experiencesSlice.reducer
