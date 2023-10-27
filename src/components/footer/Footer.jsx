import React from 'react'
import './footer.css'
import { FiInstagram } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Portfolio</a>

      <ul className='paralinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        {/* <li><a href='#services'>Services</a></li> */}
        {/* <li><a href='#portfolio'>Portfolio</a></li> */}
        <li><a href='#testimonials'>Testimonial</a></li>
        <li><a href='#contact'>Contacts</a></li>

      </ul>

      <div className='footer__socials'>
        <a href='https://instagram.com'><FiInstagram /></a>
        <a href='https://linkedIn.com'><BsLinkedin /></a>

      </div>

      <div className='footer__copyright'>
        <small>&copy; Portfolio, All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer
