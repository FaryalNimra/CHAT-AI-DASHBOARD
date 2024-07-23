import React, { useState } from 'react';
import './Element8.scss';
import Element9 from './Element9';

const Element8 = () => {
  const [showElement9, setShowElement9] = useState(false);

  const handleButtonClick = () => {
    setShowElement9(true);
  };

  const tableData = [
    { no: '1', fileName: 'Name', size: 'abc@mail.com', Date: '+1 234 456 7899', storage: 'Active', lastseen: '3 hr ago', Action: 'Options' },
    { no: '2', fileName: 'Name', size: 'abc@mail.com', Date: '+1 234 456 7899', storage: 'Active', lastseen: '3 hr ago', Action: 'Options' },
    { no: '3', fileName: 'Name', size: 'abc@mail.com', Date: '+1 234 456 7899', storage: 'InActive', lastseen: '3 hr ago', Action: 'Options' },
    { no: '4', fileName: 'Name', size: 'abc@mail.com', Date: '+1 234 456 7899', storage: 'Active', lastseen: '3 hr ago', Action: 'Options' },
    { no: '5', fileName: 'Name', size: 'abc@mail.com', Date: '+1 234 456 7899', storage: 'InActive', lastseen: '3 hr ago', Action: 'Options' },
    { no: '6', fileName: 'Name', size: 'abc@mail.com', Date: '+1 234 456 7899', storage: 'Active', lastseen: '3 hr ago', Action: 'Options' },
    { no: '7', fileName: 'Name', size: 'abc@mail.com', Date: '+1 234 456 7899', storage: 'Active', lastseen: '3 hr ago', Action: 'Options' },
    { no: '8', fileName: 'Name', size: 'abc@mail.com', Date: '+1 234 456 7899', storage: 'Active', lastseen: '3 hr ago', Action: 'Options' },
    { no: '9', fileName: 'Name', size: 'abc@mail.com', Date: '+1 234 456 7899', storage: 'InActive', lastseen: '3 hr ago', Action: 'Options' },
    { no: '10', fileName: 'Name', size: 'abc@mail.com', Date: '+1 234 456 7899', storage: 'Active', lastseen: '3 hr ago', Action: 'Options' },
    { no: '11', fileName: 'Name', size: 'abc@mail.com', Date: '+1 234 456 7899', storage: 'InActive', lastseen: '3 hr ago', Action: 'Options' },
    { no: '12', fileName: 'Name', size: 'abc@mail.com', Date: '+1 234 456 7899', storage: 'Active', lastseen: '3 hr ago', Action: 'Options' },
    { no: '13', fileName: 'Name', size: 'abc@mail.com', Date: '+1 234 456 7899', storage: 'InActive', lastseen: '3 hr ago', Action: 'Options' },
    { no: '14', fileName: 'Name', size: 'abc@mail.com', Date: '+1 234 456 7899', storage: 'InActive', lastseen: '3 hr ago', Action: 'Options' },
    { no: '15', fileName: 'Name', size: 'abc@mail.com', Date: '+1 234 456 7899', storage: 'InActive', lastseen: '3 hr ago', Action: 'Options' },
  ];

  if (showElement9) {
    return <Element9 />;
  }

  return (
    <div className="element8-container">
      <div className="element8-row">
        <h2 className="element8-heading">Customers</h2>
        <h2 className="element8-heading1">12 / 54500</h2>
        <div className="element8-search-container">
          <input type="text" placeholder="Search" className="element8-search-input" />
          <img src="/Assests/search-outline.png" alt="Search Icon" className="element8-search-icon" />
          <img src="/Assests/more.png" alt="More Icon" className="element8-more-icon" />
        </div>
      </div>
      <div className="element8-row-content">
        <img src="/Assests/solar_file-outline.png" alt="Type Image" className="element8-left-image" />
        <h2 className="element8-heading2">Export </h2>
        <img src="/Assests/Vector new.png" alt="Type Image" className="element8-left-image" style={{ paddingLeft: 20 }} />
        <div className="element8-spacer"></div>
        <img src="/Assests/icon (9).png" alt="Button Image" className="element8-right-image" />
        <button className="element8-button" onClick={handleButtonClick}>
          <img src="/Assests/Vector (3).png" alt="Button Icon" className="element8-button-icon" />Customer Data
        </button>
        <img src="/Assests/Frame 1160445118.png" alt="Button Image" className="element8-right-image" />
        <img src="/Assests/Frame 1160445119.png" alt="Button Image" className="element8-right-image" />
      </div>

      <table className="element8-table">
        <thead>
          <tr>
            <th style={{ color: "#3F4254" }}>#</th>
            <th style={{ color: "#3F4254" }}>Name</th>
            <th style={{ color: "#3F4254" }}>Email</th>
            <th style={{ color: "#3F4254" }}>Phone number</th>
            <th style={{ color: "#3F4254" }}>Status</th>
            <th style={{ color: "#3F4254" }}>Last seen</th>
            <th style={{ color: "#3F4254" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className={index === 8 ? 'highlight' : ''}>
              <td><img src="/Assests/CTA BTN.png" alt="Row Icon" className="row-icon" /> <span className="row-number" style={{ paddingLeft:5 }}>{row.no}</span></td>
              <td>{row.fileName}</td>
              <td>{row.size}</td>
              <td>{row.Date}</td>
              <td className={row.storage === 'Active' ? 'status-active' : 'status-inactive'}>{row.storage}</td>
              <td>{row.lastseen}</td>
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
        <img src="/Assests/Frame 1000003268.png" alt="Rows Icon" className="rows-icon" />
      </div>
    </div>
  );
};

export default Element8;
