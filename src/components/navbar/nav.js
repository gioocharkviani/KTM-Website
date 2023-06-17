import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll'
import { Navdata } from './NavData'

const Nav = () => {
  return (
    <div className='navbar'>
        <ul>
          {Navdata.map(nav => {
            return (
              <li>
                <Link activeClass="activeNav" className='navLi' to={nav.path} spy={true} smooth={true} offset={0} duration={500}>
                  <span>{nav.name}</span>
                <div className='navicon'><img src={nav.navicon} /></div>
                </Link>
              </li>
            )
          })}
        </ul>
    </div>
  )
}

export default Nav
