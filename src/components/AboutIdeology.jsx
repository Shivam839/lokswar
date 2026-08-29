import React from 'react';
import Footer from './Footer';
import Header from './Header';
import PageNavigation from './PageNavigation';

const AboutIdeology = () => {
  // 5 Core Pillars mapped from the provided data
  const pillars = [
    {
      title: "Ecosystem Strengthening & Community Well-being",
      description: "We work alongside local networks to establish safe, supportive environments where vulnerable communities can thrive, learn, and participate fully without any restraint.",
      icon: "bi-heart",
      badgeColor: "#002663"
    },
    {
      title: "Sustainable Self-Reliance",
      description: "We focus on capability building rather than temporary aid. By providing targeted training, practical skills, and economic tools, we enable communities to create sustainable livelihoods and guide their families towards socio-economic security.",
      icon: "bi-arrow-up",
      badgeColor: "#0d6efd"
    },
    {
      title: "Community-Informed Practice",
      description: "Our initiatives are informed by the lived realities of the communities we serve. This ground-level insight ensures our programs are practical, culturally resonant, and built on deep local trust.",
      icon: "bi-people-fill",
      badgeColor: "#198754"
    },
    {
      title: "Inclusive Civic Participation",
      description: "We facilitate active participation for women in local governance and community forums, including Gram Sabhas, ensuring marginalized families have a meaningful say in local planning and resource allocation.",
      icon: "bi-house",
      badgeColor: "#ffc107"
    },
    {
      title: "Institutional Integrity & Accountability",
      description: "We maintain clear standards of operational transparency, evidence-based reporting, and responsible stewardship to build trusted partnerships with communities, donors, and institutions.",
      icon: "bi-check-circle-fill",
      badgeColor: "#6f42c1"
    }
  ];

  return (
    <>
      <Header />
      <PageNavigation title="Our Ideology" />

      <section className="py-5 bg-light">
        <div className="container py-4">

          {/* Header & Principle Callout */}
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-11">
              <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
                <div className="row align-items-center g-4">
                  <div className="col-lg-7">
                    <div className="block-title mb-3">
                      <h2 className="display-6 fw-bold text-dark mt-1">Ideology</h2>
                    </div>
                    <p className="text-muted lead fs-6 mb-3">
                      At Lok Swar, we put vulnerable communities at the center of progress, and women at the helm of leadership.</p>
                    <p className="text-muted small mb-0">
                      Born from the lived strength of survivors, our work spans education, livelihoods, skill development, digital inclusion—guided by a simple truth: real change doesn't happen for communities; it happens with them. When we uplift women as decision-makers, we ignite a ripple effect of justice, resilience, and dignity across every generation.</p>
                  </div>

                  {/* High Contrast Accent Quote */}
                  <div className="col-lg-5">
                    <div className="p-4 rounded-4 text-white shadow-sm" style={{ backgroundColor: "#002663" }}>
                      <div className="text-info fs-1 lh-1 mb-2">“</div>
                      <p className="fw-medium fs-6 mb-3" style={{ color: "#e2e8f0" }}>When you support Lok Swar, you do more than donate—you unlock potential, inspire leadership, and help communities build their own future</p>
                      <span className="text-uppercase fw-bold small" style={{ color: "#6ecdf5" }}>— Lok Swar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Header */}
          <div className="row justify-content-center text-center mt-5 mb-4">
            <div className="col-lg-12">
              <span className="text-uppercase text-primary fw-bold small tracking-wider">Core Principles</span>
              <p className="text-dark mt-1">At Lok Swar, we strengthen vulnerable communities by building self-reliance from within. We focus on enabling women to serve as key decision-makers across local development, family well-being, and community resilience.</p>
            </div>
          </div>

          {/* 5-Item Grid Layout: Top Row (3 Cards) & Bottom Row (2 Cards Centered) */}
          <div className="row g-4 justify-content-center">
            {pillars.map((item, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 d-flex">
                <div
                  className="card border-0 p-4 rounded-4 shadow-sm bg-white w-100 d-flex flex-column justify-content-between position-relative"
                  style={{
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    borderTop: `4px solid ${item.badgeColor}`
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
                  <div>
                    {/* Number Badge & Icon Row */}
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "46px",
                          height: "46px",
                          backgroundColor: `${item.badgeColor}15`,
                          color: item.badgeColor,
                          fontSize: "1.2rem"
                        }}
                      >
                        <i className={`bi ${item.icon}`}></i>
                      </div>
                      <span className="fw-bold fs-5 opacity-25" style={{ color: item.badgeColor }}>
                        0{index + 1}
                      </span>
                    </div>

                    <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "1.05rem" }}>
                      {item.title}
                    </h5>

                    <p className="text-muted small lh-base mb-0">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutIdeology;