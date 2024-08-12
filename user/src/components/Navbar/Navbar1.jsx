import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <Navbar bg="danger" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src="./images/logo2.png" alt="" style={{width:'200px',height:'50px'}}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link></Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#what-we-do">What We Do</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Navbar1;
