import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="showcase">
          <div className="content">
            <h1>We're a community of freelancers from the United States</h1>
            <p>Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta.</p>
            <form className="landing-form">
              <input name="email" placeholder="Enter your email" />
              <button type="submit">Sign up</button>
            </form>
          </div>
        </div>
        <div className="banner">
          <p>View my code on Github</p>
        </div>
      </div>
    );
  }
}

export default Landing;