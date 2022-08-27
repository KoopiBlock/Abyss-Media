import React, { useState, useEffect } from 'react'
import sanityClinet from '../../Client'
import './Social_Proof.css'

function SocialProof() {

    const [socialData, setSocialData] = useState(null)


    useEffect(() => {

        sanityClinet.fetch(
            `*[_type == "social"]{
                sectionTitle,
                title1,
                body1,
                title2,
                body2,
            }`
        )
            .then((data) => setSocialData(data))
            .catch(console.error)

    }, [])


    return (
        <div>
            {socialData && socialData.map((social, index) => (
                <div className='social-proof'>
                    <h1 className='sp-title'>{social.sectionTitle}</h1>
                    <div className='social-div'>
                        <div className='sp-container'>
                            <h1 className='c-title'>{social.title1}</h1>
                            <p className='sp-paragraf'>
                                {social.body1}
                            </p>
                        </div>
                        <div className='sp-container'>
                            <h1 className='c-title'>{social.title2}</h1>
                            <p className='sp-paragraf'>
                                {social.body2}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SocialProof