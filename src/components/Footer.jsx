import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="container-fluid footer py-5 wow fadeIn"
      data-wow-delay="0.1s"
      style={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1320px",
          width: "100%",
        }}
      >
        {/* Main Footer */}
        <div className="row g-4 g-lg-5 py-4 py-lg-5">

          {/* ================= OFFICE ================= */}
          <div className="col-12 col-md-6 col-lg-5">
            <div style={{ height: "100%" }}>
              <h4 className="text-light mb-4">
                Our Office
              </h4>

              {/* Address */}
              <p
                className="mb-3"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  lineHeight: "1.7",
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                }}
              >
                <i
                  className="fa fa-map-marker-alt"
                  style={{
                    flex: "0 0 20px",
                    marginTop: "5px",
                    marginRight: "12px",
                  }}
                ></i>

                <span>
                  Near H.no- BIII–580, Dhurwa Dam Side Road, In front of Ice
                  cream Factory Dhurwa Ranchi -834004, Jharkhand
                </span>
              </p>

              {/* Phone */}
              <p
                className="mb-3"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <i
                  className="fa fa-phone-alt"
                  style={{
                    flex: "0 0 20px",
                    marginRight: "12px",
                  }}
                ></i>

                <a
                  href="tel:+919693457639"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    overflowWrap: "anywhere",
                  }}
                >
                  +91 9693457639
                </a>
              </p>

              {/* Email */}
              <p
                className="mb-3"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <i
                  className="fa fa-envelope"
                  style={{
                    flex: "0 0 20px",
                    marginRight: "12px",
                  }}
                ></i>

                <a
                  href="mailto:lokswar@yahoo.co.in"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    overflowWrap: "anywhere",
                    wordBreak: "break-word",
                  }}
                >
                  lokswar@yahoo.co.in
                </a>
              </p>

              {/* Social Media */}
              <div
                className="d-flex flex-wrap"
                style={{
                  gap: "8px",
                  paddingTop: "8px",
                }}
              >
                <a
                  className="btn btn-square btn-secondary"
                  href="https://www.facebook.com/people/Lok-Swar/pfbid0asX13DdqmkSKe8kz4StyZ4CvfqAUaJK38es1X2atGT3QQ9xNinfRN4ghe7kJLfwEl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{
                    width: "45px",
                    height: "45px",
                    minWidth: "45px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  className="btn btn-square btn-secondary"
                  href="https://www.instagram.com/lokswarjharkhand/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    width: "45px",
                    height: "45px",
                    minWidth: "45px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  className="btn btn-square btn-secondary"
                  href="https://www.linkedin.com/in/lok-swar-5bb131406"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    width: "45px",
                    height: "45px",
                    minWidth: "45px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <div style={{ height: "100%" }}>
              <h4 className="text-light mb-4">
                Quick Links
              </h4>

              <div
                className="d-flex flex-column align-items-start"
              >
                <Link
                  className="btn btn-link"
                  to="/about/our-background"
                  style={{
                    padding: "5px 0",
                    textAlign: "left",
                    textDecoration: "none",
                    whiteSpace: "normal",
                  }}
                >
                  About Us
                </Link>

                <Link
                  className="btn btn-link"
                  to="/contact-us"
                  style={{
                    padding: "5px 0",
                    textAlign: "left",
                    textDecoration: "none",
                    whiteSpace: "normal",
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* ================= GALLERY ================= */}
          <div className="col-12 col-md-12 col-lg-4">
            <div style={{ height: "100%" }}>
              <h4 className="text-light mb-4">
                Gallery
              </h4>

              <div
                className="row g-2"
                style={{
                  width: "100%",
                  margin: "0",
                }}
              >
                {[
                  "footer (1).jpg",
                  "footer (2).jpg",
                  "footer (3).jpg",
                  "footer (4).JPG",
                  "footer (5).JPG",
                  "footer (6).jpg",
                ].map((image, index) => (
                  <div
                    className="col-4"
                    key={index}
                    style={{
                      paddingLeft: "4px",
                      paddingRight: "4px",
                    }}
                  >
                    <img
                      src={`/img/footer/${image}`}
                      alt={`Lok Swar Gallery ${index + 1}`}
                      className="img-fluid"
                      style={{
                        width: "100%",
                        aspectRatio: "1 / 0.75",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div
          className="copyright pt-4 pt-lg-5"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <div className="row align-items-center g-3">

            <div className="col-12 col-md-6 text-center text-md-start">
              <p
                className="mb-0"
                style={{
                  lineHeight: "1.6",
                }}
              >
                &copy;{" "}
                <a
                  className="fw-semi-bold"
                  href="#"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Lokswar
                </a>
                , All Right Reserved.
              </p>
            </div>

            <div className="col-12 col-md-6 text-center text-md-end">
              <p
                className="mb-0"
                style={{
                  lineHeight: "1.6",
                }}
              >
                Designed By{" "}
                <a
                  className="fw-semi-bold"
                  href="https://shivam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Shivam
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;