import React from 'react'
import './videos.css'
import { videodata } from './videodata'

const Videos = (props) => {
  return (
    <div id={props.link} className='VIDEOSECTION'>

      <div className='videocontainer'>

        {videodata.map((item) => {
          return (
            <div className='video'>
            <div className='video-tumbnail'><img src={item.tumb} alt={item.title}/></div>
            <div className='videoinfo'>
              <div className='videodate'>{item.date}</div>
              <div className='videotitle'>{item.title}</div>
              <div className='playnow-btn'><button>play now</button></div>
            </div>
          </div>
          )
        })}

      </div>
      
    </div>
  )
}

export default Videos
