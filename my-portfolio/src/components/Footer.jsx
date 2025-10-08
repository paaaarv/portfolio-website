import Logo from '../../public/PK-logo.png'

export default function Footer(){
    return (
        <footer className="footer sm:footer-horizontal justify-between p-4">
        <div className="grid-flow-row">
            <img className="logo-img" src={Logo} alt="Parvathi Kumar logo"/>
        </div>
        <nav>
            <h6 className="footer-title">Services</h6>
             <div className="grid grid-flow-col gap-4">
            <a className="link link-hover">About</a>
            <a className="link link-hover">Work</a>
            </div>
        </nav>
        <div id="contact-icons"> 
            <h6 className="footer-title">Contact</h6>
            <p> parvathi.n.kumar@gmail.com</p>
            
        </div>
    </footer>
    )
}