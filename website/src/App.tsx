import { About } from './components/About'
import { BookingForm } from './components/BookingForm'
import { ContactCTA } from './components/ContactCTA'
import { FloatingActions } from './components/FloatingActions'
import { Footer } from './components/Footer'
import { HelpCta } from './components/HelpCta'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { HowItWorks } from './components/HowItWorks'
import { MobileActionBar } from './components/MobileActionBar'
import { Navbar } from './components/Navbar'
import { PujaGrid } from './components/PujaGrid'
import { ServiceList } from './components/ServiceList'
import { TopBar } from './components/TopBar'
import { Yagams } from './components/Yagams'
import { YouTubeSection } from './components/YouTubeSection'

export default function App() {
  return (
    <div className="pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <BookingForm />
        <PujaGrid />
        <Yagams />
        <ServiceList />
        <HowItWorks />
        <HelpCta />
        <About />
        <YouTubeSection />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingActions />
      <MobileActionBar />
    </div>
  )
}
