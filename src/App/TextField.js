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

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextField;
