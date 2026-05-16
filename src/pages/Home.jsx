import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import Subscribe from '../components/Subscribe'
import CarCart from '../components/CarCart'

const Home = () => {
  return (
    <div><Hero/>
    <FeaturedSection/>
    {/* <CarCart/> */}
    <Banner/>
      <Testimonials/>
      <Subscribe/>
    
  
    </div>
  )
}

export default Home