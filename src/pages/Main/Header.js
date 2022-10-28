import React, { useEffect, useLayoutEffect, useRef } from 'react'
import JumpBoy from '../../assets/img/with shadow/Digital/he_in_jump.png'
import JumpGirl from '../../assets/img/with shadow/Digital/she_in_jump.png'
import { BsChevronDoubleDown } from 'react-icons/bs'
import Parallax from 'parallax-js'
import lottie from 'lottie-web';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Header = () => {
    gsap.registerPlugin(ScrollTrigger);

    const container = useRef(null)
    const h1Ref = useRef(null)
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
        const h1 = h1Ref.current
        const ctx = gsap.context(() => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: h1,
                    markers: true,
                    start: 'top top',
                    end: 'center center',
                    toggleActions: 'restart none reverse reverse',
                }
            })
            tl.to(h1, {
                opacity: '0'
            })
        }, h1Ref)
        return () => ctx.revert()
    }, [])

    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current)
        parallaxInstance.enable();
        return () => parallaxInstance.disable();
    }, [])

    return (
        <div className='bg-gradient-to-t from-[rgba(138,71,255,1)] to-[rgba(107,25,249,1)]' >
            <div className="content flex justify-center content-center items-center">
                <div className="flex justify-center items-center content-center w-full h-[90vh] mt-[5%]" ref={h1Ref}>
                    <h1 className={`text-9xl font-gazpacho text-center  absolute text-[#ffca2b] uppercase`} data-depth='0.05'>the agency.</h1>
                    <h1 className='text-9xl font-gazpacho text-center   absolute text-[#ffca2b] uppercase' data-depth='0.05'>the agency.</h1>
                    <h1 className='text-9xl font-gazpacho text-center absolute text-[#ffca2b] uppercase' data-depth='0.05'>the agency.</h1>
                    <h1 className='text-9xl font-gazpacho text-center   absolute text-[#ffca2b] uppercase' data-depth='0.05'>the agency.</h1>
                    <h1 className='text-9xl font-gazpacho text-center  absolute text-[#ffca2b] uppercase' data-depth='0.05'>the agency.</h1>
                    <h1 className='text-9xl font-gazpacho text-center  absolute text-[#ffca2b] uppercase' data-depth='0.05'>the agency.</h1>
                    <div ref={sceneEl} className='fixed'>
                        <img className='w-[50%]  boy' data-depth='0.1' src={JumpBoy} alt="" />
                        <img className='w-[50%] absolute girl' data-depth='0.2' src={JumpGirl} alt="" />
                    </div>
                    <div className='mt-[29%] flex justify-center'>
                        <div className=''>
                            <span className='synopsys font-gazpachoLight underline decoration-[#ffca2b] text-lg text-white'>" L'agence n°1 des moyennes et petites entreprises "</span>
                        </div>
                        <span className='absolute flex items-center text-white bottom-0 mb-10 mx-auto animate-pulse'>Scroll down <BsChevronDoubleDown className='ml-2' /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header