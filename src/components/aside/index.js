import React from 'react'
import './Aside.style.css'
import Logo from '../logo/Logo'
import Nav from '../navbar/nav'

const Aside = () => {
  return (
    <div>
        <div className='aside'>
            <div className='aside-wrapper'>
              <Logo />
              <Nav />
            </div>
        </div>
    </div>
  )
}

export default Aside
