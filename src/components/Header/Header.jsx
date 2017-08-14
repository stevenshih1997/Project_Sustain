import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Logo from './Logo';
import NavigationBar from './NavigationBar';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Row className="top__row">
          <Col xs={3} md={3}>
            <Logo />
          </Col>
          <Col xs={9} md={9}className="title__row">
            <h1 className="title">University of British Columbia</h1>
          </Col>
        </Row>
        <Row className="bottom__row navbar__row">
          <NavigationBar />
        </Row>
      </header>
    );
  }
}

export default Header;

