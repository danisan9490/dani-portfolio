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
                  I do sports 4 times a week. <br /> The days that I'm not training, I like to have a nice walk and discover new places.
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
                  Every day I wake up at 5:00 a.m. to have breakfast, meditate, read and start the day.
              </p>
              </figure>
            </div>
          </div>

          <div className="cardAboutMe">
            <div className="mainCard">
              <figure className="frontCardAboutMe">
                <h1>
                  <i className="iconAboutMe fas fa-user-graduate"></i>
                </h1>
              </figure>
              <figure className="backCardAboutMe">
                <p className="pAboutMe" >
                  I graduated in BSc Advertisement and Public Relations with a focus in sales and corporative communication.
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
                  I've been coding just for fun since 2018. <br /> During this time I've completed around 50 projects.
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
