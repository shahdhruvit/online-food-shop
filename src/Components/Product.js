import React from 'react'

const Product = (props) => {
  return (
    <div className="products container mt-5">
            {props.display?<></>:
            <>
            <h1>Our Products</h1>
            <p>Indulge in the juicy sweetness of our fresh fruits.</p>
            </>
             }
            <div className="row mt-5 text-center">
                <div className="col-lg-3 mt-3 ">
                    <div className="card overflow-hidden">
                    <div className="image mx-auto" style={{ width:"200px",height: "200px" }}>
                        <img src="./images/tomato.png" alt="" className="w-100 h-100"/>
                    </div>
                    <h3>Fresh Tomato</h3>
                    <p>₹60.00</p>
                    <div className="row border-top">
                        <div className="col-6 p-2 border-end">
                            <i className="fa fa-eye" aria-hidden="true"> View Details</i>
                        </div>
                        <div className="col-6 p-2">
                            <i className="fa fa-shopping-cart" aria-hidden="true"> Add to cart</i>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 mt-3 ">
                    <div className="card overflow-hidden">
                    <div className="image mx-auto" style={{ width:"200px",height: "200px" }}>
                        <img src="./images/chilli.png" alt="" className="w-100 h-100"/>
                    </div>
                    <h3>Chilli Pepper</h3>
                    <p>₹40.00</p>
                    <div className="row border-top">
                        <div className="col-6 p-2 border-end">
                            <i className="fa fa-eye" aria-hidden="true"> View Details</i>
                        </div>
                        <div className="col-6 p-2">
                            <i className="fa fa-shopping-cart" aria-hidden="true"> Add to cart</i>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 mt-3 ">
                    <div className="card overflow-hidden">
                    <div className="image mx-auto" style={{ width:"200px",height: "200px" }}>
                        <img src="./images/potato.png" alt="" className="w-100 h-100"/>
                    </div>
                    <h3>Potato</h3>
                    <p>₹30.00</p>
                    <div className="row border-top">
                        <div className="col-6 p-2 border-end">
                            <i className="fa fa-eye" aria-hidden="true"> View Details</i>
                        </div>
                        <div className="col-6 p-2">
                            <i className="fa fa-shopping-cart" aria-hidden="true"> Add to cart</i>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 mt-3 ">
                    <div className="card overflow-hidden">
                    <div className="image mx-auto" style={{ width:"200px",height: "200px" }}>
                        <img src="./images/cucumber.png" alt="" className="w-100 h-100"/>
                    </div>
                    <h3>Cucumber</h3>
                    <p>₹45.00</p>
                    <div className="row border-top">
                        <div className="col-6 p-2 border-end">
                            <i className="fa fa-eye" aria-hidden="true"> View Details</i>
                        </div>
                        <div className="col-6 p-2">
                            <i className="fa fa-shopping-cart" aria-hidden="true"> Add to cart</i>
                        </div>
                    </div>
                    </div>
                </div>
               
            </div>
             {props.display?
            <button type="button" className="btn btn-primary mt-4 d-block mx-auto">Browse More Products</button>
            :<></>
            }
        </div>
  )
}

export default Product