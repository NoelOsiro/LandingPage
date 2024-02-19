import React from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import HomeSection from './components/HomeSection'

const App = () => {
  return (
    <>
    <Header/>
    <HeroSection 
      title="Explore and share the Kenyan coast" 
      description="The Swahili are not a “tribe” in any definable sense..."/>
      <main id="main">
        <HomeSection/>
      </main>
    <Footer/>
    </>
  )
}

export default App
