import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageNavigation from '../components/PageNavigation';

const Fundingpartners = () => {
  // Structured partner directory data mapped with high-quality placeholder logo visuals
  const partnersData = [
    { name: "British Asian Trust (England)", logo: "/img/fundingpartners/british-asian-trust.png", type: "fundingpartners" },
    { name: "Chola Mandalam (India)", logo: "/img/fundingpartners/chola.png", type: "fundingpartners" },
    { name: "Connect Her (USA)", logo: "/img/fundingpartners/connect-her.png", type: "fundingpartners" },
    { name: "DASRA (USA)", logo: "/img/fundingpartners/dasra.png", type: "fundingpartners" },
    { name: "NIWANO PEACE FOUNDATION (Japan)", logo: "/img/fundingpartners/niwano-peace-foundation.png", type: "fundingpartners" },
    { name: "Global Green Grant Fund (USA)", logo: "/img/fundingpartners/global-greengran-fund.png", type: "fundingpartners" },
    { name: "Conexus Foundation (India)", logo: "/img/fundingpartners/conex.png", type: "fundingpartners" },
    { name: "Girls First Fund (USA)", logo: "/img/fundingpartners/girl-first-fund.png", type: "fundingpartners" },
    { name: "Toxics Link (India)", logo: "/img/fundingpartners/toxics-link.png", type: "fundingpartners" },
    { name: "Oxfam India", logo: "/img/fundingpartners/oxfam.png", type: "fundingpartners" },
    { name: "Work with Dignity (India)", logo: "/img/fundingpartners/work-with-dignity.png", type: "fundingpartners" },
    { name: "Jharkhand Government", logo: "/img/fundingpartners/government-of-jharkand.png", type: "fundingpartners" }
  ];

  const fundingpartner = partnersData.filter(p => p.type === 'fundingpartners');

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <Header/>
      <PageNavigation title="Funding Partner"/>
      
      <div className="container py-1 px-1">
        
    

        {/* 2. FUNDING CONTAINER */}
        <div className="partner-segment-wrapper mb-5">          
          <div className="row g-4 justify-content-center">
            {fundingpartner.map((partner, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-3">
                <div className="partner-logo-card p-2 bg-white text-center position-relative overflow-hidden d-flex flex-column align-items-center justify-content-between">
                  {/* Top Accent Line on Hover */}
                  <div className="hover-accent-line"></div>
                  
                  {/* Logo Container */}
                  <div className="logo-img-frame position-relative d-flex align-items-center justify-content-center w-100 flex-grow-1 p-2">
                    <img src={partner.logo} alt={partner.name} className="partner-logo-graphics" />
                  </div>
                  
                  {/* Partner Name Label */}
                  <span className="partner-label-text text-dark fw-bold small lh-sm pb-2 px-2">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STYLES & ANIMATIONS */}
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

export default Fundingpartners;