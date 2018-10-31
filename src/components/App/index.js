/**
 * NPM import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
// Components
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Profile from 'src/components/Profile';
import Projects from 'src/components/Projects';
import Contact from 'src/components/Contact';
import NotFound from 'src/components/NotFound';

// Styles
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Header />
    <div id="main">
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/skills" exact render={() => <Profile />} />
        <Route path="/projects" exact render={() => <Projects />} />
        <Route path="/contact" exact render={() => <Contact />} />
        <Route exact render={() => <NotFound />} />
      </Switch>
    </div>
  </div>
);

/**
 * Export
 */
export default App;
