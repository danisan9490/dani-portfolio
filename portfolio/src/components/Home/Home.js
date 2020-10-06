import React from 'react';
import './Home.css';
import Logo from './Logo/Logo';
import Particles from 'react-particles-js';

const particulesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}


function Home() {
  return (
    <div className="Home">
      <Logo />
      <Particles
        className="particles"
        params={particulesOptions}
      />

    </div>
  );
}

export default Home;
