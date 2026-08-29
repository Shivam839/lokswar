import React from "react";
import { Link } from "react-router-dom";

const donations = [
  {
    image: "/img/stregthen community main page extreme down 1.JPG",
    category: "Sustainable Livelihood",
    title: "Sustainable Livelihood",
    description:
      "Through your donations, you are promoting livelihood models that bring socio-economic development for women",
  },
  {
    image: "/img/DSC_0263.JPG",
    category: "Empowered Children & Youth",
    title: "Empowered Children & Youth",
    description:
      "Through your donations, you are supporting children and youth to dream and reach the sky.",
  },
  {
    image: "/img/stregthen community main page extreme down 2.JPG",
    category: "Strengthen Community",
    title: "Strengthen Community",
    description:
      "Through your donations, you are building a resilient and strengthened community for future generations",
  },
];

const Featured = () => {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto mb-5">
          <p className="section-title bg-white text-center text-primary px-3 d-inline-block">
            Donation
          </p>
          <h1 className="display-6 fw-bold">
            Your donation can bring the change in someone life.
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="row g-4">
          {donations.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div
                className="card border-0 shadow-sm rounded-3 overflow-hidden d-flex flex-column w-100"
                style={{ backgroundColor: "#ffffff" }}
              >
                {/* Fixed-Height Image Container */}
                <div
                  className="position-relative"
                  style={{
                    height: "240px",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  {/* Category Badge */}
                  <span
                    className="position-absolute top-0 end-0 badge bg-light text-dark fw-semibold"
                    style={{
                      margin: "12px",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Card Content Wrapper */}
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <h3 className="fw-bold fs-4 mb-3 text-dark">{item.title}</h3>

                  {/* Flexible Description Box (Pushes button to bottom) */}
                  <p
                    className="text-primary mb-4 flex-grow-1"
                    style={{ fontSize: "0.95rem", lineHeight: "1.6" }}
                  >
                    {item.description}
                  </p>

                  {/* Donate Button */}
                  <Link
                    to="/get-involved/become-a-donor"
                    className="btn py-3 w-100 fw-bold d-flex align-items-center justify-content-center text-white text-decoration-none"
                    style={{
                      backgroundColor: "#07083b",
                      borderRadius: "6px",
                      transition: "background-color 0.2s ease",
                    }}
                  >
                    <i className="fa fa-plus me-2"></i> Donate Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;