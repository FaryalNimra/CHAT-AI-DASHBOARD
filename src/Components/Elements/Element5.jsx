import React from 'react';
import './Element5.scss';

const Element5 = () => {
  const messages = [
    {
      icon: '/Assests/Avatar.png',
      title: 'Halloween Advice Needed',
      text: "Of course! I'd be happy to help you with",
      date: 'Jan, 16th 2024',
      time: '09:00 AM'
    },
    {
      icon: '/Assests/Avatar.png',
      title: 'Travel Plan',
      text: "Of course! I'd be happy to help you with",
      date: 'Jan, 16th 2024',
      time: '09:00 AM'
    },
    {
      icon: '/Assests/Avatar.png',
      title: 'Cooking Recipes Idea',
      text: "Of course! I'd be happy to help you with",
      date: 'Jan, 16th 2024',
      time: '09:00 AM'
    },
    {
      icon: '/Assests/Avatar.png',
      title: 'Design Moodboard',
      text: "Of course! I'd be happy to help you with",
      date: 'Jan, 16th 2024',
      time: '09:00 AM'
    },
    {
      icon: '/Assests/Avatar.png',
      title: 'Sleep Management Tips',
      text: "Of course! I'd be happy to help you with",
      date: 'Jan, 16th 2024',
      time: '09:00 AM'
    },
    {
      icon: '/Assests/Avatar.png',
      title: 'Travel Plan',
      text: "Of course! I'd be happy to help you with",
      date: 'Jan, 16th 2024',
      time: '09:00 AM'
    },
    {
      icon: '/Assests/Avatar.png',
      title: 'PHP HTTP Request: cURL',
      text: "Of course! I'd be happy to help you with",
      date: 'Jan, 16th 2024',
      time: '09:00 AM'
    },
    {
      icon: '/Assests/Avatar.png',
      title: 'Retro Arcade Game Concepts',
      text: "Of course! I'd be happy to help you with",
      date: 'Jan, 16th 2024',
      time: '09:00 AM'
    },
    {
        icon: '/Assests/Avatar.png',
        title: 'Retro Arcade Game Concepts',
        text: "Of course! I'd be happy to help you with",
        date: 'Jan, 16th 2024',
        time: '09:00 AM'
      },
  ];

  return (
    <div className="element5-container">
      <div className="element5-header">
        <h2>Chats</h2>
        <img src="/Assests/add.png" alt="Add Icon" className="element5-add-icon" />
      </div>
      <div className="element5-search-bar">
      
        <input type="text" placeholder="Search..." />
        <img src="/Assests/search-outline.png" alt="Search Icon" className="element5-search-bar-icon" />
      </div>
      <div className="element5-messages">
        {messages.map((message, index) => (
          <div key={index} className="element5-message-row">
            <img src={message.icon} alt="Message Icon" className="element5-message-icon" />
            <div className="element5-message-content">
              <p className="element5-message-title">{message.title}</p>
              <p className="element5-message-text">{message.text}</p>
              <div className="element5-message-footer">
                <span>{message.date}</span>
                <span>{message.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Element5;
