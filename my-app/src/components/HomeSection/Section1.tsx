import React from 'react';

const Section1: React.FC = () => {
  return (
    <section className="section">
      <div className="container">

        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-5" data-aos="fade-up">
            <h2 className="section-heading">Save your time to using MaliCul</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="">
            <div className="feature-1 text-center">
              <div className="wrap-icon icon-1">
                <i className="bi bi-people"></i>
              </div>
              <h3 className="mb-3">Explore Your Team</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-1 text-center">
              <div className="wrap-icon icon-1">
                <i className="bi bi-brightness-high"></i>
              </div>
              <h3 className="mb-3">Digital Whiteboard</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-1 text-center">
              <div className="wrap-icon icon-1">
                <i className="bi bi-bar-chart"></i>
              </div>
              <h3 className="mb-3">Design To Development</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section1;
