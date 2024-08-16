import React, { useState } from "react";
import { Container, Form,Row,Col,Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar1 from "../../Navbar/Navbar1";
import Footer from "../../Footer/Footer";


export default function LoginForm() {
  const [contactNumber,setContactNumber]=useState("");
  const handleInputChange=(e)=>{
    setContactNumber(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(contactNumber);
    setContactNumber("");
  }
  return (<>
  <Navbar1 />
  <Container className="my-5 p-4 border border-danger rounded">
      <h2 className="text-center text-danger mb-4">Registration Form</h2>
      <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <Form.Group controlId="firstName">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="text"
              name="contactNumber"
              value={contactNumber}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          </Col>
          <Col>
          <Button variant="danger" type="submit" className="w-100">
            Submit
          </Button>
        </Col>
          </Row>
      </Form>
      <ToastContainer pauseOnHover />
      </Container>
  <Footer />
  </>
  )
}
