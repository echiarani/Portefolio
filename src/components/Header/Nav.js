/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

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
      <li className="nav-list-item"><NavLink activeClassName="nav-list-item-active" exact to="/">Home</NavLink></li>
      <li className="nav-list-item"><NavLink activeClassName="nav-list-item-active" exact to="/skills">Technical skills</NavLink></li>
      <li className="nav-list-item"><NavLink activeClassName="nav-list-item-active" exact to="/projects">Projects</NavLink></li>
      <li className="nav-list-item"><NavLink activeClassName="nav-list-item-active" exact to="/contact">Contact</NavLink></li>
    </ul>
  </div>
);

/**
 * Export
 */
export default Nav;
