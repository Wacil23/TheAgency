import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Parallax from 'parallax-js'
import React, { useEffect, useRef, useState } from 'react'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'
import missionAvatar from '../assets/img/with shadow/Digital/he_with_flag_dark.png'


const Mission = () => {
  gsap.registerPlugin(ScrollTrigger)
  var location = useLocation()
  const [color, setColor] = useState()
  const sceneEl = useRef(null);
  const container = useRef(null)

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current)
    parallaxInstance.enable();
    return () => parallaxInstance.disable();
  }, [])

  useEffect(() => {
    if (location.pathname === '/mission') {
      setColor('[#ff7d3d]')
    }
    else {
      setColor('#fff')
    }
  }, [location.pathname])

  useEffect(() => {
    const cont = container.current
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: cont,
          start: '50px top',
          end: '+=20',
          snap: 1,
          toggleActions: 'restart none reverse reverse',
        },
      })
        .to(cont, { opacity: '0' })
    }, container)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    return () => { ScrollTrigger.refresh() }
  }, [])

  return (
    <div className='bg-gradient-to-t from-[#0472af] to-sky-700 w-full h-screen'>
      <div className='content flex-col flex justify-center content-center items-center w-full h-full' ref={container}>
        <h1 className={`text-[14rem] font-mabryBlack text-center text-[#ff7d3d] uppercase`} >Missions</h1>
        <div ref={sceneEl} className='fixed w-full left-[40%]'>
          <img className='absolute left-[40%] w-[36%] ' src={missionAvatar} alt="" data-depth='0.05' />
        </div>
        <div className='flex justify-center'>
          <span className={`absolute bottom-[10%] font-mabryLight text-2xl text-white`}>" Notre mission ? Accomplir la votre "</span>
          <span className='absolute flex items-center text-white bottom-0 mb-10 mx-auto animate-pulse'>Scroll down <BsChevronDoubleDown className='ml-2' /></span>
        </div>
      </div>
      <div className="bg-[#0472af] w-full h-[80vh] z-0 pt-[5%]">
        <div className='flex flex-col justify-center content-center '>
          <span className={`text-center text-${color} text-2xl pb-4 uppercase  font-bold`}>Un accompagnement personnalisée</span>
          <h2 className='text-center text-white text-4xl mx-[24%] font-mabryRegular mb-5 leading-[55px]'>La mission principale de notre agence est de vous accompagner de la création à la communication de votre entreprise.</h2>
          <span className={`text-center mx-[29%] text-lg font-mabryLight text-${color}`}>Plutôt cool non ?</span>
        </div>
      </div>
      <div className='bg-[#0472af] w-full h-full flex'>
        
        
      </div>
    </div>
  )
}

export default Mission