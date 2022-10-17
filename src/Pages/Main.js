import React, {useEffect, useState} from 'react'
import Benefits from '../Components/Benefits/Benefits'
import Contact from '../Components/Contact/Contact'
import Faq from '../Components/FAQ/Faq'
import Features from '../Components/Features/Features'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import SocialProof from '../Components/Social-Proof/Social_Proof'
import sanityClient from '../Client'

function Main() {
    const [faqData, setFaqData] = useState(null)

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
        <div className='main'>
            <Hero />
            <SocialProof />
            <Benefits />
            <Features />
            <div className='faq-wrap'>
                <div className='accordion'>  
                    {faqData && faqData.map((faq, index) => (
                    <Faq faq={faq} index={index} key={index}/>
                    ))}
                </div>
            </div>
            <Contact />
            <Footer />
        </div>
    )
}

export default Main