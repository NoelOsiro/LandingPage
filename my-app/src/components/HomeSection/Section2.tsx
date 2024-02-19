import React from 'react';

const Section2: React.FC = () => {
  const steps = [
    { number: "01", title: "Sign Up", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio." },
    { number: "02", title: "Create Profile", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio." },
    { number: "03", title: "Enjoy the app", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio." }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center text-center mb-5" data-aos="fade">
          <div className="col-md-6 mb-5">
            <img src="assets/img/undraw_svg_1.svg" alt="Image" className="img-fluid" />
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
