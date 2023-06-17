import React from 'react'
import { newsdata } from './newsdata'

const Mainnews = () => {
  return (
    <>
      <div className='mainNews'>

        <div className='mainInfosection'>
        <div className='adddate'>{newsdata.main.data}</div>
        <div className='title'><h2>{newsdata.main.title}</h2></div>
        <div className='info'>{newsdata.main.info}</div>
        <div className='readmore'><span>Read more</span></div>
        </div>

        <div className='maininfoImg'>
        <img src={newsdata.main.image} alt='' />
        </div>

        </div>
    </>
  )
}

export default Mainnews
