import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/Style/style.scss'
import FirstStep from './Components/FirstStep'
import SecondStep from './Components/SecondStep'
import ThirdStep from './Components/ThirdStep'
import { Step, Stepper, StepLabel } from '@mui/material'
import MultiStepContext from './StepContext'
import Table from './Components/Table'

function App() {

const [currentStep, setStep] = useState(1)
const [userData, setUserData] = useState([])
const [finalData, setFinalData] = useState([])


  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
    }
  }

  function submitData(){
    setFinalData(prevstate=>[...prevstate, userData])
    setUserData('')
    setStep(1)
  }

  return (
    <MultiStepContext.Provider value={
      {setStep, setUserData, setFinalData, userData, submitData, finalData}
    }>
      <div className='app_wrapper'>
        <h1>ReactJS Multi Step Application</h1>

        <div className='center-stepper'>
          <Stepper
            activeStep={currentStep - 1}
            style={{ width: '18%', marginLeft: '41%', marginBottom: '70px' }}
          >
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
      <Table/>
    </MultiStepContext.Provider>

  )
}

export default App