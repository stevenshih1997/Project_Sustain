import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './NavigationBar.css';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false,
    };
  }
  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }
  renderMobileNav() {
    if (this.state.mobileNavVisible) {
      return this.navigationLinks();
    }
    return null;
  }
  handleNavClick() {
    if (!this.state.mobileNavVisible) {
      this.setState({ mobileNavVisible: true });
    } else {
      this.setState({ mobileNavVisible: false });
    }
  }
  renderNavigation() {
    if (this.state.windowWidth <= 720) {
      return [
        <div key={2} className="mobile__nav">
          <p onClick={this.handleNavClick.bind(this)}><i className="hamburger_icon">-</i></p>
          {this.renderMobileNav()}
        </div>,
      ];
    }
    return [
      <div key={3} className="nav__menu">
        {this.navigationLinks()}
      </div>,
    ];
  }
  navigationLinks() {
    return [
      <Nav key={1}>
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
      </Nav>,
    ];
  }

  render() {
    return (
      <Navbar>
        {this.renderNavigation()}
      </Navbar>
    );
  }
}

export default NavigationBar;
