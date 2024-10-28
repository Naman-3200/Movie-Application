import React from 'react';
import './Home.css';
import { Link, useParams } from 'react-router-dom';



const Sidebar = ({ searchTerm, setSearchTerm, searchMovies }) => {
  const  {page}  = useParams();
  return (
    <div className="sidebar">
      <h1>Watchlists</h1>
      
      <input
        type="search"
        placeholder="Search for movies..."
      />

      <div className="menu">
        <Link 
          to="/home" 
          className={`menu-item ${!page && window.location.pathname === '/home' ? 'active' : ''}`}
        >
          <i className="icon fa fa-home"></i> Home
        </Link>
        <Link 
          to="/watchlist" 
          className={`menu-item ${!page && window.location.pathname === '/watchlist' ? 'active' : ''}`}
        > 
          <i className="icon">&#9733;</i> Watchlist
        </Link>
        <Link 
          to="/top-rated" 
          className={`menu-item ${page === 'top-rated' ? 'active' : ''}`}
        >
          <i className="icon">&#128218;</i> Top Rated
        </Link>
        <Link 
          to="/upcoming" 
          className={`menu-item ${page === 'upcoming' ? 'active' : ''}`}
        >
          <i className="icon">&#128279;</i> Upcoming
        </Link>
      </div>

      <div className="footer">
        <div className="guest">
          <i className="icon">&#128100;</i>
          <span>Guest User</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
