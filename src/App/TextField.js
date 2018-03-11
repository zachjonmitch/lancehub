import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextField extends Component {
  render() {
    return (
      <div className="form-group">
        <label className="control-label">{this.props.label}</label>
        <input
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
          className="form-control"
        />
      </div>
    );
  }
}

/*TextField.propTypes = {
  name: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  classNames: React.PropTypes.string.isRequired
};*/

export default TextField;
