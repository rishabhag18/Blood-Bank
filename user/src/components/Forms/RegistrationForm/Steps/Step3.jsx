// Step3.js
import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Step3 = ({ formData, handleInputChange, handlePrev, handleSubmit }) => {
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    const month = new Date().getMonth() - birthDate.getMonth();
    if (
      month < 0 ||
      (month === 0 && new Date().getDate() < birthDate.getDate())
    ) {
      return age - 1;
    }
    return age;
  };

  const age = calculateAge(formData.dateOfBirth);

  if (age < 18 || age > 50) {
    return (
      <div className="alert alert-warning">
        You must be between 18 and 50 years old to register as a donor.
      </div>
    );
  }

  return (
    <>
      <h3 className="text-center">Review Your Information</h3>
      <Row>
        <Col>
          <p>
            <strong>First Name:</strong> {formData.firstName}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Last Name:</strong> {formData.lastName}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Date of Birth:</strong> {formData.dob}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <strong>Mobile Number:</strong> {formData.mobileNumber}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <strong>Pincode:</strong> {formData.pincode}
          </p>
        </Col>
        <Col>
          <p>
            <strong>State:</strong> {formData.state}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <strong>District:</strong> {formData.district}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Area:</strong> {formData.area}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <strong>Blood Group:</strong> {formData.bloodGroup}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Weight:</strong> {formData.weight}
          </p>
        </Col>
      </Row>
      <p>
        <strong>Health Symptoms:</strong>
      </p>
      <ul>
        {formData.healthSymptoms.bloodPressure && <li>Blood Pressure</li>}
        {formData.healthSymptoms.diabetes && <li>Diabetes</li>}
      </ul>

      <Row>
        <Col>
          <Button variant="secondary" onClick={handlePrev} className="w-100">
            Previous
          </Button>
        </Col>
        <Col>
          <Button variant="danger" type="submit" className="w-100">
            Submit
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Step3;
