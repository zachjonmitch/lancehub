import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import io from 'socket.io-client';

import { addNewDiscussion, loadPastDiscussions } from '../../actions/discussionActions';

class Discuss extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Connect to Express server
    this.socket = io('http://localhost:3001');

    // Query Mongodb for past discussions on load
    this.socket.emit('load discussions');

    // Broadcast discussion to all OTHER client Redux stores
    this.socket.on('discussion', (discussion) => {
      this.props.addNewDiscussion(discussion);
    });

    // Add past discussions to Redux store
    this.socket.on('load discussions', (docs) => {
      this.props.loadPastDiscussions(docs);
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const discussion = {
      name: this.socket.id.slice(8),
      title: this.state.title,
      description: this.state.description,
    };

    // Add discussion to CURRENT client Redux store
    this.props.addNewDiscussion(discussion);

    // Send discussion to server
    this.socket.emit('discussion', discussion);

    this.setState({ title: '' });
    this.setState({ description: '' });
  }

  render() {
    const discussions = this.props.discussions.map((discussion, index) => {
      return <li key={index}>{discussion.name} {discussion.title} {discussion.description}</li>;
    });

    return (
      <div>
        <h1>Add a New Post</h1>
        <form onSubmit={this.handleSubmit} >
          <input
            name="title"
            type="text"
            placeholder="What is your post about?"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <textarea
            name="description"
            type="text"
            placeholder="Describe your post..."
            value={this.state.description}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        {discussions}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    discussions: state.discussions,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addNewDiscussion, loadPastDiscussions }, dispatch);
}

Discuss.propTypes = {
  discussions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  addNewDiscussion: PropTypes.func.isRequired,
  loadPastDiscussions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(Discuss);
