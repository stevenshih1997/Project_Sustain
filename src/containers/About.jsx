import React, { Component } from 'react';
import DataApi from '../data_api.js';

class About extends Component {
  constructor() {
    super();
    this.state = {
      text: [],
    };
  }
  componentDidMount() {
    DataApi.getPages((response) => {
      console.log(response.pages[0].content.rendered);
      this.setState({
        text: response.pages[0].content.rendered,
      });
    });
  }
  render() {
    return (
      <article className="about" dangerouslySetInnerHTML={{ __html: this.state.text }} />
    );
  }
}

export default About;
