import React from 'react'
import './About.css'
import picture from '../../assets/photo2.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={picture} alt='' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>2 Completed</small>
            </article>
          </div>

          <p>
            Hi myself Archana i do full satck development in technology MEAN and MERN working in a company name called value innovation labs. My rules and responsibility in this company as Frontend developer is to develope  full architecture of any project or module requires to be initiated first with respect to frontend, backend , database structure.<br />
            So over the time i have grown my skill in rect js , next  js , node js , database (SQL/NOSQL)  .
          </p>
          <a className='btn btn-primary' href='#contact'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About
