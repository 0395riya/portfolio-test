import React from 'react'
import './testimonials.css'
import { Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'

const Testimonials = () => {

  const data = [{
    avatar: image1,
    name: 'Tina Show',
    review: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
  },
  {
    avatar: image2,
    name: 'Tina Show',
    review: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
  },
  {
    avatar: image3,
    name: 'Tina Show',
    review: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
  },
  {
    avatar: image4,
    name: 'Tina Show',
    review: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
  }
  ]


  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonial__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map((ele) => {
          return (
            <SwiperSlide className='testimonial'>
              <div className='client__avatar'>
                <img src={ele.avatar} alt='' />
              </div>
              <h5 className='client__name'>{ele.name}</h5>
              <small className='client__review'>
               {ele.review}
              </small>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </section>
  )
}

export default Testimonials
