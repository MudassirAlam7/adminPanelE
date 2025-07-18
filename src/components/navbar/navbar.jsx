import React from 'react';
import './navbar.css';
import logout from '../../assets/logout.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-title">Senora</h1>
        <span>Handmade Chikankari</span>
      </div>
      <div className="navbar-right">
        <button className="logout-button">
          <img src={logout} alt="Logout Icon" className="logout-icon" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
