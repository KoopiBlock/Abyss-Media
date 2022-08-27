import React from 'react'
import Benefits from '../Components/Benefits/Benefits'
import Contact from '../Components/Contact/Contact'
import Faq from '../Components/FAQ/Faq'
import Features from '../Components/Features/Features'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import SocialProof from '../Components/Social-Proof/Social_Proof'

function Main() {
    return (
        <div className='main'>
            <Hero />
            <SocialProof />
            <Benefits />
            <Features />
            <Faq />
            <Contact />
            <Footer />
        </div>
    )
}

export default Main