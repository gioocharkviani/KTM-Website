import React, { useEffect, useState } from 'react'
import './motorsection.css'
import Slide from './slide'



import { motordata } from './motor'


const Motorsection = (props) => {

const [currentSlide , setCurrentSlide] = useState(0)
const SlideLength = motordata.length;



// automatic slider play===========
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === SlideLength - 1 ? 0 : prevSlide + 1
    );
  }, 10000);

  return () => clearInterval(interval);
}, [SlideLength]);
// automatic slider play===========

const activator =(index)=>{
  setCurrentSlide(index)
}

  return (
    <div id={props.link} className='motorsection'>

        <div className='MotorSectioncontent'>
          <div className='motorslideleftside'>
            <div className='motorslidebigimg'>
                {motordata.map((slide , index)=>{
                  return (
                    <>
                    <div className={index === currentSlide ? 'visibleImage' : 'HideImage'}>
                      <div className='motoinfo'>
                          <div className='mototitle'>{slide.title}</div>
                          <div className='motoprice'>{slide.price}</div>
                      </div>
                      <img  alt={slide.title} src={slide.image} />
                    </div>
                    </>
                  )
                })}
            </div>
          </div>

          <div className='slidelists'>

          {motordata.map((slide , index) =>{
            return (
              <Slide 
              activator={()=> activator(index)} 
              className={index === currentSlide ? 'motorslide activemotorslide': 'motorslide'} 
              key={index} 
              title={slide.title} 
              image={slide.image} 
              price={slide.price}/>
            )
          })}

          </div>

        </div>

    </div>
  )
}

export default Motorsection
