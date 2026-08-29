import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageNavigation from '../components/PageNavigation';


const Whatwedo = () => {
  // State to track which focus area is currently selected
  const [activeTab, setActiveTab] = useState(0);

  // Structured content data based exactly on your text
 

  return (
    
  <>
  <Header/>
  <PageNavigation title="Our Approach"/>
    <div className="container my-5 px-4">
      
      {/* 1. TOP BANNER: Transforming Lives Intro */}
      <div 
        className="p-5 mb-5 text-start bg-white"
        style={{
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
          borderRadius: "16px",
          borderLeft: "5px solid #0d6efd" // Matches previous premium edge style
        }}
      >
        <span className="text-primary text-uppercase fw-bold small tracking-wider d-block mb-2">Our Mission</span>
        <h2 className="fw-bold text-dark mb-3" style={{ letterSpacing: "-0.5px" }}>
          Transforming Lives Through Community-Led Development
        </h2>
        <p className="text-primary lh-lg mb-3">
          At our organization, we believe that sustainable development begins when communities become active architects of their own future. Guided by the principles of equity, inclusion, dignity, and participation, we work alongside women, children, adolescents, youth, tribal communities, farmers, migrant workers, and other marginalised groups to create lasting social change. Our approach combines grassroots mobilisation, capacity building, rights-based advocacy, and institution strengthening to address the root causes of poverty, inequality, and exclusion.
        </p>
        <p className="text-primary lh-lg mb-3">
          We recognise that communities possess immense knowledge, resilience, and leadership potential. Therefore, we prioritise local participation, women-led initiatives, and community ownership in every intervention. By fostering partnerships with government institutions, civil society organisations, private sector stakeholders, and development partners, we strive to create enabling ecosystems where individuals and communities can thrive.
        </p>
        <p className="text-primary lh-lg mb-0 fw-medium text-dark">
          🎯 Aligned with the Sustainable Development Goals (SDGs), our work focuses on empowering people with knowledge, skills, opportunities, and access to resources across rural and tribal regions of India.
        </p>
      </div>


    </div>
    <Footer/>
  </>
  )
}

export default Whatwedo
