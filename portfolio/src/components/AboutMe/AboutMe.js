import React from 'react';
import './AboutMe.css';

function AboutMe() {



  return (
    <div className="containerAboutMe" id="aboutMe">
      <div className="aboutMe">
        <div className="headerAboutMe">
          <h1>
            About Me
          </h1>
        </div>
        <div className="contentAboutMe">
          <div className="cardAboutMe">
            <div className="mainCard">
              <figure className="frontCardAboutMe">
                <h1><i className="iconAboutMe fas fa-bicycle"></i></h1>
              </figure>
              <figure className="backCardAboutMe">
                <p className="pAboutMe" >
                  I do sports around 4 times a week. <br /> The days that I am not training I like to have a nice walk.
              </p>
              </figure>
            </div>
          </div>

          <div className="cardAboutMe">
            <div className="mainCard">
              <figure className="frontCardAboutMe">
                <h1>
                  <i className="iconAboutMe far fa-clock"></i>
                </h1>
              </figure>
              <figure className="backCardAboutMe">
                <p className="pAboutMe" >
                  I wake up every day at 5:00 a.m to take breakfast, meditate, read and start the day.
              </p>
              </figure>
            </div>
          </div>

          <div className="cardAboutMe">
            <div className="mainCard">
              <figure className="frontCardAboutMe">
                <h1>
                  <i className="iconAboutMe far fa-file-code"></i>
                </h1>
              </figure>
              <figure className="backCardAboutMe">
                <p className="pAboutMe" >
                  I have been coding just for fan since 2018. <br /> During this time I have done around 50 projects.
              </p>
              </figure>
            </div>
          </div>

          <div className="cardAboutMe">
            <div className="mainCard">
              <figure className="frontCardAboutMe">
                <h1>
                  <i className="iconAboutMe fas fa-chart-line"></i>
                </h1>
              </figure>
              <figure className="backCardAboutMe">
                <p className="pAboutMe" >
                  In my free time I do trading. <br /> That's how I developed the interest for the cryptocurrencies and created CodeCoin.
                </p>
              </figure>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutMe;
