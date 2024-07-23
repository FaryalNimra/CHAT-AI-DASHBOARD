// src/Components/Elements/Element4.jsx

import React, { useState } from 'react';
import Popup1 from './Popup1'; // Import the Popup component
import './Element4.scss';

const Element4 = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="element4-row-content">
      <div className="element4-heading-container">
        <h2 className="element4-heading2">Messages</h2>
      </div>
      <div className="element4-right-container">
        <button className="element4-button" onClick={handleButtonClick}>
          <img src="/Assests/Vector (3).png" alt="Button Icon" className="element4-button-icon" /> Assign chat to agent
        </button>
        <img src="/Assests/search-outline.png" alt="Search Icon" className="element4-search-icon" style={{ paddingLeft: 5 }} />
        <img src="/Assests/more.png" alt="More Icon" className="element4-more-icon" />
      </div>
      {showPopup && <Popup1 onClose={handleClosePopup} />}
    </div>
  );
};

export default Element4;
