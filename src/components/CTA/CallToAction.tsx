import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 me-auto text-center text-md-start mb-5 mb-md-0">
            <h2>Start sharing your story?</h2>
          </div>
          <div className="col-md-5 text-center text-md-end">
            <p>
              <a href="/" className="btn d-inline-flex align-items-center">
                <i className="bx bxl-apple"></i>
                <span>Malicul</span>
              </a>{' '}
              <a href="/" className="btn d-inline-flex align-items-center">
                <i className="bx bxl-play-store"></i>
                <span>Malicul</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
