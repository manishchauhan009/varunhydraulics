import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import WhatsAppButton from './components/ui/WhatsAppButton'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          {/* future: /shop/* */}
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton phone="919998748236" message="Hi Varun Hydraulics — I need service for my forklift." />
    </div>
  )
}
