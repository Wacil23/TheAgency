import { Stepper } from '@mantine/core'
import React from 'react'
import { useSelector } from 'react-redux'

const Step = () => {
    const active = useSelector((state) => state.stepper)
  return (
    <Stepper color='orange' active={active} iconSize={32} className='my-[0.25rem] mx-[5%] font-mabryRegular' breakpoint="lg" radius='sm'>
          <Stepper.Step className='text-white'  label="Étape 1" description="votre identité">
            <span className='text-center text-white font-mabryRegular my-9 capitalize text-3xl'>informations personnelles:</span>
          </Stepper.Step>
          <Stepper.Step className='text-white' label="Étape 2" description="identité du site web">
            <span className='text-center text-white font-mabryRegular my-9 capitalize text-3xl'>informations du projet:</span>
          </Stepper.Step>
          <Stepper.Completed>
            Parfait ! Votre devis est en route !
          </Stepper.Completed>
        </Stepper>
  )
}

export default Step


