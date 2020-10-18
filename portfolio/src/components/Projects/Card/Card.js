import React from 'react';
import './Card.css';
import faceRecognition from '../../DB/img/faceRecognition.png';
import briteU from '../../DB/img/briteU.png';
import codeCoin from '../../DB/img/codeCoin.png';
import darkLight from '../../DB/img/darkLight.gif';
import producthunt from '../../DB/img/producthunt.png';
import projectManager from '../../DB/img/projectManager.png';



function Card({ title, url, description, lifeWeb, img, category }) {

  let image;
  if (img === 'faceRecognition') image = `url(${faceRecognition})`;
  if (img === 'briteU') image = `url(${briteU})`;
  if (img === 'codeCoin') image = `url(${codeCoin})`;
  if (img === 'darkLight') image = `url(${darkLight})`;
  if (img === 'producthunt') image = `url(${producthunt})`;
  if (img === 'projectManager') image = `url(${projectManager})`;

  return (
    <div
      className="card"
      style={{ backgroundImage: image }}
    >
      <div className="backCard">
        <div className="text">
          <h1 className="title">{title}</h1>
          <br />
          <h4 className="description">{description}</h4>
        </div>
        <div className="icons">
          <a
            className="cardLink"
            href={url}
            title="Github Code"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fas fa-code"></i>
          </a>

          {lifeWeb !== "" ? (<a
            className="cardLink"
            href={lifeWeb}
            title="Live Web"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-link"></i>
          </a>) : (
              null
            )}
        </div>
      </div>

    </div>
  );
}

export default Card;
