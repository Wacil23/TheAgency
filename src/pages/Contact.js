import Parallax from 'parallax-js';
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import missionAvatar from '../assets/img/with shadow/Casual/he_leaning_on_wall.png'

const Contact = () => {
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current)
        parallaxInstance.enable();
        return () => parallaxInstance.disable();
    }, [])
    return (
        <div className='bg-gradient-to-t from-[#e4b329] to-[#e4b329] w-full h-screen'>
            <div className='content flex-col flex justify-center content-center items-center w-full h-full'>
                <h1 className={`text-[2rem] text-[#54b564] font-mabryBlack text-center uppercase absolute left-4 bottom-11`} >Contact</h1>
                <h1 className={`text-[10rem] text-[#54b564] font-mabryBlack text-center uppercase absolute left-11 bottom-4`} >Contact</h1>
                <h1 className={`text-[7rem] text-[#54b564] font-mabryBlack text-center uppercase absolute left-12 top-7`} >Contact</h1>
                <h1 className={`text-[4rem] text-[#54b564] font-mabryBlack text-center uppercase absolute`} >Contact</h1>
                <h1 className={`text-[9rem] text-[#54b564] font-mabryBlack text-center uppercase absolute`} >Contact</h1>
                <h1 className={`text-[1rem] text-[#54b564] font-mabryBlack text-center uppercase absolute`} >Contact</h1>
                <div ref={sceneEl} className='fixed w-full left-[4%]'>
                    <img className='absolute w-[36%] ' src={missionAvatar} alt="" data-depth='0.01' />
                </div>
                <div className='w-[60rem] h-[40rem] bg-[#bdbdbd76] backdrop-blur-xl rounded-lg relative'>

                </div>
                <div className='flex'>
                    <Link to='/' className='mt-5'>Retour au menu</Link>
                </div>
            </div>
        </div>
    )
}

export default Contact