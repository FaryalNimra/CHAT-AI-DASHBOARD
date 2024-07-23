import React from 'react';
import './Popup.scss';

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className="popup-heading">Add Data</h2>
        <button className="popup-close" onClick={onClose}>X</button>
        <div className="popup-body">
          <img src="/Assests/icomoon-free_upload.png" alt="Center Icon" className="popup-center-icon" />
          <p className="popup-paragraph">Drag n Drop resource(s) here<br />Paste link to Grabber</p>
          <div className="popup-spacer"></div>
          <button className="popup-button">
            <img src="/Assests/icomoon-free_upload (1).png" alt="Button Icon" className="popup-button-icon" /> Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
