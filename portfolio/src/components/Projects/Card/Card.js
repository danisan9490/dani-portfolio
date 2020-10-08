import React, { useState } from 'react';
import './Card.css';
import faceRecognition from '../../DB/img/faceRecognition.png';



function Card({ title, url, description, lifeWeb, img, category }) {

  const [isHover, setIsHover] = useState(false);
  let image;
  console.log(category)
  if (img === 'faceRecognition') image = `url(${faceRecognition})`;

  console.log(lifeWeb)

  const hoverTrue = () => setIsHover(true);
  const hoverFalse = () => setIsHover(false);

  return (
    <div className="card"
      style={isHover ? { backgroundImage: 'none' } : { backgroundImage: image }}
      onMouseOut={hoverFalse}
      onMouseOver={hoverTrue}
    >
      <div className="container">
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
            onMouseOut={hoverFalse}
            onMouseOver={hoverTrue}
          >
            <i className="fab fa-github" ></i>
          </a>

          {lifeWeb !== "" ? (<a
            className="cardLink"
            href={lifeWeb}
            target="_blank"
            rel="noopener noreferrer"
            onMouseOut={hoverFalse}
            onMouseOver={hoverTrue}
          >
            <i className="fa fa-link"></i>
          </a>) : (
              null
            )}
        </div>
      </div>
    </ div >
  );
}

export default Card;
