import React from 'react';
import ReactDOM from 'react-dom';
import './Button.css';

class Button extends React.Component {
  render() {
    return (
      <button type="button" value={this.props.value} className={this.props.color}></button>
    );
  }
}

export default Button;
