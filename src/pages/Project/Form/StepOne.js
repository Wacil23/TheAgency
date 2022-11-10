import React, { useState } from 'react'
import Form from '../../../components/Form'
import AvatarMan from '../../../assets/img/black-man.png'
import AvatarWoman from '../../../assets/img/woman-avatar.png'
import AvatarOther from '../../../assets/img/rainbow-cloth.png'

const StepOne = ({func}) => {
    const inputClassName = 'w-[78%] border-[#001760b0] border-2 mr-10 inputForm bg-transparent p-2 outline-none'
    const labelClassName = 'text-lg mb-2'
    const genderType = [
        {
            id: 1,
            type: 'un homme',
            img: AvatarMan
        },
        {
            id: 2,
            type: 'une femme',
            img: AvatarWoman
        },
        {
            id: 3,
            type: 'autre',
            img: AvatarOther
        }
    ]
    const onClick = id => {
        setIsActive(id);
    };
    const [isActive, setIsActive] = useState();
    console.log('props of s1', func)
    return (
        <>
        
            <div className='flex my-8 flex-col w-full'>
                <span className='text-lg mb-2'>Vous êtes :</span>
                <div className='flex justify-between content-start w-[89%] items-center'>
                    {genderType.map((val, index) => {
                        return (
                            <>
                                <div key={index} onClick={e => onClick(val.id)} htmlFor='youAre' className={`w-32 h-32 border-2 border-[#001760b0] items-center flex flex-col justify-end  boxGender ${val.id === isActive ? 'boxActive' : ''} `} >
                                    <img src={val.img} alt="" className='' />
                                    <span className='text-lg capitalize'>{val.type}</span>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className='flex w-full mb-10'>
                <div className='w-full flex flex-col'>
                    <Form label='Nom :' htmlFor='lastName'  inputClassName={inputClassName} placeholder='Ex: Doe' labelClassName={labelClassName} type="text" />
                </div>
                <div className='w-full flex flex-col'>
                    <Form label='Prénom :' htmlFor='firstName' inputClassName={inputClassName} placeholder='Ex: John' labelClassName={labelClassName} type="text" />
                </div>
            </div>
            <div className='flex w-full mb-10'>
                <div className='w-full flex flex-col'>
                    <Form label='Email :' htmlFor='email' a={func}  inputClassName={inputClassName} placeholder='Ex: johndoe@email.com' labelClassName={labelClassName} type="email" />
                </div>
                <div className='w-full flex flex-col'>
                    <Form label='Téléphone :' mask="+33 (9) 99-99-99-99" htmlFor='tel' inputClassName={inputClassName} placeholder='Ex: +33 (6) 01-02-03-04' labelClassName={labelClassName} type="tel" />
                </div>
            </div>
            <div className='flex w-full mb-10'>
                <div className='w-full flex flex-col'>
                    <Form label='Adresse :' htmlFor='adress' inputClassName={inputClassName} placeholder='Ex: 12 rue de la liberté' labelClassName={labelClassName} type="text" />
                </div>
                <div className='w-full flex flex-col'>
                    <Form label='Ville :' htmlFor='ville' inputClassName={inputClassName} placeholder='Ex: Paris' labelClassName={labelClassName} type="text" />
                </div>
            </div>
        </>
    )
}

export default StepOne