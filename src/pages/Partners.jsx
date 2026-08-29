import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageNavigation from '../components/PageNavigation';

const Partners = () => {
  // Structured partner directory data mapped with high-quality placeholder logo visuals
  const partnersData = [
    { name: "Jharkhand anti trafficking network (J.A.T.N)", logo: "/img/collaboration partner/Jharkhand anti trafficking network.png", type: "networks" },
    { name: "Campaign against child labour (C.A.C.L)", logo: "/img/collaboration partner/Campaign against child labour.jpg", type: "networks" },
    { name: "The Advocacy and Accountability Collaborative (TAAC HUB)", logo: "/img/collaboration partner/The Advocacy and Accountability Collaborative (TAAC HUB).jpg", type: "networks" },
    { name: "Jharkhand Rights to Education Forum (JRTEF)", logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=200&h=100&q=80", type: "networks" },
    { name: "National Alliance of Women (NAWO)", logo: "/img/collaboration partner/National Alliance of Women (NAWO)'.png", type: "networks" },
    { name: "Grass Roots Resilience Institute (G.R.I)", logo: "/img/collaboration partner/Grass Roots Resilience Institute (G.R.I).jpg", type: "networks" },
    { name: "Jharkhand Just Transition Network - SAARTHI", logo: "/img/collaboration partner/Jharkhand Just Transition Network - SAARTHI.jpg", type: "networks" },
    { name: "Ranchi District MID DAY MEAL Committee", logo: "/img/collaboration partner/mid day meal commity.jpg", type: "members" },
    { name: "Anti sexual Harassment Committee of WCD Jharkhand Govt", logo: "/img/collaboration partner/wcd.png", type: "members" },
    { name: "Sexual Harassment Committee of BANK OF BARODA Ranchi (District)", logo: "/img/collaboration partner/Bank-of-Baroda-Logo.png", type: "members" }
  ];

  // Quick segment filtering lists
  const networks = partnersData.filter(p => p.type === 'networks');
  const members = partnersData.filter(p => p.type === 'members');

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <Header/>
      <PageNavigation title="Collaboration and Institutional Partner"/>
      
      <div className="container py-5 px-4">
        
        <div className="partner-segment-wrapper mb-5">
          <h4 className="fw-bold mb-4 text-dark d-flex align-items-center gap-2 border-bottom pb-3">
           Networks
          </h4>
          <div className="row g-4 justify-content-center">
            {networks.map((partner, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-3">
                <div className="partner-logo-card p-2 bg-white text-center position-relative overflow-hidden d-flex flex-column align-items-center justify-content-between">
                  {/* Top Accent Line on Hover */}
                  <div className="hover-accent-line"></div>
                  
                  {/* Logo Frame */}
                  <div className="logo-img-frame position-relative d-flex align-items-center justify-content-center w-100 flex-grow-1 p-2">
                    <img src={partner.logo} alt={partner.name} className="partner-logo-graphics" />
                  </div>
                  
                  {/* Label */}
                  <span className="partner-label-text text-dark fw-bold small lh-sm pb-2 px-2">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      
        <div className="partner-segment-wrapper mb-5">
          <h4 className="fw-bold mb-4 text-dark d-flex align-items-center gap-2 border-bottom pb-3">
            Members
          </h4>
          <div className="row g-4 justify-content-center">
            {members.map((partner, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-3">
                <div className="partner-logo-card p-2 bg-white text-center position-relative overflow-hidden d-flex flex-column align-items-center justify-content-between">
                  {/* Top Accent Line on Hover */}
                  <div className="hover-accent-line"></div>
                  
                  {/* Logo Frame */}
                  <div className="logo-img-frame position-relative d-flex align-items-center justify-content-center w-100 flex-grow-1 p-2">
                    <img src={partner.logo} alt={partner.name} className="partner-logo-graphics" />
                  </div>
                  
                  {/* Label */}
                  <span className="partner-label-text text-dark fw-bold small lh-sm pb-2 px-2">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SCOPED STYLES & ANIMATIONS */}
        <style>{`
          .max-w-700 { max-width: 700px; }
          .tracking-wider { letter-spacing: 1px; }
          
          /* Modern Card Base Styling */
          .partner-logo-card {
            border-radius: 16px;
            border: 1px solid rgba(226, 232, 240, 0.8);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
            height: 185px;
            transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          }
          
          .logo-img-frame {
            width: 100%;
            height: 125px;
            overflow: hidden;
          }

          /* Logo Frame Scaling & Smoothness */
          .partner-logo-graphics {
            width: 100%;
            height: 100%;
            object-fit: contain;
            transition: transform 0.35s ease;
          }

          .partner-label-text {
            font-size: 0.825rem;
            letter-spacing: -0.2px;
            transition: color 0.3s ease;
          }

          /* Subtle Hover Accent Line at Top of Card */
          .hover-accent-line {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #0d6efd, #0dcaf0);
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          /* Card Hover Effects */
          .partner-logo-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 16px 30px rgba(13, 110, 253, 0.12);
            border-color: rgba(13, 110, 253, 0.25);
          }

          .partner-logo-card:hover .hover-accent-line {
            opacity: 1;
          }

          .partner-logo-card:hover .partner-logo-graphics {
            transform: scale(1.06);
          }

          .partner-logo-card:hover .partner-label-text {
            color: #0d6efd !important;
          }
        `}</style>

      </div>
      <Footer/>
    </div>
  );
};

export default Partners;