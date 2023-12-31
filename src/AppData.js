import React from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Testimonials from './components/testimonials/Testimonials'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'

const AppData = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience/>
            <Services/>
            {/* <Portfolio/> */}
            {/* <Testimonials/> */}
            <Contact/>
            <Footer/>
        </>
    )
}

export default AppData
