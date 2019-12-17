import React from 'react';
import './Modal.css';

export const Modal = (props) => {
  return (
    <div>
      <div className="modal-wrapper"
        style={{
          transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        <div className="modal-header">
          <h1>Menu Item Title Here</h1>
        </div>
        <div className="modal-body">
          <p>
            {props.children}
          </p>
        </div>
        <div className="modal-footer">
          <button className="btn" onClick={props.close}>Continue</button>
          <button className="btn" onClick={props.close}>Remove Item</button>
        </div>
      </div>
    </div>
  )
};