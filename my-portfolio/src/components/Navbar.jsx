import Logo from '../../public/PK-logo.png'; 
import { useEffect } from "react"; 
import { motion } from 'framer-motion'; 

export default function Navbar() {

  useEffect(() => {
    const onScroll = () => window.scrollY > 20;
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y:  0, opacity: 1}}
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{ position: 'fixed', top: 0, width: '100%' }}
    >
    <div className="navbar justify-between">
        <div className="flex-none">
            <a href="/">
                <img className="logo-img" src={Logo} alt="Parvathi Kumar logo"></img>
            </a>
        </div>
        <div className="flex-one justify-between">
            <ul className="menu uppercase menu-horizontal px-1">
            <li><a href="#" className="link link-hover">About</a></li>
            <li><a href="#" className="link link-hover">Work</a> </li> 
            </ul>
        </div>
    </div>
    </motion.nav>
  );
}
