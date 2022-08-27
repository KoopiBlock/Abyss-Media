import React, { useState, useEffect } from 'react'
import sanityClient from '../../Client'
import './Features.css'


function Features() {

    const [featuresData, setFeaturesData] = useState(null)

    useEffect(() => {

        sanityClient.fetch(
            `*[_type == "features"]{
                title,
                body,
                featureImage{
                asset->{
                _id,
                url,  
              },
              }
              }`
        )
            .then((data) => setFeaturesData(data))
            .catch(console.error)

    }, [])

    console.log(featuresData)


    return (
        <div className='featured'>

            <br></br>
            <div className='flex-featured'>
                {featuresData && featuresData.map((feature, index) => (
                    <div className='featured-container'>
                        <img src={feature.featureImage.asset.url} alt='e' className='featured-image'></img>
                        <h1 className='featured-title' id='t1'>{feature.title}</h1>
                        <p className='featured-text'>{feature.body} </p>
                    </div>
                ))}
            </div>
            <h1 className='sp-title' id='w'>F A Q</h1>
        </div>
    )
}

export default Features