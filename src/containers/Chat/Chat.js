import React, { Component } from 'react';
import io from 'socket.io-client';

class Chat extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    this.socket = io('http://localhost:3001');
    this.socket.on('message', (message) => {
      this.setState({ messages: [message, ...this.state.messages]});
    });
  }

  handleSubmit = (event) => {
    const body = event.target.value;

    if (event.keyCode === 13 && body) {
      const message = {
          body,
          from: 'Me'
      }

      this.setState({ messages: [message, ...this.state.messages] });

      this.socket.emit('message', body)
      event.target.value = ''
    }
  }

  render() {
    const messages = this.state.messages.map((message, index) => {
      return <li key={index}><b>{message.from}: </b>{message.body}</li>
    })
    return (
      <div>
        <h1>Chat Page</h1>
        <input type="text" name="chat" placeholder="Enter a message..." onKeyUp={this.handleSubmit} />
        {messages}
      </div>
    );
  }
}

export default Chat;
