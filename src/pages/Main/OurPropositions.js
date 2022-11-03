import React from 'react'
import '../../styles/Main/OurProposition.css'
const OurPropositions = () => {
    return (
        <div className='w-full h-[50vh] bg-[#743ad8] flex flex-col relative'>
            <div className=" w-full relative custom-shape-divider-top-1666705716">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className='absolute fill-[#743ad8] bottom-0'>
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <span className='text-center text-[#ffca2b] uppercase text-2xl mb-24 mt-10 font-bold'>ce que nous proposons</span>
            <div className='flex justify-around mx-24'>
                <div>
                    <span className='text-[19px] text-white font-mabryBold capitalize'>Marketing</span>
                    <ul className='mt-6'>
                        <li>Audio</li>
                        <li>Influenceurs</li>
                        <li>Mailing</li>
                        <li>Résaux Sociaux</li>
                        <li>Vidéos</li>
                    </ul>
                </div>
                <div>
                    <span className='text-[19px] text-white font-mabryBold capitalize'>Design</span>
                    <ul className='mt-6'>
                        <li>Logo</li>
                        <li>Maquette Web</li>
                        <li>Produits</li>
                        <li>UI/UX</li>
                    </ul>
                </div>
                <div>
                    <span className='text-[19px] text-white font-mabryBold capitalize'>Développement</span>
                    <ul className='mt-6'>
                        <li>Base De Données</li>
                        <li>Framework</li>
                        <li>Shopify</li>
                        <li>Wordpress</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OurPropositions