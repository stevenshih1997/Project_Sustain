import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="main__container">
          {this.props.children}
        </section>
        <Footer />
      </div>
    );
  }
}

export default Layout;
