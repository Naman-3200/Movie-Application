// Layout.js
import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './SideBar';



const LayoutUtils = ({ children }) => {
  const location = useLocation();

  return (
    <div className="layout">
    {location.pathname !== '/' && <Navbar />}
    <div className="layout-content">
      <Sidebar />
      <div className="main-content">
        <Outlet /> 
      </div>
    </div>
  </div>
  );
};

export default LayoutUtils;
