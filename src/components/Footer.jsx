import Logo from '/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'; 

library.add(fas, far, fab)

export default function Footer(){
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText("parvathi.n.kumar@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };



    return (
        <footer className="footer sm:footer-horizontal items-center justify-between p-4">
        <div className="grid-flow-col gap-5 items-center">
            <img className="logo-img mx-2" src={Logo} alt="Parvathi Kumar logo"/>
            <p> Coded with React, DaisyUI, and TailwindCSS</p>
        </div>
        <div className="grid grid-flow-col gap-4"> 
            <a onClick={handleCopyClick} className="tooltip" data-tip={copied ? "Copied!" : "parvathi.n.kumar@gmail.com"}> <FontAwesomeIcon icon="fa-regular fa-envelope"/> </a>
            <a aria-label="Parvathi's LinkedIn Profile" href="https://www.linkedin.com/in/parvathi-kumar" target="_blank"><FontAwesomeIcon icon="fa-brands fa-linkedin" /> </a>
            <a aria-label="Parvathi's Github Profile" href="https://www.github.com/paaaarv" target="_blank"><FontAwesomeIcon icon="fa-brands fa-github" /></a>    
        </div>
    </footer>
    )
}