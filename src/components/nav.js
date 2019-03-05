import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

import Auth from '../services/auth';
const auth = new Auth();

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <strong>FunCo</strong>
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/about" className="navbar-item">
            About
          </Link>
          <Link to="/profile" className="navbar-item">
            Profile
          </Link>
          {auth.isAuthenticated() ? (
            <div
              className="navbar-item join"
              onClick={() => {
                auth.logout();
              }}
            >
              Logout
            </div>
          ) : (
            <div
              className="navbar-item join"
              onClick={() => {
                auth.login();
              }}
            >
              Admin
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
