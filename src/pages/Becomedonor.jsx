import React, { useState } from "react";
import Header from "../components/Header";
import PageNavigation from "../components/PageNavigation";
import Footer from "../components/Footer";

const Becomedonor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
    address: "",
    donationType: "one-time",
    amount: "",
    message: "",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.amount || Number(formData.amount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    setShowConfirmation(true);
  };

  const handlePaid = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/send-donation-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Thank you for your support! Notification sent to the organization.");
      } else {
        alert("Payment logged, but failed to send email notification.");
      }
    } catch (error) {
      console.error("Backend Error:", error);
      alert("Thank you for supporting our mission!");
    } finally {
      setLoading(false);
      setShowConfirmation(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        pan: "",
        address: "",
        donationType: "one-time",
        amount: "",
        message: "",
      });
    }
  };

  return (
    <div>
      <Header />
      <PageNavigation title="Become a Donor" />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
           

            {/* Right Side: Donor Form or Confirmation Screen */}
            <div className="col-lg-12">
              {!showConfirmation ? (
                <>
                  <h4 className="lh-base mb-4">
                    Your contribution fuels our mission. Become a Donor & Empower Lives
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
                          <label htmlFor="name">Full / Organization Name</label>
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

                      {/* PAN Number */}
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="pan"
                            placeholder="PAN Number"
                            value={formData.pan}
                            onChange={handleChange}
                            style={{ textTransform: "uppercase" }}
                            maxLength="10"
                            required
                          />
                          <label htmlFor="pan">PAN Card Number (for 80G Tax Benefit)</label>
                        </div>
                      </div>

                      {/* Full Address */}
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="address">Full Address</label>
                        </div>
                      </div>

                      {/* Donation Type */}
                      <div className="col-md-6">
                        <div className="form-floating">
                          <select
                            className="form-select"
                            id="donationType"
                            value={formData.donationType}
                            onChange={handleChange}
                            required
                          >
                            <option value="one-time">One-Time Donation</option>
                            <option value="monthly">Monthly Support</option>
                            <option value="sponsorship">Project Sponsorship</option>
                          </select>
                          <label htmlFor="donationType">Donation Type</label>
                        </div>
                      </div>

                      {/* Pledge Amount */}
                      <div className="col-md-6">
                        <div className="input-group">
                          <span className="input-group-text bg-white border-end-0 fs-5 fw-bold text-dark">
                            ₹
                          </span>
                          <div className="form-floating flex-grow-1">
                            <input
                              type="number"
                              className="form-control border-start-0"
                              id="amount"
                              placeholder="Pledge Amount"
                              value={formData.amount}
                              onChange={handleChange}
                              min="1"
                              required
                            />
                            <label htmlFor="amount">Pledge Amount (INR)</label>
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            id="message"
                            placeholder="Notes or instructions"
                            style={{ height: "120px" }}
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                          <label htmlFor="message">
                            Special Instructions / Message (Optional)
                          </label>
                        </div>
                      </div>

                      <div className="col-12">
                        <button className="btn btn-primary py-3 px-4 w-100 fw-bold" type="submit" style={{borderColor:"none"}}>
                          Proceed to Pay
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                /* Payment Details Review Screen */
                <div className="bg-white p-4 p-md-5 rounded border shadow-sm text-dark">
                  <h4 className="mb-3 text-primary fw-bold text-center">Payment Information</h4>
                  <p className="text-center text-muted mb-4">
                    Thank you, <strong className="text-dark">{formData.name}</strong>! Please complete your transfer of <strong className="text-success">₹{formData.amount}</strong> to the account below:
                  </p>

                  <div className="border rounded p-3 bg-light mb-4">
                    <div className="row g-2 text-start">
                      <div className="col-sm-6">
                        <span className="text-muted small">Account Name:</span>
                        <div className="fw-bold">LOK SWAR </div>
                      </div>
                      <div className="col-sm-6">
                        <span className="text-muted small">Bank Name:</span>
                        <div className="fw-bold">PUNAJAB NATIONAL BANK</div>
                      </div>
                      <div className="col-sm-6">
                        <span className="text-muted small">Account Number:</span>
                        <div className="fw-bold fs-6 text-primary">0404000100335282</div>
                      </div>
                      <div className="col-sm-6">
                        <span className="text-muted small">IFSC Code:</span>
                        <div className="fw-bold fs-6 text-primary">PUNB0760800</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-white border rounded mb-4 text-start">
                    <h6 className="fw-bold text-dark border-bottom pb-2">Your Details Summary:</h6>
                    <p className="mb-1 small"><strong>PAN:</strong> {formData.pan}</p>
                    <p className="mb-1 small"><strong>Address:</strong> {formData.address}</p>
                    <p className="mb-1 small"><strong>Email:</strong> {formData.email}</p>
                    <p className="mb-0 small"><strong>Phone:</strong> {formData.phone}</p>
                  </div>

                  <div className="d-flex gap-3 justify-content-center">
                    <button
                      className="btn btn-outline-secondary px-4 py-2"
                      onClick={() => setShowConfirmation(false)}
                      disabled={loading}
                    >
                      Back
                    </button>
                    <button
                      className="btn btn-success px-5 py-2 fw-bold"
                      onClick={handlePaid}
                      disabled={loading}
                    >
                      {loading ? "Notifying Organization..." : "I Have Paid"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Becomedonor;