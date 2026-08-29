import React from 'react';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
  return (
    <section className="py-5 bg-light position-relative overflow-hidden">
      <div className="container py-4">
        <div className="row g-5 align-items-center">
          
          {/* Left Column: Layered Visual Graphic */}
          <div className="col-lg-6">
            <div className="position-relative pe-lg-4">
              {/* Main Image Card */}
              <div className="rounded-4 overflow-hidden shadow-lg border border-white border-4 position-relative">
                <img 
                  className="img-fluid w-100 object-fit-cover" 
                  src="img/about.jpg" 
                  alt="About Us"
                  style={{ minHeight: "400px", maxHeight: "520px" }}
                />
              </div>

              {/* Floating Impact Badge */}
              <div 
                className="position-absolute bottom-0 end-0 bg-white p-4 rounded-4 shadow-lg d-flex align-items-center gap-3 border border-light"
                style={{ transform: "translate(15px, 20px)", maxWidth: "260px", zIndex: 2 }}
              >
                <div className="bg-primary-subtle text-primary p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: "54px", height: "54px" }}>
                  <i className="bi bi-heart-fill fs-4"></i>
                </div>
                <div>
                  <h4 className="fw-bold mb-0 text-dark">50K+</h4>
                  <p className="text-muted small mb-0">Lives Impacted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Call to Action */}
          <div className="col-lg-6">
            <div className="ps-lg-3">
              <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-semibold text-uppercase tracking-wider mb-3">
                About Our Mission
              </span>
              
              <h1 className="display-6 fw-bold mb-4 text-dark lh-sm">
                Join Hands, <span className="text-primary">Change the World</span>
              </h1>
              
              <p className="lead text-muted mb-4 fs-6">
                Every hand extended in kindness brings us closer to a world free from suffering. Be part of a global movement dedicated to building a future where equality and compassion thrive.
              </p>

              {/* Feature Cards Grid */}
              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div className="p-3 bg-white rounded-3 border border-light-subtle shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-2 text-primary">
                      <i className="bi bi-shield-check fs-5"></i>
                      <h6 className="fw-bold mb-0 text-dark">Transparent Giving</h6>
                    </div>
                    <p className="small text-muted mb-0">100% of your contributions directly empower vulnerable communities.</p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 bg-white rounded-3 border border-light-subtle shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-2 text-primary">
                      <i className="bi bi-globe2 fs-5"></i>
                      <h6 className="fw-bold mb-0 text-dark">Global Reach</h6>
                    </div>
                    <p className="small text-muted mb-0">Creating lasting social impact through sustainable local programs.</p>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="p-4 rounded-4 bg-primary text-dark shadow-md d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3">
                <div>
                  <h5 className="fw-bold text-white mb-1">Make an Impact Today</h5>
                  <p className="small text-white-50 mb-0">Your generosity transforms lives instantly.</p>
                </div>
                <Link 
                  className="btn btn-light text-primary fw-bold py-2 px-4 rounded-pill shadow-sm text-nowrap align-self-start align-self-sm-center hover-lift" 
                  to="/get-involved/become-a-donor"
                >
                  Donate Now <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeAbout;