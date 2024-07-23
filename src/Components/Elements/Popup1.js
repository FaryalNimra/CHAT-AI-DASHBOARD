// src/Components/Elements/Popup1.jsx

import React from 'react';
import './Popup1.scss';

const Popup1 = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className="popup-heading">Assign the chat</h2>
        <p className="popup-text">Agent</p>
        <select className="popup-dropdown">
          <option value="">Select an agent</option>
          
        </select>
        <button className="popup-close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup1;
