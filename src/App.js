import React from 'react'
import Navbar from './components/NavBar'
import Home from './components/Home'
import AboutSection from './components/AboutSection'
import TokenomicSection from './components/TokenomicSection'
import RoadMapSection from './components/RoadMapSection'
import FAQ from './components/FAQ'
import Dapp from './components/Dapp'
import FooterSection from './components/FooterSection'

const App = () => {
  return (
    <>
      <div className='bg-gray-800'>
        <Navbar />
        <Home />
        <AboutSection />
        <TokenomicSection />
        <RoadMapSection />
        <FAQ/>
        <Dapp/>
        <FooterSection/>
      </div>

    </>
  )
}

export default App