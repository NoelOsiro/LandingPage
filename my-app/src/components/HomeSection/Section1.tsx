import React from 'react';
import { features } from '../../data/homeSectionData';

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
          {features.map((feature, index) => (
            <div key={index} className="col-md-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="feature-1 text-center">
                <div className="wrap-icon icon-1">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="mb-3">{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
