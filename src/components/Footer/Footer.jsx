import React from 'react';
import { Grid, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './footer.css';

function Footer(props) {
  return (
    <footer className="row-fluid footer">
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
        <div className="text-center copyright">
          UBC 2017 ©
        </div>
      </Nav>
    </footer>
  );
}

export default Footer;
