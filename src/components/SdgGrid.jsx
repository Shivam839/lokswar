import React from 'react';

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

const SdgGrid = () => {
  return (
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
  );
};

export default SdgGrid;