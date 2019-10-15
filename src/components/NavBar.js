import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
import ButtonBando from './ButtonBando'
import logo from '../assets/bando-logo-typography.png'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const styleNavBar = {
    fontFamily: "Roboto",
    color: "#EDEDED"
  }

  return (
    <div>
      <Navbar color="dark" expand="md" dark fixed="top" style={{paddingLeft: "6%", paddingRight: "6%", minHeight: `${10}vh` }}>
        <NavbarBrand href="/"><img src={logo} alt="" width={120} /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar style={{alignItems:"center"}}>
            <NavItem>
              <NavLink href="/" style={styleNavBar}>Início</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" style={styleNavBar}>História</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" style={styleNavBar}>Hinos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/members" style={styleNavBar}>Membros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" style={styleNavBar}>Jogos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/album" style={styleNavBar}>Album</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" style={styleNavBar}><ButtonBando light bold padding>Entrar</ButtonBando></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;