import React from 'react';
import { HeroData } from '../../data/heroData';
import Wave from '../Wave/Wave';
import Phone1 from '../../assets/img/phone_1.png'
import Phone2 from '../../assets/img/phone_2.png'


const HeroSection: React.FC = () => {
  return (
    <section className="hero-section" id="hero">
      <Wave width={'100%'} height={'355px'}/>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 hero-text-image">
            <div className="row">
              <div className="col-lg-8 text-center text-lg-start">
                <h1 data-aos="fade-right">{HeroData.title}</h1>
                <p className="mb-5" data-aos="fade-right" data-aos-delay="100">
                  {HeroData.description}
                </p>
                <p data-aos="fade-right" data-aos-delay="200" data-aos-offset="-500">
                  <a href="/home" className="btn btn-outline-white" title='ctaBtn'>
                    Get started
                  </a>
                </p>
              </div>
              <div className="col-lg-4 iphone-wrap">
                <img src={Phone1} alt="Image1" className="phone-1" data-aos="fade-right" />
                <img src={Phone2} alt="Image2" className="phone-2" data-aos="fade-right" data-aos-delay="200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
