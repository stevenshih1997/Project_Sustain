import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './NavigationBar.css';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar>
        <Nav>
          <LinkContainer
            exact
            to="/"
            activeClassName="active"
            activeStyle={{
              fontWeight: 'bold',
            }}
          ><NavItem>Main</NavItem>
          </LinkContainer>
          <LinkContainer
            exact
            to="/about"
            activeClassName="active"
            activeStyle={{
              fontWeight: 'bold',
            }}
          ><NavItem>About</NavItem>
          </LinkContainer>
          <LinkContainer
            exact
            to="/survey"
            activeClassName="active"
            activeStyle={{
              fontWeight: 'bold',
            }}
          ><NavItem>Survey</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
