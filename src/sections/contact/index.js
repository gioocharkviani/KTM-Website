import React from 'react'
import './contact.css'
import Footer from '../../components/footer/footer'
const index = (props) => {
  return (
    <div id={props.link} className='CONTACTSECTION'>
      
        <div className='Subscription'>
            <div className='Subscription-title'><h2>subscribe email</h2></div>
            <div className='get-news-text'>get latest news & updates</div>
            <div className='Subscription-input'>
                <input type='text' placeholder='Enter your email adress'/>
                <button></button>
            </div>
        </div>

        <div className='fot-section'>
            <Footer />
        </div>

    </div>
  )
}

export default index
