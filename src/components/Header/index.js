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
  <header id="header">
    <Presentation />
    <Nav />
    <div id="header-bg" />
    <Info />
  </header>
);

/**
 * Export
 */
export default Header;
