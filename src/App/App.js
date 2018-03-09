import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';

import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
