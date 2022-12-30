import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import lottie from 'lottie-web';
import ScrollTrigger from "gsap/ScrollTrigger";
import { NavLink, useLocation } from 'react-router-dom';
import { useStateContext } from '../providers/LogoProvider';

const Navbar = () => {

  const location = useLocation()
  const { currentColor, setColor } = useStateContext()
  const activeLink = `font-mabryBlack text-[${currentColor}]`

  useEffect(() => {
    if (location.pathname === '/site-web') {
      setColor('#1B065E')
    } else if (location.pathname === '/marketing-digital') {
      setColor('#ff5252')
    } else if (location.pathname === '/mission') {
      setColor('#ff7d3d')
    } else if (location.pathname === '/faq') {
      setColor('#1250ff')
    } else {
      setColor('#ffca2b')
    }

  }, [location.pathname, setColor])


  gsap.registerPlugin(ScrollTrigger);
  const link6 = useRef(null)
  const icons = useRef(null)
  const container = useRef(null)
  const ScrollTop = useRef(null)

  useEffect(() => {
    const scroll = lottie.loadAnimation({
      container: ScrollTop.current,
      animationData: require('../assets/lotties/scrollTop.json'),
      renderer: 'svg',
      autoplay: true
    })
    return () => scroll.destroy()
  }, [])

  useEffect(() => {
    const cont = container.current
    const iconsRef = icons.current
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: cont,
          start: 'top top',
          end: '+=20',
          snap: 1,
          toggleActions: 'restart none reverse reverse',
        },
      })
        .to('.link', { translateY: '-100px', duration: 0.1 })
        .to('.link2', { translateY: '-100px', duration: 0.1 })
        .to('.link4', { translateY: '-100px', duration: 0.1 })
        .to('.link5', { translateY: '-100px', duration: 0.1 })
        .to('.link6', { translateY: '-100px', duration: 0.1 })
        .to('.link7', { translateY: '-100px', duration: 0.1 })
        .to(iconsRef, { translateY: '10px', duration: 0.3 })

    }, container)
    return () => ctx.revert()
  }, [])

  return (
    <div className='w-full top-0 z-50 fixed' ref={container} >
      <div className=' h-20 flex justify-around items-center' >
        <span className={`text-[${currentColor}] font-bold uppercase`}>
          <span className='font-thin'>The</span> Agency</span>
        <ul className='flex text-white text-base mx-[15%]'  >
          <li className='ml-8 link '><NavLink className={({isActive}) => isActive ? activeLink : ''} to='/'>Accueil</NavLink></li>
          <li className='ml-8 link2'><NavLink className={({isActive}) => isActive ? activeLink : ''} to='/site-web'>Site web</NavLink></li>
          <li className='ml-8 link4'><NavLink className={({isActive}) => isActive ? activeLink : ''} to='/marketing-digital'>Marketing digital</NavLink> </li>
          <li className='ml-8 link5'><NavLink className={({isActive}) => isActive ? activeLink : ''} to='/mission'>Notre missions</NavLink></li>
          <li className='ml-8 link6'><NavLink className={({isActive}) => isActive ? activeLink : ''} to='/faq'>FAQ</NavLink></li>
        </ul>
        <ul className='flex items-center text-base'>
          <li className='text-white link7 mr-5' ref={link6}> <NavLink to='/mon-projet'> J'ai un projet</NavLink></li>
          <li className='text-white link7' ref={link6}><NavLink to='/contact'>Contact</NavLink></li>
          <div ref={icons} style={{ transform: 'translate(20px, -65px)' }} onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>
            <div className='absolute -top-16 w-[75%]' ref={ScrollTop}></div>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar