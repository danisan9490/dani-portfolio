import React from 'react';
import './TeckStack.css';
import nodeImg from './techImg/node.png';
import javaScript from './techImg/javaScript.png';
import gitHub from './techImg/gitHub.png';
import python from './techImg/python.png';
import reactImg from './techImg/reactImg.png';
import angular from './techImg/angular.png';
import mongoDB from './techImg/mongoDB.png';
import mySQL from './techImg/mySQL.png';
import postgreSQL from './techImg/postgreSQL.png';
import redux from './techImg/redux.png';
import postman from './techImg/postman.png';
import bootstrap from './techImg/bootstrap.png';
import html from './techImg/html.png';
import css from './techImg/css.png';

function TeckStack() {


  return (
    <div className="techStak" id="skills">
      <div className="techTitle">
        <h1>Skills</h1>
      </div>

      <div className="techContainer">
        <div className="topTech">
          <img className="imgTop js" src={javaScript} alt="JavaScript" />
          <img className="imgTop" src={gitHub} alt="GitHub" />
          <img className="imgTop" src={python} alt="Python" />

        </div>
        <div className="buttomTech">

          <div className="frontEndContainer">
            <div className="rraContainer">
              <img className="frontEnd" src={reactImg} alt="React" />
              <img className="frontEnd" src={redux} alt="Redux" />
              <img className="frontEnd" src={angular} alt="Angular" />
            </div>
            <div className="hcsContainer">
              <img className="frontEnd" src={html} alt="Html" />
              <img className="frontEnd css" src={css} alt="Css" />
              <img className="frontEnd bootstrap" src={bootstrap} alt="Bootstrap" />
            </div>
          </div>

          <div className="backEndContainer">
            <div className="npContainer">
              <img className="backEnd" src={nodeImg} alt="NodeJs" />
              <img className="backEnd" src={postman} alt="Postman" />
            </div>
            <div className="mmpContainer">
              <img className="backEnd" src={mongoDB} alt="mongoDB" />
              <img className="backEnd" src={mySQL} alt="mySQL" />
              <img className="backEnd" src={postgreSQL} alt="postgreSQL" />
            </div>
          </div>

        </div>

      </div>


    </div >
  );
}

export default TeckStack;
