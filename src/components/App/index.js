/**
 * NPM import
 */
import React from 'react';
import { Route } from 'react-router-dom';

/**
 * Local import
 */
// Components
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Profile from 'src/components/Profile';
import Projects from 'src/components/Projects';
import Contact from 'src/components/Contact';

// Styles
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Header />
    <div id="main">
      <Route path="/" exact render={() => <Home />} />
      <Route path="/skills" exact render={() => <Profile />} />
      <Route path="/projects" exact render={() => <Projects />} />
      <Route path="/contact" exact render={() => <Contact />} />
    </div>
  </div>
);

/**
 * Export
 */
export default App;
