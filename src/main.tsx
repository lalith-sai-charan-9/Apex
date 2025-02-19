import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import About from './pages/About'
import CleaningServices from './pages/CleaningServices'
import OutdoorServices from './pages/OutdoorServices'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/cleaning-services" element={<CleaningServices />} />
        <Route path="/outdoor-services" element={<OutdoorServices />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
