import React from 'react';
import ProfilePicture from './ProfilePicture';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Button from './Button';

const Profile = () => {
  return (
    <main className="profile-container">
      <ProfilePicture />
      <AboutMe />
      <Skills />
      <div className="button-group">
        <Button text="Visit my Facebook" link="https://www.facebook.com/conybeare.damayo.1/" />
        <Button text="Instagram" link="https://www.instagram.com/conybearedamayo/" />
        <Button text="Github" link="https://github.com/Conybearedamayo" />
      </div>
    </main>
  );
};

export default Profile;