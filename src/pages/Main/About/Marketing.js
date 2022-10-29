import React, { useLayoutEffect, useRef } from 'react'
import facebook from '../../../assets/logo/facebook.png'
import google from '../../../assets/logo/google.png'
import snapchat from '../../../assets/logo/snapchat-1.png'
import tiktok from '../../../assets/logo/tiktok-logo.png'
import social from '../../../assets/logo/social-media-post-interface.png'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { BsArrowRightCircleFill } from 'react-icons/bs'
import '../../../styles/About/Marketing.css'

const Marketing = () => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CSSRulePlugin, CSSRule);
    let rule2 = CSSRulePlugin.getRule(".diagonal:before");

    const diagonal = useRef(null)

    useLayoutEffect(() => {
        const diag = diagonal.current
        const ctx = gsap.context(() => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: diag,
                    start: 'top center',
                    end: 'bottom bottom',
                    toggleActions: 'restart none none reverse',
                }
            })
            tl.from(rule2, { cssRule: { translateX: 0, }, })
            tl.to('.marketing', { opacity: 1, translateX: '50px', duration: 0.2 })
            tl.from('.description', { opacity: 0, translateX: '-50px', duration: 0.2 })
            tl.to('.decouvrir', { opacity: 1, duration: 0.2 })
            tl.from('.social', { opacity: 0, scale: 0.5, duration: 0.5 })
            tl.from('.facebook', { opacity: 0, scale: 0.5, duration: 0.5 })
            tl.from('.google', { opacity: 0, scale: 0.5, duration: 0.5 })
            tl.from('.snapchat', { opacity: 0, scale: 0.5, duration: 0.5 })
        }, diagonal)
        return () => ctx.revert()
    }, [rule2])

    return (
        <div className="h-screen w-full" ref={diagonal}>
            <div className='diagonal w-full h-screen bg-[#2e1756] relative' >
                <div className='flex flex-col relative w-full h-full justify-around flex-wrap'>
                    <span className=' marketing absolute w-fit top-[25%] uppercase -translate-y-[50%] text-6xl left-[7%] font-gazpacho'> marketing digital</span>
                    <span className='w-[65%] pr-[15%] pt-[5%] text-justify pl-[10%] description text-2xl text-white '>Mettez les chances de votre côté en étant présent sur les résaux sociaux et amener de futur clients dans votre boutique physique ou en ligne !</span>
                    <button className='decouvrir -mt-96 font-gingerBold text-[#2e1756] hover:text-white w-fit  p-4 rounded-2xl bg-[#ffca2b] opacity-0 transition-all flex items-center ml-[10%]'>Découvrir <BsArrowRightCircleFill className='ml-4' /></button>
                    <img className='absolute bottom-[55%] translate-y-[65%] w-[30%] right-[10%] social' alt='s' data-depth='0.1' src={social} />
                    <img className='absolute bottom-[92%] translate-y-[65%] w-[5%] right-[15%] facebook' alt='s' data-depth='0.1' src={facebook} />
                    <img className='absolute bottom-[68%] translate-y-[65%] w-[6%] right-[40%] snapchat' alt='s' data-depth='0.1' src={snapchat} />
                    <img className='absolute bottom-[40%] translate-y-[65%] w-[8%] right-[5%] google' alt='s' src={google} />
                    <img className='absolute bottom-[29%] translate-y-[65%] w-[8%] right-[40%] google' alt='s' src={tiktok} />
                </div>
            </div>
        </div>
    )
}

export default Marketing