import React from 'react';

interface SectionProps {
  title: string;
  description: string;
  buttonText: string;
  imgSrc: string;
  imgAlt: string;
  btnLink: string;
  imgAlignment: "left" | "right";
  animation: "fade-left" | "fade-right";
}

const Section: React.FC<SectionProps> = ({ title, description, buttonText, imgSrc, imgAlt, btnLink, imgAlignment, animation }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className={`col-md-6${imgAlignment === 'right' ? ' ms-auto order-2' : ''}`} data-aos={animation}>
            <img src={imgSrc} alt={imgAlt} className="img-fluid" />
          </div>
          <div className="col-md-4 me-auto">
            <h2 className="mb-4">{title}</h2>
            <p className="mb-4">
              {description}
            </p>
            <p>
              <a href={btnLink} className="btn btn-primary">
                {buttonText}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
