import React, { useState, useEffect } from 'react'
import sanityClient from '../../Client.js'
import './Faq.css'

function Faq({faq, index}) {

    const [select, setSelect] = useState(false)

    function toggle() {
        setSelect(select => !select)
    }

    return (
                    <div className='faq-item' key={index}>
                        <div className='faq-title' onClick={toggle}>
                            <h1>{faq.question}</h1>
                            <span className='faq-icon'>{select === true ? '-' : '+'}</span>
                        </div>
                        <div className={select === true ? 'faq-text show' : 'faq-text'} >
                            <p>{faq.answer}</p>
                        </div>
                    </div>
    )
}

export default Faq