import './App.css'
import { motion } from "framer-motion"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home'
import About from './pages/about'; 
import Projects from './pages/projects'; 

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
