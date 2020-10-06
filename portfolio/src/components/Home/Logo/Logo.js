import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt';
import logoImg from './logoImg.png';


function Logo() {
  return (
    <div className="logo">
      <Tilt className="Tilt" options={{ max: 45 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner">
          <img src={logoImg} alt="Logo" />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
