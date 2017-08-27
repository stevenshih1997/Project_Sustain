import React from 'react';
import PropTypes from 'prop-types';
import { Image, Col } from 'react-bootstrap';

function Sponsors(props) {
  return (
    <div className="sponsors__container">
      <Col xs={4} md={4}>
        <Image src={props.images[0]} responsive />
      </Col>
      <Col xs={4} md={4}>
        <Image src={props.images[1]} responsive />
      </Col>
      <Col xs={4} md={4}>
        <Image src={props.images[2]} responsive />
      </Col>
    </div>
  );
}

Sponsors.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Sponsors;
