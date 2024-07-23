import React, { useState } from 'react';
import './Element9.scss';
import Popup3 from './Popup3';

const Element9 = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const tableData = [
    {  fileName: 'Name', size: 'Description', Date: 'Type',  Action: 'Options' },
    { fileName: 'Name', size: 'Description', Date: 'Type', Action: 'Options' },
    {  fileName: 'Name', size: 'Description', Date: 'Type',  Action: 'Options' },
    {  fileName: 'Name', size: 'Description', Date: 'Type',  Action: 'Options' },
    {  fileName: 'Name', size: 'Description', Date: 'Type',Action: 'Options' },
    {  fileName: 'Name', size: 'Description', Date: 'Type',  Action: 'Options' },
    {  fileName: 'Name', size: 'Description', Date: 'Type',Action: 'Options' },
    {  fileName: 'Name', size: 'Description', Date: 'Type',  Action: 'Options' },
    {  fileName: 'Name', size: 'Description', Date: 'Type', Action: 'Options' },
    {  fileName: 'Name', size: 'Description', Date: 'Type', Action: 'Options' },
    {  fileName: 'Name', size: 'Description', Date: 'Type',  Action: 'Options' },
    {  fileName: 'Name', size: 'Description', Date: 'Type',  Action: 'Options' },
    {  fileName: 'Name', size: 'Description', Date: 'Type',  Action: 'Options' },
    
    {  fileName: 'Name', size: 'Description', Date: 'Type', Action: 'Options' },
    {  fileName: 'Name', size: 'Description', Date: 'Type',Action: 'Options' },
  ];

  return (
    <div className="element9-container">
      <div className="element9-row">
        <h2 className="element9-heading">Customers</h2>
        <h2 className="element9-heading1">12 / 54500</h2>
        <div className="element9-search-container">
          <input type="text" placeholder="Search" className="element9-search-input" />
          <img src="/Assests/search-outline.png" alt="Search Icon" className="element9-search-icon" />
          <img src="/Assests/more.png" alt="More Icon" className="element9-more-icon" />
        </div>
      </div>
      <div className="element9-row-content">
        <img src="/Assests/solar_file-outline.png" alt="Type Image" className="element9-left-image" />
        <h2 className="element9-heading2">Export </h2>
        <img src="/Assests/Vector new.png" alt="Type Image" className="element9-left-image" style={{ paddingLeft: 20 }} />
        <div className="element9-spacer"></div>
        <img src="/Assests/icon (9).png" alt="Button Image" className="element9-right-image" />
        <button className="element9-button" onClick={handleButtonClick}>
          <img src="/Assests/Vector (3).png" alt="Button Icon" className="element9-button-icon" />Create Attribute
        </button>
        <img src="/Assests/Frame 1160445118.png" alt="Button Image" className="element9-right-image" />
        <img src="/Assests/Frame 1160445119.png" alt="Button Image" className="element9-right-image" />
      </div>

      <table className="element9-table">
        <thead>
          <tr>
            <th style={{ color: "#3F4254" }}>Attribute Name</th>
            <th style={{ color: "#3F4254" }}>Attribute Description</th>
            <th style={{ color: "#3F4254" }}>Field type</th>
            <th style={{ color: "#3F4254" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className={index === 8 ? 'highlight' : ''}>
              <td><img src="/Assests/CTA BTN.png" alt="Row Icon" className="row-icon" /> <span className="row-number" style={{paddingLeft:5}}>{row.fileName}</span></td>
              <td>{row.size}</td>
              <td>{row.Date}</td>
             
              <td>
                {row.Action}
                <img src="/Assests/down.png" alt="Action Icon" className="action-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="rows-per-page">
        Rows per page: 12
        <img src="/Assests/down.png" alt="Rows Icon" className="rows-icon" />
      </div>
      <div className="end">
       1 - 4 of 4
       <img src="/Assests/Frame 1000003267.png" alt="Rows Icon" className="rows-icon" />
       <img src="/Assests/Frame 1000003268.png"  alt="Rows Icon" className="rows-icon" />
      </div>

      {showPopup && <Popup3 onClose={handleClosePopup} />}
    </div>
  );
};

export default Element9;
