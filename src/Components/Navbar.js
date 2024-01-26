import React from 'react'
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();
    const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <div className="header container-fluid p-0 m-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-black position-fixed w-100" style={{ zIndex: "5" }}>
                <div className="container-fluid">
                  <Link className="navbar-brand" to="/">
                    <img src="images/logo.png" width="200" height="40" alt="" className="ms-lg-5"/>
                  </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-center">
                      <li className="nav-item">
                      <Link className={isActive('/') ? 'active nav-link ' : 'nav-link'} to="/">Home</Link>
                      </li>
                      <li className="nav-item" >
                        <Link className={isActive('/about') ? 'active nav-link ' : 'nav-link'} to="/about">About Us</Link>
                      </li>
                      <li className="nav-item">
                        <Link className={isActive('/product') ? 'active nav-link ' : 'nav-link'} to="/product">Products</Link>
                      </li>
                      <li className="nav-item">
                        <Link className={isActive('/feature') ? 'active nav-link ' : 'nav-link'} to="/feature">Features</Link>
                      </li>
                      <li className="nav-item">
                        <Link className={isActive('/blog') ? 'active nav-link ' : 'nav-link'} to="/blog">Blog</Link>
                      </li>
                      <li className="nav-item">
                        <Link className={isActive('/contact') ? 'active nav-link ' : 'nav-link'} to="/contact">Contact Us</Link>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </nav>
        </div>
  )
}

export default Navbar