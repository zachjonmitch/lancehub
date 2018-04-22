import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="mobile-menu"><i className="fa fa-bars" /></div>
        <div className="channel">
          <h4># all-channels</h4>
        </div>
        <div className="profile">
          <div className="profile-img" />
        </div>
      </nav>
    );
  }
}

export default Navbar;
