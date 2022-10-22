import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BiArrowToTop } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Navbar = () => {

  gsap.registerPlugin(ScrollTrigger);
  const link1 = useRef(null)
  const link2 = useRef(null)
  const link3 = useRef(null)
  const link4 = useRef(null)
  const link5 = useRef(null)
  const link6 = useRef(null)
  const icons = useRef(null)
  const container = useRef(null)

  useEffect(() => {
    const cont = container.current
    const link1Ref = link1.current
    const link2Ref = link2.current
    const link3Ref = link3.current
    const link4Ref = link4.current
    const link5Ref = link5.current
    const link6Ref = link6.current
    const iconsRef = icons.current


    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: cont,
        start: 'top top',
        end: '+=20',
        snap: 1,
        toggleActions: 'restart none reverse reverse',
      },
    })

    tl.to(link1Ref, { translateY: '-100px', duration: 0.1 })
      .to(link2Ref, { translateY: '-100px', duration: 0.1 })
      .to(link3Ref, { translateY: '-100px', duration: 0.1 })
      .to(link4Ref, { translateY: '-100px', duration: 0.1 })
      .to(link5Ref, { translateY: '-100px', duration: 0.1 })
      .to(link6Ref, { translateY: '-100px', duration: 0.1 })
      .to(iconsRef, {  translateY: '0px', duration: 0.3 })
      return () => ScrollTrigger.killAll()
  }, [])

  return (
    <div className='w-full top-0 z-50 fixed' >
      <div className=' h-20 flex justify-around items-center' ref={container} >
        <span className='text-[#ffca2b] font-bold uppercase'>
          <span className='font-thin'>The</span> Agency</span>
        <ul className='flex text-white uppercase text-sm'  >
          <li className='ml-8' ref={link1}><Link to='/'>Accueil</Link></li>
          <li className='ml-8' ref={link2}><Link>Digital Marketing</Link> </li>
          <li className='ml-8' ref={link3}><Link to='/mission'>Notre missions</Link></li>
          <li className='ml-8' ref={link4}><Link>Accueil</Link></li>
          <li className='ml-8' ref={link5}><Link>Accueil</Link></li>
        </ul>
        <ul>

          <li className='text-white' ref={link6}>Contact</li>
          <div ref={icons} style={{transform: 'translate(20px, -65px)'}}><BiArrowToTop /></div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar