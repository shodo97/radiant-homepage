import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Framework from './components/Framework'
import Industries from './components/Industries'
import AIAgents from './components/AIAgents'
import Pillars from './components/Pillars'
import EnterpriseSolutions from './components/EnterpriseSolutions'
import WhoWeAre from './components/WhoWeAre'
import Outcomes from './components/Outcomes'
import CaseStudies from './components/CaseStudies'
import WhyRadiant from './components/WhyRadiant'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Framework />
        <Industries />
        <AIAgents />
        <Pillars />
        <EnterpriseSolutions />
        <WhoWeAre />
        <Outcomes />
        <CaseStudies />
        <WhyRadiant />
        <GetInTouch />
      </main>
      <Footer />
    </>
  )
}

export default App
