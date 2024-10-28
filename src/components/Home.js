import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import './Home.css';
import Sidebar from './SideBar';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInitialMovies = async () => {
      try {
        const { data } = await axios.get(`https://www.omdbapi.com/?s=guardians&apikey=86683180`);
        setMovies(data.Search || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching initial movies: ', error);
        setLoading(false);
      }
    };

    fetchInitialMovies();
  }, []);

  const searchMovies = async () => {
    if (!searchTerm) return; 
    setLoading(true); 
    try {
      const { data } = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=86683180`);
      setMovies(data.Search || []); 
      setLoading(false);
    } catch (error) {
      console.error('Error searching for movies: ', error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Sidebar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchMovies={searchMovies}
      />
      <div className="main-content">
        <h2 className="highlight">Search Movies</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={searchMovies}>Search</button>
        </div>
        {loading ? (
          <p>Loading movies...</p>
        ) : (
          <div className="movies-grid">
            {movies.length > 0 ? (
              movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
            ) : (
              <p>No movies found. Try searching for something else.</p>
            )}
          </div>

        )}
      </div>
    </div>
  );
};

export default Home;
