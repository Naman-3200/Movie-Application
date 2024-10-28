import { useSelector } from 'react-redux';
import { selectWatchlist } from '../features/watchlistSlice';
import MovieCard from './MovieCard';
import './Home.css';
import Sidebar from './SideBar';

const MoviesList = () => {
  const movies = useSelector(selectWatchlist);
  const userEmail = useSelector((state) => state.user.userEmail);
  console.log(userEmail);

  return (
    <div className="container">
      <Sidebar
      // searchTerm={searchTerm}
      // setSearchTerm={setSearchTerm}
      // searchMovies={searchMovies}
      />
      <div className='main-content'>
        {movies?.length > 0 ? (
          movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} userEmail={userEmail} />)
        ) : (
          <p>No movies found. Try searching for something!</p>
        )}

      </div>
    </div>
  );
};

export default MoviesList;
