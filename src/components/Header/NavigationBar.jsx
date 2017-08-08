import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavigationBar extends Component {

  render() {
    return (
      <Navbar>
        <Nav>
          <NavItem>item1</NavItem>
          <NavItem>item2</NavItem>
          <NavItem>item3</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
