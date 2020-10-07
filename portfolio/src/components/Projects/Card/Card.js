import React from 'react';
import './Card.css';
import img from './img/main.png';



function Card({ title, url, description, lifeWeb }) {


  return (
    <div className="card" style={{ backgroundImage: `url(${img})` }}
      onMouseOut={() => alert('out')}
      onMouseOver={() => alert('in')}
    >
      <div className="container">
        <div className="text">
          <h1>{title}</h1>
          <h3>{description}</h3>
        </div>
        <div className="icons">
          <a className="cardLink " href={url}>
            <i className="fab fa-github" ></i>
          </a>

          <a className="cardLink" href={lifeWeb}>
            <i className="fa fa-link"></i>
          </a>
        </div>
      </div>
    </ div >
  );
}

export default Card;
