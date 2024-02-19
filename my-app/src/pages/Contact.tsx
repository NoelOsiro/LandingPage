import React from 'react'

const Contact = () => {
  return (
    <main id="main">

    <section className="hero-section inner-page">
      <div className="wave">

        <svg width="1920px" height="265px" viewBox="0 0 1920 265" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Apple-TV" transform="translate(0.000000, -402.000000)" fill="#FFFFFF">
              <path d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,667 L1017.15166,667 L0,667 L0,439.134243 Z" id="Path"></path>
            </g>
          </g>
        </svg>

      </div>

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

    <section className="section border-top border-bottom">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-4">
            <h2 className="section-heading">Review From Our Users</h2>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-md-7">

            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="review text-center">
                    <p className="stars">
                      <span className="bi bi-star-fill"></span>
                      <span className="bi bi-star-fill"></span>
                      <span className="bi bi-star-fill"></span>
                      <span className="bi bi-star-fill"></span>
                      <span className="bi bi-star-fill muted"></span>
                    </p>
                    <h3>Excellent App!</h3>
                    <blockquote>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam
                        aperiam dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi,
                        provident voluptates consectetur maiores quos.</p>
                    </blockquote>

                    <p className="review-user">
                      <img src="assets/img/person_1.jpg" alt="Image2" className="img-fluid rounded-circle mb-3"/>
                      <span className="d-block">
                        <span className="text-black">Jean Doe</span>, &mdash; App User
                      </span>
                    </p>

                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="review text-center">
                    <p className="stars">
                      <span className="bi bi-star-fill"></span>
                      <span className="bi bi-star-fill"></span>
                      <span className="bi bi-star-fill"></span>
                      <span className="bi bi-star-fill"></span>
                      <span className="bi bi-star-fill muted"></span>
                    </p>
                    <h3>This App is easy to use!</h3>
                    <blockquote>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam
                        aperiam dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi,
                        provident voluptates consectetur maiores quos.</p>
                    </blockquote>

                    <p className="review-user">
                      <img src="assets/img/person_2.jpg" alt="Image2" className="img-fluid rounded-circle mb-3"/>
                      <span className="d-block">
                        <span className="text-black">Johan Smith</span>, &mdash; App User
                      </span>
                    </p>

                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="review text-center">
                    <p className="stars">
                      <span className="bi bi-star-fill"></span>
                      <span className="bi bi-star-fill"></span>
                      <span className="bi bi-star-fill"></span>
                      <span className="bi bi-star-fill"></span>
                      <span className="bi bi-star-fill muted"></span>
                    </p>
                    <h3>Awesome functionality!</h3>
                    <blockquote>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam
                        aperiam dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi,
                        provident voluptates consectetur maiores quos.</p>
                    </blockquote>

                    <p className="review-user">
                      <img src="assets/img/person_3.jpg" alt="Image2" className="img-fluid rounded-circle mb-3"/>
                      <span className="d-block">
                        <span className="text-black">Jean Thunberg</span>, &mdash; App User
                      </span>
                    </p>

                  </div>
                </div>

              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

  
    <section className="section cta-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 me-auto text-center text-md-start mb-5 mb-md-0">
            <h2>Starts Publishing Your Apps</h2>
          </div>
          <div className="col-md-5 text-center text-md-end">
            <p><a href="/" className="btn d-inline-flex align-items-center"><i className="bx bxl-apple"></i><span>App store</span></a> <a href="/" className="btn d-inline-flex align-items-center"><i className="bx bxl-play-store"></i><span>Google play</span></a></p>
          </div>
        </div>
      </div>
    </section>

  </main>
  )
}

export default Contact