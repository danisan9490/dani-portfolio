import React from 'react';
import './Home.css';
import ReactTypingEffect from 'react-typing-effect';
import avatar from './avatar.png';


function Home() {



  return (
    <div className="Home" id="home">
      <div className="home-items">
        <div className="topHome">
          <div className="header">
            <h1>Hello! I'm Daniel,</h1>
          </div>
          <div className="content">
            <h1> Full Stack Developer focused on&nbsp;&nbsp;
            <ReactTypingEffect
                text={["JavaScript", "React", "Angular", "NodeJs", "Mongo DB", "MySQL", "PostgreSQL", "Python"]}
                speed={100}
                eraseSpeed={200}
                eraseDelay={1000}
                typingDelay={200}
              />
            </h1>
          </div>
        </div>
        <div className="imgTypingContainer">
          <img className="avatar" src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default Home;
