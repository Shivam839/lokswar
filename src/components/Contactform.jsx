import React, { useState } from "react";

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage({ type: "success", text: "Message sent successfully!" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatusMessage({ type: "danger", text: "Failed to send message. Please try again." });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatusMessage({ type: "danger", text: "Server error. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-5">
          {/* Left Side: Map */}
          <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <iframe
              className="w-100 rounded-3 shadow-sm"
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d45941.83307375649!2d85.20226612329388!3d23.29794745408604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDhurwa%20Dam%20Side%20Road%2C%20In%20front%20of%20Ice%20cream%20Factory%20Dhurwa%20Ranchi%20-834004%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1786546006571!5m2!1sen!2sin"
              frameBorder="0"
              style={{ height: "410px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right Side: Form */}
          <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
            <h4 className="lh-base mb-4">
              We'd love to hear from you. Fill out the form below and we'll get
              back to you as soon as possible.
            </h4>

            {statusMessage && (
              <div className={`alert alert-${statusMessage.type} mb-4`} role="alert">
                {statusMessage.text}
              </div>
            )}

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
                    <label htmlFor="name">Your Name</label>
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
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>

                {/* Subject */}
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>

                {/* Message */}
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Leave a message here"
                      style={{ height: "200px" }}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-12">
                  <button
                    className="btn btn-primary py-3 px-5 fw-bold"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;