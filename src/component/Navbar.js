//rfce
import React, {useState} from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
         <Link to="/" className="navbar-logo">
           柔静<i className="fab fa-gratipay"/>承遠
         </Link>
         <div className='menu-icon' onClick={handleClick}>
           <i className={click? 'fas fa-times': 'fas fa-bars'} />
         </div>
         <ul className={click? 'nav-menu active': 'nav-menu'}>
           <li className='nav-item'>
             <Link to="/" className='nav-links' onClick={closeMobileMenu}>
               主页
             </Link>
            </li>
            <li className='nav-item'>
             <Link to="/ourGreetings" className='nav-links' onClick={closeMobileMenu}>
              我们的㊗️福
             </Link>
            </li>
         </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
