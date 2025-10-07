import Logo from '../../public/PK-logo.png'; 


export default function Navbar() {
  return (
    <div className="navbar justify-between">
        <div className="flex-none">
            <a href="/">
                <img className="logo-img" src={Logo} alt="Parvathi Kumar logo"></img>
            </a>
        </div>
        <div className="flex-one justify-between">
            <ul className="menu uppercase menu-horizontal px-1">
            <li><a href="#" className="link link-hover">About</a></li>
            <li><a href="#" className="link link-hover">Contact</a> </li>
            <li><a href="#" className="link link-hover">Work</a> </li> 
            </ul>
        </div>
    </div>
  );
}
