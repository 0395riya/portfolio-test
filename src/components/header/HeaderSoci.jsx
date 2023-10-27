import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSoci = () => {
  return (
    <div className='header__socials'>
      <a href='linkedin.com/in/archana-kumari-9628861a7' target='_blank'> <BsLinkedin/> </a>
      <a href='github.com/riya0395' target='_blank'><FaGithub/> </a>

    </div>
  )
}

export default HeaderSoci
