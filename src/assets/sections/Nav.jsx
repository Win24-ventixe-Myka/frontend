import React from 'react';
import logo from '../images/icons/ventixelogo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Nav = ({ title }) => {
  const { signout } = useAuth()
  const navigate = useNavigate()
  
  const handleSignOut = () => {
    signout()
    navigate('/signin');
  };

  return (
    <nav>
      <div className="navbar">
        <div className="logotype">
          <img src={logo} alt="Logo" className="logo-icon" />
          <h1>Ventixe</h1>
        </div>

        <div className="nav-title">
          <p>{title}</p>
        </div>

        <div className="menu-button">
          <i className="fa-solid fa-bars menu-icon"></i>
        </div>
      </div>

      <div className="nav-links">

        <Link to="/dashboard" className="nav-link">
          <i className="fa-regular fa-grid-2 dashboard-icon"></i>
          <p className="nav-text">Dashboard</p>
        </Link>

        <Link to="/events" className="nav-link">
          <i className="fa-regular fa-ticket-perforated events-icon"></i>
          <p className="nav-text">Events</p>
        </Link>
        </div>

      <div className="signout-button">
        <i className="fa-sharp fa-light fa-arrow-right-from-bracket" onClick={handleSignOut}></i>
        <button className="signout-btn" onClick={handleSignOut}>
          <span>Sign Out</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;