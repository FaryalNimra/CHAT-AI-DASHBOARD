import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="/Assests/IMG-20240508-WA0003-removebg-preview 2.png" alt="Logo" className="sidebar-logo" />
        <img src="/Assests/icon.png" alt="Power Off" className="sidebar-icon" />
      </div>
      <nav className="sidebar-menu">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link" style={{color:"#B9B9B9"}}>
              <span>Main Menu</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <img src="/Assests/solar_graph-linear.png" alt="Monitor" className="sidebar-item-icon" />
              <span>Monitor</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Training" className="nav-link">
              <img src="/Assests/bookmark.png" alt="User" className="sidebar-item-icon" />
              <span>Training Data</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Knbox" className="nav-link">
              <img src="/Assests/Vector.png" alt="Settings" className="sidebar-item-icon" />
              <span>Inbox</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Customer" className="nav-link">
              <img src="/Assests/icon (2).png" alt="Notifications" className="sidebar-item-icon" />
              <span>Customers</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Integration" className="nav-link">
              <img src="/Assests/icon (3).png" alt="Messages" className="sidebar-item-icon" />
              <span>Integrations</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/customization" className="nav-link">
              <img src="/Assests/icon (4).png" alt="Customization" className="sidebar-item-icon" />
              <span>Assistant Customization</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/help-center" className="nav-link">
              <img src="/Assests/icon (5).png" alt="Help Center" className="sidebar-item-icon" />
              <span>Help Center</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Setting" className="nav-link">
              <img src="/Assests/icon (6).png" alt="Settings" className="sidebar-item-icon" />
              <span>Settings</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/assistant" className="nav-link" style={{color:"#B9B9B9"}}>
              <span>Assistant</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/behavior" className="nav-link">
            <img src="/Assests/icon (7).png" alt="behavior" className="sidebar-item-icon" />
              <span>Assistant Behaviour</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/assistant-settings" className="nav-link">
            <img src="/Assests/icon (8).png" alt="Settings" className="sidebar-item-icon" />
              <span>Assistant Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sidebar-profile">
        <img src="/Assests/profile picture.png" alt="Profile" className="profile-icon" />
        <span className="profile-name">Sarah</span>
      </div>
    </div>
  );
};

export default Header;
