import React, { useState } from 'react';
import './Card.css';
import img from './img/main.png';



function Card({ title, url, description, lifeWeb }) {

  const [isHover, setIsHover] = useState(false);


  const hoverTrue = () => setIsHover(true);
  const hoverFalse = () => setIsHover(false);

  return (
    <div className="card" style={
      isHover ? { backgroundImage: 'none' } : { backgroundImage: `url(${img})` }
    }
      onMouseOut={hoverFalse}
      onMouseOver={hoverTrue}
    >
      <div className="container">
        <div className="text">
          <h1>{title}</h1>
          <h3>{description}</h3>
        </div>
        <div className="icons">
          <a
            className="cardLink "
            href={url}
            onMouseOut={hoverFalse}
            onMouseOver={hoverTrue}
          >
            <i className="fab fa-github" ></i>
          </a>

          <a
            className="cardLink"
            href={lifeWeb}
            onMouseOut={hoverFalse}
            onMouseOver={hoverTrue}
          >
            <i className="fa fa-link"></i>
          </a>
        </div>
      </div>
    </ div >
  );
}

export default Card;
