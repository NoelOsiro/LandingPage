import React from 'react'

const Header = () => {
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex justify-content-between align-items-center">

                <div className="logo">
                    <h1><a href="index.html">MaliCul</a></h1>
                    <a href="index.html">
                        <img src="assets/img/logo.png" alt="" className="img-fluid" />
                    </a>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="active " href="/home">Home</a></li>
                        <li><a href="features.html">Features</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    )
}

export default Header