import React from 'react'
import './header.css'
import CTA from './CTA'
import profile from '../../assets/archana.png'
import HeaderSoci from './HeaderSoci'


const Header = () => {
    return (
        <header>
            <div className='container header_container'>
                <h5>Hello I'am</h5>
                <h1>Archana</h1>
                <h5 className='text-light'>React Frontend Developer</h5>
                <CTA />
                <HeaderSoci />
                <div className='profile'>
                    <img src={profile} alt='' />
                </div>
                <a href='#contact' className='scroll__dowm'>Scroll Down </a>
            </div>
        </header>
    )
}

export default Header
