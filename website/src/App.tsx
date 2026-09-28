import { About } from './components/About'
import { ContactCTA } from './components/ContactCTA'
import { FloatingActions } from './components/FloatingActions'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { HowItWorks } from './components/HowItWorks'
import { Navbar } from './components/Navbar'
import { PujaGrid } from './components/PujaGrid'
import { ServiceList } from './components/ServiceList'
import { TopBar } from './components/TopBar'
import { Yagams } from './components/Yagams'
import { YouTubeSection } from './components/YouTubeSection'

export default function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <PujaGrid />
        <Yagams />
        <ServiceList />
        <HowItWorks />
        <About />
        <YouTubeSection />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
