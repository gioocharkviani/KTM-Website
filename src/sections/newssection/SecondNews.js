import React from 'react'
import { newsdata } from './newsdata'

const SecondNews = () => {
  return (
    <>
        <div className='secondnews'>
          <div className='secnewsinfo'>
            <div className='adddate'>{newsdata.news2.data}</div>
            <div className='title2'><h2>{newsdata.news2.title}</h2></div>
            <div className='readmore'><span>Read more</span></div>
          </div>

          <div className='imgcon'>
            <img src={newsdata.news2.image} alt=''/>
          </div>
        </div>
    </>
  )
}

export default SecondNews
