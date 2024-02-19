import CallToAction from './components/CTA/CallToAction'
import HeroSection from './components/Hero/Hero'
import HomeSection from './components/HomeSection'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <>
    <HeroSection/>
      <main id="main">
        <HomeSection/>
        <CallToAction/>
        <Testimonials/>
      </main>
    </>
  )
}

export default App
