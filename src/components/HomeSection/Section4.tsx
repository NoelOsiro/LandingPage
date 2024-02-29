import React from 'react';

const Section4: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 ms-auto order-2">
            <h2 className="mb-4">Gather Feedback</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius
              quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse
              natus beatae.
            </p>
            <p>
              <a href="#" className="btn btn-primary">
                Download Now
              </a>
            </p>
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <img src="assets/img/undraw_svg_3.svg" alt="Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
