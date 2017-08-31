import React, { Component } from 'react';
import axios from 'axios';

class Survey extends Component {
  constructor() {
    super();
    this.state = {
      quote: [],
      author: [],
      appended: false,
    };
  }
  componentDidMount() {
    axios.get('/api/quote')
      .then((response) => {
        console.log(response.data.quote);
        console.log(response.data.author);
        this.setState({
          quote: response.data.quote,
          author: response.data.author,
          appended: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        {this.state.quote}
        {this.state.author}
      </div>
    );
  }
}

export default Survey;
