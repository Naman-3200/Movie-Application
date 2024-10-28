import { createSlice } from '@reduxjs/toolkit';

const getUserWatchlistKey = (userEmail) => `watchlist_${userEmail}`;

const initialState = {
  movies: [], 
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const { movie, userEmail } = action.payload;
      state?.movies?.push(movie);
      localStorage.setItem(getUserWatchlistKey(userEmail), JSON.stringify(state.movies));
    },
    removeMovie: (state, action) => {
      const { imdbID, userEmail } = action.payload;
      state.movies = state.movies.filter((movie) => movie.imdbID !== imdbID);
      localStorage.setItem(getUserWatchlistKey(userEmail), JSON.stringify(state.movies));
    },
    setWatchlist: (state, action) => {
      const { movies, userEmail } = action.payload;
      state.movies = movies;
      localStorage.setItem(getUserWatchlistKey(userEmail), JSON.stringify(movies));
    },
    loadUserWatchlist: (state, action) => {
      const userEmail = action.payload;
      const userWatchlist = JSON.parse(localStorage.getItem(getUserWatchlistKey(userEmail))) || [];
      state.movies = userWatchlist;
    },
  },
});

export const { addMovie, removeMovie, setWatchlist, loadUserWatchlist } = watchlistSlice.actions;
export const selectWatchlist = (state) => state.watchlist.movies;
export default watchlistSlice.reducer;
