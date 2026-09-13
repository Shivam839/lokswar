import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageNavigation from '../components/PageNavigation';
import VisionMissionGoal from '../components/VisionMissionGoal';
import CoreObjectives from '../components/CoreObjectives';
import SdgGrid from '../components/SdgGrid';
import GeographicFootprint from '../components/GeographicFootprint';
import TargetAudience from '../components/TargetAudience';

const AboutVisionObjective = () => {
  const [activeDistrict, setActiveDistrict] = useState(null);

  return (
    <>
      <Header />
      <PageNavigation title="Approach" />

      <section className="py-5 bg-light">
        <div className="container-fluid py-2 px-1 px-sm-2" style={{ maxWidth: "1400px" }}>
          <VisionMissionGoal />
          <CoreObjectives />
          <SdgGrid />
          <GeographicFootprint 
            activeDistrict={activeDistrict} 
            setActiveDistrict={setActiveDistrict} 
          />
          <TargetAudience />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutVisionObjective;