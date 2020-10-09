import React, { useState } from 'react';
import { MenuItems } from './MenuItem'
import './Navbar.css';

function Navigation() {

  const [navbar, setNavBar] = useState(false);

  const handleClick = (e) => {
    navbar ? setNavBar(false) : setNavBar(true);
  }

  return (
    <nav className="navbarItems">
      {/* <h1 className="navbar-logo">Dani<i className="fab fa-react"></i>Portfolio</h1> */}
      <div className="menu-icon" onClick={handleClick}>
        <i className={navbar ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={navbar ? 'nav-menu active' : 'nav-menu'}>
        {
          MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={item.cName}
                  href={item.url}
                  target={item.target ? "_blank" : null}
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
              </li>
            )
          })
        }
      </ul>
    </nav >
  );
}

export default Navigation;

