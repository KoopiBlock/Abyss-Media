import React, { useRef, useState, useEffect } from 'react'
import sanityClient from '../../Client'
import emailjs from '@emailjs/browser'
import './Contact.css'
import meduza from './jellyfish.png'




function Contact() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_wdxd3zs',
            'template_ppxk5ge',
            form.current,
            '88Kc1OO783prebvJr')
            .then((result) => {
                console.log(result.text)
                alert("your massege has been sent we will return as soon as possible!")
            }, (error) => {
                console.log(error.text)
            })
    }

    const [contactData, setContactData] = useState(null)

    useEffect(() => {

        sanityClient.fetch(
            `*[_type == "contact"]{
                title1,
                title2,
                cta,
            }`
        )
            .then((data) => setContactData(data))
            .catch(console.error)
    }, [])

    return (
        <div className='contact'>
            {contactData && contactData.map((conatct, index) => (
                <div className='contact-contanier'>
                    <form className='form' ref={form} onSubmit={sendEmail}>
                        <h1 className='cta-title'>{conatct.title1}</h1>
                        <h1 className='head'>{conatct.title2}</h1>
                        <label className='labels'>Name</label>
                        <input type="text" name="user_name" className='inputs' />
                        <label className='labels'>Email</label>
                        <input type="email" name="user_email" className='inputs' />
                        <label className='labels'>Message</label>
                        <textarea name="message" className='text-input' />
                        <input type="submit" value={conatct.cta} className='input-btn' />
                    </form>

                    <div className='image-div'>
                        <img src={meduza} alt='e' className='contact-image'></img>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Contact