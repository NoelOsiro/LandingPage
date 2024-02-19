import React from 'react';

const Feature: React.FC = () => {
  return (
    <main id="main">

      <section className="hero-section inner-page">
        <div className="wave">
          <svg width="1920px" height="265px" viewBox="0 0 1920 265" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
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
                  <h1 data-aos="fade-up" data-aos-delay="">SoftLand Features</h1>
                  <p className="mb-5" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 me-auto">
              <h2 className="mb-4">Seamlessly Communicate</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae.</p>
              <p><a href="/">Read More</a></p>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <img src="assets/img/undraw_svg_2.svg" alt="Image2" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Gather Feedback Section */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 ms-auto order-2">
              <h2 className="mb-4">Gather Feedback</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae.</p>
              <p><a href="/">Read More</a></p>
            </div>
            <div className="col-md-6" data-aos="fade-right">
              <img src="assets/img/undraw_svg_3.svg" alt="Image2" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Present Designs Inspiration Section */}
      <section className="section pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 me-auto">
              <h2 className="mb-4">Present Designs Inspiration</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae.</p>
              <p><a href="/">Read More</a></p>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <img src="assets/img/undraw_svg_3.svg" alt="Image2" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Powerful App Design Section */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 ms-auto order-2">
              <h2 className="mb-4">Powerful App Design</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae.</p>
              <p><a href="/">Read More</a></p>
            </div>
            <div className="col-md-6" data-aos="fade-right">
              <img src="assets/img/undraw_svg_4.svg" alt="Image2" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                  {/* Testimonial items will be added here */}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
  );
}

export default Feature;
