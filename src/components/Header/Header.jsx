import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Logo from './Logo';
import NavigationBar from './NavigationBar';

class Header extends Component {
  render() {
    return (
      <section>
        <Grid>
          <Col xs={3} md={3}className="logo__stack">
            <Logo />
          </Col>
          <Col xs={9} md={9} className="title__nav">
            <Row className="title__row">
              <h1>University of British Columbia</h1>
            </Row>
            <Row className="navbar__row">
              <NavigationBar />
            </Row>
          </Col>
        </Grid>
      </section>
    );
  }
}

export default Header;

