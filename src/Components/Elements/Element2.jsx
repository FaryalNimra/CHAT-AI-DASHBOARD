import React, { useState } from 'react';
import './Element2.scss';
import Popup from './Popup';

const Element2 = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const tableData = [
    { fileName: 'none set (Set)', size: '2MB', Date: 'Nov 01, 2020', storage: '235MB' },
    { fileName: 'Navitare', size: '2MB', Date: 'Nov 01, 2020', storage: '235MB' },
    { fileName: 'Docs API Key', size: '2MB', Date: 'Nov 01, 2020', storage: '235MB' },
    { fileName: 'Identity Key', size: '2MB', Date: 'Nov 01, 2020', storage: '235MB' },
    { fileName: 'Remote Interface', size: '2MB', Date: 'Nov 01, 2020', storage: '235MB' },
    { fileName: 'none set', size: '2MB', Date: 'Nov 01, 2020', storage: '235MB' },
    { fileName: 'Test App', size: '2MB', Date: 'Nov 01, 2020', storage: '235MB' },
  ];

  return (
    <div className="element2-container">
      <div className="element2-row">
        <h2 className="element2-heading">Data</h2>
        <h2 className="element2-heading1">13GB / 20GB</h2>
        <div className="element2-search-container">
          <input type="text" placeholder="Search" className="element2-search-input" />
          <img src="/Assests/search-outline.png" alt="Search Icon" className="element2-search-icon" />
          <img src="/Assests/more.png" alt="More Icon" className="element2-more-icon" />
        </div>
      </div>
      <div className="element2-row-content">
        <img src="/Assests/solar_file-outline.png" alt="Type Image" className="element2-left-image" />
        <h2 className="element2-heading2">Type </h2>
        <img src="/Assests/Vector (1).png" alt="Type Image" className="element2-left-image" style={{ paddingLeft: 5 }} />
        <div className="element2-spacer"></div>
        <img src="/Assests/icon (9).png" alt="Button Image" className="element2-right-image" />
        <button className="element2-button" onClick={handleButtonClick}>
          <img src="/Assests/Vector (3).png" alt="Button Icon" className="element2-button-icon" /> Add Data
        </button>
        <img src="/Assests/Frame 1160445118.png" alt="Button Image" className="element2-right-image" />
        <img src="/Assests/Frame 1160445119.png" alt="Button Image" className="element2-right-image" />
      </div>

      <table className="element2-table">
        <thead>
          <tr>
            <th style={{ color: "#3F4254" }}>File name</th>
            <th style={{ color: "#3F4254" }}>Size</th>
            <th style={{ color: "#3F4254" }}>Date</th>
            <th style={{ color: "#3F4254" }}>Storage</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className={index === 8 ? 'highlight' : ''}>
              <td>{row.fileName}</td>
              <td>{row.size}</td>
              <td>{row.Date}</td>
              <td>{row.storage}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  );
};

export default Element2;
