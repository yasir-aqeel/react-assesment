import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { DifferenceSection } from './components/sections/DifferenceSection'
import { FAQSection } from './components/sections/FAQSection'
import { FeeFreeSection } from './components/sections/FeeFreeSection'
import { HeroSection } from './components/sections/HeroSection'
import { ShowcaseSection } from './components/sections/ShowcaseSection'
import { SignUpAdSection } from './components/sections/SignUpAdSection'

function App() {
  return (
    <div className="min-h-screen" id="top">
      <Header />
      <main>
        <HeroSection />
        <DifferenceSection />
        <FeeFreeSection />
        <ShowcaseSection />
        <SignUpAdSection />
        <FAQSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
