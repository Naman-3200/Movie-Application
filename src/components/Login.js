import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import { setUser, clearUser } from '../features/userSlice';
import { loadUserWatchlist } from '../features/watchlistSlice';


const Login = ({ userId }) => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (email) => {
    if (email) { 
      dispatch(setUser(email));
      dispatch(loadUserWatchlist(email));
      navigate('/home');
    } else {
      alert("Please enter a valid email address."); 
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required 
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

