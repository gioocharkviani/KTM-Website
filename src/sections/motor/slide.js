import React from 'react'

const Slide = (props) => {
  return (
    <>
              <div key={props.key} className={props.className} onClick={props.activator}>
              <div className='slide1img'>
                <img src={props.image} alt='' />
              </div>
            </div>
    </>
  )
}

export default Slide
