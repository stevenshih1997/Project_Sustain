import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import './ImageCard.css';

function ImageCard(props) {
  return (
    <div className="card effect__hover">
      <div className="card__front">
        <Image className="imagecard__image" src={props.image} responsive />
      </div>
      <div className="card__back">
        <span className="card__text">{props.text}</span>
      </div>
    </div>
  );
}

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ImageCard;
