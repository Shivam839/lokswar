import React, { useState, useEffect } from 'react';

const AboutHeaderNav = () => {
  const [activeSection, setActiveSection] = useState('background');

  const tabs = [
    { id: 'background', label: 'Background' },
    { id: 'ideology', label: 'Ideology & Values' },
    { id: 'vision-mission', label: 'Vision & Mission' },
    { id: 'team', label: 'Our Team' }
  ];

  // Offset calculation so scrolled content isn't hidden under the sticky bar
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -140; // Adjust this if you change your header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;

      for (const tab of tabs) {
        const element = document.getElementById(tab.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(tab.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-header-wrapper">
      {/* Banner / Hero Section */}
      <div 
        className="position-relative py-5 text-center text-white d-flex align-items-center justify-content-center"
        style={{
          background: 'linear-gradient(135deg, #101827 0%, #1E293B 100%)',
          minHeight: '200px'
        }}
      >
        <div>
          <h1 className="display-4 fw-bold mb-2">About Us</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0 bg-transparent p-0">
              <li className="breadcrumb-item">
                <a href="/" className="text-white-50 text-decoration-none">Home</a>
              </li>
              <li className="breadcrumb-item text-white-50">Pages</li>
              <li className="breadcrumb-item text-white fw-semibold active" aria-current="page">About Us</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 📌 STICKY NAV BAR */}
      <div 
        className="sticky-top bg-white border-bottom shadow-sm py-2"
        style={{ 
          zIndex: 1020, 
          top: '0px' /* Change to '80px' if your main site Header is also fixed/sticky */
        }}
      >
        <div className="container">
          <div className="d-flex align-items-center overflow-auto no-scrollbar">
            <span className="fw-bold text-uppercase text-muted me-3 small d-none d-md-inline flex-shrink-0">
              Jump to:
            </span>
            
            <ul className="nav nav-pills flex-nowrap w-100 gap-2">
              {tabs.map((tab) => (
                <li className="nav-item flex-shrink-0" key={tab.id}>
                  <button
                    onClick={() => scrollToSection(tab.id)}
                    className={`nav-link btn-sm px-3 py-2 rounded-pill fw-semibold transition-all ${
                      activeSection === tab.id
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-dark bg-light hover-bg-secondary'
                    }`}
                    style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Hide horizontal scrollbar on mobile while allowing swiping */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default AboutHeaderNav;