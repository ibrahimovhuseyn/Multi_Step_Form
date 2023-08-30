import React, { useContext } from 'react'
import { Button, Input } from 'reactstrap'
import MultiStepContext from '../StepContext'


function ThirdStep() {

  const { setStep, userData, setUserData, submitData } = useContext(MultiStepContext)






  return (
    <div className='first'>
      <Input
        className='w-25'
        type='text'
        placeholder='Enter your profession'
        onChange={e=>setUserData({...userData, 'profession': e.target.value})}
               defaultValue={userData['profession']}
      />
      <Input
        className='w-25'
        type='text'
        placeholder='Enter about your job '
        onChange={e=>setUserData({...userData, 'job': e.target.value})}
               defaultValue={userData['job']}
      />
      <Input
        className='w-25'
        type='text'
        placeholder='Enter your workplace'
        onChange={e=>setUserData({...userData, 'workplace': e.target.value})}
               defaultValue={userData['workplace']}
      />
      <div className="buttons">
        <Button
          color='warning'
          onClick={() => setStep(2)}
        >
          Previous
        </Button>
        <Button
          color='primary'
          onClick={submitData}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default ThirdStep