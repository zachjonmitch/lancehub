import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <section className="sidebar">
        <div className="brand">LanceHub</div>
        <h4>all channels</h4>
        <ul className="channels">
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </section>
    );
  }
}

export default Sidebar;
