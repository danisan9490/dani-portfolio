import React from 'react';
import './Home.css';
import Typer from './Type';


function Home() {
  return (
    <div className="Home" id="home">
      <div className="home-items">
        <div className="header">
          <h1>Javascript and Python Full Stack Web Developer</h1>
        </div>
        <div className="content">
          <Typer
            heading={"I am focused in "}
            messages={["JavaScript ES5/6", "Git", "React", "React Native", "Redux"]}
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
