import React from 'react'
import Header from '../components/Header'
import Coursel from '../components/Coursel'
import HomeAbout from '../components/HomeAbout'
import WhyChooseUs from '../components/WhyChooseUs'
import Featured from '../components/Featured'
import DonationForm from '../components/DonationForm'
import OurTeam from '../components/OurTeam'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { carouselData } from '../data/carouselData'

const Home = () => {
  return (
    <div>
      <Header/>
      <Coursel slidesData={carouselData}/>
      <HomeAbout/>
      <WhyChooseUs/>
      <Featured/>
      {/* <OurTeam/> */}
      <Testimonial/>
      {/* <DonationForm/> */}
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
