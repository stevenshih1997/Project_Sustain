import React, { Component } from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Sponsors from './Sponsors';
import Image1 from '../../images/imgcardtest.png';
import './footer.css';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      images: [Image1, Image1, Image1],
    };
  }
  render() {
    return (
      <footer className="row-fluid footer">
        <Sponsors images={this.state.images} />
        <Nav justified>
          <LinkContainer to="/">
            <NavItem className="link__footer" >Privacy policy</NavItem>
          </LinkContainer>
          <LinkContainer to="/">
            <NavItem className="link__footer" title="Terms">Terms & Conditions</NavItem>
          </LinkContainer>
          <LinkContainer to="/">
            <NavItem className="link__footer" >Another professional link</NavItem>
          </LinkContainer>
        </Nav>
        <div className="text-center copyright">
          UBC 2017 ©
        </div>
      </footer>
    );
  }
}

export default Footer;
