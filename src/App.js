import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import './App.css';

import Events from './Events';
import Home from './Home';
import Albums from './Albums';
import NavBar from './NavBar';
import Fof from './Fof';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <div className="app-position">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/albums" component={Albums} />
                <Route path="/events" component={Events} />
                <Route component={Fof} />
              </Switch>
            </div>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
