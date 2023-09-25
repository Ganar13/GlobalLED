import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from './img/logo.png';
import './css/index.css';

function NavBar(): JSX.Element {
  return (
    <div>
      <Navbar className="navbar" dark color="dark">
        <NavbarBrand href="/">
          <img src={logo} className="logo" />
        </NavbarBrand>
        <Nav className="me-auto">
          <NavLink className="nav-link" href="/">
            Главная
          </NavLink>
          <NavLink className="nav-link" href="/services">
            Услуги
          </NavLink>
          <NavLink className="nav-link" href="/сontacts">
            Контакты
          </NavLink>
        </Nav>
        <Nav>
          <NavLink className="nav-link-cont" href="/сontacts">
            Получить консультацию
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
