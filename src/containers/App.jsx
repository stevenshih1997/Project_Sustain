import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
// import './style.css';
import ImageCard from '../components/ImageCard/ImageCard';

class Elem extends Component {
  render() {
    return (
      <div>
        <ImageCard text="this is a tree" />
      </div>
    );
  }
}

export default Elem;
