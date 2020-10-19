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
import gatsby from './techImg/gatsby.png';
import nextjs from './techImg/nextjs.png';

function TeckStack() {


  return (
    <div className="techStak" id="skills">
      <div className="skills">


        <div className="techTitle">
          <h1>Skills</h1>
        </div>

        <div className="techContainer">
          <div className="topTech">
            <img className="imgTop js" title="Javascript" src={javaScript} alt="JavaScript" />
            <img className="imgTop " title="GitHub" src={gitHub} alt="GitHub" />
            <img className="imgTop " title="Python" src={python} alt="Python" />

          </div>
          <div className="buttomTech">

            <div className="frontEndContainer">
              <div className="rraContainer">
                <div className="itemImg">
                  <img className="frontEnd react" title="React" src={reactImg} alt="React" />
                </div>
                <div className="itemImg">
                  <img className="frontEnd redux" title="Redux" src={redux} alt="Redux" />

                </div>
                <div className="itemImg">
                  <img className="frontEnd angular" title="Angular 9" src={angular} alt="Angular" />

                </div>

              </div>
              <div className="hcsContainer">
                <div className="itemImg">
                  <img className="frontEnd gatsby" title="Gatsby.js" src={gatsby} alt="Gatsby" />

                </div>
                <div className="itemImg">
                  <img className="frontEnd nextjs" title="Next.js" src={nextjs} alt="Next.js" />

                </div>
                <div className="itemImg">
                  <img className="frontEnd bootstrap" title="Bootstrap" src={bootstrap} alt="Bootstrap" />
                </div>

              </div>
            </div>

            <div className="backEndContainer">
              <div className="npContainer">
                <div className="itemImg">
                  <img className="backEnd nodeJs" title="NodeJs" src={nodeImg} alt="NodeJs" />
                </div>
                <div className="itemImg">
                  <img className="backEnd postman" title="Postman" src={postman} alt="Postman" />

                </div>

              </div>
              <div className="mmpContainer">
                <div className="itemImg">
                  <img className="backEnd postgreSQL" title="PostgeSQL" src={postgreSQL} alt="postgreSQL" />

                </div>
                <div className="itemImg">
                  <img className="backEnd mySQL" title="MySQL" src={mySQL} alt="mySQL" />

                </div>

                <div className="itemImg">
                  <img className="backEnd mongoDB" title="MongoDB" src={mongoDB} alt="mongoDB" />

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </div >
  );
}

export default TeckStack;
