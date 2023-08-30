import React, { useContext } from 'react'
import { Button, Input } from 'reactstrap'
import MultiStepContext from '../StepContext'


function FirstStep() {

    const { setStep, userData, setUserData } = useContext(MultiStepContext)
    


    return (
        <div className='first'>
            <Input
                className='w-25'
                type='text'
                placeholder='Enter your firstname'
                onChange={e => setUserData({ ...userData, 'firstname': e.target.value })}
                defaultValue={userData['firstname']}
            />
            <Input
                className='w-25'
                type='text'
                placeholder='Enter your lastname'
                onChange={e => setUserData({ ...userData, 'lastname': e.target.value })}
                defaultValue={userData['lastname']}
            />
            <Input
                className='w-25'
                type='text'
                placeholder='Enter your email'
                onChange={e => setUserData({ ...userData, 'email': e.target.value })}
                defaultValue={userData['email']}
            />
            <Button
                color='primary'
                onClick={() => {
                    setStep(2)
                }}
            >
                Next
            </Button>

        </div>
    )
}

export default FirstStep