import React from 'react';
import { Image } from 'react-bootstrap';
import './ImageCard.css';
import testimage from '../../img/tree.png';

function ImageCard(props) {
  return (
    <div className="card effect__hover">
      <div className="card__front">
        <Image src={testimage} responsive />
      </div>
      <div className="card__back">
        <span className="card__text">{props.text}</span>
      </div>
    </div>
  );
}

export default ImageCard;
