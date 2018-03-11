import React, { Component } from 'react';
import './LoginForm.css';

import TextField from '../App/TextField';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>

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

        <button type="submit">Submit</button>

      </form>
    );
  }
}

export default LoginForm;
