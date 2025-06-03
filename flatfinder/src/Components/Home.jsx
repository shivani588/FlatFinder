import React, { useEffect } from 'react'
import Amenties from './Amenities'
import Images from './Images'
import Video from './video'

const Home = () => {
  useEffect(()=>{
    document.title="Home"
},[])
  return (
    <>
      <div className="hero-container my-4">
      <div className="hero-content">
        <h2 classname="homeheading text-white">Find Your Perfect Flat</h2>
        <p className='text-black'>Search for flats, apartments, and homes in your desired location.</p>
        {/* <button className="btn btn-danger">Get Started</button> */}
      </div>
    </div>
  
  <Amenties></Amenties>
  <Video></Video>
  <Images></Images> 
    </>
  )
}

export default Home
