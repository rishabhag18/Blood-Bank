// ProgressBarComponent.js
import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ProgressBarComponent = ({ step, totalSteps }) => {
  return <ProgressBar now={(step / totalSteps) * 100} className="mb-4" />;
};

export default ProgressBarComponent;
