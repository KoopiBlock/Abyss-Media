import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import SanityClient from '../../Client'
import './Hero.css'
import orca from './Asset 1.png'

function Hero() {

    const [heroData, setHeroData] = useState(null)

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)


    useEffect(() => {

        SanityClient.fetch(
            `*[_type == "header"]{
                title,
                body,
                cta
            }`
        )
            .then((data) => setHeroData(data))
            .catch(console.error)

    }, [])

    console.log(heroData)

    return (
        <div className='top'>
            <div className='hero'>
                {heroData && heroData.map((hero, index) => (
                    <div className='banner'>
                        <h1 className='hero-title'>
                            {hero.title}
                        </h1>
                        <p className='hero-value'>
                            {hero.body}
                        </p>
                        <NavLink
                            exact to="/gallery"
                            activeclassname="m"
                            className="hero-links"
                            id='hero-contact' onClick={handleClick}>
                            {hero.cta}
                        </NavLink>
                    </div>
                ))}

            </div>

            <div className='drawing'>
                <img src={orca} alt="e" className='orcas'></img>
            </div>

        </div>
    )
}

export default Hero