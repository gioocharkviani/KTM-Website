import React from 'react'

const Product = (props) => {
  return (
    <>
          <div className='carusel-product'>
          <div className='cpimg'><img src={props.image} alt='' /></div>
          <div className='product-info'>
            <div className='prd product-name'>{props.name}</div>
            <div className='prd product-brand'>brand : {props.brand}</div>
            <div className='prd product-price'> price : {props.price}$</div>
            <div className='button' ><button>ADD TO CART</button></div>
          </div>
        </div>
    </>
  )
}

export default Product
