import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import Sidebar from './SideBar';

const MovieDetails = () => {
  const { id } = useParams(); 
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=86683180`);
        setMovieDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [id]);
  

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!movieDetails) {
    return <p>Movie details not available</p>;
  }

  return (
    <div className='container'>
      <Sidebar/>
      <div className='main-content'>
      <h1 className=''>{movieDetails?.Title}</h1>
      <div className='movie-card'>
      <p>Released: {movieDetails?.Released}</p>
      <img src={movieDetails?.Poster} alt={movieDetails?.Title} />
      <p>{movieDetails?.Plot}</p>

      </div>

      </div>
    </div>
  );
};

export default MovieDetails;
