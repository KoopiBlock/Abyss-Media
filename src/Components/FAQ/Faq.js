import React, { useState, useEffect } from 'react'
import sanityClient from '../../Client.js'
import './Faq.css'

function Faq() {

    const [select, setSelect] = useState(false)

    const [faqData, setFaqData] = useState(null)

    function toggle() {
        setSelect(select => !select)
    }


    useEffect(() => {

        sanityClient.fetch(
            `*[_type == "faq"]{
                question,
                answer,
            }`
        )
            .then((data) => setFaqData(data))
            .catch(console.error)
    }, [])

    return (

        <div className='faq-wrap'>
            <div className='accordion'>
                {faqData && faqData.map((faq, index) => (
                    <div className='faq-item'>
                        <div className='faq-title' onClick={toggle}>
                            <h1>{faq.question}</h1>
                            <span className='faq-icon'>{select === true ? '-' : '+'}</span>
                        </div>
                        <div className={select === true ? 'faq-text show' : 'faq-text'}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}

export default Faq