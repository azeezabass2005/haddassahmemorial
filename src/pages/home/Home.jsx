import React from 'react'
import Hero from '../../components/Hero'
import AboutSection from '../../components/AboutSection'
import Service from '../../components/Service'
import Benefits from '../../components/Benefits'
import Contact from '../../components/Contact'


const Home = () => {
  return (
    <div className='sm:px-16 md:px-24 px-4 py-4 md:pt-12 flex flex-col md:mt-20 mt-20'>
      <Hero />
      <AboutSection />
      <Service />
      <Benefits />
      <Contact />
    </div>
  )
}

export default Home