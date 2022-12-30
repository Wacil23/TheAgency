import Parallax from 'parallax-js';
import React, { useEffect, useRef } from 'react'
import { BsChevronDoubleDown } from 'react-icons/bs'
import missionAvatar from '../assets/img/with shadow/Digital/he_sitting_on_message.png'

const FAQ = () => {
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current)
        parallaxInstance.enable();
        return () => parallaxInstance.disable();
    }, [])
    return (
        <div className='bg-gradient-to-t from-[#4ae171] to-[#4ae171] w-full h-screen'>
            <div className='content flex-col flex justify-center content-center items-center w-full h-full'>
                <h1 className={`text-[21rem] text-[#1250ff] font-mabryBlack text-center uppercase`} >FAQ</h1>
                <div ref={sceneEl} className='fixed w-full left-[40%]'>
                    <img className='absolute left-[40%] w-[36%] ' src={missionAvatar} alt="" data-depth='0.05' />
                </div>
                <div className='flex justify-center'>
                    <span className={`absolute bottom-[10%] font-mabryLight text-2xl text-white`}>" Une question ? "</span>
                    <span className='absolute flex items-center text-white bottom-0 mb-10 mx-auto animate-pulse'>Scroll down <BsChevronDoubleDown className='ml-2' /></span>
                </div>
            </div>
        </div>
    )
}

export default FAQ