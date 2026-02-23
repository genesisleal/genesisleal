import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import PortfolioComingSoon from './pages/PortfolioComingSoon'
import About from './pages/About'
import Contact from './pages/Contact'
import PricingPublicidad from './pages/PricingPublicidad'
import Marketplace from './pages/Marketplace'
import PlanDetailRedesSociales from './pages/PlanDetailRedesSociales'
import ComingSoon from './pages/ComingSoon'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <Header />
      <main style={{ paddingTop: 'var(--header-height)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiencia" element={<Portfolio />} />
          <Route path="/portafolio" element={<PortfolioComingSoon />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/precios/publicidad" element={<PricingPublicidad />} />
          <Route path="/planes" element={<Marketplace />} />
          <Route path="/planes/detalleredessociales" element={<PlanDetailRedesSociales />} />
          <Route path="/planes/proximamente" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
