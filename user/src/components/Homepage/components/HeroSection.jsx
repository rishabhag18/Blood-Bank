import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <Container className="my-5" id="what-we-do">
      <Row>
        <Col lg={6} className="my-auto">
          <h1>What We Do?</h1>
          <h3>Connecting Donors with Those in Need</h3>
          <p>Every drop counts. Donate blood and save lives.</p>
          <p>
            We connect people in need of blood with donors nearby. Our platform
            makes it easy to find and reach out to blood donors within your
            vicinity. Join our community and help save lives.
          </p>
          <Link to="/register">
          <Button variant="danger" className="mr-2 me-2">
            Join Now
          </Button>
          </Link>
          <Link to="/login">
          <Button variant="secondary">Log In</Button>
          </Link>
        </Col>
        <Col lg={6}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/image4.jpeg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/image5.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/image6.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
export default HeroSection;

// const [currentSlide, setCurrentSlide] = useState(0);

// const images = [
//   './images/image1.jpg',
//   './images/image2.jpg',
//   './images/image3.jpg',
//   './images/image4.jpeg',
//   './images/image5.jpg',
//   './images/image6.jpg',
//   './images/image7.jpg',
//   './images/image8.jpeg',
//   './images/image9.jpg',
// ];

// useEffect(() => {
//   const slideInterval = setInterval(() => {
//     setCurrentSlide((currentSlide + 1) % images.length);
//   }, 3000);

//   return () => clearInterval(slideInterval);
// }, [currentSlide]);

// return (
//   <div className="hero-section" id="home">
//     <div className="hero-content">
//       <h2>Connecting Donors with Those in Need</h2>
//       <p>Every drop counts. Donate blood and save lives.</p>
//       <button className="hero-btn">Join Us</button>
//     </div>
//     <div className="hero-image">
//       <img src={images[currentSlide]} alt="Blood donation" />
//     </div>
//   </div>
