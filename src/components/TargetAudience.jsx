import React from 'react';

const targetAudienceData = [
  "Women & Girls (10+ years)",
  "Lactating & Pregnant Mothers",
  "Men, Boys & Youth",
  "Scheduled Tribes & Castes",
  "Smallholder Farmers & Artisans",
  "Persons with Disabilities (Divyang)",
  "Ultra-Poor Families",
  "Economically Backward Groups"
];

const TargetAudience = () => {
  return (
    <div className="row justify-content-center mb-4 mx-0">
      <div className="col-12 px-1 px-sm-2">
        <div className="card border-0 p-4 p-md-5 rounded-4 bg-white shadow-sm">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
            <div>
              <span className="text-uppercase text-primary fw-bold small tracking-wider">Community Reach</span>
              <h3 className="h3 fw-bold text-dark mb-1 mt-1">Target Audience & Key Demographics</h3>
            </div>
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mt-2 mt-md-0">
              <i className="bi bi-people-fill me-1"></i> Inclusive Focus
            </span>
          </div>

          <p className="text-muted small mb-4">
            Our programs prioritize vulnerable, marginalized, and underserved groups across rural and tribal regions to ensure equitable and sustainable socio-economic growth.
          </p>

          <div className="row g-2">
            {targetAudienceData.map((item, tIdx) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={tIdx}>
                <div className="p-3 bg-light rounded-3 border h-100 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success fs-5 me-2 flex-shrink-0"></i>
                  <span className="fw-semibold text-dark small">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetAudience;