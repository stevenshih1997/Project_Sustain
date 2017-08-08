import React from 'react';
import { Image } from 'react-bootstrap';
import './ImageCard.css';

function ImageCard(props) {
  return (
    <div className="card effect__hover">
      <div className="card__front">
        <Image src={props.image} responsive />
      </div>
      <div className="card__back">
        <span className="card__text">{props.text}</span>
      </div>
    </div>
  );
}

export default ImageCard;
