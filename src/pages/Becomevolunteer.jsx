import React, { useState } from "react";
import Header from "../components/Header";
import PageNavigation from "../components/PageNavigation";
import Footer from "../components/Footer";

const Becomevolunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    availability: "weekends",
    areaOfInterest: "community-outreach",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-volunteer-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Thank you for offering to volunteer! We will reach out soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          availability: "weekends",
          areaOfInterest: "community-outreach",
          message: "",
        });
      } else {
        alert("Failed to send application. Please try again later.");
      }
    } catch (error) {
      console.error("Backend Connection Error:", error);
      alert("Unable to submit registration. Please make sure the local server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <PageNavigation title="Become a Volunteer" />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            {/* Left Side */}
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <p className="section-title bg-white text-start text-primary pe-3">
                Get Involved
              </p>

              <h1
                className="display-6 mb-4 wow fadeIn"
                data-wow-delay="0.2s"
              >
                Become a Volunteer & Make a Difference
              </h1>

              <img
                className="w-100"
                title="Google Map"
                src="/img/become an volunteer.jpg"
                frameBorder="0"
                style={{ height: "410px", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></img>
            </div>

            {/* Right Side */}
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
              <h4 className="lh-base mb-4">
                Join our team of dedicated volunteers! Fill out your details below
                to help us serve the community.
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

                  {/* Availability */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select
                        className="form-select"
                        id="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        required
                      >
                        <option value="weekends">Weekends Only</option>
                        <option value="weekdays">Weekdays</option>
                        <option value="flexible">Flexible / Remote</option>
                      </select>
                      <label htmlFor="availability">Availability</label>
                    </div>
                  </div>

                  {/* Area of Interest */}
                  <div className="col-12">
                    <div className="form-floating">
                      <select
                        className="form-select"
                        id="areaOfInterest"
                        value={formData.areaOfInterest}
                        onChange={handleChange}
                        required
                      >
                        <option value="community-outreach">Community Outreach</option>
                        <option value="event-management">Event Management</option>
                        <option value="teaching-mentoring">Teaching & Mentoring</option>
                        <option value="media-design">Media & Content Creation</option>
                      </select>
                      <label htmlFor="areaOfInterest">Preferred Volunteer Role</label>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Why do you want to volunteer?"
                        style={{ height: "180px" }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label htmlFor="message">Why would you like to join us?</label>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="col-12">
                    <button
                      className="btn btn-primary py-3 px-4 fw-bold"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Register as Volunteer"}
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

export default Becomevolunteer;