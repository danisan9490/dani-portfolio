import React from 'react';
import './Decoration.css';
import Logo from './Logo1/Logo';

function Decoration() {
  return (
    <div className="decoration">
      <i className="fas fa-briefcase"></i>
      <i className="fas fa-laptop-code"></i>
      <i className="fa fa-desktop"></i>
      <Logo
        className="logo"
      />
      <i className="fas fa-mouse"></i>
      <i className="fa fa-coffee"></i>
      <i className="far fa-calendar-alt"></i>
    </div>

  );
}

export default Decoration;
