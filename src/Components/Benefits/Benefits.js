import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Benefits.css'
import asset_1 from './images/Asset-1.png'
import asset_2 from './images/Asset-2.png'
import asset_3 from './images/Asset-3.png'
import sanityClient from '../../Client'

function Benefits() {

    const [benefitsData, setBenefitsData] = useState(null)

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    useEffect(() => {

        sanityClient.fetch(
            `*[_type == "benefits"]{
                sectionTitle,
                ctaTitle,
                benefit1,
                benefit2,
                benefit3,
                cta
            }`
        )
            .then((data) => setBenefitsData(data))
            .catch(console.error)

    }, [])


    console.log(benefitsData)

    return (
        <div>
            {benefitsData && benefitsData.map((benefit, index) => (
                <div className='benefits' key={index}>
                    <h1 className='benefits-title'>{benefit.sectionTitle}</h1>
                    <div className='benefits-container'>
                        <img src={asset_1} alt='e' className='benefit-image'></img>
                        <h1 className='cb-title'>{benefit.benefit1}</h1>
                    </div>
                    <div className='benefits-container'>
                        <img src={asset_2} alt='e' className='benefit-image'></img>
                        <h1 className='cb-title'>{benefit.benefit2}</h1>

                    </div>
                    <div className='benefits-container'>
                        <img src={asset_3} alt='e' className='benefit-image'></img>
                        <h1 className='cb-title'>{benefit.benefit3}</h1>
                    </div>
                    <div className='flex-container'>
                        <h1 className='sp-title' id='t2'>{benefit.ctaTitle}</h1>
                        <NavLink
                             to="/contact"
                            activeclassname="m"
                            className="hero-links"
                            id='benefit-contact' onClick={handleClick}>
                            {benefit.cta}
                        </NavLink>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default Benefits