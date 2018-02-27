import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import './Dashboard.css';

import { addNewMessage, loadPastMessages } from '../../actions/messageActions';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Connect to Express server
    this.socket = io('http://localhost:3001');

    // Query Mongodb for past messages on load
    this.socket.emit('load messages');

    // Broadcast message to all OTHER client Redux stores
    this.socket.on('message', (message) => {
      this.props.addNewMessage(message);
    });

    // Add past messages to Redux store
    this.socket.on('load messages', (docs) => {
      this.props.loadPastMessages(docs);
    });
  }

  handleSubmit(event) {
    const body = event.target.value;

    if (event.keyCode === 13 && body) {
      const message = {
        from: this.socket.id.slice(8),
        body,
      };
      // Add message to CURRENT client Redux store
      this.props.addNewMessage(message);

      // Send message to server
      this.socket.emit('message', message);
      event.target.value = '';
    }
  }

  render() {
    const messages = this.props.messages.map((message, index) => {
      return <li key={index}><b>{message.from}: </b>{message.body}</li>;
    });

    return (
      <div className="dashboard">

        <section className="sidebar">
          <div className="brand">LanceHub</div>
          <h4>all channels</h4>
          <ul className="channels">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </section>

        <nav className="navbar">
          <div className="mobile-menu"><i className="fa fa-bars" /></div>
          <h4># all-channels</h4>
          <div className="profile">Profile</div>
        </nav>

        <section className="chat">
          <div className="user">
            <div className="avatar">Image</div>
            <h4>zjmitche</h4>
            <p>Testing chat user</p>
          </div>
          {messages}
        </section>

        <input
          className="chat-form"
          name="message"
          placeholder="Say something nice..."
          onKeyUp={this.handleSubmit}
        />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addNewMessage, loadPastMessages }, dispatch);
}

Dashboard.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
  })).isRequired,
  addNewMessage: PropTypes.func.isRequired,
  loadPastMessages: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);
