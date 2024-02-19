import React from 'react';
import { steps } from '../../data/homeSectionData';

const Section2: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center text-center mb-5" data-aos="fade">
          <div className="col-md-6 mb-5">
            <img src="assets/img/undraw_svg_1.svg" alt="features-img" className="img-fluid" />
          </div>
        </div>
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-md-4">
              <div className="step">
                <span className="number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
