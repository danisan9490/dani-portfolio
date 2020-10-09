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

function TeckStack() {


  return (
    <div className="techStak">
      <div className="teckTitle">
        <h1>Tech Stack</h1>

      </div>

      <div className="techContainer">
        <div className="topTech">
          <img className="imgTop js" src={javaScript} alt="JavaScript" />
          <img className="imgTop" src={gitHub} alt="GitHub" />
          <img className="imgTop" src={python} alt="Python" />

        </div>
        <div className="javaScript">
          <img className="imgButtom" src={reactImg} alt="React" />
          <img className="imgButtom" src={angular} alt="Angular" />
          <img className="imgButtom" src={nodeImg} alt="NodeJs" />
        </div>
        <div className="backEnd">
          <img className="imgButtom mDB" src={mongoDB} alt="MongoDB" />
          <img className="imgButtom mySQl" src={mySQL} alt="mySQL" />
          <img className="imgButtom" src={postgreSQL} alt="postgreSQL" />
        </div>
      </div>


    </div >
  );
}

export default TeckStack;
