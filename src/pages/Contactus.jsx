import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageNavigation from '../components/PageNavigation'
import Contactform from '../components/Contactform'
import Newsletter from '../components/Newsletter'

const Contactus = () => {
  return (
    <div>
      <Header/>
      <PageNavigation title="Contact Us"/>
      <Contactform/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Contactus
