import React from 'react'

const About = () => {
  return (
    <div className="container about">
            <div className="row mt-5">
                <div className="col-lg-6 p-lg-4" style={{ height: "450px" }}>
                    <img src="https://www.picsum.photos/236" className="w-100 h-100" alt=""/>
                </div>
                <div className="col-lg-6 d-lg-flex align-items-center p-3">
                    <div className="content">
                    <h3>Nurturing Health Through Nature</h3>
                    <p>At VegeFoods, we are passionate about bringing you the freshest and healthiest food and vegetables to nourish your body and delight your taste buds. Our mission is to provide a seamless and enjoyable shopping experience that promotes a sustainable and healthy lifestyle. With a commitment to quality, freshness, and customer satisfaction, we strive to be your go-to destination for all your organic food needs.</p>
                    <ul>
                        <li>Farm-to-Table Freshness</li>
                        <li>Wide Range of Organic Offerings</li>
                        <li>Convenience at Your Fingertips</li>
                    </ul>
                    <button type="button" className="btn btn-primary">Read More</button>
                </div>
                </div>
            </div>
        </div>
  )
}

export default About