import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='services'>
          <div className='servise__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating reusable and modular UI components using React.js.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I utilize state management libraries like Redux or context API to manage the application's state in a predictable and centralized manner. This ensures that data is shared and updated seamlessly across different components.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I connect the frontend with backend services by making API calls using tools like the fetch API or libraries like Axios. This enables the application to retrieve and update data from databases or external APIs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I implement client-side routing using libraries like React Router. This allows for the creation of single-page applications where different components are displayed based on the URL, enhancing the user experience by eliminating page reloads. As a React developer, bug solving is an integral part of my role.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Modified company web applications and processes to increase productivity.</p>
            </li>
          </ul>
        </article>
        <article className='services'>
          <div className='servise__head'>
            <h3>UI design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Worked with technical leads, engineers and designers to develop dynamic client-side web applications across various areas of business.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed custom web application interfaces with HTML and CSS to meet client requirements.</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </li> */}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
