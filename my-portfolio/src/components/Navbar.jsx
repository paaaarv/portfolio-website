import Logo from '../../public/PK-logo.png'; 
import { useEffect } from "react"; 
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom'; 

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
      style={{ width: '100%', padding: '1em'}}
    >
    <div className="navbar justify-between">
        <div className="flex-none">
            <Link to="/">
                <img className="logo-img" src={Logo} alt="Parvathi Kumar logo"></img>
            </Link>
        </div>
        <div className="flex-one justify-between">
            <ul className="menu uppercase menu-horizontal px-1">
            <li><Link to="/" className="link link-hover">Home</Link></li>
            <li><Link to="/about" className="link link-hover">About</Link></li>
            <li><Link to="/work" className="link link-hover">Work</Link> </li> 
            </ul>
        </div>
    </div>
    </motion.nav>
  );
}
