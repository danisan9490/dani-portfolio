import React from 'react';
import './Card.css';
import faceRecognition from '../../DB/img/faceRecognition.png';
import briteU from '../../DB/img/briteU.png';
import codeCoin from '../../DB/img/codeCoin.png';



function Card({ title, url, description, lifeWeb, img, category }) {

  let image;
  if (img === 'faceRecognition') image = `url(${faceRecognition})`;
  if (img === 'briteU') image = `url(${briteU})`;
  if (img === 'codeCoin') image = `url(${codeCoin})`;

  return (
    <div
      className="card"
      style={{ backgroundImage: image }}
    >
      <div className="backCard">
        <div className="text">
          <h1 className="title">{title}</h1>
          <br />
          <h3 className="description">{description}</h3>
        </div>
        <div className="icons">
          <a
            className="cardLink "
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" ></i>
          </a>

          {lifeWeb !== "" ? (<a
            className="cardLink"
            href={lifeWeb}
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
