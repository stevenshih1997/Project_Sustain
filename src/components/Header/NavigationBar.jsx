import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './NavigationBar.css';

class NavigationBar extends Component {

  render() {
    return (
      <Navbar>
        <Nav>
          <NavItem>
            <NavLink to="/" exact activeClassName="active">Main</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </NavItem>
          <NavItem>item3</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
