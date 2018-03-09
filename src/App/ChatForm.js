import React, { Component } from 'react';
import './ChatForm.css';

class ChatForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const message = {
      from: this.props.socket.id.slice(8),
      body: this.state.message,
    };

    // Add message to CURRENT client Redux store
    this.props.addNewMessage(message);

    // Send message to server
    this.props.socket.emit('message', message);
    this.setState({ message: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="chat-form"
          name="message"
          placeholder="Say something nice..."
          onChange={this.handleChange}
          value={this.state.message}
        />
        <button type="button" />
      </form>
    );
  }
}

export default ChatForm;
