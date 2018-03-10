import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import './Dashboard.css';

import Navbar from '../App/Navbar';
import Sidebar from '../App/Sidebar';
import Chat from '../App/Chat';
import ChatForm from '../App/ChatForm';
import { addNewMessage, loadPastMessages } from './actions';

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
      event.preventDefault();
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
    return (
      <div className="dashboard">
        <Navbar />
        <Sidebar />
        <Chat
          socket={this.socket}
          messages={this.props.messages}
          addNewMessage={this.props.addNewMessage}
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
