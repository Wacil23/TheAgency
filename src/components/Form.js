import React, { useState, useEffect } from 'react'
import ReactInputMask from 'react-input-mask'
import '../styles/Project/form.css'
import { Radio } from '@mantine/core';


const Form = ({ htmlFor, labelClassName, inputClassName, placeholder, type = '', label = '', mask = "", labelRadio1, labelRadio2, orientation = 'horizontal', func, register }) => {

    const [htmlTel, setHtmlTel] = useState(false)
    const [htmlSelectType, setHtmlSelectType] = useState(false)
    const [htmlSelectBudget, setHtmlSelectBudget] = useState(false)
    const [htmlCheck, setHtmlCheck] = useState(false)
    const [htmlEmail, setHtmlEmail] = useState(false)

    const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/g;
    const phonePattern = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/g

    useEffect(() => {
        if (type === 'tel') {
            setHtmlTel(true)
        }
        if (htmlFor === 'selectionTypeWebsite') {
            setHtmlSelectType(true)
        }
        if (htmlFor === 'selectionTypeBudget') {
            setHtmlSelectBudget(true)
        }
        if (htmlFor === 'checkHasWebsite' || htmlFor === 'checkModelWebsite' || htmlFor === 'checkLogo') {
            setHtmlCheck(true)
        }
        if (htmlFor === 'email') {
            setHtmlEmail(true)
        }
    }, [htmlFor, type])


    return (
        <>
            <label htmlFor={htmlFor} className={labelClassName}>{label}</label>

            {htmlTel &&
                <ReactInputMask {...register(htmlFor, { required: true, pattern: phonePattern })} placeholder={placeholder} className={inputClassName} mask={mask} type={type} />
            }
            {htmlSelectType &&
                <select {...register(htmlFor, { required: true })} className={inputClassName}>
                    <option className='bg-transparent text-white' value="">--Choisir une option--</option>
                    <option className='bg-transparent text-white' value="vitrine">Site vitrine</option>
                    <option className='bg-transparent text-white' value="ecommerce">Site E-commerce</option>
                    <option className='bg-transparent text-white' value="blog">Blog</option>
                </select>
            }
            {htmlSelectBudget &&
                <select {...register(htmlFor, { required: true })} className={inputClassName}>
                    <option className='bg-transparent text-white' value="">--Choisir une option--</option>
                    <option className='bg-transparent text-white' value="0-5000">0€ - 5'000€</option>
                    <option className='bg-transparent text-white' value="5000-10000">5'000€ - 10'000€</option>
                    <option className='bg-transparent text-white' value=">10000"> {'>'} 10'000€</option>
                </select>
            }
            {htmlCheck &&
                <>
                    <Radio.Group orientation={orientation}>
                        <Radio onClick={func} value={labelRadio1} color='orange' label={labelRadio1} {...register(htmlFor, { required: true })} />
                        <Radio onClick={func} value={labelRadio2} color="orange" label={labelRadio2} {...register(htmlFor, { required: true })} />
                    </Radio.Group>
                </>
            }
            {!htmlTel && !htmlSelectBudget && !htmlSelectType && !htmlCheck && !htmlEmail &&
                <input placeholder={placeholder} {...register(htmlFor, { required: true })} className={inputClassName} type={type} />
            }
            {htmlEmail && <input placeholder={placeholder} {...register(htmlFor, { required: true, pattern: emailPattern })} className={inputClassName} type={type} />}
        </>
    )
}

export default Form