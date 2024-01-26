import React from 'react'

const Features = () => {
  return (
    <div className="container features text-center mt-5">
    <h1>Our Features</h1>
    <p> We prioritize convenience, offering seamless online shopping and doorstep delivery to bring wholesome and nutritious food right to your doorstep</p>
    <div className="row mt-5">
        <div className="col-lg-4 col-sm-12 mt-3">
            <div className="card">
                <div className="image mx-auto" style={{ width:"200px",height:"200px" }}>
                    <img src="./images/all-natural.png" className="card-img-top w-100 h-100" alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Natural Process</h5>
                    <p className="card-text">We believe in harnessing the power of nature to bring you the freshest and healthiest produce available.</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>

        <div className="col-lg-4 col-sm-12 mt-3">
            <div className="card">
                <div className="image mx-auto" style={{ width:"200px",height:"200px" }}>
                    <img src="./images/organic.png" className="card-img-top w-100 h-100" alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Organic Goodness</h5>
                    <p className="card-text">We are dedicated to providing you with organic offerings that are free from harmful pesticides.</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>

        <div className="col-lg-4 col-sm-12 mt-3">
            <div className="card">
                <div className="image mx-auto" style={{ width:"200px",height:"200px" }}>
                    <img src="./images/seasonal.png" className="card-img-top w-100 h-100" alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Seasonal</h5>
                    <p className="card-text">We adhere to strict quality control measures for cleanliness and hygiene.</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Features