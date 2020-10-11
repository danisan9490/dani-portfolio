import React from 'react';
import './Decoration.css';
import Logo from './Logo1/Logo';

function Decoration() {
  return (
    <div className="decoration">
      <i class="fas fa-briefcase"></i>
      <i class="fas fa-laptop-code"></i>
      <i class="fa fa-desktop"></i>
      <Logo
        className="logo"
      />
      <i class="fas fa-mouse"></i>
      <i class="fa fa-coffee"></i>
      <i class="far fa-calendar-alt"></i>
    </div>

  );
}

export default Decoration;
