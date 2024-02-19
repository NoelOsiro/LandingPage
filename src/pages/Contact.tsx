import React from 'react'
import CallToAction from '../components/CTA/CallToAction'
import Testimonials from '../components/Testimonials/Testimonials'
import Wave from '../components/Wave/Wave'

const Contact = () => {
  return (
    <main id="main">

    <section className="hero-section inner-page">
      <Wave width={'1920px'} height={'265px'}/>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center hero-text">
                <h1 data-aos="fade-up" data-aos-delay="">Get in touch</h1>
                <p className="mb-5" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section className="section">
      <div className="container">
        <div className="row mb-5 align-items-end">
          <div className="col-md-6" data-aos="fade-up">

            <h2>Contact Form</h2>
            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.</p>
          </div>

        </div>

        <div className="row">
          <div className="col-md-4 ms-auto order-2" data-aos="fade-up">
            <ul className="list-unstyled">
              <li className="mb-3">
                <strong className="d-block mb-1">Address</strong>
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="mb-3">
                <strong className="d-block mb-1">Phone</strong>
                <span>+1 232 3235 324</span>
              </li>
              <li className="mb-3">
                <strong className="d-block mb-1">Email</strong>
                <span>youremail@domain.com</span>
              </li>
            </ul>
          </div>

          <div className="col-md-6 mb-5 mb-md-0" data-aos="fade-up">
            <form action="forms/contact.php" method="post" className="php-email-form">

              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" className="form-control" id="name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <label htmlFor="name">Email</label>
                  <input type="email" className="form-control" name="email" id="email" required placeholder='email'/>
                </div>
                <div className="col-md-12 form-group mt-3">
                  <label htmlFor="name">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject" required placeholder='subject'/>
                </div>
                <div className="col-md-12 form-group mt-3">
                  <label htmlFor="name">Message</label>
                  <textarea className="form-control" name="message" required placeholder='Text'></textarea>
                </div>

                <div className="col-md-12 mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>

                <div className="col-md-6 form-group">
                  <input type="submit" className="btn btn-primary d-block w-100" value="Send Message"/>
                </div>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>

    <Testimonials/>
    <CallToAction/>

  </main>
  )
}

export default Contact