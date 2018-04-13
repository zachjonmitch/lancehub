import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SignupForm.css';

import TextField from '../App/TextField';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.userSignupRequest(this.state);
  }

  render() {
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

        <TextField
          label="Email"
          name="email"
          type="text"
          placeholder="you@example.com"
          onChange={this.handleChange}
          value={this.state.email}
        />

        <TextField
          label="Password"
          name="password"
          type="text"
          placeholder="Create a password"
          onChange={this.handleChange}
          value={this.state.password}
        />

        <TextField
          label="Password Confirmation"
          name="passwordConfirmation"
          type="text"
          placeholder="Confirm your password"
          onChange={this.handleChange}
          value={this.state.passwordConfirmation}
        />

        <button type="submit">Submit</button>

      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
};

export default SignupForm;
