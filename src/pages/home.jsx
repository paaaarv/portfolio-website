import { motion } from 'framer-motion'; 
import Hero from '../components/Hero'; 
import Contact from '../components/Contact';
import ProjectCard from '../components/ProjectCard'; 
import About from '../components/About';

export default function Home(){
    return(
      <div id="portfolio-container">
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
          <Hero/>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}>
          <ProjectCard/>
        </motion.div>
          <About/>
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
          <Contact/>
      </motion.div>
      </div>

    )
}