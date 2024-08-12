import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function AboutUs() {
  return (
    <Container className="my-5" id="about">
      <h2 className="text-center">About Us</h2>
      <Row>
        <Col>
          <p>
            We are a community-driven platform dedicated to connecting blood
            donors with those in need. Our mission is to make blood donation
            more accessible and to promote the importance of donating blood
            regularly. We believe that by working together, we can ensure that
            no one has to suffer due to a lack of blood supply.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default AboutUs;

// <div className="about-us" id="about-us">
//   <h2>About Us</h2>
//   <p>Donor Connect is a platform that bridges the gap between blood donors and those in need. We aim to create a community where helping others becomes easy and accessible.</p>
//   <p>Our mission is to ensure that no one has to wait for the blood they need. Join us in making a difference.</p>
// </div>
