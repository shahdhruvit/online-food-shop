import React from 'react'
import Blog from '../Components/Blog'
import Hero from '../Components/Hero'

const BlogPage = () => {
  return (
    <div>
        <Hero title="Blog"/>
        <Blog/>
        <Blog condition="false"/>
        <Blog condition="false"/>
    </div>
  )
}

export default BlogPage