// src/Components/Elements/Element12.jsx

import React from 'react';
import './Element12.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Element12 = () => {
  const rows = [
    {
      heading: 'AI assistant status',
      paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      iconSrc: '/Assests/switch.png' // replace with your icon path
    },
    {
      heading: 'AI assistant status',
      paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      iconSrc: '/Assests/switch.png' // replace with your icon path
    },
    {
      heading: 'AI assistant status',
      paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      iconSrc: '/Assests/switch.png' // replace with your icon path
    }
  ];

  return (
    <div className="element12-container container">
      <h5 className="element12-main-heading">AI assistant status</h5><br></br>
      <div className="element12-spacer"></div>
      {rows.map((row, index) => (
        <div className="element12-row row align-items-center mb-4" key={index}>
          <div className="col-9">
            <h5 className="element12-heading">{row.heading}</h5>
            <p className="element12-paragraph">{row.paragraph}</p>
          </div>
          <div className="col-3">
            <img src={row.iconSrc} alt="Icon" className="element12-icon" />
          </div>
        </div>
      ))}
      <div className="element12-spacer"></div>
      <h5 className="element12-heading">Delete Assistant</h5>
      <div className="element12-spacer"></div>
      <p className="element12-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      <div className="element12-spacer"></div>
      <button className="element12-button">Delete</button>
    </div>
  );
};

export default Element12;
