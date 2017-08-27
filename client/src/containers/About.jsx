import React, { Component } from 'react';
import DataApi from '../data_api';

const wpURL = 'http://159.203.41.252/wp-json/wp/v2/pages';

class About extends Component {
  constructor() {
    super();
    this.state = {
      text: [],
      appended: false,
    };
  }
  componentDidMount() {
    DataApi.getPages(wpURL, (response) => {
      // console.log(response.pages[0].content.rendered);
      this.setState({
        text: response.pages[0].content.rendered,
        appended: true,
      });
    });
  }
  render() {
    if (!this.state.appended) {
      return (<article className="about">Loading...</article>);
    }
    return (<article className="about" dangerouslySetInnerHTML={{ __html: this.state.text }} />);
  }
}

export default About;
