import React from 'react'

const Footer = () => {
  return (
    <div className="footer container-fluid mt-5 bg-black p-lg-3 p-2" style={{ color:"rgba(211, 211, 211, 0.521)" }}>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-lg-5">
                       <img src="images/logo.png" width="250" height="40" alt=""/>
                       <p className="mt-3">Access to variety of exotics, organics with huge choice of selections Consumer can get FRESH Vegetables & Fruits at their Doorstep.</p>
                        <a className="btn btn-outline-light rounded-circle"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com/shah.dhruvit.7" className="btn btn-outline-light rounded-circle"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="https://www.youtube.com/channel/UC_nesuKFzAjA9DXj7ERXB5Q" className="btn btn-outline-light rounded-circle"><i className="fa fa-youtube" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/shah-dhruvit-953453289/"  className="btn btn-outline-light rounded-circle"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    </div>
                    <div className="col-lg-4 mt-2">
                        <h5 className="text-white">Address</h5>
                        <ul className="list-unstyled">
                            <li><i className="fa fa-map-marker" aria-hidden="true"> Bhaktinagar Society, Khedbrahma, Gujarat, India</i></li>
                            <li><i className="fa fa-phone" aria-hidden="true"></i> +91 8866462202</li>
                            <li><i className="fa fa-envelope" aria-hidden="true"></i> shahdhruvit2702@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 mt-2">
                        <h5 className="text-white">Quick Links</h5>
                        <ul className="list-unstyled" >
                            <li><a href="" className="text-decoration-none" style={{ color:"rgba(211, 211, 211, 0.521)" }}> About Us</a></li>
                            <li><a href="" className="text-decoration-none" style={{ color:"rgba(211, 211, 211, 0.521)" }}> Contact Us</a></li>
                            <li><a href="" className="text-decoration-none" style={{ color:"rgba(211, 211, 211, 0.521)" }}> Services</a></li>
                            <li><a href="" className="text-decoration-none" style={{ color:"rgba(211, 211, 211, 0.521)" }}> Term & Condition</a></li>
                            <li><a href="" className="text-decoration-none" style={{ color:"rgba(211, 211, 211, 0.521)" }}> Support</a></li>
                        </ul>
                    </div>
                    {/* <div className="col-lg-3 mt-2">
                        <h5 className="text-white">Newsletter</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, rerum?</p>
                        <input type="text" placeholder="Your Email" className="form-control rounded-0"/>
                        <button type="button" name="" id="" className="btn btn-primary col-12 mt-3">Subscribe</button>
                    </div> */}
                </div>
            </div>
            <hr/>
            {/* <p className="text-center text-white">Copyright &copy; VegeFoods. All Rights Reserved</p> */}
        </div>
  )
}

export default Footer