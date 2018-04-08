import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Signup.css';

import SignupForm from './SignupForm';
import { signupRequest } from './actions';

class Signup extends Component {
  render() {
    const { signupRequest } = this.props;
    return (
      <div className="signup">
        <SignupForm signupRequest={signupRequest} />
      </div>
    );
  }
}

export default connect(null, { signupRequest })(Signup);
