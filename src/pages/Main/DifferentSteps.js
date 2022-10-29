import gsap from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import '../../styles/Main/DifferentStep.css'

const DifferentSteps = () => {
    const boxes = useRef(null)

    useLayoutEffect(() => {
        const box = boxes.current
        const ctx = gsap.context(() => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: box,
                    start: 'top center',
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
        return () => {
            ctx.revert()
        }
    }, [])

    return (
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
    )
}

export default DifferentSteps