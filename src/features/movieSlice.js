import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [], 
  },
  reducers: {
    setMovies: (state, action) => {
      state.list = action.payload;  
    },
  },
});

export const { setMovies } = movieSlice.actions;
export const selectMovies = (state) => state.movies.list;
export default movieSlice.reducer;
