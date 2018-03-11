import React, { Component } from 'react';
import './Signup.css';

import SignupForm from './SignupForm';

class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <SignupForm />
      </div>
    );
  }
}

export default Signup;
