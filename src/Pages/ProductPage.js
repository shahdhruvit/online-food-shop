import React from 'react'
import Hero from '../Components/Hero'
import Product from '../Components/Product'
import Visit from '../Components/Visit'
import Customer from '../Components/Customer'

const ProductPage = () => {
  return (
    <>
        <Hero title="Product"/>
        <Product/>
        <Product display="false"/>
        <Visit/>
        <Customer/>
    </>
  )
}

export default ProductPage