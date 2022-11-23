import React, { useEffect, useState } from 'react'
import mailSent from '../../../assets/img/approved-mail.png'
import { motion } from 'framer-motion'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import { useSelector } from 'react-redux'

const FormProject = () => {
    const [counter, setCounter] = useState(3)

    const current = useSelector((state) => state.stepper)

    useEffect(() => {
        if (current === 2) {
            const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            if (counter === 0) {
                window.location.href = '/'
            }
            return () => clearInterval(timer);
        }
    }, [counter, current]);

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
                <div className='flex flex-col w-full'>
                    <p className='w-fit text-center mt-16 self-center'>PARFAIT ! Votre devis est en route. <br /> Vous allez être redirigé dans {counter} secondes</p>
                    <img className='w-[25vw] self-center' src={mailSent} alt="" />
                </div>
            }

        </>
    )
}

export default FormProject