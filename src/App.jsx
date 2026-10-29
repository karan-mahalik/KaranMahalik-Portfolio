import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import About from './components/About'
import Certifications from './components/Certifications'
import Services from './components/Services'
import SkillLab from './components/SkillLab'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MessengerModal from './components/MessengerModal'

function App() {
  const [messengerOpen, setMessengerOpen] = useState(false)

  return (
    <div className="bg-[#050816] text-[#e2e8f0] min-h-screen relative font-sans selection:bg-[#00f5ff]/20 selection:text-white">
      <Navbar onOpenMessenger={() => setMessengerOpen(true)} />
      
      <main>
        <Hero onOpenMessenger={() => setMessengerOpen(true)} />
        <Highlights />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Certifications />
        <Services />
        <SkillLab />
        <Contact />
      </main>

      <Footer />

      <MessengerModal
        isOpen={messengerOpen}
        onClose={() => setMessengerOpen(false)}
      />
    </div>
  )
}

export default App
