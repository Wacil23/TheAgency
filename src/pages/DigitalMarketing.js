import Parallax from 'parallax-js';
import React, { useEffect, useRef, useState } from 'react'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { useLocation } from 'react-router-dom';
import missionAvatar from '../assets/img/with shadow/Digital/he_VR.png'

const DigitalMarketing = () => {
    const sceneEl = useRef(null);
    const location = useLocation()
    const [color, setColor] = useState()

    useEffect(() => {
        if (location.pathname === '/marketing-digital') {
          setColor('[#ff5252]')
        }
        else {
          setColor('#fff')
        }
      }, [location.pathname])

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current)
        parallaxInstance.enable();
        return () => parallaxInstance.disable();
    }, [])

    return (
        <div className='bg-gradient-to-t from-[#ffc000] to-[#edb201] w-full h-screen'>
            <div className='content flex-col flex justify-center content-center items-center w-full h-full'>
                <h1 className={`text-[12rem] text-[#ff5252] font-mabryBlack text-center uppercase`} >Marketing Digital</h1>
                <div ref={sceneEl} className='fixed w-full left-[40%]'>
                    <img className='absolute left-[40%] w-[36%] ' src={missionAvatar} alt="" data-depth='0.05' />
                </div>
                <div className='flex justify-center'>
                    <span className={`absolute bottom-[10%] font-mabryLight underline decoration-[#ff5252] text-2xl text-white`}>" Un site sans marketing ? Ça existe encore ?? "</span>
                    <span className='absolute flex items-center text-white bottom-0 mb-10 mx-auto animate-pulse'>Scroll down <BsChevronDoubleDown className='ml-2' /></span>
                </div>
            </div>
        </div>
    )
}

export default DigitalMarketing