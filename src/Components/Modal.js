import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import UpperModal from './UpperModal';
import LowerModal from './LowerModal';
class Modal extends React.Component {
  render() {
    return (
      <div className="modal-container">
      <UpperModal/>
      <LowerModal/>
      </div>
    );
  }
}

export default Modal;
