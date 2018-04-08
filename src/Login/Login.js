import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.css';

import LoginForm from './LoginForm';
import { loginRequest } from './actions';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <LoginForm />
      </div>
    );
  }
}

export default connect(null, { loginRequest })(Login);
