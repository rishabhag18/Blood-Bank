import React from 'react'
import { StepLabel, Step, Stepper } from '@mui/material';
import FirstStep from './Steps/FirstStep'
import SecondStep from './Steps/SecondStep'
import ThirdStep from './Steps/ThirdStep'
import { multiStepContext } from './Steps/StepContext';
import { useContext } from 'react';


export default function RegistrationForm() {

    const {currentStep,finalData}=useContext(multiStepContext);

    const showStep=(step)=>{
        switch(step){
            case 1:
                return <FirstStep />
            case 2:
                return <SecondStep />
            case 3:
                return <ThirdStep />
        }
    }
  return (
    <div className="outerContainer">
        <div className="StepperContainer">
            <Stepper style={{width:'18%'}} activeStep={currentStep-1} orientation='horizontal'>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
            </Stepper>
        </div>
        {
            showStep(currentStep)
        }
    </div>
  )
}
