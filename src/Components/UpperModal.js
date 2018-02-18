import React from 'react';
import ReactDOM from 'react-dom';
import Circle from './Circle';
import UpperModalText from './UpperModalText';
import './UpperModal.css';
class UpperModal extends React.Component {
  render() {
    return (
      <div className="upperModal">
      <Circle/>
      <UpperModalText/>
      </div>
    );
  }
}

export default UpperModal;
