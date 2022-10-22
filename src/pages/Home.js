import '../App.css';
import JumpBoy from '../assets/img/with shadow/Digital/he_in_jump.png'
import JumpGirl from '../assets/img/with shadow/Digital/she_in_jump.png'
import Navbar from '../components/Navbar';
import Parallax from 'parallax-js'
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { BsChevronDoubleDown } from 'react-icons/bs'
import ScrollTrigger from "gsap/ScrollTrigger";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null)
  const h1Ref = useRef(null)

  useEffect(() => {
    const cont = container.current
    const h1 = h1Ref.current

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: h1,
        start: 'top top',
        end: 'center center',
        scrub: 1,
      }
    })

    tl.to(h1, {
      opacity: '0'
    })

    return () => ScrollTrigger.killAll()
  }, [])

  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current)
    parallaxInstance.enable();
    return () => parallaxInstance.disable();
  }, [])

  return (
    <>

      <div className='bg-gradient-to-t from-[rgba(138,71,255,1)] to-[rgba(107,25,249,1)]' ref={container}>
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
      <div className="bg-[#8a47ff] w-full h-screen z-0 pt-[5%]">
        <div className='flex flex-col justify-center content-center '>
          <span className='text-center text-[#ffca2b] text-xl pb-4  font-bold'>Résponsable et Créatif</span>
          <h2 className='text-center text-white text-4xl mx-[24%] font-gingerRegular mb-5'>TheAgency est une agence de création de site internet spécialisée dans le <span className='underline decoration-double decoration-amber-400'>design</span>  et dans le <span>marketing digital</span>.</h2>
          <span className='text-center mx-[29%] text-lg font-gingerThin text-yellow-300 '>Nous repondons à vos demande avec un accompagnement sur mesure en s'adaptant à tout vos besoins en toutes circonstances.</span>
        </div>
      </div>
    </>
  )
}

export default Home