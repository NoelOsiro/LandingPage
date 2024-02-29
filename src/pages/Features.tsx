import React from 'react';
import Wave from '../components/Wave/Wave';
import CallToAction from '../components/CTA/CallToAction';
import Testimonials from '../components/Testimonials/Testimonials';
import { sections } from '../data/homeSectionData';
import Section from '../components/HomeSection/Section';

const Feature: React.FC = () => {
  return (
    <main id="main">

      <section className="hero-section inner-page">
        <Wave width='1920px' height='265px'/>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center hero-text">
                  <h1 data-aos="fade-up" data-aos-delay="">MaliCul Features</h1>
                  <p className="mb-5" data-aos="fade-up" data-aos-delay="100">Discover Malindi's Coastal Charm with Malicul: Events, Heritage, Tours, and Community Engagement – Your Swahili Coast Connection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}

      {/* Testimonials Section */}
      <Testimonials/>

      {/* CTA Section */}
      <CallToAction/>
    </main>
  );
}

export default Feature;
