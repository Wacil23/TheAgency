import React, { useState, useEffect } from 'react'
import ReactInputMask from 'react-input-mask'
import '../styles/Project/form.css'
import { Radio } from '@mantine/core';


const Form = ({ htmlFor, labelClassName, inputClassName, placeholder, type = '', label = '', mask = "", labelRadio1, labelRadio2, orientation = 'horizontal', func, register }) => {

    const [htmlTel, setHtmlTel] = useState(false)
    const [htmlSelect, setHtmlSelect] = useState(false)
    const [htmlCheck, setHtmlCheck] = useState(false)
    const [htmlEmail, setHtmlEmail] = useState(false)

    const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/g;
    const phonePattern = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/g

    useEffect(() => {
        if (type === 'tel') {
            setHtmlTel(true)
        }
        if (htmlFor === 'selectionTypeWebsite') {
            setHtmlSelect(true)
        }
        if (htmlFor === 'checkHasWebsite' || htmlFor === 'checkModelWebsite' || htmlFor === 'checkLogo') {
            setHtmlCheck(true)
        }
        if(htmlFor === 'email'){
            setHtmlEmail(true)
        }

    }, [htmlFor, type])


    return (
        <>
            <label htmlFor={htmlFor} className={labelClassName}>{label}</label>

            {htmlTel &&
                <ReactInputMask {...register(htmlFor, { required: true, pattern: phonePattern })} placeholder={placeholder} className={inputClassName} mask={mask} type={type} />
            }
            {htmlSelect &&
                <select {...register(htmlFor, { required: true })} className={inputClassName} name="sites" id="site-select">
                    <option className='bg-transparent text-white' value="">--Choisir une option--</option>
                    <option className='bg-transparent text-white' value="vitrine">Site vitrine</option>
                    <option className='bg-transparent text-white' value="ecommerce">Site E-commerce</option>
                    <option className='bg-transparent text-white' value="blog">Blog</option>
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
            {!htmlTel && !htmlSelect && !htmlCheck && !htmlEmail &&
                <input placeholder={placeholder} {...register(htmlFor, { required: true })} className={inputClassName} type={type} />
            }
            {htmlEmail && <input placeholder={placeholder} {...register(htmlFor, { required: true, pattern: emailPattern })} className={inputClassName} type={type} />}
        </>
    )
}

export default Form