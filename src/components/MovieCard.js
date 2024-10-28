import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie, selectWatchlist } from '../features/watchlistSlice';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const userEmail = useSelector((state) => state.user.userEmail); 
  const dispatch = useDispatch();
  const watchlist = useSelector(selectWatchlist);
  console.log(userEmail)


  const isInWatchlist = userEmail && Array.isArray(watchlist) && watchlist.some(watchlistMovie => watchlistMovie.imdbID === movie.imdbID);

  const handleAddToWatchlist = () => {
     if (userEmail) {
      dispatch(addMovie({ movie, userEmail }));
    } else {
      console.warn("User email is required to add a movie to the watchlist.");
    }
  };


  const handleRemoveFromWatchlist = () => {
    if (userEmail) {
      dispatch(removeMovie({ imdbID: movie.imdbID, userEmail }));
    } else {
      console.warn("User email is required to remove a movie from the watchlist.");
    }  };

  return (
    <div>
    
    <div className="movie-card">
      <img src={movie?.Poster} alt={movie?.Title} />
      <h3>{movie?.Title}</h3>
      <p>{movie?.Year}</p>
      {isInWatchlist ? (
        <button onClick={handleRemoveFromWatchlist}>Remove from Watchlist</button>
      ) : (
        <button onClick={handleAddToWatchlist}>Add to Watchlist</button>
      )}
      <Link to={`/movie/${movie?.imdbID}`}>View Details</Link>
    </div>
    </div>
  );
};

export default MovieCard;

