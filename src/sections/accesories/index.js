import React from 'react'
import  './accsessories.css'
import { data1 } from './data'
import {prducts} from './data'
import ArrowSvg from '../../assets/arrow-right.svg'

import Product from './product'

const Accsessories = (props) => {
  return (
    <div id={props.link} className='ACCESSORIES'>


      <div className='accinfo'>
        
        <div className='accinfoI'>
          <h2>{data1.name}</h2>
          <div className='desc'>{data1.description}</div>
          <div className='readmore white1'><span>Read more</span></div>
        </div>

        <div className='AccinfoImg'>
          <img src={data1.image} alt='' />
        </div>

      </div>


      <div className='accproduct'>

        <div className='procduct-container'>
        {prducts.map((product , id ) => {
          return (
            <Product name={product.name} image={product.image} price={product.price} brand={product.brand} key={id} />
          )
        })}
        </div>

        <div className='see-all'>
          <div className='allproductbtn'>
            <button>see all<img src={ArrowSvg} alt='arrow' /></button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Accsessories
