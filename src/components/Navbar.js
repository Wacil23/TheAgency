import React, { useLayoutEffect } from 'react'
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BiArrowToTop } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Navbar = () => {

  gsap.registerPlugin(ScrollTrigger);
  const link6 = useRef(null)
  const icons = useRef(null)
  const container = useRef(null)

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
          .to(iconsRef, {  translateY: '0px', duration: 0.3 })

    }, container)
      return () => ctx.revert()
  }, [])

  return (
    <div className='w-full top-0 z-50 fixed'  ref={container} >
      <div className=' h-20 flex justify-around items-center' >
        <span className='text-[#ffca2b] font-bold uppercase'>
          <span className='font-thin'>The</span> Agency</span>
        <ul className='flex text-white uppercase text-sm'  >
          <li className='ml-8 link'><Link to='/'>Accueil</Link></li>
          <li className='ml-8 link2'><Link>Digital Marketing</Link> </li>
          <li className='ml-8 link4'><Link to='/mission'>Notre missions</Link></li>
          <li className='ml-8 link5'><Link>Accueil</Link></li>
          <li className='ml-8 link6'><Link>Accueil</Link></li>
        </ul>
        <ul>
          <li className='text-white link7' ref={link6}>Contact</li>
          <div ref={icons} style={{transform: 'translate(20px, -65px)'}} onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}><BiArrowToTop /></div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar