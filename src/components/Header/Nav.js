/**
 * NPM import
 */
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Local import
 */
// Components

// Styles
import './header.scss';

/**
 * Code
 */
const Nav = () => (
  <div className="nav">
    <ul className="nav-list">
      <li className="nav-list-item"><Link to="/">Home</Link></li>
      <li className="nav-list-item"><Link to="/skills">Technical skills</Link></li>
      <li className="nav-list-item"><Link to="/projects">Projects</Link></li>
      <li className="nav-list-item"><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
);

/**
 * Export
 */
export default Nav;
