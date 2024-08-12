// RegistrationForm.js
import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import ProgressBarComponent from './Steps/Progressbar';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    gender: '',
    dob: '',
    pincode: '',
    state: '',
    district: '',
    bloodGroup: '',
    healthSymptoms: {
      bloodPressure: false,
      diabetes: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        healthSymptoms: {
          ...prevState.healthSymptoms,
          [name]: checked,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlePincodeChange = async (e) => {
    const pincode = e.target.value;
    setFormData({ ...formData, pincode });

    if (pincode.length === 6) {
      try {
        const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
        const data = await response.json();

        if (data[0].Status === 'Success') {
          const { State, District } = data[0].PostOffice[0];
          setFormData({
            ...formData,
            pincode:pincode,
            state: State,
            district: District,
          });
        } else {
          alert('Invalid Pincode. Please enter a valid pincode.');
          setFormData({
            ...formData,
            state: '',
            district: '',
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  const validateDOB = () => {
    const today = new Date();
    const birthDate = new Date(formData.dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age >= 18 && age <= 50;
  };

  const handleNext = () => {
    if (step === 1 && !validateDOB()) {
      alert('You must be between 18 and 50 years old to donate blood.');
      return;
    }
    setStep(step + 1);
  };

  const handlePrev = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <Container className="my-5 p-4 border border-danger rounded">
      <h2 className="text-center text-danger mb-4">Registration Form</h2>
      <ProgressBarComponent step={step} totalSteps={3} />
      <Form onSubmit={handleSubmit}>
        {step === 1 && <Step1 formData={formData} handleInputChange={handleInputChange} handleNext={handleNext} />}
        {step === 2 && (
          <Step2
            formData={formData}
            handleInputChange={handleInputChange}
            handlePincodeChange={handlePincodeChange}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        )}
        {step === 3 && <Step3 formData={formData} handlePrev={handlePrev} handleSubmit={handleSubmit} />}
      </Form>
    </Container>
  );
};

export default RegistrationForm;
