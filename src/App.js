import Home from './pages/home';
import About from './pages/about';
import Experience from './pages/experience';
import Contact from './pages/contact';

import React, { Component } from 'react';
import './App.css';



class App extends Component {
  render() {
    return (
      <>
        <Home />
        <About />
        <Experience />
        <Contact />
      </>
    );
  }
}

export default App;
