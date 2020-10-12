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
          <img className="imgTop " src={gitHub} alt="GitHub" />
          <img className="imgTop " src={python} alt="Python" />

        </div>
        <div className="buttomTech">

          <div className="frontEndContainer">
            <div className="rraContainer">
              <div className="itemImg">
                <img className="frontEnd react" src={reactImg} alt="React" />
              </div>
              <div className="itemImg">
                <img className="frontEnd redux" src={redux} alt="Redux" />

              </div>
              <div className="itemImg">
                <img className="frontEnd angular" src={angular} alt="Angular" />

              </div>

            </div>
            <div className="hcsContainer">
              <div className="itemImg">
                <img className="frontEnd html" src={html} alt="Html" />

              </div>
              <div className="itemImg">
                <img className="frontEnd css" src={css} alt="Css" />

              </div>
              <div className="itemImg">
                <img className="frontEnd bootstrap" src={bootstrap} alt="Bootstrap" />

              </div>

            </div>
          </div>

          <div className="backEndContainer">
            <div className="npContainer">
              <div className="itemImg">
                <img className="backEnd nodeJs" src={nodeImg} alt="NodeJs" />

              </div>
              <div className="itemImg">
                <img className="backEnd postman" src={postman} alt="Postman" />

              </div>

            </div>
            <div className="mmpContainer">
              <div className="itemImg">
                <img className="backEnd postgreSQL" src={postgreSQL} alt="postgreSQL" />

              </div>
              <div className="itemImg">
                <img className="backEnd mySQL" src={mySQL} alt="mySQL" />

              </div>

              <div className="itemImg">
                <img className="backEnd mongoDB" src={mongoDB} alt="mongoDB" />

              </div>
            </div>
          </div>

        </div>

      </div>


    </div >
  );
}

export default TeckStack;
