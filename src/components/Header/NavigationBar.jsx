import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';
import './NavigationBar.css';

class NavigationBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     windowWidth: window.innerWidth,
  //     mobileNavVisible: false,
  //   };
  // }
  // componentDidMount() {
  //   window.addEventListener('resize', this.handleResize.bind(this));
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.handleResize.bind(this));
  // }
  // handleResize() {
  //   this.setState({ windowWidth: window.innerWidth });
  // }
  // handleNavClick() {
  //   if (!this.state.mobileNavVisible) {
  //     this.setState({ mobileNavVisible: true });
  //   } else {
  //     this.setState({ mobileNavVisible: false });
  //   }
  // }
  // navigationLinks() {
  //   return [
  //     <div className="nav__container" key={0}>
  //       <div className="container1">
  //         <LinkContainer
  //           exact
  //           to="/"
  //           activeClassName="active"
  //           activeStyle={{
  //             fontWeight: 'bold',
  //           }}
  //         ><div>Main</div>
  //         </LinkContainer>
  //       </div>
  //       <div className="container2">
  //         <LinkContainer
  //           exact
  //           to="/about"
  //           activeClassName="active"
  //           activeStyle={{
  //             fontWeight: 'bold',
  //           }}
  //         ><div>About</div>
  //         </LinkContainer>
  //       </div>
  //       <div className="container3">
  //         <LinkContainer
  //           exact
  //           to="/survey"
  //           activeClassName="active"
  //           activeStyle={{
  //             fontWeight: 'bold',
  //           }}
  //         ><div>Survey</div>
  //         </LinkContainer>
  //       </div>
  //     </div>,
  //   ];
  // }
  // renderNavigation() {
  //   if (this.state.windowWidth <= 765) {
  //     return [
  //       <div key={2} className="mobile__nav">
  //         <Button
  //           className={'menu__button glyphicon glyphicon-menu-hamburger' + (this.state.mobileNavVisible ? ' hidden_button' : '')}
  //           onClick={this.handleNavClick.bind(this)}
  //         />
  //         {this.renderMobileNav()}
  //       </div>,
  //     ];
  //   } else {
  //     return [
  //       <div key={3} className="nav__menu">
  //         {this.navigationLinks()}
  //       </div>,
  //     ];
  //   }
  // }
  // renderMobileNav() {
  //   if (this.state.mobileNavVisible) {
  //     return [
  //       <div key={5}>
  //         {this.navigationLinks()}
  //       </div>,
  //     ];
  //   }
  //   return null;
  // }



  render() {
    const navbarInstance = (
      <Navbar collapseOnSelect className="nav__menu">
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
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
        </Navbar.Collapse>
      </Navbar>
    );
    return (
      navbarInstance
    );
  }
}

export default NavigationBar;
