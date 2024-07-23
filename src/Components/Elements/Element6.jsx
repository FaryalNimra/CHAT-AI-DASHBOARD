// src/Components/Elements/Element6.jsx

import React, { useState } from 'react';
import './Element6.scss';
import Popup2 from './Popup2';  // Import the Popup2 component

const Element6 = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const elements = [
    { imgSrc: '/Assests/image 2.png', heading: 'WhatsApp', iconSrc: '/Assests/icon (10).png' },
    { imgSrc: '/Assests/image 3.png', heading: 'Zapier', iconSrc: '/Assests/icon (10).png'  },
    { imgSrc: '/Assests/image 4.png', heading: 'Web', iconSrc: '/Assests/icon (10).png'  },
    { imgSrc: '/Assests/image 5.png', heading: 'Telegram', iconSrc: '/Assests/icon (10).png'  },
    { imgSrc: '/Assests/image 6.png', heading: 'Teams', iconSrc: '/Assests/icon (10).png'  },
    { imgSrc: '/Assests/image 6 (1).png', heading: 'Slack', iconSrc: '/Assests/icon (10).png'  },
    { imgSrc: '/Assests/image 6 (2).png', heading: 'Discord', iconSrc: '/Assests/icon (10).png'  },
    { imgSrc:  '/Assests/image 6 (3).png', heading: 'API', iconSrc: '/Assests/icon (10).png'  },
  ];

  return (
    <>
      <div className="element6-container">
        {elements.map((el, index) => (
          <div className="element6-item" key={index}>
            <img src={el.imgSrc} alt={`Element ${index + 1}`} className="element6-image" />
            <h3 className="element6-heading">{el.heading}</h3>
            <img src={el.iconSrc} alt="Icon" className="element6-icon" />
            <button className="element6-button" onClick={handleButtonClick}>Integrate</button>
          </div>
        ))}
      </div>
      
      {showPopup && <Popup2 onClose={handleClosePopup} />}
    </>
  );
};

export default Element6;
