import React from 'react';
import ReactDOM from 'react-dom';
import './LowerModal.css';
class LowerModal extends React.Component {
  render() {
    return (
      <div className="lowerModal">
        <h2 className='lowerModal-text'>Please note that first and last names are required before saving your new client.</h2>
        <div className="buttonGroup">
            <button  className="button-Cancel">Cancel</button>
            <button  className="button-Save" >Save</button>
        </div>
      </div>
    );
  }
}

export default LowerModal;
