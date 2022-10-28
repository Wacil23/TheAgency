import { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import '../App.css';
import facebook from '../assets/logo/facebook.png'
import google from '../assets/logo/google.png'
import snapchat from '../assets/logo/snapchat-1.png'
import tiktok from '../assets/logo/tiktok-logo.png'
import social from '../assets/logo/social-media-post-interface.png'
import pc from '../assets/website/pc.png'
import website from '../assets/website/website.png'
import wordpress from '../assets/website/wordpress-1.png'
import domain from '../assets/website/website-domain.png'
import { Link } from 'react-router-dom';
import Header from './Main/Header';


const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(CSSRulePlugin, CSSRule);
  let rule2 = CSSRulePlugin.getRule(".diagonal:before");
  const boxes = useRef(null)
  const diagonal = useRef(null)

  useLayoutEffect(() => {
    const box = boxes.current
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: box,
          start: 'top center',
          markers: true,
          end: 'bottom bottom',
          toggleActions: 'restart none reverse reverse',
        }
      })
      tl.from('.box1', {
        opacity: 0,
        translateX: '-40px',
        duration: 0.3
      })
      tl.from('.box2', {
        opacity: 0,
        translateX: '-40px',
        duration: 0.3
      })
      tl.from('.box3', {
        opacity: 0,
        translateX: '-40px',
        duration: 0.3
      })
    }, boxes)
    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    const diag = diagonal.current
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: diag,
          start: 'top center',
          end: 'bottom bottom',
          toggleActions: 'restart none none reverse',
          onRefresh: self => self.progress && self.animation.progress(1),
        }
      })
      tl.from(rule2, {
        cssRule: {
          translateX: 0,
          duration: 0.2
        },
      })
      tl.from('.descover', {
        translateX: '150px',
        duration: 0.2
      })
      tl.to('.marketing', {
        opacity: 1,
        translateX: '50px',
        duration: 0.2
      })
      tl.from('.description', {
        opacity: 0,
        translateX: '-50px',
        duration: 0.2
      })
      tl.to('.decouvrir', {
        opacity: 1,
        duration: 0.2
      })
      tl.from('.social', {
        opacity: 0,
        scale: 0.5,
        duration: 0.5
      })
      tl.from('.facebook', {
        opacity: 0,
        scale: 0.5,
        duration: 0.5
      })
      tl.from('.google', {
        opacity: 0,
        scale: 0.5,
        duration: 0.5
      })
      tl.from('.snapchat', {
        opacity: 0,
        scale: 0.5,
        duration: 0.5
      })
    }, diagonal)
    return () => ctx.revert()
  }, [rule2])

  useLayoutEffect(() => {
    ScrollTrigger.refresh()
  }, [])

  return (
    <motion.div >
      <Header />
      <div className="bg-[#8a47ff] w-full h-[80vh] z-0 pt-[5%]">
        <div className='flex flex-col justify-center content-center '>
          <span className='text-center text-[#ffca2b] text-2xl pb-4 uppercase  font-bold'>Résponsable et Créatif</span>
          <h2 className='text-center text-white text-4xl mx-[24%] font-gingerRegular mb-5 leading-[55px]'>TheAgency est une agence de création de site internet spécialisée dans le <span className=''>design</span>  et dans le <span className=''>marketing digital</span>.</h2>
          <span className='text-center mx-[29%] text-lg font-gingerThin text-yellow-300 '>Nous repondons à vos demande avec un accompagnement sur mesure en s'adaptant à tout vos besoins en toutes circonstances.</span>
        </div>
      </div>
      <div className='w-full h-[50vh] bg-[#743ad8] flex flex-col relative'>
        <div className=" w-full relative custom-shape-divider-top-1666705716">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className='absolute fill-[#743ad8] bottom-0'>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        <span className='text-center text-[#ffca2b] uppercase text-2xl mb-24 mt-10 font-bold'>ce que nous proposons</span>
        <div className='flex justify-around mx-24'>
          <div>
            <span className='text-[19px] text-white font-gingerBold capitalize'>Marketing</span>
            <ul className='mt-6'>
              <li>Audio</li>
              <li>Influenceurs</li>
              <li>Mailing</li>
              <li>Résaux Sociaux</li>
              <li>Vidéos</li>
            </ul>
          </div>
          <div>
            <span className='text-[19px] text-white font-gingerBold capitalize'>Design</span>
            <ul className='mt-6'>
              <li>Logo</li>
              <li>Maquette Web</li>
              <li>Produits</li>
              <li>UI/UX</li>
            </ul>
          </div>
          <div>
            <span className='text-[19px] text-white font-gingerBold capitalize'>Développement</span>
            <ul className='mt-6'>
              <li>Base De Données</li>
              <li>Framework</li>
              <li>Shopify</li>
              <li>Wordpress</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="custom-shape-divider-top-1666711746">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className='absolute fill-[#743ad8]'>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      <div className='h-screen  w-full bg-[#8a47ff] pt-24 flex flex-col'>
        <span className='text-center text-[#ffca2b] uppercase text-2xl mb-24 mt-10 font-bold'>les différentes étapes :</span>
        <div ref={boxes} className="flex justify-around mx-32 mt-12 ">
          <div className='box1 flex flex-col items-center'>
            <div className='w-28 h-28 bg-[#6e38cd] rounded-full relative step'>
              <span className='text-white  absolute top-[50%] fantasy -translate-x-[50%] -translate-y-[50%] text-6xl left-[50%]'>1</span>
            </div>
            <span className='mt-8 text-[#ffca2b] font-bold text-xl'>Choisissez votre formule :</span>
            <span className='w-96 text-white text-center text-base mt-5'>Choisissez la formule qui coresspond le mieux à votre besoins parmis nos différents services qui sont mis à votre disposition</span>
          </div>
          <div className='box2 flex flex-col items-center'>
            <div className='w-28 h-28 bg-[#6e38cd] rounded-full relative step'>
              <span className='text-white  absolute top-[50%] fantasy -translate-x-[50%] -translate-y-[50%] text-6xl left-[50%]'>2</span>
            </div>
            <span className='mt-8 text-[#ffca2b] font-bold text-xl'>Enregistrez vos informations :</span>
            <span className='w-96 text-white text-center text-base mt-5'>Vos informations nous permettrons d'établir plus précisemment vos besoins et vos attentes afin d'optimiser au mieux vos chances de réussite</span>

          </div>
          <div className='box3 flex flex-col items-center'>
            <div className='w-28 h-28 bg-[#6e38cd] rounded-full relative step'>
              <span className='text-white  absolute top-[50%] fantasy -translate-x-[50%] -translate-y-[50%] text-6xl left-[50%]'>3</span>
            </div>
            <span className='mt-8 text-[#ffca2b] font-bold text-xl'>Obtenez un devis gratuitement</span>
            <span className='w-96 text-white text-center text-base mt-5'>L'étape final consiste à vous offrir un devis détaillé et explicite de votre demande. <br />Une fois ce devis validé nous pouvons commencer !</span>
          </div>
        </div>
        <Link to='/mon-projet' className='mt-28 font-gingerBold text-white hover:text-black w-fit self-center p-4 rounded-2xl bg-[#ffca2b] transition-all flex items-center'>Commencer <BsArrowRightCircleFill className='ml-4' /></Link>
      </div>
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
      <div className="h-screen w-full">
        <div className='diagonal2 w-full h-screen bg-[#2e1756] relative' >
          <div className='flex flex-col relative w-full h-full justify-around flex-wrap'>
            <span className=' marketing absolute w-fit top-[25%] uppercase -translate-y-[50%] text-7xl leading-[9rem] right-[18%] font-gazpacho'>site web</span>
            <span className='w-[95%] text-center pl-[56%] pt-[5%] description text-2xl text-white '>Vous avez toujours rêvé d'un site web pour votre commerce, vendre vos produits ou partager votre quotidien sur votre blog, tout ça personolasier selon vos choix ? <br /> Cette solution est faite pour vous n'attendez plus !</span>
            <button className='decouvrir -mt-96 font-gingerBold text-[#2e1756] hover:text-white w-fit  p-4 rounded-2xl bg-[#ffca2b] opacity-0 transition-all flex items-center ml-[70%]'>Découvrir <BsArrowRightCircleFill className='ml-4' /></button>
            <img className='absolute bottom-[45%] translate-y-[65%] w-[20%] left-[17%] social' alt='s' data-depth='0.1' src={pc} />
            <img className='absolute bottom-[75%] translate-y-[65%] w-[5%] left-[15%] facebook' alt='s' data-depth='0.1' src={domain} />
            <img className='absolute bottom-[68%] translate-y-[65%] w-[6%] left-[40%] snapchat' alt='s' data-depth='0.1' src={wordpress} />
            <img className='absolute bottom-[40%] translate-y-[65%] w-[8%] left-[5%] google' alt='s' src={website} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home