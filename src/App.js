import React, { Component } from 'react';

import './App.css';

import Events from './Events';
import Home from './Home';
import Releases from './Releases';
import Store from './Store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Events />
        <Home />
        <Releases />
      </div>
    );
  }
}

export default App;
