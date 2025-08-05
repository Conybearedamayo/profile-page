import React from 'react';

const Button = ({ text, link }) => {
  const redirectToLink = () => {
    window.open(link, '_blank');
  };

  return (
    <button className="profile-button" onClick={redirectToLink}>
      {text}
    </button>
  );
};

export default Button;