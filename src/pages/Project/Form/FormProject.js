import React from 'react'

import { motion } from 'framer-motion'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import { Button } from '@mantine/core'
import { useDispatch, useSelector } from 'react-redux'

const FormProject = () => {

    const current = useSelector((state) => state.stepper)
    const dispatch = useDispatch()

    return (
        <>
            {current === 0 &&
                <motion.div className='w-full' initial={{ opacity: 0, translateX: '-100%' }} animate={{ opacity: 1, translateX: '0px' }} exit={{ opacity: 0, translateX: '100%' }}>
                    <StepOne />
                </motion.div>
            }
            {current === 1 &&
                <motion.div className='w-full' initial={{ opacity: 0, translateX: '100%' }} animate={{ opacity: 1, translateX: '0px' }} exit={{ opacity: 0, translateX: '100%' }}>
                    <StepTwo />
                </motion.div>
            }
            {current === 2 &&
                <>
                    <h1>
                        Votre devis est en route
                    </h1>
                    <Button onClick={() => {dispatch({ type: 'stepper/prevStep' })}} variant="default">Back</Button>
                </>
            }

        </>
    )
}

export default FormProject