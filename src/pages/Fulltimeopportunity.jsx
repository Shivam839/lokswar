import React, { useState } from "react";
import Header from "../components/Header";
import PageNavigation from "../components/PageNavigation";
import Footer from "../components/Footer";

const Fulltimeopportunity = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "1-3",
    resumeLink: "",
    coverLetter: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-job-application-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Application submitted successfully! Our HR team will review it.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          role: "",
          experience: "1-3",
          resumeLink: "",
          coverLetter: "",
        });
      } else {
        alert("Failed to submit application. Please try again later.");
      }
    } catch (error) {
      console.error("Backend Connection Error:", error);
      alert("Unable to submit application. Please make sure the local server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <PageNavigation title="Full Time Opportunity!" />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            {/* Left Side */}
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <p className="section-title bg-white text-start text-primary pe-3">
                Careers
              </p>

              <h1
                className="display-6 mb-4 wow fadeIn"
                data-wow-delay="0.2s"
              >
                Join Our Full-Time Team
              </h1>

              <img
                className="w-100"
                title="Google Map"
                src="/img/full-time-emp.jpg"
                frameBorder="0"
                style={{ height: "500px", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></img>
            </div>

            {/* Right Side */}
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
              <h4 className="lh-base mb-4">
                Looking for a meaningful career? Share your experience and apply
                for full-time openings with us.
              </h4>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {/* Name */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Full Name</label>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Email Address</label>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="phone">Phone Number</label>
                    </div>
                  </div>

                  {/* Years of Experience */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select
                        className="form-select"
                        id="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                      >
                        <option value="fresher">Fresher (0 years)</option>
                        <option value="1-3">1 - 3 Years</option>
                        <option value="3-5">3 - 5 Years</option>
                        <option value="5+">5+ Years</option>
                      </select>
                      <label htmlFor="experience">Work Experience</label>
                    </div>
                  </div>

                  {/* Position / Role Applied For */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="role"
                        placeholder="Desired Role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="role">Desired Position / Role</label>
                    </div>
                  </div>

                  {/* Resume / Portfolio Link */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="url"
                        className="form-control"
                        id="resumeLink"
                        placeholder="Resume/Portfolio Link"
                        value={formData.resumeLink}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="resumeLink">
                        Resume Link (Google Drive / LinkedIn)
                      </label>
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="coverLetter"
                        placeholder="Cover letter or brief note"
                        style={{ height: "180px" }}
                        value={formData.coverLetter}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label htmlFor="coverLetter">
                        Cover Letter / Why hiring you?
                      </label>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="col-12">
                    <button
                      className="btn btn-primary py-3 px-4 fw-bold"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit Application"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fulltimeopportunity;