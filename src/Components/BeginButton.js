import React, { useState } from 'react';
import './Component.css';

const BeginButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    position: 'absolute',
    top: '550px',
    width: '250px',
    height: '70px',
    backgroundColor: isHovered ? 'white' : 'transparent',
    border: `3px solid white`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s, border-color 0.3s',
    zIndex: 1
  };

  const labelStyle = {
    fontWeight: '300',
    fontSize: '45px',
    color: isHovered ? '#242424' : 'white',
    transition: 'color 0.3s',
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className='begin' style={labelStyle}>BEGIN</span>
    </button>
  );
};

export default BeginButton;