import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

function NavBarre() {
  const location = useLocation();

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark" className="mb-4 d-flex justify-content-between ">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="d-flex gap-4">
        <NavLink  to="/"  className={`nav-link text-white ${location.pathname === '/' ? 'active' : ''}`}>Home</NavLink>
          <NavLink  to="/add" className={`nav-link text-white ${location.pathname === '/add' ? 'active' : ''}`}>Add Product</NavLink>
          <NavLink to="/cart" className={`nav-link text-white ${location.pathname === '/cart' ? 'active' : ''}`} > Cart</NavLink>
        </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarre;
