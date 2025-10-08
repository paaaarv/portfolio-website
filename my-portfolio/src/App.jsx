import './App.css'
import { motion } from "motion/react"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './pages/about'
function App() {

  return (
    <>
      <Navbar/>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Hero/>
      </motion.div>
      <About/> 
      <Footer/> 
    </>
  )
}

export default App
