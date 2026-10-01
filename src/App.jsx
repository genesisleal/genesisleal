import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

const Home = lazy(() => import('./pages/Home'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const PortfolioWork = lazy(() => import('./pages/PortfolioWork'))
const About = lazy(() => import('./pages/About'))
const Oferta = lazy(() => import('./pages/Oferta'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))

const BARE_ROUTES = ['/oferta']

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

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
        <Suspense fallback={<div className="route-loading" aria-label="Cargando contenido" />}>
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
            <Route path="/servicios/gestion-redes-sociales" element={<ServiceDetail serviceKey="social" />} />
            <Route path="/servicios/meta-ads" element={<ServiceDetail serviceKey="ads" />} />
            <Route path="/servicios/creacion-de-contenido" element={<ServiceDetail serviceKey="content" />} />
            <Route path="/servicios/automatizacion-chatbots" element={<ServiceDetail serviceKey="automation" />} />
            <Route path="/planes" element={<Navigate to="/servicios" replace />} />
            <Route path="/planes/redes" element={<Navigate to="/servicios" replace />} />
            <Route path="/planes/publicidad" element={<Navigate to="/servicios" replace />} />
            <Route path="/planes/proximamente" element={<Navigate to="/servicios" replace />} />
            <Route path="/planes/detalleredessociales" element={<Navigate to="/servicios" replace />} />
            <Route path="/planes/detallepublicidad" element={<Navigate to="/servicios" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
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
