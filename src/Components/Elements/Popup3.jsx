import React, { useState } from 'react';
import './Popup3.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Popup3 = ({ show, onClose }) => {
  const [attributeName, setAttributeName] = useState('');
  const [attributeDescription, setAttributeDescription] = useState('');
  const [fieldType, setFieldType] = useState('');

  if (!show) {
    return null;
  }

  const handleAttributeNameChange = (e) => {
    setAttributeName(e.target.value);
  };

  const handleAttributeDescriptionChange = (e) => {
    setAttributeDescription(e.target.value);
  };

  const handleFieldTypeChange = (e) => {
    setFieldType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Attribute Name:', attributeName);
    console.log('Attribute Description:', attributeDescription);
    console.log('Field Type:', fieldType);
    onClose();
  };

  return (
    <div className="popup3-container">
      <div className="popup3-content">
        <button className="popup3-close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="popup3-heading">Create Attribute</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="attributeName">Attribute Name</label>
            <input
              type="text"
              className="form-control"
              id="attributeName"
              value={attributeName}
              onChange={handleAttributeNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="attributeDescription">Attribute Description</label>
            <input
              type="text"
              className="form-control"
              id="attributeDescription"
              value={attributeDescription}
              onChange={handleAttributeDescriptionChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fieldType">Field Type</label>
            <select
              className="form-control"
              id="fieldType"
              value={fieldType}
              onChange={handleFieldTypeChange}
              required
            >
              <option value="">Select Field Type</option>
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="date">Date</option>
              <option value="boolean">Boolean</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup3;
