import React from 'react'

const Intro = () => {
    return (
        <div className="bg-[#8a47ff] w-full h-[80vh] z-0 pt-[5%]">
            <div className='flex flex-col justify-center content-center '>
                <span className='text-center text-[#ffca2b] text-2xl pb-4 uppercase  font-bold'>Résponsable et Créatif</span>
                <h2 className='text-center text-white text-4xl mx-[24%] font-gingerRegular mb-5 leading-[55px]'>TheAgency est une agence de création de site internet spécialisée dans le <span className=''>design</span>  et dans le <span className=''>marketing digital</span>.</h2>
                <span className='text-center mx-[29%] text-lg font-gingerThin text-yellow-300 '>Nous repondons à vos demande avec un accompagnement sur mesure en s'adaptant à tout vos besoins en toutes circonstances.</span>
            </div>
        </div>
    )
}

export default Intro