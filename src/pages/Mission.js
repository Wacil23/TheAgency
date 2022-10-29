import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'


const Mission = () => {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    return () => { ScrollTrigger.refresh() }
  }, [])
  
  return (
    <div className='bg-sky-700 w-full h-screen'>
      <div className='content flex justify-center content-center items-center'>
        <h1 className='flex justify-center items-center content-center w-full h-[90vh] mt-[5%]'>Mission</h1>
      </div>
    </div>
  )
}

export default Mission