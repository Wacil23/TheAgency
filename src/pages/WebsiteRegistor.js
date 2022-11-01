import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import both from '../assets/img/myProjectPage/web-ui-design.png'
import website from '../assets/img/myProjectPage/female-web-designer-working-on-landing-page-design.png'
import marketing from '../assets/img/myProjectPage/dashboard-design.png'


const WebsiteRegistor = () => {
  const navigate = useNavigate();

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    return () => ScrollTrigger.refresh()
  }, [])

  return (<>
    <div className='bg-blue-800 h-screen w-full flex flex-col'>
      <span className='text-5xl text-white uppercase font-gazpacho text-center my-20'>Pour mon projet je souhaite :</span>
      <div className='flex justify-around w-full mt-11 items-center'>

        <div className='flex flex-col items-center hover:scale-110 duration-300 imgBox cursor-pointer' onClick={() => navigate('./siteweb')}>
          <span className='uppercase font-gingerBold text-white mb-5 text-xl'>Site web</span>
          <div id='box' className='h-80 w-80 shadow-2xl rounded-full bg-[#3058d8]'>
            <img src={website} alt="" className='w-[80%] my-[33px] mx-auto img' />
          </div>
        </div>

        <div className='flex flex-col items-center hover:scale-110 duration-300 imgBox cursor-pointer' onClick={() => navigate('./marketing')}>
          <span className='uppercase font-gingerBold text-white mb-5 text-xl'>Marketing Digital</span>
          <div id='box' className='h-80 w-80 rounded-full shadow-2xl bg-[#3058d8]'>
            <img src={marketing} alt="" className='w-[80%] my-[33px] mx-auto img' />
          </div>
        </div>

        <div className='flex flex-col items-center hover:scale-110 duration-300 imgBox cursor-pointer' onClick={() => navigate('./site-marketing')} >
          <span className='uppercase font-gingerBold text-white mb-5 text-xl'>Les deux</span>
          <div id='box' className='h-80 w-80 rounded-full shadow-2xl bg-[#3058d8] '>
            <img src={both} alt="" className='w-[80%] my-[33px] mx-auto img' />
          </div>
        </div>

      </div>
      <Link to='/' className=' text-center w-full mt-20 text-white text-lg'> Retour a l'acceuil </Link>
    </div>
  </>
  )
}

export default WebsiteRegistor