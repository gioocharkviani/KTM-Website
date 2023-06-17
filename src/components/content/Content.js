import React from 'react'

import Homesec from '../../sections/homesection/index'
import News from '../../sections/newssection/index'
import Motorsection from '../../sections/motor/index'
import Accsessories from '../../sections/accesories/index'
import Videos from '../../sections/videos'
import Contact from '../../sections/contact'

const Content = () => {
  return (
    <div className='ContentWrapper'>
      <Homesec link='/'/>
      <News link='NEWS'/>
      <Motorsection link='MOTOR'/>
      <Accsessories link='ACCESSORIES'/>
      <Videos link='VIDEOS'/>
      <Contact link='CONTACT'/>
    </div>
  )
}

export default Content
