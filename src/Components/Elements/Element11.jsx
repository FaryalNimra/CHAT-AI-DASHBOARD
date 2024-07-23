// src/Components/Elements/Element11.jsx

import React from 'react';
import './Element11.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Element11 = () => {
  const rows = [
    { heading: 'Contacts Created', paragraph: '3435 / 5000' },
    { heading: 'Commands Created', paragraph: '0 / 5' },
    { heading: 'Custom Attributes Created', paragraph: '0 / Unlimited' },
    { heading: 'Member', paragraph: '0 / 0' },
    { heading: 'Storage', paragraph: '1 Gb / 3 Gb' },
    { heading: 'Transcript minutes', paragraph: '50 Mins / 120 Mins' }
  ];

  return (
    <div className="element11-container container">
        <h5>Usage</h5>
        <br></br><br></br>
      {rows.map((row, index) => (
        <div className="row align-items-center mb-4" key={index}>
          <div className="col-6">
            <h5 className="element11-heading">{row.heading}</h5>
          </div>
          <div className="col-6">
            <p className="element11-paragraph">{row.paragraph}</p>
          </div>
          <div className="col-12">
            <div className="element11-line"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Element11;
