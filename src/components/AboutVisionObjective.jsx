import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import PageNavigation from './PageNavigation';

const AboutVisionObjective = () => {
  const [activeDistrict, setActiveDistrict] = useState(null);

  // SDG Images Array
  const sdgGoals = [
    { id: 1, title: "No Poverty", img: "/img/SDG/sdg-1.jpg", icon: "bi-graph-up-arrow" },
    { id: 4, title: "Quality Education", img: "/img/SDG/sdg-2.jpg", icon: "bi-book" },
    { id: 5, title: "Gender Equality", img: "/img/SDG/sdg-3.jpg", icon: "bi-gender-ambiguous" },
    { id: 6, title: "Clean Water & Sanitation", img: "/img/SDG/sdg-4.jpg", icon: "bi-droplet-half" },
    { id: 8, title: "Decent Work & Economic Growth", img: "/img/SDG/sdg-5.jpg", icon: "bi-briefcase" },
    { id: 10, title: "Reduced Inequalities", img: "/img/SDG/sdg-6.jpg", icon: "bi-person-hearts" },
    { id: 16, title: "Peace, Justice & Strong Institutions", img: "/img/SDG/sdg-7.jpg", icon: "bi-shield-check" },
    { id: 17, title: "Partnerships for the Goals", img: "/img/SDG/sdg-8.jpg", icon: "bi-globe" }
  ];

  // Core Objectives Data
  const objectives = [
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

  // Target Audience Data
  const targetAudience = [
    "Women & Girls (10+ years)",
    "Lactating & Pregnant Mothers",
    "Men, Boys & Youth",
    "Scheduled Tribes & Castes",
    "Smallholder Farmers & Artisans",
    "Persons with Disabilities (Divyang)",
    "Ultra-Poor Families",
    "Economically Backward Groups"
  ];

  // Key Districts Served with Relative SVG Coordinate Positions (% based)
  const districtsData = [
    { name: "Koderma", x: 53, y: 22, region: "North" },
    { name: "Hazaribagh", x: 48, y: 34, region: "North Central" },
    { name: "Dumka", x: 82, y: 32, region: "East (Santhal Pargana)" },
    { name: "Ramgarh", x: 52, y: 48, region: "Central" },
    { name: "Ranchi", x: 47, y: 58, region: "Central" },
    { name: "Khunti", x: 42, y: 68, region: "South Central" },
    { name: "Gumla", x: 28, y: 65, region: "West" },
    { name: "East Singhbhum", x: 80, y: 82, region: "South East" }
  ];

  const footprintStats = [
    { value: "8", label: "Districts" },
    { value: "8", label: "Blocks" },
    { value: "16", label: "Panchayats" },
    { value: "49", label: "Villages" }
  ];

  return (
    <>
      <Header />
      <PageNavigation title="Approach" />

      <section className="py-5 bg-light">
        <div className="container-fluid py-2 px-1 px-sm-2" style={{ maxWidth: "1400px" }}>

          {/* 1. VISION, MISSION, GOAL CARDS */}
          <div className="row g-3 g-md-4 justify-content-center mb-5 mx-0">
            <div className="col-12 col-md-4 px-1 px-sm-2">
              <div
                className="card h-100 border-0 p-4 p-md-5 rounded-4 text-white shadow-sm d-flex flex-column justify-content-between"
                style={{ backgroundColor: "#002663" }}
              >
                <div>
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: "52px", height: "52px", backgroundColor: "rgba(255,255,255,0.15)", color: "#6ecdf5" }}
                    >
                      <i className="bi bi-eye fs-3"></i>
                    </div>
                    <div>
                      <h3 className="h2 text-white fw-bold mb-0">Vision</h3>
                    </div>
                  </div>
                  <p className="fs-5 fw-light lh-base mb-0" style={{ color: "#e2e8f0" }}>
                    To build an inclusive and empowered society where every person lives with dignity, self-reliance, and sustainable well-being.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 px-1 px-sm-2">
              <div className="card h-100 border-0 p-4 p-md-5 rounded-4 bg-white shadow-sm d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: "52px", height: "52px", backgroundColor: "rgba(25, 135, 84, 0.12)", color: "#198754" }}
                    >
                      <i className="fa-solid fa-bullseye fs-3"></i>
                    </div>
                    <div>
                      <h3 className="h2 text-dark fw-bold mb-0">Mission</h3>
                    </div>
                  </div>
                  <p className="fs-5 text-muted lh-base mb-0">
                    To empower vulnerable communities, especially women and girls, through leadership, rights, self-reliance, and inclusive socio-economic opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 px-1 px-sm-2">
              <div
                className="card h-100 border-0 p-4 p-md-5 rounded-4 text-white shadow-sm d-flex flex-column justify-content-between"
                style={{ backgroundColor: "#002663" }}
              >
                <div>
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: "52px", height: "52px", backgroundColor: "rgba(255,255,255,0.15)", color: "#6ecdf5" }}
                    >
                      <i className="bi bi-trophy fs-3"></i>
                    </div>
                    <div>
                      <h3 className="h2 text-white fw-bold mb-0">Goal</h3>
                    </div>
                  </div>
                  <p className="fs-5 fw-light lh-base mb-0" style={{ color: "#e2e8f0" }}>
                    To build empowered, resilient, and self-reliant communities where women and girls can exercise their rights, lead change, and access equal opportunities for a dignified and sustainable life.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. CORE OBJECTIVES */}
          <div className="row justify-content-center text-center mt-5 mb-4 mx-0">
            <div className="col-lg-8">
              <span className="text-uppercase text-primary fw-bold small tracking-wider">Strategic Focus</span>
              <h2 className="fw-bold text-dark mt-1">Core Objectives</h2>
            </div>
          </div>

          <div className="row g-2 g-md-3 justify-content-center mb-5 mx-0">
            {objectives.map((item, idx) => (
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

          {/* 3. APPROACH BANNER WITH SDG GRID */}
          <div className="row justify-content-center mb-5 mx-0">
            <div className="col-12 px-1 px-sm-2">
              <div
                className="card border-0 rounded-4 shadow-sm bg-white overflow-hidden"
                style={{ borderLeft: "6px solid #002663" }}
              >
                <div className="p-3 p-md-4 p-lg-5">
                  <h2 className="fw-bold text-dark display-6 mb-3">
                    Transforming Lives Through Community-Led Development
                  </h2>

                  <p className="text-muted lead fs-6 lh-base mb-3">
                    At LOK SWAR, we believe that sustainable development begins when communities become active architects of their own future. Guided by the principles of equity, inclusion, and participation, we work alongside vulnerable and marginalised groups to create lasting social change. Our approach combines grassroots mobilisation, capacity building, facilitating access to government schemes and institution strengthening to address the root causes of poverty, inequality, and exclusion.
                  </p>

                  <p className="text-muted lead fs-6 lh-base mb-4">
                    We recognise that communities possess immense knowledge, resilience, and leadership potential. Therefore, we prioritise local participation, women-led initiatives, and community ownership in every intervention. By fostering partnerships with government institutions, civil society organisations, private sector stakeholders, and development partners, we strive to create enabling ecosystems where individuals and communities can thrive.
                  </p>

                  {/* SDG Alignment Section */}
                  <div className="p-3 p-md-4 rounded-4 bg-light border border-info-subtle mb-2">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <h5 className="mb-0 text-dark fw-bold">
                        Aligned with Sustainable Development Goals (SDGs)
                      </h5>
                    </div>
                    <p className="text-muted small mb-3">
                      Our interventions directly contribute to 8 key United Nations Sustainable Development Goals to empower communities across rural and tribal regions of India.
                    </p>

                    <div className="row g-1 g-md-2 flex-nowrap flex-lg-wrap-0 align-items-center">
                      {sdgGoals.map((sdg) => (
                        <div
                          key={sdg.id}
                          style={{ flex: "1 1 0%", minWidth: "0" }}
                          className="col-6 col-sm-4 col-md-3 col-lg p-1"
                        >
                          <div
                            className="position-relative overflow-hidden rounded-2 shadow-sm bg-dark group"
                            style={{
                              aspectRatio: "1 / 1",
                              cursor: "pointer",
                              width: "100%"
                            }}
                            onMouseEnter={(e) => {
                              const img = e.currentTarget.querySelector('img');
                              const overlay = e.currentTarget.querySelector('.sdg-title-overlay');
                              if (img) img.style.transform = "scale(1.08)";
                              if (overlay) {
                                overlay.style.transform = "translateY(0)";
                                overlay.style.opacity = "1";
                              }
                            }}
                            onMouseLeave={(e) => {
                              const img = e.currentTarget.querySelector('img');
                              const overlay = e.currentTarget.querySelector('.sdg-title-overlay');
                              if (img) img.style.transform = "scale(1)";
                              if (overlay) {
                                overlay.style.transform = "translateY(100%)";
                                overlay.style.opacity = "0";
                              }
                            }}
                          >
                            <img
                              src={sdg.img}
                              alt={`SDG ${sdg.id} - ${sdg.title}`}
                              className="w-100 h-100 object-fit-cover"
                              style={{ transition: "transform 0.35s ease-in-out" }}
                            />
                            <div
                              className="sdg-title-overlay position-absolute bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center text-center"
                              style={{
                                backgroundColor: "#002663",
                                padding: "4px 2px",
                                transform: "translateY(100%)",
                                opacity: 0,
                                transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease",
                                borderTop: "2px solid #0dcaf0",
                                backdropFilter: "blur(4px)"
                              }}
                            >
                              <div
                                className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  backgroundColor: "rgba(13, 202, 240, 0.15)",
                                  color: "#0dcaf0",
                                  border: "1px solid rgba(13, 202, 240, 0.3)",
                                  fontSize: "10px",
                                  marginBottom: "2px"
                                }}
                              >
                                <i className={`bi ${sdg.icon}`}></i>
                              </div>
                              <span
                                className="text-uppercase fw-bold d-block"
                                style={{
                                  color: "#0dcaf0",
                                  fontSize: "8px",
                                  letterSpacing: "0.5px",
                                  lineHeight: "1",
                                  marginBottom: "2px"
                                }}
                              >
                                Goal {sdg.id}
                              </span>
                              <h6
                                className="fw-semibold text-white mb-0 text-truncate w-100 px-1"
                                style={{
                                  fontFamily: "'Georgia', serif",
                                  fontStyle: "italic",
                                  fontSize: "9px",
                                  color: "#6ecdf5",
                                  lineHeight: "1.1"
                                }}
                              >
                                {sdg.title}
                              </h6>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* 4. GEOGRAPHIC FOOTPRINT WITH MAP (SIDE-BY-SIDE) */}
          <div className="row justify-content-center mb-4 mx-0">
            <div className="col-12 px-1 px-sm-2">
              <div className="card border-0 p-4 p-md-5 rounded-4 bg-white shadow-sm">
                <div className="row align-items-center g-4">
                  
                  {/* Left Column: Footprint Details & Stats */}
                  <div className="col-12 col-lg-6">
                    <span className="text-uppercase text-primary fw-bold small tracking-wider">Geographic Footprint</span>
                    <h3 className="h3 fw-bold text-dark mb-2 mt-1">Intervention Area - Jharkhand</h3>
                    <p className="text-muted small mb-4">
                      Our active operations extend across key districts in Jharkhand, bringing sustainable development directly to grassroots levels.
                    </p>

                    <div className="row text-center g-2 mb-4">
                      {footprintStats.map((stat, sIdx) => (
                        <div className="col-3" key={sIdx}>
                          <div className="p-2 bg-light rounded-3 border">
                            <div className="fw-bold fs-3 text-primary">{stat.value}</div>
                            <small className="text-muted d-block lh-1 mt-1" style={{ fontSize: "11px" }}>{stat.label}</small>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h6 className="fw-bold text-dark mb-3 small text-uppercase tracking-wider">Key Districts Served:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {districtsData.map((dist, dIdx) => (
                        <span
                          key={dIdx}
                          className={`badge px-3 py-2 rounded-pill fw-semibold cursor-pointer transition-all ${
                            activeDistrict === dist.name
                              ? "bg-primary text-white shadow-sm"
                              : "bg-primary bg-opacity-10 text-primary"
                          }`}
                          style={{ cursor: "pointer", transition: "all 0.2s ease" }}
                          onMouseEnter={() => setActiveDistrict(dist.name)}
                          onMouseLeave={() => setActiveDistrict(null)}
                        >
                          <i className="bi bi-geo-alt-fill me-1"></i> {dist.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Interactive Vector Map of Jharkhand */}
                  <div className="col-12 col-lg-6 text-center">
                    <div
                      className="position-relative bg-light rounded-4 p-3 border d-flex flex-column align-items-center justify-content-center"
                      style={{ minHeight: "380px", overflow: "hidden" }}
                    >
                      <div className="d-flex justify-content-between align-items-center w-100 px-2 mb-2">
                        <small className="fw-bold text-uppercase text-muted" style={{ fontSize: "11px" }}>
                          <i className="bi bi-map-fill me-1 text-primary"></i> Jharkhand State Footprint
                        </small>
                        <span className="badge bg-success bg-opacity-10 text-success border border-success-subtle">
                          8 Districts Active
                        </span>
                      </div>

                      {/* Jharkhand SVG Map Representation */}
                      <div className="position-relative w-100" style={{ maxWidth: "420px", aspectRatio: "1.15 / 1" }}>
                        <svg
                          viewBox="0 0 500 420"
                          className="w-100 h-100"
                          style={{ filter: "drop-shadow(0px 8px 16px rgba(0,38,99,0.08))" }}
                        >
                          {/* Simplified Jharkhand State Outline Path */}
                          <path
                            d="M 120 40 
                               L 220 30 
                               L 320 20 
                               L 400 60 
                               L 460 110 
                               L 440 180 
                               L 480 240 
                               L 430 330 
                               L 380 390 
                               L 300 370 
                               L 230 350 
                               L 140 330 
                               L 90 280 
                               L 60 200 
                               L 70 110 Z"
                            fill="#002663"
                            fillOpacity="0.06"
                            stroke="#002663"
                            strokeWidth="2"
                            strokeDasharray="4 2"
                          />

                          {/* Connection Lines linking active hubs */}
                          <polyline
                            points="240,140 265,92 410,134 260,200 235,243 210,285 140,273 400,344"
                            fill="none"
                            stroke="#0d6efd"
                            strokeWidth="1.5"
                            strokeOpacity="0.25"
                            strokeDasharray="3 3"
                          />

                          {/* District Markers */}
                          {districtsData.map((dist, idx) => {
                            const cx = (dist.x / 100) * 500;
                            const cy = (dist.y / 100) * 420;
                            const isActive = activeDistrict === dist.name;

                            return (
                              <g
                                key={idx}
                                style={{ cursor: "pointer" }}
                                onMouseEnter={() => setActiveDistrict(dist.name)}
                                onMouseLeave={() => setActiveDistrict(null)}
                              >
                                {/* Ripple Animation Circle */}
                                <circle
                                  cx={cx}
                                  cy={cy}
                                  r={isActive ? "18" : "12"}
                                  fill="#0d6efd"
                                  fillOpacity={isActive ? "0.35" : "0.15"}
                                  style={{ transition: "all 0.3s ease" }}
                                />

                                {/* Marker Dot */}
                                <circle
                                  cx={cx}
                                  cy={cy}
                                  r={isActive ? "7" : "5"}
                                  fill={isActive ? "#0d6efd" : "#002663"}
                                  stroke="#ffffff"
                                  strokeWidth="2"
                                  style={{ transition: "all 0.2s ease" }}
                                />

                                {/* District Name Label */}
                                <text
                                  x={cx}
                                  y={cy - 12}
                                  textAnchor="middle"
                                  fill={isActive ? "#0d6efd" : "#212529"}
                                  fontSize={isActive ? "12" : "10"}
                                  fontWeight={isActive ? "bold" : "600"}
                                  style={{ transition: "all 0.2s ease", pointerEvents: "none" }}
                                >
                                  {dist.name}
                                </text>
                              </g>
                            );
                          })}
                        </svg>

                        {/* Interactive Tooltip Overlay */}
                        {activeDistrict && (
                          <div
                            className="position-absolute bg-dark text-white px-3 py-1 rounded-3 shadow-lg pointer-events-none"
                            style={{
                              bottom: "10px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              fontSize: "12px",
                              whiteSpace: "nowrap",
                              zIndex: 10
                            }}
                          >
                            <i className="bi bi-geo-alt-fill text-info me-1"></i>
                            <strong>{activeDistrict} District</strong> - Active Program Zone
                          </div>
                        )}
                      </div>

                      <span className="text-muted mt-2" style={{ fontSize: "11px" }}>
                        Hover over pins or district badges to highlight locations
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* 5. TARGET AUDIENCE (FULL WIDTH BENEATH MAP) */}
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
                  {targetAudience.map((item, tIdx) => (
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

        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutVisionObjective;