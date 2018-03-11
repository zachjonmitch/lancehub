import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Chat.css';

import ChatForm from './ChatForm';

class Chat extends Component {
  render() {
    const messages = this.props.messages.map((message, index) => {
      return (
        <div key={index} className="user">
          <div className="avatar" />
          <div className="content">
            <h4>{message.from}</h4>
            <p>{message.body}</p>
          </div>
        </div>
      );
    });

    return (
      <section className="chat">
        <div className="messages">
          {messages}
        </div>
        <ChatForm
          socket={this.props.socket}
          addNewMessage={this.props.addNewMessage}
        />
      </section>
    );
  }
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
  })).isRequired,
  addNewMessage: PropTypes.func.isRequired,
};

export default Chat;