import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  return (
    <>
      <Navbar>
      <Container>
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <Navbar.Brand>
            <span style={{ fontSize:'30px', color:'#4FBF26' }}>
              Giuliana De Bellis
            </span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Nav.Link>
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <span className="navbar-fnt">Home</span>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/blog" style={{ textDecoration: 'none' }}>
              <span className="navbar-fnt">Blog</span>
              </Link>
          </Nav.Link>
        </Navbar.Collapse>

      </Container>
      </Navbar>

      <div className="horizontal-line"></div>
    </>
  );
}

export default Navigation;