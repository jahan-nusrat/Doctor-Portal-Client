import React from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
           {/*  <Link to="/">
            <img src="https://i.ibb.co/gJrj1T0/001-dental.png" alt="logo" className="img-fluid"/>
    </Link> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-2">
                        <a className="nav-link" href="#/">Home </a>
                </li>
                <li className="nav-item mr-2">
                    <a className="nav-link" href="#/">About</a>
                </li>
                <li className="nav-item mr-2">
                        <a className="nav-link" href="#/">Dental Services</a>
                </li>
                <li className="nav-item mr-2">
                    <a className="nav-link" href="#/">Reviews</a>
                </li>
                <li className="nav-item mr-2">
                        <a className="nav-link" href="#/">Blog </a>
                </li>
                <li className="nav-item mr-2">
                    <a className="nav-link" href="#/">Contact Us</a>
                </li>
            </ul>
        </div>
        </nav>
    )
}

export default Nav
