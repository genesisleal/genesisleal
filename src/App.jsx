import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import PortfolioWork from './pages/PortfolioWork'
import About from './pages/About'
import Contact from './pages/Contact'
import PricingPublicidad from './pages/PricingPublicidad'
import Oferta from './pages/Oferta'
import Marketplace from './pages/Marketplace'
import PlanDetailRedesSociales from './pages/PlanDetailRedesSociales'
import ComingSoon from './pages/ComingSoon'
import NotFound from './pages/NotFound'

const BARE_ROUTES = ['/oferta']

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function Layout() {
  const { pathname } = useLocation()
  const isBare = BARE_ROUTES.includes(pathname)

  useEffect(() => {
    document.body.classList.toggle('bare-route', isBare)
    return () => document.body.classList.remove('bare-route')
  }, [isBare])

  return (
    <>
      {!isBare && <CustomCursor />}
      {!isBare && <Header />}
      <main style={{ paddingTop: isBare ? 0 : 'var(--header-height)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiencia" element={<Portfolio />} />
          <Route path="/portafolio" element={<PortfolioWork />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/precios/publicidad" element={<PricingPublicidad />} />
          <Route path="/oferta" element={<Oferta />} />
          <Route path="/planes" element={<Marketplace />} />
          <Route path="/planes/detalleredessociales" element={<PlanDetailRedesSociales />} />
          <Route path="/planes/proximamente" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isBare && <Footer />}
    </>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  )
}

export default App
