/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Presentation from './Presentation';
import Nav from './Nav';
import Info from './Info';

// Styles
import './header.scss';

/**
 * Code
 */
const Header = () => (
  <div id="header">
    <Presentation />
    <Nav />
    <Info />
  </div>
);

/**
 * Export
 */
export default Header;
