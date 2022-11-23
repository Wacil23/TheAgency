import Parallax from 'parallax-js';
import React, { useEffect, useRef } from 'react'
import { BsChevronDoubleDown } from 'react-icons/bs'
import missionAvatar from '../assets/img/with shadow/Digital/he_multitasking.png'

const SiteWeb = () => {
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current)
        parallaxInstance.enable();
        return () => parallaxInstance.disable();
    }, [])
    return (
        <div className='bg-gradient-to-t from-[#ff5352] to-[#e14b4a] w-full h-screen'>
            <div className='content flex-col flex justify-center content-center items-center w-full h-full'>
                <h1 className={`text-[14rem] text-[#8a47ff] font-mabryBlack text-center uppercase`} >Site Web</h1>
                <div ref={sceneEl} className='fixed w-full left-[40%]'>
                    <img className='absolute left-[40%] w-[36%] ' src={missionAvatar} alt="" data-depth='0.05' />
                </div>
                <div className='flex justify-center'>
                    <span className={`absolute bottom-[10%] font-mabryLight underline decoration-[#8a47ff] text-2xl text-white`}>" Un site sans marketing ? Ça existe encore ?? "</span>
                    <span className='absolute flex items-center text-white bottom-0 mb-10 mx-auto animate-pulse'>Scroll down <BsChevronDoubleDown className='ml-2' /></span>
                </div>
            </div>
        </div>
    )
}

export default SiteWeb