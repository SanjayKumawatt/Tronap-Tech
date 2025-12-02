import React from 'react'
import AboutHero from '../Components/AboutHero'
import LeadingCompanySection from '../Components/LeadingCompanySection'
import WhoWeAre from '../Components/WhoWeAre'
import SmartSection from '../Components/SmartSection'

const About = () => {
    return (
        <div>
            <AboutHero />
            <LeadingCompanySection/>
            <WhoWeAre/>
            <SmartSection/>
        </div>
    )
}

export default About