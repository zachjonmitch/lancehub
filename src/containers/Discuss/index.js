import React, { Component } from 'react';

class Discuss extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Add a New Post</h1>
        <form>
          <input type="text" placeholder="don't be shy" />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Discuss;
