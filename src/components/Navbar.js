import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; 
import { clearUser } from '../features/userSlice'; 

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const isAuthenticated = useSelector((state) => state.user.userEmail);

  const handleLogout = () => {
    dispatch(clearUser()); 
    navigate('/login'); 
  };

  return (
    <>
      <nav>
        <ul>
          <li className="menu-right">
            <Link to="/home">Home</Link>
          </li>
          <li className="menu-right">
            {isAuthenticated ? (
              <Link to="/" onClick={handleLogout}>Logout</Link>
            ) : (
              <Link to="/">Login</Link>
            )}
          </li>
        </ul>
      </nav>
      <hr className="navbar-divider" />

    </>
  );
};

export default Navbar;
