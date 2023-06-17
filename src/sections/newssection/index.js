import React from 'react'

import './News.css'
import Mainnews from './main-news'
import Links from './Links'
import SecondNews from './SecondNews'

const News = (props) => {
  return (
    <div className='NewsSection' id={props.link}>
      

      <div className='infoWrapper'>
        
          <Mainnews />

          <div className='section2'>
          <Links />
          <SecondNews />
          </div>

      </div>

    </div>
  )
}

export default News
