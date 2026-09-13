import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper bg-dark text-light py-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container footer-container px-3 px-sm-4">
        {/* Main Footer Row */}
        <div className="row g-4 g-lg-5 py-4 py-lg-5">

          {/* ================= OFFICE ================= */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="footer-item">
              <h4 className="text-light mb-4">Our Office</h4>

              {/* Address */}
              <p className="footer-contact-item mb-3">
                <i className="fa fa-map-marker-alt footer-icon me-3"></i>
                <span>
                  H.no- BIII–580, Dhurwa Dam Side Road, Dhurwa Ranchi -834004, Jharkhand
                </span>
              </p>

              {/* Phone */}
              <p className="footer-contact-item mb-3">
                <i className="fa fa-phone-alt footer-icon me-3"></i>
                <a href="tel:+919693457639" className="footer-link">
                  +91 9693457639
                </a>
              </p>

              {/* Email */}
              <p className="footer-contact-item mb-3">
                <i className="fa fa-envelope footer-icon me-3"></i>
                <a href="mailto:lokswar@yahoo.co.in" className="footer-link">
                  lokswar@yahoo.co.in
                </a>
              </p>

              {/* Social Media */}
              <div className="d-flex flex-wrap gap-2 pt-2">
                <a
                  className="btn btn-square btn-secondary social-btn"
                  href="https://www.facebook.com/people/Lok-Swar/pfbid0asX13DdqmkSKe8kz4StyZ4CvfqAUaJK38es1X2atGT3QQ9xNinfRN4ghe7kJLfwEl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  className="btn btn-square btn-secondary social-btn"
                  href="https://www.instagram.com/lokswarjharkhand/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  className="btn btn-square btn-secondary social-btn"
                  href="https://www.linkedin.com/in/lok-swar-5bb131406"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <div className="footer-item">
              <h4 className="text-light mb-4">Quick Links</h4>
              <div className="d-flex flex-column align-items-start">
                <Link className="btn btn-link footer-quick-link" to="/about/our-background">
                  About Us
                </Link>
                <Link className="btn btn-link footer-quick-link" to="/contact-us">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* ================= GALLERY ================= */}
          <div className="col-12 col-md-12 col-lg-4">
            <div className="footer-item">
              <h4 className="text-light mb-4">Gallery</h4>
              <div className="row g-2 footer-gallery-row">
                {[
                  "footer (1).jpg",
                  "footer (2).jpg",
                  "footer (3).jpg",
                  "footer (4).JPG",
                  "footer (5).JPG",
                  "footer (6).jpg",
                ].map((image, index) => (
                  <div className="col-4 col-sm-4" key={index}>
                    <div className="gallery-img-container">
                      <img
                        src={`/img/footer/${image}`}
                        alt={`Lok Swar Gallery ${index + 1}`}
                        className="img-fluid gallery-img"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="copyright pt-4 pt-lg-5">
          <div className="row align-items-center g-3">
            <div className="col-12 col-md-6 text-center text-md-start">
              <p className="mb-0 copyright-text">
                &copy; <Link className="fw-semi-bold text-light" to="/">Lokswar</Link>, All Rights Reserved.
              </p>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              <p className="mb-0 copyright-text">
                Designed By{" "}
                <a
                  className="fw-semi-bold text-light"
                  href="https://shivam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shivam
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;