import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
// import './style.css';
//import Header from '../components/Header/Header';
import ImageCard from '../components/ImageCard/ImageCard';
import MainCarousel from '../components/MainCarousel/MainCarousel';
import Image1 from '../img/tree.png';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      text1: 'A tree',
      text2: 'Another tree',
      text3: 'One more tree',
    };
  }
  render() {
    return (
      <div>
        <MainCarousel />
        <Row>
          <ImageCard text={this.state.text1} image={Image1} />
          <ImageCard text={this.state.text2} image={Image1} />
          <ImageCard text={this.state.text3} image={Image1} />
        </Row>
      </div>
    );
  }
}

export default Main;
