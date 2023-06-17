import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='Footer'> 

      <div className='footer-container'>
        
        <div className='foter-info'>
          <h2>Opening time</h2>
          <div className='fot-info-container'>
            <ul>
              <li>Mon-Fri:8Am-10PM</li>
              <li>Sat: 9AM - 8 PM</li>
              <li>Sun : Closed</li>
              <li>We work all the holidays</li>
            </ul>
          </div>
        </div>

        <div className='foter-info'>
          <h2>about</h2>
          <div className='fot-info-container'>
            <ul>
              <li><a href='#'>About us</a></li>
              <li><a href='#'>Dellivery information</a></li>
              <li><a href='#'>Our store</a></li>
              <li><a href='#'>Privacy policy</a></li>
            </ul>
          </div>
        </div>

        <div className='foter-info'>
          <h2>instagram</h2>
          <div className='fot-info-container'>
            <div className='instagram-container'>
              <li><img src='https://transmoto.com.au/wp-content/uploads/2023/01/KTM_Racing_Team_2023_5-1536x1024.jpg' alt='instagram'/></li>
              <li><img src='https://transmoto.com.au/wp-content/uploads/2023/01/KTM_Racing_Team_2023_1-767x411.jpg' alt='instagram'/></li>
              <li><img src='https://transmoto.com.au/wp-content/uploads/2023/01/KTM_Racing_Team_2023_6-1536x1024.jpg' alt='instagram'/></li>
              <li><img src='https://transmoto.com.au/wp-content/uploads/2023/01/KTM_Racing_Team_2023_6-1536x1024.jpg' alt='instagram'/></li>
              <li><img src='https://transmoto.com.au/wp-content/uploads/2023/01/KTM_Racing_Team_2023_6-1536x1024.jpg' alt='instagram'/></li>
              <li><img src='https://transmoto.com.au/wp-content/uploads/2023/01/KTM_Racing_Team_2023_6-1536x1024.jpg' alt='instagram'/></li>
            </div>
          </div>
        </div>

    

      </div>

    </div>
  )
}

export default Footer
