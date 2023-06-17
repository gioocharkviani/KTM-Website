import React from 'react'

const Sliderinfo = (props) => {
  return (
        <div className='SliderContent'>
          <div className='SliderContentText'> 
            <span>
            {props.slideinfo}
            </span>
          </div>
        <div className='ReadMore'><button>READ MORE</button></div>
        </div>
  )
}

export default Sliderinfo
