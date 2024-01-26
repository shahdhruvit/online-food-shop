import React, { useState } from 'react'
import Hero from '../Components/Hero'
import axios from 'axios';

const ContactUsPage = () => {
    let[YourName1,setYourName]=useState()
    let[YourEmail1,setYourEmail]=useState()
    let[Subject1,setSubject]=useState()
    let[YourMessage1,setYourMessage]=useState()
    function handleform(e)
    {
        // e.preventDefault();
        const data={
            YourName:YourName1,
            YourEmail:YourEmail1,
            Subject:Subject1,
            YourMessage:YourMessage1
        }
        axios({
            method:"post",
            url:"http://127.0.0.1/myapi1/insert.php",
            data:data,
            headers:{"Content-Type":"multipart/form-data"}

        }).then(res=>{
            alert("Data inserted Successfully")

        })

    }
  return (
    <div>
        <Hero title="Contact"/>
        <div className="contact container mt-5">
            <h1 className="text-center">Contact Us</h1>
            <p className="text-center">Any Time Contact us for any type of problems</p>
            <div className="row mt-5">
                <div className="col-lg-5 mt-3 bg-info p-lg-5" style={{ lineHeight:"2.5" }}>
                    <h5>Call Us</h5>
                    <i className=" mt-2 fa fa-phone" aria-hidden="true">  +91 8866462202</i>
                    <h5>Email Us</h5>
                    <i className=" mt-2 fa fa-envelope" aria-hidden="true">  shahdhruvit2702@gmail.com</i>
                    <h5>Office Address</h5>
                    <i className=" mt-2 fa fa-map-marker" aria-hidden="true">  Bhaktinagar Society, Khedbrahma, Gujarat, India</i>
                    <h5>Follow Us</h5>
                        <a className="btn btn-outline-light rounded-circle"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com/shah.dhruvit.7" className="btn btn-outline-light rounded-circle" ><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="https://www.youtube.com/channel/UC_nesuKFzAjA9DXj7ERXB5Q" className="btn btn-outline-light rounded-circle"><i className="fa fa-youtube" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/shah-dhruvit-953453289/" className="btn btn-outline-light rounded-circle"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                </div>
                <div className="col-lg-7 mt-3 p-lg-5">
                    <p>We would love to hear from you! Whether you have a question, feedback, or simply want to say hello, our friendly team is here to assist you.</p>
                    <form onSubmit={handleform}>
                    <div className="row mt-3">
                        <div className="col-lg-6 mt-3">
                            <input type="text" placeholder="YourName" className="form-control" onChange={(e)=>setYourName(e.target.value)}/>
                        </div>
                        <div className="col-lg-6 mt-3">
                            <input type="email" placeholder="YourEmail" className="form-control" onChange={(e)=>setYourEmail(e.target.value)}/>
                        </div>
                        <div className="col-lg-12 mt-3">
                            <input type="text" placeholder="Subject" className="form-control" onChange={(e)=>setSubject(e.target.value)}/>
                        </div>
                        <div className="col-lg-12 mt-3">
                            <textarea name="" id="" rows="10" placeholder="YourMessage" className="form-control w-100" onChange={(e)=>setYourMessage(e.target.value)}></textarea>
                        </div>
                        <div className="col-lg-3 mt-3">
                            <input type="Submit" className="btn btn-primary"></input>
                        </div>


                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUsPage