import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PageNavigation from './PageNavigation';

const AboutBackground = () => {
  // 5 Step Details for the Right Column
  const steps = [
    {
      step: 1,
      year: "1994",
      title: "Grassroots Solidarity",
      desc: "Started with no funding—survivors offered counseling, emotional support, and safe shelter purely from personal sacrifice.",
      color: "#0dcaf0", // Cyan/Light Blue
      icon: "bi-heart-fill"
    },
    {
      step: 2,
      year: "2000",
      title: "Formal Registration & Network",
      desc: "Powered by volunteer lawyers, doctors, professors, and former survivors turning lived experience into systemic support.",
      color: "#dc3545", // Red
      icon: "bi-people-fill"
    },
    {
      step: 3,
      year: "Growth",
      title: "Democracy & Governance",
      desc: "Drives participation in Panchayati Raj Institutions (PRIs) and Gram Sabhas, turning vulnerability into civic leadership.",
      color: "#198754", // Green
      icon: "bi-house"
    },
    {
      step: 4,
      year: "Expanded",
      title: "Rural Belt Reach",
      desc: "Expanded reach across marginalized communities, building a resilient and strengthened support structure.",
      color: "#ffc107", // Yellow/Orange
      icon: "bi-geo-alt-fill"
    },
    {
      step: 5,
      year: "Today",
      title: "Institutional Impact",
      desc: "Empowering survivors into community leaders through sustained social, economic, and political independence.",
      color: "#6f42c1", // Purple
      icon: "bi-award-fill"
    }
  ];

  // Exactly 3 Circular Visual Nodes (200px width/height)
  const visualNodes = [
    {
      id: 1,
      label: "Origin",
      year: "1994",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      label: "Expansion",
      year: "2000s",
      image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      label: "Impact",
      year: "Today",
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <>
      <Header />
      <PageNavigation title="Our Background" />

      <section className="py-4 bg-light">
        <div className="container py-2">

          {/* Header Introduction Block */}
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-10">
              <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                As its name spells, "LOK" means - People and “SWAR” means - voice, the acronym is "voice of the people". In 1994, a group of women who had survived child marriage and domestic violence came together with a shared determination: no woman should suffer in silence again. With no funding and no institutional backing, they opened their doors to survivors of gender-based violence, offering counselling, emotional support, and safe shelter from their own limited means.
              </p>
              <p className="text-muted">
                What started as informal solidarity became a growing movement. By 2000, Lok Swar was formally registered, strengthening its mission to reach more women and girls across marginalised communities.
              </p>
            </div>
          </div>

          {/* Timeline Layout (Both sides forced to 807px height) */}
          <div className="row g-4 align-items-stretch mb-5 position-relative">

            {/* Left Column: 3-Circle Visual Roadmap */}
            <div className="col-lg-5 text-center position-relative">
              <div
                className="roadmap-visual p-4 rounded-4 shadow-sm bg-white d-flex flex-column align-items-center justify-content-between position-relative overflow-hidden"
                style={{ height: "807px", border: "1px solid #eee" }}
              >
                <span className="text-uppercase tracking-wider fw-bold text-muted small mb-2">
                  Movement Progression
                </span>

                {/* Vertical Visual Track with 3 Circles */}
                <div className="w-100 d-flex flex-column align-items-center justify-content-around flex-grow-1 position-relative py-2">
                  {visualNodes.map((node) => (
                    <div key={node.id} className="d-flex align-items-center justify-content-center gap-3 position-relative z-2">
                      <div className="d-flex flex-column align-items-center">
                        {/* Circle Container */}
                        <div
                          className="rounded-circle shadow-sm overflow-hidden position-relative border border-3 border-white progression-circle"
                          style={{
                            width: "200px",
                            height: "200px",
                            backgroundImage: `url(${node.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            cursor: "pointer"
                          }}
                        >
                          {/* Subtle Gradient Overlay */}
                          <div
                            className="w-100 h-100 position-absolute top-0 start-0"
                            style={{ background: "rgba(0, 0, 0, 0.2)" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-2 pt-2 border-top w-100">
                  <span className="fw-bold text-primary small">25+ Years of Empowering Survivors</span>
                </div>
              </div>
            </div>

            {/* Right Column: Step Cards List */}
            <div className="col-lg-7" style={{ height: "807px" }}>
              <div className="d-flex flex-column justify-content-between h-100 gap-2">
                {steps.map((item) => (
                  <div
                    key={item.step}
                    className="card border-0 shadow-sm p-3 rounded-3 transition-all flex-grow-1 d-flex justify-content-center"
                    style={{ borderLeft: `5px solid ${item.color}` }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle p-2 d-flex align-items-center justify-content-center"
                        style={{ backgroundColor: `${item.color}15`, color: item.color, width: "45px", height: "45px", flexShrink: 0 }}
                      >
                        <i className={`bi ${item.icon} fs-5`}></i>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center justify-content-between">
                          <h5 className="mb-1 fw-bold text-dark">{item.title}</h5>
                          <span className="badge rounded-pill bg-light text-dark border px-2 py-1 small">
                            {item.year}
                          </span>
                        </div>
                        <p className="mb-0 text-muted small lh-base">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Quote Section */}
          <div className="row justify-content-center mt-5">
            <div className="col-lg-11">
              <div
                className="p-4 p-md-5 rounded-4 shadow text-center position-relative overflow-hidden"
                style={{
                  backgroundColor: "#002663",
                  color: "#ffffff"
                }}
              >
                <h3 className="fw-bold mb-3" style={{ color: "#6ecdf5" }}>
                  Invest in Rebuilding Futures
                </h3>
                <blockquote className="blockquote mb-0">
                  <p className="fs-5 fw-light italic mb-0" style={{ lineHeight: "1.7" }}>
                    When you support Lok Swar, you’re not just funding a project—you’re investing in women who are transforming their own futures and creating lasting change in their communities.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

        </div>

        {/* Scoped Hover Animations */}
        <style>{`
          .progression-circle {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .progression-circle:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 16px rgba(13, 110, 253, 0.3) !important;
          }
        `}</style>
      </section>

      <Footer />
    </>
  );
};

export default AboutBackground;