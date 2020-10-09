import React from 'react';
import './Home.css';
import Logo from './Logo/Logo';
// import Typer from './Type'




function Home() {
  return (
    <div className="Home">
      <div className="home-items">
        <div className="header">
          <p>Javascript and Python Full Stack Web Developer</p>
        </div>
        <div className="content">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Laudantium repellendus ut itaque </p>
          {/* <Typer
            heading={"I am focused in "}
            messages={["JavaScript ES5/6", "Git", "React", "React Native", "Redux"]}
          /> */}
        </div>
      </div>
      <div className="logo">
        <Logo />
      </div>



    </div>
  );
}

export default Home;
