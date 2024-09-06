import React from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  // Example user data (you can fetch this data from an API or a global state)
  const user = {
    profileImage: 'https://via.placeholder.com/150', // Placeholder image
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    idNumber: '123456789',
    trustScore: 85
  };
  const navigate = useNavigate();
  const handleLogout = () => {navigate('/')};
  const homeclick = () => {navigate('/homepage')}

  return (
    <div className='profile-body'>
    <div className="profile-container">
      <div className="profile-image">
        <img src={user.profileImage} alt="Profile" />
      </div>
      <div className="profile-details">
        <h2>{user.firstName} {user.lastName}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>ID Number:</strong> {user.idNumber}</p>
        <p><strong>Trust Score:</strong> {user.trustScore}</p>
        <button onClick={handleLogout} className="logout-button">Logout</button>
        <button onClick={homeclick} className="home-button">home</button>
      </div>
    </div>
    </div>
  );
};

export default Profile;
