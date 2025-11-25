import { motion } from 'framer-motion'; 
import Hero from '../components/Hero'; 
import Contact from '../components/Contact';

export default function Home(){
    return(
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Hero/>
        <Contact/>
      </motion.div>

    )
}