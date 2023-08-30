import React, { useContext } from 'react'
import { Button, Input } from 'reactstrap'
import MultiStepContext from '../StepContext'


function SecondStep() {
  const { setStep, userData, setUserData } = useContext(MultiStepContext)

  return (
    <div className='first'>
      <Input
        className='w-25'
        type='text'
        placeholder='Enter your education'
        onChange={e=>setUserData({...userData, 'education': e.target.value})}
               defaultValue={userData['education']}
      />
      <Input
        className='w-25'
        type='text'
        placeholder='Enter your degree'
        onChange={e=>setUserData({...userData, 'degree': e.target.value})}
               defaultValue={userData['degree']}
      />
      <Input
        className='w-25'
        type='text'
        placeholder='Enter your univercity'
        onChange={e=>setUserData({...userData, 'univercity': e.target.value})}
               defaultValue={userData['univercity']}
      />
      <div className='buttons'>
        <Button
          color='warning'
          onClick={() => setStep(1)}
        >
          Previous
        </Button>
        <Button
          color='primary'
          onClick={() => setStep(3)}

        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default SecondStep