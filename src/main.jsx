import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Never leave the document hidden if a route resource fails unexpectedly.
window.setTimeout(() => {
  document.documentElement.classList.remove('app-booting')
}, 4000)
