import React from 'react';
import { Carousel, Image, Row } from 'react-bootstrap';
import PlaceHolderImage from '../../images/tree.png';
import './MainCarousel.css';

function MainCarousel(props) {
  return (
    <Row>
      <Carousel>
        <Carousel.Item>
          <Image width={450} height={250} alt="900x500" src={PlaceHolderImage} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image width={450} height={250} alt="900x500" src={PlaceHolderImage} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image width={450} height={250} alt="900x500" src={PlaceHolderImage} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Row>
  );
}

export default MainCarousel;
