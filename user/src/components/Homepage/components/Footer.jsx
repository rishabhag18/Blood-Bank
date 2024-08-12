import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
function Footer() {
  return (
    <footer className="bg-danger text-center py-4">
      <Container>
        <Row>
          <Col>
            <p>© 2024 Blood Donor Finder. All Rights Reserved.</p>
            <Nav className="justify-content-center">
              <Nav.Link href="#privacy">Privacy Policy</Nav.Link>
              <Nav.Link href="#terms">Terms of Service</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;

// <footer className="footer">
//   <p>&copy; 2024 Donor Connect. All rights reserved.</p>
// </footer>
