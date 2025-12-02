import React from 'react'
import HeroSection from '../Components/HeroSection'
import AboutSection from '../Components/AboutSection'
import ServicesSection from '../Components/ServicesSection'
import TechStack from '../Components/TechStack'
import SmartSection from '../Components/SmartSection'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <AboutSection/>
        <ServicesSection/>
        <TechStack/>
        <SmartSection/>
    </div>
  )
}

export default Home