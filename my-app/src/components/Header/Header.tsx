import React from 'react';
import { links } from '../../data/headerData';

const Header: React.FC = () => {


  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <h1><a href="/home">MaliCul</a></h1>
          {/* <a href="/home">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </a> */}
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a className={window.location.pathname === link.url ? "active" : ""} href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
