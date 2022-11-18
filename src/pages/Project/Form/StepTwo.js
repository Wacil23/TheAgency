import React, { useEffect, useState } from 'react';
import Form from '../../../components/Form';
import { Text, SimpleGrid, Image, Group, Button } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

const StepTwo = () => {
    const inputClassName = 'w-[78%] border-[#001760b0] border-2 mr-10 inputForm bg-transparent p-2 outline-none';
    const labelClassName = 'text-lg mb-2';
    const [files, setFiles] = useState([]);
    const handleDeleteLogo = () => {
        setFiles([])
    }

    useEffect(() => {
    }, [files])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const resp = useSelector((state) => state.checkChoice)
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch({ type: 'formInfo/setFormInfo', payload: { ...data } })
        dispatch({ type: 'stepper/nextStep' })
        dispatch({ type: 'formInfo/sendFormInfo' })
    };

    const previews = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return (
            <>
                <Image
                    key={index}
                    src={imageUrl}
                    imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
                />
                <span className='cursor-pointer w-fit h-fit' onClick={handleDeleteLogo}>Supprimer</span>
            </>
        );
    });

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='flex items-start flex-col justify-around w-full mt-[5%] ml-[5%]'>
                <div className='flex w-full'>
                    <div className='flex flex-col w-full mb-10'>
                        <span className='text-lg'>Avez vous un site web ?</span>
                        <div className='flex items-center'>
                            <Form register={register} func={(e) => dispatch({ type: 'checkChoice/handleClickRadio1', payload: e.target.value })} htmlFor='checkHasWebsite' inputClassName={inputClassName} labelClassName={labelClassName} labelRadio1="Oui" labelRadio2="Non" />
                        </div>
                        {errors.checkHasWebsite && errors.checkHasWebsite.type === "required" && <span className='text-red-400 pt-2'>Un choix est attendu</span>}
                    </div>
                    {resp[0].responseRadio1 === 'Oui' &&
                        <div className='w-full flex flex-col'>
                            <span className='text-lg'>Je souhaite :</span>
                            <div className='flex'>
                                <Form register={register} func={(e) => dispatch({ type: 'checkChoice/handleClickRadio2', payload: e.target.value })} htmlFor='checkModelWebsite' inputClassName={inputClassName} labelClassName={labelClassName} labelRadio1="Un nouveau site web" labelRadio2="Le rénover" />
                            </div>
                            {errors.checkModelWebsite && errors.checkModelWebsite.type === "required" && <span className='text-red-400 pt-2'>Un choix est attendu</span>}
                        </div>}
                </div>

                <>
                    <div className='flex w-full mb-10'>
                        <div className='w-full flex flex-col'>
                            <Form register={register} label='Le type de site souhaité :' htmlFor='selectionTypeWebsite' inputClassName={inputClassName} placeholder='Ex: John' labelClassName={labelClassName} type='selection' />
                            {errors.checkModelWebsite && errors.checkModelWebsite.type === "required" && <span className='text-red-400 pt-2'>Veuillez séléctionez le type de site voulu</span>}
                        </div>
                        <div className='w-full flex flex-col'>
                            <Form register={register} label='Votre budget :' htmlFor='selectionTypeBudget' inputClassName={inputClassName} labelClassName={labelClassName} type='selection' />
                            {errors.checkModelWebsite && errors.checkModelWebsite.type === "required" && <span className='text-red-400 pt-2'>Veuillez séléctionez le type de site voulu</span>}
                        </div>
                        {/* <div className='w-full flex flex-col'>
                            <Form register={register} label="Adresse de l'ancien site web (si existant)" htmlFor='adressWebsite' inputClassName={inputClassName} placeholder='Ex: https://monsiteweb.com' labelClassName={labelClassName} />
                        </div> */}
                    </div>
                    <div className='flex w-full mb-10'>
                        <div className='w-full flex flex-col'>

                            <Form register={register} label='Logo ?' htmlFor='checkLogo' func={(e) => dispatch({ type: 'checkChoice/handleClickLogo', payload: e.target.value })} inputClassName={inputClassName} labelClassName={labelClassName} labelRadio1="J'en possède déjà un" labelRadio2="J'aimerai que vous vous en occupiez" />
                            {resp[2].responseRadioLogo === "J'en possède déjà un" &&
                                <div>
                                    <Dropzone className='w-[77%] bg-[#0a1a4e] hover:bg-[#fd7e14]' accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
                                        <Text align="center">Cliquer ou glissez déposez un fichier</Text>
                                    </Dropzone>
                                    <SimpleGrid
                                        cols={4}
                                        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                                        mt={previews.length > 0 ? 'xl' : 0}
                                    >
                                        {previews}
                                    </SimpleGrid>
                                </div>}
                        </div>
                    </div>
                </>

                <Group position="center" mt="xl">
                    <Button type='submit' className='font-mabryLight hover:bg-[#ffa31c] bg-[#001760b0]'>Next step</Button>
                </Group>
            </form>
        </>
    )
}

export default StepTwo