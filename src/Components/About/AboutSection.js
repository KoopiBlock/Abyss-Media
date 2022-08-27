import React, { useState, useEffect } from 'react'
import sanityClient from '../../Client'
import test from '..//Benefits/images/Asset-1.png'
import './AboutSection.css'

function AboutSection() {

    const [aboutData, setAboutData] = useState(null)


    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "about"]{
                company,
                companyDescription,
                team,
                teamDescription,
                companyImage{
                    asset->{
                        _id,
                        url
                    },
                   
                },
                teamImage{
                    asset->{
                        _id,
                        url
                    },
                   
                },
                
            }`
        )
            .then((data) => setAboutData(data))
            .catch(console.error)


    }, [])

    return (
        <div>
            {aboutData && aboutData.map((about, index) => (
                <div className='About'>
                    <div className='about-container' id='A'>
                        <img className='about-image' src={about.companyImage.asset.url} alt='e'></img>
                        <div className='text-container'>
                            <h1 className='about-title'>{about.company}</h1>
                            <p className='about-description'>{about.companyDescription}</p>
                        </div>
                    </div>
                    <div className='about-container' id='B'>
                        <img className='about-image' src={about.teamImage.asset.url} alt='e'></img>
                        <div className='text-container'>
                            <h1 className='about-title' id='B-a'>{about.team}</h1>
                            <p className='about-description' id='B-b'>{about.teamDescription}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AboutSection