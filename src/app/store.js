import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import watchlistReducer from '../features/watchlistSlice';
import movieReducer from '../features/movieSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    watchlist: watchlistReducer,
    movies: movieReducer,
  },
});
