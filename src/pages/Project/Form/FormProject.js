import React, { useState } from 'react'

import { motion } from 'framer-motion'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import { useForm } from '@mantine/form'
import { Button, Group } from '@mantine/core'
import { useDispatch, useSelector } from 'react-redux'

const FormProject = () => {

    const form = useForm({
        initialValues: {
            firstName: '',
            youAre: '',
            lastName: '',
            email: '',
            tel: '',
            adress: '',
            ville: '',
            checkHasWebsite: false,
            checkModelWebsite: '',
            adressWebsite: '',
            selectionTypeWebsite: '',
            checkLogo: '',
        }
    });

    const current = useSelector((state) => state.stepper)

    const dispatch = useDispatch()

    return (
        <>
            <form className='flex items-start flex-col justify-around w-full mt-[5%] ml-[5%]'>
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
                    <h1>
                        Votre devis est en route
                    </h1>
                }
                <Group position="center" mt="xl">
                    <Button onClick={() => dispatch({type: 'stepper/prevStep'})} variant="default">Back</Button>
                    <Button onClick={() => dispatch({type: 'stepper/nextStep'})} >Next step</Button>
                </Group>
            </form>

        </>
    )
}

export default FormProject