import './style.css'
import picture from './assets/archana.jpg'
import images from './assets/images/portfolio-1.jpg'
import images1 from './assets/images//portfolio-2.jpg'
import images2 from './assets/images//portfolio-3.jpg'
import images3 from './assets/images//portfolio-4.jpg'

function Test() {


  return (
    <>
      <div className="main-container">
        <div className="aside">
          <div className='logo'>
            <a href='#'><span>A</span>tlas</a>
          </div>

          <div className='nav-toggler'>
            <span>

            </span>
          </div>

          <ul className='nav'>
            <li><a href='#' className='active'><i className='fa fa-home'></i>Home</a></li>
            <li><a href='#' ><i className='fa fa-user'></i>About</a></li>
            <li><a href='#' ><i className='fa fa-list'></i>Services</a></li>
            <li><a href='#' ><i className='fa fa-briefcase'></i>Portfolio</a></li>
            <li><a href='#' ><i className='fa fa-comments'></i>Contact</a></li>

          </ul>
        </div>

        <div className="main-content">
          <section className="home section">
            <div className='container'>
              <div className='row'>
                <div className='home-info padd-15'>
                  <h3 className='hello'> Hello, my name is <span className='name'>Archana</span></h3>
                  <h3 className='my-profession'>I'm a <span className='typing'>Frontend Developer</span></h3>
                  <p>Hi myself Archana i do full satck development in technology MEAN and MERN working in a company name called value innovation labs.My rooles and responsibility in this company as Frontend developer is to develope  full architecture of any project or module requires to be initiated first with respect to frontend, backend , database structure.<br />
                    So over the time i have grown my skill in rect js , next  js , node js , database (SQL/NOSQL)  as much as i could and try to give my best as soon it could be done on time .  </p>
                  <a href='#contact' className='btn hire-me'>Hire Me </a>
                </div>
                <div className='home-img padd-15'>
                  <img src={picture} alt='' />

                </div>
              </div>
            </div>
          </section>

          <section className='about section'>
            <div className='container'>
              <div className='row'>
                <div className='section-title padd-15'>
                  <h2>
                    About me
                  </h2>
                </div>
              </div>
              <div className='row'>
                <div className='about-content padd-15'>
                  <div className='row'>
                    <div className='about-text padd-15'>
                      <h3>I'm Archana and <span>Web Developer</span></h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='personal-info padd-15'>
                      <div className='row'>
                        <div className='info-items padd-15'>
                          <p>Birthday:<span>11 Dec 1995</span></p>
                        </div>
                        <div className='info-items padd-15'>
                          <p>Website:<span>www.domain.com</span></p>
                        </div>
                        <div className='info-items padd-15'>
                          <p>Email:<span>archanak9187@gmail.com</span></p>
                        </div>
                        <div className='info-items padd-15'>
                          <p>Degree:<span>B.Tech (Electronics and Communication Engineering)</span></p>
                        </div>
                        <div className='info-items padd-15'>
                          <p>Phone:<span>9795671942</span></p>
                        </div>
                        <div className='info-items padd-15'>
                          <p>City:<span>Varanasi</span></p>
                        </div>
                        <div className='info-items padd-15'>
                          <p>Freelance:<span>Available</span></p>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='buttons padd-15'>
                          <a href='#' className='btn' >Download CV</a>
                          <a href='#contact' className='btn hire me'>Hire me</a>
                        </div>
                      </div>
                    </div>
                    <div className='skills padd-15'>
                      <div className='row'>
                        <div className='skill-item padd-15'>
                          <h5>React.js</h5>
                          <div className='progress'>
                            <div className='progress-in' style={{ width: '90%' }}>
                              <div className='skill-percent'>90%</div>
                            </div>
                          </div>
                        </div>
                        <div className='skill-item padd-15'>
                          <h5>Javascript</h5>
                          <div className='progress'>
                            <div className='progress-in' style={{ width: '90%' }}>
                              <div className='skill-percent'>90%</div>
                            </div>
                          </div>
                        </div>
                        <div className='skill-item padd-15'>
                          <h5>SQL</h5>
                          <div className='progress'>
                            <div className='progress-in' style={{ width: '78%' }}>
                              <div className='skill-percent'>78%</div>
                            </div>
                          </div>
                        </div>
                        <div className='skill-item padd-15'>
                          <h5>Node.js</h5>
                          <div className='progress'>
                            <div className='progress-in' style={{ width: '75%' }}>
                              <div className='skill-percent'>75%</div>
                            </div>
                          </div>
                        </div>
                        <div className='skill-item padd-15'>
                          <h5>HTML</h5>
                          <div className='progress'>
                            <div className='progress-in' style={{ width: '90%' }}>
                              <div className='skill-percent'>90%</div>
                            </div>
                          </div>
                        </div>
                        <div className='skill-item padd-15'>
                          <h5>CSS</h5>
                          <div className='progress'>
                            <div className='progress-in' style={{ width: '80%' }}>
                              <div className='skill-percent'>80%</div>
                            </div>
                          </div>
                        </div>
                        <div className='skill-item padd-15'>
                          <h5>Python</h5>
                          <div className='progress'>
                            <div className='progress-in' style={{ width: '60%' }}>
                              <div className='skill-percent'>60%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='education padd-15'>
                      <h3 className='title'>Education</h3>
                      <div className='row'>
                        <div className='timeline-box padd-15'>
                          <div className='timeline shadow-dark'>
                            <div className='timeline-item'>
                              <div className='circle-dot'></div>
                              <h3 className='timeline-date'>
                                <i className='fa fa-calendar'></i>2013 - 2017
                              </h3>
                              <h4 className='timeline-title'>B.Tech</h4>
                              <p className='timeline-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            </div>
                            <div className='timeline-item'>
                              <div className='circle-dot'></div>
                              <h3 className='timeline-date'>
                                <i className='fa fa-calendar'></i>2009 - 2010
                              </h3>
                              <h4 className='timeline-title'>10th</h4>
                              <p className='timeline-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            </div>
                            <div className='timeline-item'>
                              <div className='circle-dot'></div>
                              <h3 className='timeline-date'>
                                <i className='fa fa-calendar'></i>2012 - 2013
                              </h3>
                              <h4 className='timeline-title'>12th</h4>
                              <p className='timeline-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='experience padd-15'>
                      <h3 className='title'>Experience</h3>
                      <div className='row'>
                        <div className='timeline-box padd-15'>
                          <div className='timeline shadow-dark'>
                            <div className='timeline-item'>
                              <div className='circle-dot'></div>
                              <h3 className='timeline-date'>
                                <i className='fa fa-calendar'></i>2013 - 2017
                              </h3>
                              <h4 className='timeline-title'>B.Tech</h4>
                              <p className='timeline-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            </div>
                            <div className='timeline-item'>
                              <div className='circle-dot'></div>
                              <h3 className='timeline-date'>
                                <i className='fa fa-calendar'></i>2009 - 2010
                              </h3>
                              <h4 className='timeline-title'>10th</h4>
                              <p className='timeline-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            </div>
                            <div className='timeline-item'>
                              <div className='circle-dot'></div>
                              <h3 className='timeline-date'>
                                <i className='fa fa-calendar'></i>2012 - 2013
                              </h3>
                              <h4 className='timeline-title'>12th</h4>
                              <p className='timeline-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className='service section'>
            <div className='container'>
              <div className='row'>
                <div className='section-title padd-15'>
                  <h2>Services</h2>
                </div>
              </div>
              <div className='row'>
                <div className='service-item padd-15'>
                  <div className='service-item-inner'>
                    <div className='icon'>
                      <i className='fa fa-mobile-alt'></i>
                    </div>
                    <h4>Web </h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
                <div className='service-item padd-15'>
                  <div className='service-item-inner'>
                    <div className='icon'>
                      <i className='fa fa-laptop-code'></i>
                    </div>
                    <h4>Web </h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
                <div className='service-item padd-15'>
                  <div className='service-item-inner'>
                    <div className='icon'>
                      <i className='fa fa-palette'></i>
                    </div>
                    <h4>Web </h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
                <div className='service-item padd-15'>
                  <div className='service-item-inner'>
                    <div className='icon'>
                      <i className='fa fa-code'></i>
                    </div>
                    <h4>Web </h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
                <div className='service-item padd-15'>
                  <div className='service-item-inner'>
                    <div className='icon'>
                      <i className='fa fa-search'></i>
                    </div>
                    <h4>Web </h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
                <div className='service-item padd-15'>
                  <div className='service-item-inner'>
                    <div className='icon'>
                      <i className='fa fa-bullhorn'></i>
                    </div>
                    <h4>Web </h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
              </div>
            </div>
          </section>



          <section className='portfolio section'>
            <div className='container'>
              <div className='row'>
                <div className='section-title padd-15'>
                  <h2>Portfolio</h2>
                </div>
              </div>
              <div className='row'>
                <div className='portfolio-heading padd-15'>
                  <h2>My Last Projects :</h2>
                </div>
              </div>
              <div className='row'>
                <div className='portfolio-item padd-15'>
                  <div className='portfolio-item-inner shadow-dark'>
                    <div className='potfolio-img'>
                      <img src={images} alt='' />
                    </div>
                  </div>
                </div>
                <div className='portfolio-item padd-15'>
                  <div className='portfolio-item-inner shadow-dark'>
                    <div className='potfolio-img'>
                      <img src={images1} alt='' />
                    </div>
                  </div>
                </div>
                <div className='portfolio-item padd-15'>
                  <div className='portfolio-item-inner shadow-dark'>
                    <div className='potfolio-img'>
                      <img src={images2} alt='' />
                    </div>
                  </div>
                </div>
                <div className='portfolio-item padd-15'>
                  <div className='portfolio-item-inner shadow-dark'>
                    <div className='potfolio-img'>
                      <img src={images3} alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          <section className='contact section'>
            <div className='container'>
              <div className='row'>
                <div className='section-title padd-15'>
                  <h2>Contact Me</h2>
                </div>
              </div>
              <h3 className='contact-title padd-15'>Have you any questions ?</h3>
              <h4 className='contact-sub-title padd-15'>I'M AT YOUR SERVICES</h4>
              <div className='row'>
                <div className='contact-info-item padd-15'>
                  <div className='icon'>
                    <i className='fa fa-phone' style={{ color: '#69e815' }}></i>
                  </div>
                  <h4>Call Us On</h4>
                  <p>+91 9795671942</p>
                </div>
                <div className='contact-info-item padd-15'>
                  <div className='icon'>
                    <i className='fa fa-envelope' style={{ color: '#cfb513' }}></i>
                  </div>
                  <h4>Email</h4>
                  <p>archanak9187@gmail.com</p>
                </div>
                <div className='contact-info-item padd-15'>
                  <div className='icon'>
                    <i className='fa fa-globe-europe' style={{ color: '#237ce8' }}></i>
                  </div>
                  <h4>Website</h4>
                  <p>www.domain.com</p>
                </div>
              </div>
              <h3 className='contact-title padd-15'>SEND ME AN EMAIL</h3>
              <h4 className='contact-sub-title padd-15'>I'M VERY RESPONSIVE TO MESSAGES</h4>
              <div className='row'>
                <div className='contact-form padd-15'>
                  <div className='row'>
                    <div className='form-item col-6 padd-15'>
                      <div className='form-group'>
                        <input type='text' className='form-control' placeholder='Name' />
                      </div>
                    </div>
                    <div className='form-item col-6 padd-15'>
                      <div className='form-group'>
                        <input type='email' className='form-control' placeholder='Email' />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='form-item col-12 padd-15'>
                      <div className='form-group'>
                        <input type='text' className='form-control' placeholder='Subject' />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='form-item col-12 padd-15'>
                      <div className='form-group'>
                        <textarea className='form-control' placeholder='Message' maxlength="5000" cols="80" rows="40"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='form-item col-12 padd-15'>
                      <button type='submit' className='btn'>Send Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

      </div>
    </>
  )
}

export default Test
