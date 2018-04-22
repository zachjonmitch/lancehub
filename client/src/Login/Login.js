import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Login.css';

import LoginForm from './LoginForm';
import { userLoginRequest } from './actions';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <LoginForm />
      </div>
    );
  }
}

Login.propTypes = {
  userLoginRequest: PropTypes.func.isRequired,
};

export default connect(null, { userLoginRequest })(Login);
