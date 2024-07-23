// src/Components/Elements/Popup2.jsx

import React from 'react';
import './Popup2.scss';

const Popup2 = ({ onClose }) => {
  return (
    <div className="popup2-overlay">
      <div className="popup2-content">
        <button className="popup2-close-button" onClick={onClose}>
          <img src="/Assests/radix-icons_cross-2.png" alt="Close" className="popup2-close-icon" />
        </button>
        <h5 className="popup2-heading">Unlock the Full Power of NAIAD!</h5>
        <p className="popup2-text">Upgrade to Premium now for exclusive features, advanced tools, and premium support to supercharge your NAIAD experience! Maximize your potential today!.</p>
        <button className="popup2-button">
          <img src="/Assests/material-symbols_workspace-premium-outline-rounded.png" alt="Button Icon" className="popup2-button-icon" />
          Upgrade plan
        </button>
      </div>
    </div>
  );
};

export default Popup2;
