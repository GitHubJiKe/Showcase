import { useState } from 'react'
import HeroSection from './components/HeroSection'
import ProductGallery from './components/ProductGallery'
import FeatureHighlights from './components/FeatureHighlights'
import SpecificationsPanel from './components/SpecificationsPanel'
import SocialProof from './components/SocialProof'
import PricingModule from './components/PricingModule'


function App() {
  const [activeTab, setActiveTab] = useState('specs')

  return (
    <div className="app">
      <HeroSection />
      <ProductGallery />
      <FeatureHighlights />
      <SpecificationsPanel activeTab={activeTab} setActiveTab={setActiveTab} />
      <SocialProof />
      <PricingModule />
    </div>
  )
}

export default App
