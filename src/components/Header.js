import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

import './Header.css';

const Header = ({ homePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const HomePage = () => {

    return (
      <div className="p-2">
        <Navbar color="white" light expand="md">
          <NavbarBrand href="#">
            <img width="200" height="80" src="http://mybillbook.in/s/wp-content/uploads/2021/04/myBillBook-logo.png" alt="Logo"/>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="justify-content-end" style={{ width: '100%' }} navbar>
              <NavItem>
                <NavLink href="#" activeStyle={{ color:'red' }} exact>Why use My BillBook?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Who is it for?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Online Store</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">FAQ</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  const ItemsPage = () => {
    return (
      <div className="p-3">
        <Navbar color="white" light expand="md">
          <NavbarBrand href="#">
            Phone Number
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="justify-content-end" style={{ width: '100%' }} navbar>
              <NavItem>
                <NavLink href="#">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  return homePage? <HomePage />: <ItemsPage />;
}

export default Header;