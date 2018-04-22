import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Signup.css';

import SignupForm from './SignupForm';
import { userSignupRequest } from './actions';

class Signup extends Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <div className="signup">
        <SignupForm userSignupRequest={userSignupRequest} />
      </div>
    );
  }
}

Signup.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
};

export default connect(null, { userSignupRequest })(Signup);
