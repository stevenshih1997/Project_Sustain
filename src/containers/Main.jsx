import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import ImageCard from '../components/ImageCard/ImageCard';
import MainCarousel from '../components/MainCarousel/MainCarousel';
import Image1 from '../images/tree.png';
import Image2 from '../images/UBCLogo.png';
import Image3 from '../images/imgcardtest.png';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      text1: 'A tree',
      text2: 'A logo',
      text3: 'random',
    };
  }
  render() {
    return (
      <div>
        <MainCarousel />
        <Row>
          <ImageCard text={this.state.text1} image={Image1} />
          <ImageCard text={this.state.text2} image={Image2} />
          <ImageCard text={this.state.text3} image={Image3} />
        </Row>
      </div>
    );
  }
}

export default Main;
