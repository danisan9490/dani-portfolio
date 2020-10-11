import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt';
import logoImg from './logoImg.png';


function Logo() {
  return (
    <div className="logo">
      <Tilt className="Tilt" options={{ max: 50 }} style={{ height: 90, width: 141 }} >
        <div className="Tilt-inner">
          <img src={logoImg} alt="Logo" />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
