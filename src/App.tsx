import HeroSection from './components/Hero/Hero'
import HomeSection from './components/HomeSection'

const App = () => {
  return (
    <>
    <HeroSection 
      title="Explore and share the Kenyan coast" 
      description="The Swahili are not a “tribe” in any definable sense..."/>
      <main id="main">
        <HomeSection/>
      </main>
    </>
  )
}

export default App
