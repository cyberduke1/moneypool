import React, { useState } from 'react';
import './Homepage.css';
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const navigate = useNavigate();
  const profileclick = () => {navigate('/profile')}
  const createclick = () => {navigate('/creategroup')}
  const joinclick = () => {navigate('/joingroup')}

  return (
    <div className="homepage-container">
      <header className="header">
        <h1 className="title">My Groups</h1>
        <div className="profile-icon">
          
          <img
            src="https://via.placeholder.com/50" // Placeholder profile image
            alt="Profile"
            className="profile-img"
            onClick={profileclick}
          />
          
        </div>
      </header>

      <div className="plus-button-container">
        <button className="plus-button" onClick={toggleDropdown}>
          +
        </button>
        {showDropdown && (
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={createclick}>Create Group</button>
            <button className="dropdown-item" onClick={joinclick}>Join Group</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

