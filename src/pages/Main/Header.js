import React, { useEffect, useRef } from 'react'
import JumpBoy from '../../assets/img/with shadow/Digital/he_in_jump.png'
import JumpGirl from '../../assets/img/with shadow/Digital/she_in_jump.png'
import { BsChevronDoubleDown } from 'react-icons/bs'
import Parallax from 'parallax-js'
import lottie from 'lottie-web';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import  '../../styles/Main/Header.css'

const Header = () => {
    gsap.registerPlugin(ScrollTrigger);

    const container = useRef(null)
    const ScrollTop = useRef(null)

    useEffect(() => {
        const scroll = lottie.loadAnimation({
            container: ScrollTop.current,
            animationData: require('../../assets/lotties/scrollTop.json'),
            renderer: 'svg',
            autoplay: true
        })
        return () => scroll.destroy()
    }, [])

    useEffect(() => {
        const cont = container.current
        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: cont,
                    start: '1px 1px',
                    end: '+=20',
                    snap: 1,
                    toggleActions: 'restart none reverse reverse',
                },
            })
                .to(cont, { opacity: '0' })
        }, container)

        return () => ctx.revert()
    }, [])


    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current)
        parallaxInstance.enable();
        return () => parallaxInstance.disable();
    }, [])

    return (
        <div className='bg-gradient-to-t from-[#8a47ff] to-[#6b19f9]' >
            <div className="content flex justify-center content-center items-center">
                <div className="fafa flex justify-center items-center content-center w-full h-[90vh] mt-[5%]" ref={container}>
                    <h1 className='text-9xl font-mabryBlack text-center  absolute text-[#ffca2b] uppercase' data-depth='0.05'>the agency.</h1>
                    <h1 className={`text-9xl font-mabryBlack text-center absolute text-[#F5B800] uppercase`} data-depth='0.05'>the agency.</h1>
                    <h1 className='text-9xl font-mabryBlack text-center  absolute text-[#ffc20a] uppercase' data-depth='0.05'>the agency.</h1>
                    <h1 className='text-9xl font-mabryBlack text-center absolute text-[#FFC71F] uppercase' data-depth='0.05'>the agency.</h1>
                    <div ref={sceneEl} className='fixed'>
                        <img className='w-[50%]  boy' data-depth='0.1' src={JumpBoy} alt="" />
                        <img className='w-[50%] absolute girl' data-depth='0.2' src={JumpGirl} alt="" />
                    </div>
                    <div className='mt-[29%] flex justify-center'>
                        <div className=''>
                            <span className='synopsys font-mabryLight underline decoration-[#ffca2b] text-2xl text-white'>" L'agence n°1 des moyennes et petites entreprises "</span>
                        </div>
                        <span className='absolute flex items-center text-white bottom-0 mb-10 mx-auto animate-pulse'>Scroll down <BsChevronDoubleDown className='ml-2' /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header