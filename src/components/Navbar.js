import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Navbar = () => {

  gsap.registerPlugin(ScrollTrigger);
  const link1 = useRef(null)
  const link2 = useRef(null)
  const link3 = useRef(null)
  const link4 = useRef(null)
  const link5 = useRef(null)
  const container = useRef(null)

  useEffect(() => {
    const cont = container.current
    const link1Ref = link1.current
    const link2Ref = link2.current
    const link3Ref = link3.current
    const link4Ref = link4.current
    const link5Ref = link5.current

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: cont,
        start: 'top top',
        end: '+=20',
        snap: 1,
        toggleActions: 'play none reverse reverse',
      },
    })

    tl.to(link1Ref, { translateY: '-100px', duration: 0.3 })
      .to(link2Ref, { translateY: '-100px', duration: 0.3 })
      .to(link3Ref, { translateY: '-100px', duration: 0.3 })
      .to(link4Ref, { translateY: '-100px', duration: 0.3 })
      .to(link5Ref, { translateY: '-100px', duration: 0.3 })
    return () => ScrollTrigger.killAll()
  }, [])

  return (
    <div className='w-100 top-0 sticky z-50' >
      <div className=' h-20 flex justify-around items-center' ref={container} >
        <span className='text-[#ffca2b] font-bold uppercase'>
          <span className='font-thin'>The</span> Agency</span>
        <ul className='flex text-white'  >
          <li className='ml-8' ref={link1}>Accueil</li>
          <li className='ml-8' ref={link2}>Digital Marketing</li>
          <li className='ml-8' ref={link3}>Notre missions</li>
          <li className='ml-8' ref={link4}>Accueil</li>
          <li className='ml-8' ref={link5}>Accueil</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar