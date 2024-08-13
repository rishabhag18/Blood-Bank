// Step2.js
import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Step2 = ({ formData, handleInputChange, handlePincodeChange, handleNext, handlePrev }) => {
  return (
    <>
<Row>
  <Col md={6}>
      <Form.Group controlId="pincode">
        <Form.Label>Pincode</Form.Label>
        <Form.Control
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handlePincodeChange}
          required
        />
      </Form.Group>
      </Col>
      <Col md={6}>
      <Form.Group controlId="state">
        <Form.Label>State</Form.Label>
        <Form.Control
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          readOnly
        />
      </Form.Group>
      </Col>
      </Row>
      <Row>
        <Col md={6}>
      <Form.Group controlId="state">
        <Form.Label>Area</Form.Label>
        <Form.Control
          type="text"
          name="area"
          value={formData.area}
          onChange={handleInputChange}
          readOnly
        />
      </Form.Group>
      </Col>
      <Col md={6}>
      <Form.Group controlId="district">
        <Form.Label>District</Form.Label>
        <Form.Control
          type="text"
          name="district"
          value={formData.district}
          onChange={handleInputChange}
          readOnly
        />
      </Form.Group>
      </Col>
      </Row>
      <Row>
        <Col md={6}>
      <Form.Group controlId="bloodGroup">
        <Form.Label>Blood Group</Form.Label>
        <Form.Control
          as="select"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Blood Group</option>
          {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((group, index) => (
            <option key={index} value={group}>
              {group}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      </Col>
      <Col md={6}>
      <Form.Group controlId="pincode">
        <Form.Label>Weight</Form.Label>
        <Form.Control
          type="text"
          name="weight"
          value={formData.weight}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      </Col>
      </Row>
      <Form.Group controlId="healthSymptoms">
        <Form.Label>Health Symptoms</Form.Label>
        <Form.Check
          type="checkbox"
          label="Blood Pressure"
          name="bloodPressure"
          checked={formData.healthSymptoms.bloodPressure}
          onChange={handleInputChange}
        />
        <Form.Check
          type="checkbox"
          label="Diabetes"
          name="diabetes"
          checked={formData.healthSymptoms.diabetes}
          onChange={handleInputChange}
        />
      </Form.Group>
      <div className="d-flex justify-content-between mt-3">
        <Button variant="secondary" onClick={handlePrev}>
          Previous
        </Button>
        <Button variant="danger" onClick={handleNext}>
          Next
        </Button>
      </div>
    </>
  );
};

export default Step2;
