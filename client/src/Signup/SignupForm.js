import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SignupForm.css';

import TextField from '../App/TextField';
import validateInput from './validate';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {} });
      this.props.userSignupRequest(this.state);
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>

        <TextField
          label="Username"
          name="username"
          type="text"
          placeholder="Pick a username"
          onChange={this.handleChange}
          value={this.state.username}
        />

        {errors.usernameEmpty && <span className="error-msg" style={{ color: 'red' }}>{errors.usernameEmpty}</span>}

        <TextField
          label="Email"
          name="email"
          type="text"
          placeholder="you@example.com"
          onChange={this.handleChange}
          value={this.state.email}
        />

        {errors.emailEmpty && <div className="email-empty"><span className="error-msg" style={{ color: 'red' }}>{errors.emailEmpty}</span><br /></div>}
        {errors.notEmail && <span className="error-msg" style={{ color: 'red' }}>{errors.notEmail}</span>}

        <TextField
          label="Password"
          name="password"
          type="text"
          placeholder="Create a password"
          onChange={this.handleChange}
          value={this.state.password}
        />

        {errors.passwordEmpty && <span className="error-msg" style={{ color: 'red' }}>{errors.passwordEmpty}</span>}

        <TextField
          label="Password Confirmation"
          name="passwordConfirmation"
          type="text"
          placeholder="Confirm your password"
          onChange={this.handleChange}
          value={this.state.passwordConfirmation}
        />

        {errors.passwordMatch && <div className="pw-match"><span className="error-msg" style={{ color: 'red' }}>{errors.passwordMatch}</span><br /></div>}

        <button type="submit">Submit</button>

      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
};

export default SignupForm;
