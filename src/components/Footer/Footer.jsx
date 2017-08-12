import React from 'react';
import { Grid, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Footer(props) {
  return (
    <footer className="footer">
      <Grid>
        <Nav justified>
          <LinkContainer to="/">
            <NavItem>Privacy policy</NavItem>
          </LinkContainer>
          <LinkContainer to="/">
            <NavItem title="Terms">Terms & Conditions</NavItem>
          </LinkContainer>
          <LinkContainer to="/">
            <NavItem>Another professional link</NavItem>
          </LinkContainer>
        </Nav>
        <div className="text-center copyright">
          UBC 2017
        </div>
      </Grid>
    </footer>
  );
}

export default Footer;
