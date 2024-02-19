import React from 'react';
import { testimonialData } from '../../data/testimonialData';

const Testimonials = () => {

  return (
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
                {testimonialData.map((testimonial, index) => (
                  <div key={index} className="swiper-slide">
                    <div className="review text-center">
                      <p className="stars">
                        {testimonial.stars.map((star, index) => (
                          <span key={index} className={`bi bi-star-fill ${!star && 'muted'}`}></span>
                        ))}
                      </p>
                      <h3>{testimonial.name}</h3>
                      <blockquote>
                        <p>{testimonial.review}</p>
                      </blockquote>
                      <p className="review-user">
                        <img src={testimonial.imageSrc} alt={testimonial.imageAlt} className="img-fluid rounded-circle mb-3"/>
                        <span className="d-block">
                          <span className="text-black">{testimonial.name}</span>, &mdash; {testimonial.position}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
