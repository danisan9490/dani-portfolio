import React, { useState } from 'react';
import { MenuItems } from './MenuItem';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navigation() {

  const [navbar, setNavBar] = useState(false);

  const handleClick = (e) => {
    navbar ? setNavBar(false) : setNavBar(true);
  }

  return (
    <nav className="navbarItems">
      <div className="menu-icon" onClick={handleClick}>
        <i className={navbar ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={navbar ? 'nav-menu active' : 'nav-menu'}>
        {
          MenuItems.map((item, index) => {
            console.log(item)
            return (
              <li key={index}>
                <Link
                  onClick={handleClick}
                  className={item.cName}
                  to={item.url}
                  smooth={true}
                  duration={1000}
                  target={item.target ? "_blank" : null}
                  rel="noopener noreferrer"
                >
                  {item.title}

                </Link>
              </li>
            )
          })
        }
      </ul>
    </nav >
  );
}

export default Navigation;

