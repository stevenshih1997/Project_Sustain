import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavigationBar extends Component {

  render() {
    return (
      <Navbar>
        <Nav>
          <NavItem><Link to="/main">Main</Link></NavItem>
          <NavItem><Link to="/about">About</Link></NavItem>
          <NavItem>item3</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
