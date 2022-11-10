import React, { useState, useEffect } from 'react'
import ReactInputMask from 'react-input-mask'
import '../styles/Project/form.css'
import { Radio } from '@mantine/core';
import { useForm } from '@mantine/form';

const Form = ({ a, htmlFor, labelClassName, inputClassName, placeholder, type = '', label = '', mask = "", labelRadio1, labelRadio2, orientation = 'horizontal', func }) => {

    const [htmlTel, setHtmlTel] = useState(false)
    const [htmlSelect, setHtmlSelect] = useState(false)
    const [htmlCheck, setHtmlCheck] = useState(false)


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
    }, [htmlFor, type, func])

    

    return (
        <>
            <label htmlFor={htmlFor} className={labelClassName}>{label}</label>
            {htmlTel &&
                <ReactInputMask placeholder={placeholder} className={inputClassName} mask={mask} type={type} required />
            }
            {htmlSelect &&
                <select className={inputClassName} name="sites" id="site-select">
                    <option className='bg-transparent text-white' value="">--Choisir une option--</option>
                    <option className='bg-transparent text-white' value="vitrine">Site vitrine</option>
                    <option className='bg-transparent text-white' value="ecommerce">Site E-commerce</option>
                    <option className='bg-transparent text-white' value="blog">Blog</option>
                </select>
            }
            {htmlCheck &&
                <>
                    <Radio.Group orientation={orientation}>
                        <Radio onClick={func} value={labelRadio1} color='orange' label={labelRadio1} />
                        <Radio onClick={func} value={labelRadio2} color="orange" label={labelRadio2} />
                    </Radio.Group>
                </>
            }
            {!htmlTel && !htmlSelect && !htmlCheck && <input placeholder={placeholder} className={inputClassName} type={type} required />}
        </>
    )
}

export default Form