import React from 'react';
import profileImage from '../assets/cons.jpg';

const ProfilePicture = () => {
  return (
    <div className="profile-picture">
      <img src={profileImage} alt="Profile" />
    </div>
  );
};

export default ProfilePicture;