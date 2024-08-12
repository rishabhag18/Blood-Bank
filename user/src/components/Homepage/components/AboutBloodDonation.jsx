import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
function AboutBloodDonation() {
  return (
    <Container className="my-5" id="blood-donation-info">
      <h2 className="text-center">Blood Donation Information</h2>
      <Row className="my-4">
        <Col lg={6}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400"
                alt="Blood donation"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400"
                alt="Blood bank"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400"
                alt="Blood drive"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col lg={6}>
          <p>
            Blood donation is a vital process that helps save lives. It involves
            donating blood voluntarily to ensure a safe and reliable supply of
            blood for those in need. Here's everything you need to know about
            blood donation, its benefits, and how you can get involved.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default AboutBloodDonation;

// <div className="hero-section" id="about-blood-donation">
//   <div className="hero-image">
//     <img src="./images/image6.jpg" alt="Why donate blood" />
//   </div>
//   <div className="hero-content">
//     <h2>Why Donate Blood?</h2>
//     <p>
//       Blood donation is a simple act that can save lives. It helps in
//       emergency situations, surgeries, and for patients with certain medical
//       conditions. Your donation can make a huge difference.
//     </p>
//   </div>
// </div>
