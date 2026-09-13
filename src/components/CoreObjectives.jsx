import React from 'react';

const objectivesData = [
  {
    title: "Safety & Support Ecosystems",
    desc: "Community awareness, guidance, and referral pathways for vulnerable communities.",
    icon: "bi-shield-check",
    accent: "#0d6efd"
  },
  {
    title: "Sustainable Livelihoods & Enterprise Development",
    desc: "Market-aligned skills, collectives, and diversified income opportunities.",
    icon: "bi-graph-up-arrow",
    accent: "#198754"
  },
  {
    title: "Youth Capacity & Digital Enablement",
    desc: "Foundational learning, digital literacy, leadership, and youth empowerment.",
    icon: "bi-journal-bookmark-fill",
    accent: "#0dcaf0"
  },
  {
    title: "Inclusive Governance & Institutional Strengthening",
    desc: "Women’s leadership, local collectives, and community-led development.",
    icon: "bi-bank",
    accent: "#6f42c1"
  },
  {
    title: "Social Inclusion & Entitlement Linkages",
    desc: "Connecting vulnerable households to essential services and social support.",
    icon: "bi-card-checklist",
    accent: "#ffc107"
  },
  {
    title: "Scalable Development & Environmental Models",
    desc: "Evidence-based solutions for health, WASH, and resource management.",
    icon: "bi-lightbulb-fill",
    accent: "#20c997"
  }
];

const CoreObjectives = () => {
  return (
    <>
      <div className="row justify-content-center text-center mt-5 mb-4 mx-0">
        <div className="col-lg-8">
          <span className="text-uppercase text-primary fw-bold small tracking-wider">Strategic Focus</span>
          <h2 className="fw-bold text-dark mt-1">Core Objectives</h2>
        </div>
      </div>

      <div className="row g-2 g-md-3 justify-content-center mb-5 mx-0">
        {objectivesData.map((item, idx) => (
          <div className="col-12 col-sm-6 col-lg-4 d-flex px-1 px-sm-2" key={idx}>
            <div
              className="card border-0 p-3 p-md-4 rounded-4 bg-white shadow-sm w-100 transition-all"
              style={{
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                borderTop: `4px solid ${item.accent}`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.03)";
              }}
            >
              <div
                className="rounded-3 d-flex align-items-center justify-content-center mb-3"
                style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: `${item.accent}15`,
                  color: item.accent
                }}
              >
                <i className={`bi ${item.icon} fs-5`}></i>
              </div>
              <h5 className="fw-bold text-dark mb-2 fs-6">{item.title}</h5>
              <p className="text-muted small mb-0 lh-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CoreObjectives;