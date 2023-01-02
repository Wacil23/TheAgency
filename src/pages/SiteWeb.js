import ScrollTrigger from 'gsap/ScrollTrigger';
import Parallax from 'parallax-js';
import React, { useEffect, useRef } from 'react'
import { BsChevronDoubleDown } from 'react-icons/bs'
import gsap from 'gsap'
import missionAvatar from '../assets/img/with shadow/Digital/he_multitasking.png'
import { Canvas } from '@react-three/fiber';
import Laptop from '../components/Laptop';
import { ScrollControls } from '@react-three/drei';

const SiteWeb = () => {
    gsap.registerPlugin(ScrollTrigger);
    const container = useRef(null)
    const sceneEl = useRef(null);
    
    useEffect(() => {
        const cont = container.current
        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: cont,
                    start: '25px top',
                    end: '+=20',
                    snap: 5 ,
                    toggleActions: 'restart none reverse reverse',
                },
            })
            .to(cont, { opacity: '0' })
        }, container)

        return () => ctx.revert()
    }, [])
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current)
        parallaxInstance.enable();
        return () => parallaxInstance.disable();
    }, [])
    return (
        <>
            <div className=' bg-gradient-to-t from-[#ff5352] to-[#e14b4a] w-full h-screen'>
                <div className='content flex-col flex justify-center content-center items-center w-full h-full' ref={container}>
                    <h1 className={`text-[15rem] text-[#1B065E] font-mabryBlack text-center uppercase`} >Site Web</h1>
                    <div ref={sceneEl} className='fixed w-full left-[40%]'>
                        {/* <img className='absolute left-[40%] w-[36%] ' src={missionAvatar} alt="" data-depth='0.05' /> */}
                    </div>
                    <div className='flex justify-center'>
                        <span className={`absolute bottom-[10%] font-mabryLight text-2xl text-white`}>" Un site sans marketing ? Ça existe encore ?? "</span>
                        <span className='absolute flex items-center text-white bottom-0 mb-10 mx-auto animate-pulse'>Scroll down <BsChevronDoubleDown className='ml-2' /></span>
                    </div>
                </div>
                <div className='w-full h-screen bg-gradient-to-t from-[#ea5d5d] to-[#ff5352]'>
                    <Canvas dpr={[1, 2]} flat shadows >
                        <ScrollControls pages={5}>
                            <Laptop />
                        </ScrollControls>
                    </Canvas>
                </div>
            </div>
        </>
    )
}

export default SiteWeb