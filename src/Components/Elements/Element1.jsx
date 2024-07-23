import React from "react";
import "./Element1.scss";

const Element1 = () => {
  return (
    
    <div className="element1-container">
      <h3 className="element1-heading-bold">Monitor</h3><br></br>
      <h4 className="element1-heading-bold">Performance Overview</h4><br></br>
      
      <div className="element1-row">
        <div className="element1-column">
          <h4 className="element1-column-heading">Training Data</h4>
          <p>3</p>
        </div>
        <div className="element1-column">
          <h4 className="element1-column-heading">Training Data</h4>
          <p>3</p>
        </div>
        <div className="element1-column">
          <h4 className="element1-column-heading">Training Data</h4>
          <p>3</p>
        </div>
        <div className="element1-column">
          <h4 className="element1-column-heading">Training Data</h4>
          <p>3</p>
        </div>
      </div>
      <div className="element1-image-container">
        <img
          src="/Assests/Learn Activity.png"
          alt="Sample"
          className="element1-image"
        />
      </div>
    </div>
  );
};

export default Element1;
