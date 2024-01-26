import React from 'react'

const Customer = () => {
  return (
    <div className="container review mt-5">
            <h1 className="text-center">Customer Review</h1>
            <p className="text-center">Discover what our valued customers have to say about their VegeFoods experience</p>

            <div className="row mt-3">
                <div className="col-lg-4 mt-4 position-relative">
                    <div className="card py-5 px-5 rounded-0">
                        <i className="fa fa-quote-left position-absolute" aria-hidden="true" style={{ top: "-12px",fontSize: "2rem" }}></i>
                    <p>Quality, Quantity, Packaging, Delivery Time & Tast are quintessential factors when one orders a home delivery. The people at Caters Point know how to deliver all to a nicety & perfection</p>
                    <div className="profile d-flex">
                        <div className="image" style={{ width:"60px",height:"60px" }}>
                            <img src="./images/user1.jpg" alt="" className="w-100 h-100 rounded-circle"/>
                        </div>
                        <div className="content ms-3">
                        <h5>Heet</h5>
                        <em>Guj, Ind</em>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 mt-4 position-relative">
                    <div className="card py-5 px-5 rounded-0">
                        <i className="fa fa-quote-left position-absolute" aria-hidden="true" style={{ top: "-12px",fontSize: "2rem" }}></i>
                    <p>I ordered food from here today. The delivery was quick. The food was great.The food was value for money and the hospitality was amazing.</p>
                    <div className="profile d-flex">
                        <div className="image" style={{ width:"60px",height:"60px" }}>
                            <img src="./images/user2.jpg" alt="" className="w-100 h-100 rounded-circle"/>
                        </div>
                        <div className="content ms-3">
                        <h5>Raj</h5>
                        <em>Guj, Ind</em>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 mt-4 position-relative">
                    <div className="card py-5 px-5 rounded-0">
                        <i className="fa fa-quote-left position-absolute" aria-hidden="true" style={{ top: "-12px",fontSize: "2rem" }}></i>
                    <p>amazing Services provided by the website and the delivery is good.</p>
                    <div className="profile d-flex">
                        <div className="image" style={{ width:"60px",height:"60px" }}>
                            <img src="./images/user3.jpg" alt="" className="w-100 h-100 rounded-circle"/>
                        </div>
                        <div className="content ms-3">
                        <h5>Krupa</h5>
                        <em>Guj, Ind</em>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
  )
}

export default Customer