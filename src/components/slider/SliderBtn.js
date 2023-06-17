import React from 'react'

import RowSvg from '../../assets/orangeRow.svg'
import whiteArrow from '../../assets/whiteArrow.svg'

const SliderBtn = (props) => {
  return (
    <>
        <button className='NexSlideBtn' onClick={props.sliderbtn}>
          <div className='row1'><img alt='row' src={whiteArrow} /></div>
          <div className='row2'><img alt='row' src={RowSvg} /></div>
        </button>
    </>
  )
}

export default SliderBtn
