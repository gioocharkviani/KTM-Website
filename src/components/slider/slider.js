import React, { useEffect, useState } from 'react'

import './slider.css'
import SliderBtn from './SliderBtn'

import { SliderData } from './sliderData'
import Sliderinfo from './sliderinfo'


const Slider = () => {

const [slideinfo, setSlideinfo] = useState('');
const [currentSlide , setCurrentSlide] = useState(0)
const SlideLength = SliderData.length;

const nextSlide = () =>{
    setCurrentSlide(currentSlide === SlideLength -1 ? 0 : currentSlide + 1)
}

useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === SlideLength - 1 ? 0 : prevSlide + 1
      );
    }, 15000);

    return () => clearInterval(interval);
  }, [SlideLength]);

  useEffect(()=>{
    if(currentSlide >= 0 && currentSlide < SliderData.length){
      setSlideinfo(SliderData[currentSlide]?.info)
    }
  }, [currentSlide])

  if (!Array.isArray(SliderData) || SliderData.length === 0) {
    return null;
  }


if(!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null
}


  return (
    <div className='Slider'>

        <div className='responiveslideinfo'>
          <div className='res-slide-con-info'>{slideinfo}</div>
          <div className='ReadMoreres'><button>READ MORE</button></div>
        </div>

        <div className='slide-content'>        
          <SliderBtn sliderbtn={nextSlide}/>
          <Sliderinfo slideinfo={slideinfo}/>
        </div>


            <div className='SliderWrapper'>
                {SliderData.map((slide , index) => {  return (
                    <div className={index === currentSlide ? 'slide active' : 'slide'} key={index}>
                    {index === currentSlide && <img alt='index' src={slide.image} key={index} />}
                    </div>
                )   
                })}
            </div>

    </div>
  )
}

export default Slider
