import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">

        <section className="sidebar">
          <div className="sidebar-brand">LanceHub</div>

          <div className="sidebar-nav">
            <div className="sidebar-nav-title">all channels</div>
            <ul className="sidebar-nav-list">
              <li className="sidebar-channel">item 1</li>
              <li className="sidebar-channel">item 2</li>
              <li className="sidebar-channel">item 3</li>
            </ul>
          </div>
          
        </section>

        <nav className="navbar">
          <div className="navbar-current-channel"># all-channels</div>
          <div className="navbar-profile">Profile</div>
        </nav>

        <section className="chat">
          <div className="chat-user">
            <div className="chat-user-image">Image</div>
            <div className="chat-user-name">zjmitche</div>
            <div className="chat-user-body">Testing chat user</div>
          </div>

          <form className="chat-form">
            <input className="chat-form-message" name="message" />
          </form>

        </section>
      </div>
    );
  }
}

export default Dashboard;
