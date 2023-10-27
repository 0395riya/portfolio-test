import React, { useState, useRef } from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef()

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_3hsqgfl',
      'template_zrgxc87',
      form.current,
      'FPqpDvPeJaW93y3Mr'
      
    ).then(result => console.log(result.text));
    e.target.reset();
  }

  return (
    <section id='contact'>
      <h5>Get In Touch </h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__option'>
          <article className='contact__options'>
            <MdOutlineEmail className='contact__options-icon' />
            <h4>Email</h4>
            <h5>archanak9187Z@gmail.com</h5>
            <a href='mailto:archanak9187Z@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__options'>
            <RiMessengerLine className='contact__options-icon' />
            <h4>Messenger</h4>
            <h5>LinkedIn</h5>
            <a href='https://www.linkedin.com/in/archana-kumari-9628861a7/' target='_blank'>Send a message</a>
          </article>
          <article className='contact__options'>
            <BsWhatsapp className='contact__options-icon' />
            <h4>WhatsApp</h4>
            <h5>9795671942</h5>
            <a href='https://api.whatsapp.com/send?phone+919795671942' target='_blank'>Send a message</a>
          </article>
        </div>
        <form onSubmit={sendEmail} ref={form}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' value="Send">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
