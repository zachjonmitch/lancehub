import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';

import Home from './Home/Home.js';
import Login from './Login/Login.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
