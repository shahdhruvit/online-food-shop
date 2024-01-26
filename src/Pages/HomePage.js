import React from 'react'
import About from '../Components/About'
import Features from '../Components/Features'
import Product from '../Components/Product'
import Visit from '../Components/Visit'
import Customer from '../Components/Customer'
import Blog from '../Components/Blog'

const HomePage = () => {
  return (
    <>
    <div class="hero-section container-fluid d-flex align-items-center">
        <div class="hero text-white">
            <h1 style={{ fontSize: "4rem;" }}>Natural Food is Always Healthy</h1>
            <a href="/product"><button type="button" class="btn btn-success mt-5 py-3 px-5" style={{ borderRadius: "30px" }}>Products</button></a>
            <a href="/feature"><button type="button" class="btn btn-primary mt-5 py-3 px-5" style={{ borderRadius: "30px" }}>Features</button></a>
        </div>
    </div>

    <About/>
    <Features/>
    <Product/>
    <Visit/>
    <Customer/>
    <Blog/>
    </>
  )
}

export default HomePage