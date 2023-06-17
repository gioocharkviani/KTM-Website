import React from 'react'
import './homesection.css'


import Slider from '../../components/slider/slider'
import Login from '../../components/user/login'

const Homesec = (props) => {
  return (
    <div className='homesection' id={props.link} >

    <Login/>
    <Slider />

    </div>
  )
}

export default Homesec
