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


          <div className="containerAM">
            <div className="cardAM">
              <i className="iconAboutMe far fa-file-code"></i>
              <div className="contentAM">
                <p className="pAM">
                  I've been coding just for fun since 2018. <br /> During this time I've completed around 50 projects.
                  </p>
              </div>
            </div>
          </div>



          <div className="containerAM">
            <div className="cardAM">
              <i className="iconAboutMe fas fa-school"></i>

              <div className="contentAM">
                {/* <i className="fas fa-info"></i> */}
                <p className="pAM">
                  I studied coding at Codeworks, the leading JavaScript Bootcamp in Europe.
                </p>
              </div>
            </div>
          </div>



          <div className="containerAM">
            <div className="cardAM">
              <i className="iconAboutMe fas fa-user-graduate"></i>
              <div className="contentAM">
                <p className="pAM">
                  I graduated in BSc Advertisement and Public Relations with a focus in sales and corporative communication.
                </p>
              </div>
            </div>
          </div>



          <div className="containerAM">
            <div className="cardAM">
              <i className="iconAboutMe fas fa-language"></i>

              <div className="contentAM">
                <p className="pAM">
                  I speak two languages, Spanish (native), and English (professional working proficiency).
                </p>
              </div>
            </div>
          </div>



          <div className="containerAM">
            <div className="cardAM">
              <i className="iconAboutMe fas fa-bicycle"></i>
              <div className="contentAM">
                <p className="pAM">
                  I do sports 4 times a week. <br /> The days that I'm not training, I like to have a nice walk and discover new places.
                </p>
              </div>
            </div>
          </div>



          <div className="containerAM">
            <div className="cardAM">
              <i className="iconAboutMe far fa-clock"></i>
              <div className="contentAM">
                <p className="pAM">
                  Every day I wake up at 5:00 a.m. to have breakfast, meditate, read and start the day.
                </p>
              </div>
            </div>
          </div>



        </div >
      </div >

    </div >
  );
}

export default AboutMe;
