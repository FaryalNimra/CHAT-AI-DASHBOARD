import React from 'react';
import Element5 from '../Components/Elements/Element5'; 
import Element3 from '../Components/Elements/Element3'; 
import Element4 from '../Components/Elements/Element4'; 
import './Knbox.scss';  // Import the SCSS file for styling

const Knbox = () => {
  return (
    <div className="knbox-container">
      <div className="sidebar-container">
        <Element5 />
      </div>
      <div className="content-container">
        <Element4 />
        <Element3 />
      </div>
    </div>
  );
};

export default Knbox;
