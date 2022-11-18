import React, { useEffect, useState } from 'react';
import Form from '../../../components/Form';
import Freelance from '../../../assets/img/graphic-designer-at-work.png';
import Company from '../../../assets/img/office.png';
import { Button, Group } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";


const StepOne = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const inputClassName = 'w-[78%] border-[#001760b0] border-2 mr-10 inputForm bg-transparent p-2 outline-none';
    const labelClassName = 'text-lg mb-2';
    const [error, setError] = useState();
    const [isActive, setIsActive] = useState();
    const [youAre, setYouAre] = useState();



    const genderType = [
        {
            id: 1,
            type: 'un particulier',
            img: Freelance
        },
        {
            id: 2,
            type: 'une entreprise',
            img: Company
        }
    ]
    const onClick = (id) => {
        setIsActive(id);
    };

    useEffect(() => {

    }, [error, errors, isActive])

    const onSubmit = (data) => {
        if (isActive !== undefined) {
            dispatch({ type: 'formInfo/setFormInfo', payload: { ...data, youAre } })
            dispatch({ type: 'stepper/nextStep' })
        } else {
            setError('Un choix est requis')
        }

    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='flex items-start flex-col justify-around w-full mt-[5%] ml-[5%]'>
                <div className='flex my-8 flex-col w-full'>
                    <span className='text-lg mb-2'>Vous êtes :</span>
                    <div className='flex justify-around content-start w-[89%] items-center'>
                        {genderType.map((val, index,) => {
                            return (
                                <div>
                                    <div key={index} onClick={() => { onClick(val.id); setYouAre(val.type) }} className={`w-32 h-32 border-2 border-[#001760b0] items-center flex flex-col justify-end  boxGender ${val.id === isActive ? 'boxActive' : ''} `} >
                                        <img src={val.img} alt="" />
                                        <span className='text-lg capitalize'>{val.type}</span>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                    {error && <p className='text-red-400 pt-2'>{error}</p>}
                </div>
                <div className='flex w-full mb-10'>
                    <div className='w-full flex flex-col'>
                        <Form register={register} label='Nom :'  htmlFor='lastName' inputClassName={inputClassName} placeholder='Ex: Doe' labelClassName={labelClassName} type="text" />
                        {errors.lastName && errors.lastName.type === "required" && <span className='text-red-400 pt-2'>Le nom est requis</span>}
                    </div>
                    <div className='w-full flex flex-col'>
                        <Form register={register} label='Prénom :' htmlFor='firstName' inputClassName={inputClassName} placeholder='Ex: John' labelClassName={labelClassName} type="text" />
                        {errors.firstName && errors.firstName.type === "required" && <span className='text-red-400 pt-2'>Le prénom est requis</span>}
                    </div>
                </div>
                <div className='flex w-full mb-10'>
                    <div className='w-full flex flex-col'>
                        <Form register={register} label='Email :' htmlFor='email' inputClassName={inputClassName} placeholder='Ex: johndoe@email.com' labelClassName={labelClassName} />
                        {errors.email && errors.email.type === "required" && <span className='text-red-400 pt-2'>L'email est requis</span>}
                        {errors.email && errors.email.type === "pattern" && <span className='text-red-400 pt-2'>L'email est n'est pas bon</span>}
                    </div>
                    <div className='w-full flex flex-col'>
                        <Form register={register} label='Téléphone :' mask="+33 9 99-99-99-99" htmlFor='tel' inputClassName={inputClassName} placeholder='Ex: +33 6 01-02-03-04' labelClassName={labelClassName} type="tel" />
                        {errors.tel && errors.tel.type === "required" && <span className='text-red-400 pt-2'>Un numéro de téléphone est requis</span>}
                        {errors.tel && errors.tel.type === "pattern" && <span className='text-red-400 pt-2'>Le numero de téléphone est incorrect</span>}
                    </div>
                </div>
                <div className='flex w-full mb-10'>
                    <div className='w-full flex flex-col'>
                        <Form register={register} label='Adresse :' htmlFor='adress' inputClassName={inputClassName} placeholder='Ex: 12 rue de la liberté' labelClassName={labelClassName} type="text" />
                        {errors.adress && errors.adress.type === "required" && <span className='text-red-400 pt-2'>Une adresse est attendue</span>}
                    </div>
                    <div className='w-full flex flex-col'>
                        <Form register={register} label='Ville :' htmlFor='ville' inputClassName={inputClassName} placeholder='Ex: Paris' labelClassName={labelClassName} type="text" />
                        {errors.ville && errors.ville.type === "required" && <span className='text-red-400 pt-2'>La ville est requise</span>}
                    </div>
                </div>
                <Group position="center" mt="xl">
                    <Button type='submit' className='font-mabryLight hover:bg-[#ffa31c] bg-[#001760b0]'>Next step</Button>
                </Group>
            </form>
        </>
    )
}

export default StepOne