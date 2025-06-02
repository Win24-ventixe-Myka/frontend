import React from 'react'
import facebooklogo from '../images/icons/facebooklogo.svg'
import xlogo from '../images/icons/xlogo.svg'
import instagramlogo from '../images/icons/instagramlogo.svg'
import youtubelogo from '../images/icons/youtubelogo.svg'
import linkedinlogo from '../images/icons/linkedinlogo.svg'

const Footer = () => {
  return (
<footer>
  <div className='footer-content'>

    <section className='left-group'>
    <p className='copyright'>Copyright © 2025 Peterdraw</p>
    
    <div className='links'>
      <a href="#">Privacy Policy</a>
      <a href="#">Term and conditions</a>
      <a href="#">Contact</a>
    </div>
    </section>

    <div className='social-media'>
      <img src={facebooklogo} className='media-icon' alt='Facebook logo'/>
      <img src={xlogo} className='media-icon' alt='X logo'/>
      <img src={instagramlogo} className='media-icon' alt='Instagram logo'/>
      <img src={youtubelogo} className='media-icon' alt='Youtube logo'/>
      <img src={linkedinlogo} className='media-icon' alt='Linkedin logo'/>
    </div>
    
  </div>
</footer>
  )
}

export default Footer
