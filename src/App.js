import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail, setUser } from './features/userSlice';
import { setWatchlist } from './features/watchlistSlice';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Watchlist from './components/Watchlist';
import Login from './components/Login';
import MovieDetails from './components/MovieDetails';
import Sidebar from './components/SideBar';
import LayoutUtils from './components/LayoutUtils';



function App() {
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();



  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      dispatch(setUser(storedEmail));
      const watchlist = JSON.parse(localStorage.getItem(storedEmail)) || [];
      dispatch(setWatchlist(watchlist));
    }
  }, [dispatch]);

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<LayoutUtils />}>
        <Route path="/home" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
