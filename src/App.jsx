import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import PortfolioWork from './pages/PortfolioWork'
import About from './pages/About'
import Oferta from './pages/Oferta'
import Services from './pages/Services'
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
          <Route path="/si" element={<Navigate to="/" replace />} />
          <Route path="/experiencia" element={<Portfolio />} />
          <Route path="/portafolio" element={<PortfolioWork />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/contacto" element={<Navigate to="/servicios" replace />} />
          <Route path="/precios/publicidad" element={<Navigate to="/servicios" replace />} />
          <Route path="/oferta" element={<Oferta />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/planes" element={<Navigate to="/servicios" replace />} />
          <Route path="/planes/redes" element={<Navigate to="/servicios" replace />} />
          <Route path="/planes/publicidad" element={<Navigate to="/servicios" replace />} />
          <Route path="/planes/proximamente" element={<Navigate to="/servicios" replace />} />
          <Route path="/planes/detalleredessociales" element={<Navigate to="/servicios" replace />} />
          <Route path="/planes/detallepublicidad" element={<Navigate to="/servicios" replace />} />
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
