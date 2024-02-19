import React from 'react';
import { socialLinks, aboutLinks, servicesLinks, downloadLinks } from '../../data/footerData';

const Footer: React.FC = () => {
  

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h3>About MaliCul</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam aperiam
              dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi.
            </p>
            <p className="social">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} title={link.title}><span className={link.icon}></span></a>
              ))}
            </p>
          </div>
          <div className="col-md-7 ms-auto">
            <div className="row site-section pt-0">
              <div className="col-md-4 mb-4 mb-md-0">
                <h3>Navigation</h3>
                <ul className="list-unstyled">
                  {aboutLinks.map((link, index) => (
                    <li key={index}><a href={link.url}>{link.title}</a></li>
                  ))}
                </ul>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <h3>Services</h3>
                <ul className="list-unstyled">
                  {servicesLinks.map((link, index) => (
                    <li key={index}><a href={link.url}>{link.title}</a></li>
                  ))}
                </ul>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <h3>Downloads</h3>
                <ul className="list-unstyled">
                  {downloadLinks.map((link, index) => (
                    <li key={index}><a href={link.url}>{link.title}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
