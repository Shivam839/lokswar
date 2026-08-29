import React, { useState } from "react";

const DonationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    setShowQR(true);
  };

  const handlePaid = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/send-donation-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, amount }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Thank you for your donation! Confirmation sent to the organization.");
      } else {
        alert("Payment completed, but failed to send email notification.");
      }
    } catch (error) {
      console.error("Backend Error:", error);
      alert("Thank you for your donation!");
    } finally {
      setLoading(false);
      setShowQR(false);
      setName("");
      setEmail("");
      setAmount("");
    }
  };

  return (
    <div className="container-fluid donate py-5">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-7 donate-text bg-light py-5">
            <div className="d-flex flex-column justify-content-center h-100 p-5">
              <h1 className="display-6 mb-4">
                Let's Donate to Needy People for Better Lives
              </h1>
              <p className="fs-5 mb-0">
                Through your donations, we spread kindness and support to children, families, and communities.
              </p>
            </div>
          </div>

          <div className="col-lg-5 donate-form bg-primary py-5 text-center">
            <div className="h-100 p-5 d-flex flex-column justify-content-center align-items-center">
              {!showQR ? (
                <form onSubmit={handleSubmit} className="w-100">
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="input-group">
                        <span className="input-group-text bg-white border-end-0 fs-5 fw-bold text-dark">
                          ₹
                        </span>
                        <div className="form-floating flex-grow-1">
                          <input
                            type="number"
                            className="form-control border-start-0"
                            id="amount"
                            placeholder="Amount in INR"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            min="1"
                            required
                          />
                          <label htmlFor="amount">Donation Amount (INR)</label>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="btn btn-secondary py-3 w-100 fw-bold" type="submit">
                        Donate Now
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="bg-white p-4 rounded shadow text-dark w-100">
                  <h4 className="mb-3 text-primary fw-bold">Scan & Pay</h4>
                  <p className="mb-2 fw-semibold">
                    Amount to Pay: <span className="text-success">₹{amount}</span>
                  </p>

                  <div className="my-3">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                        `upi://pay?pa=yourname@upi&pn=Your%20Organization%20Name&am=${amount}&cu=INR`
                      )}`}
                      alt="Payment QR Code"
                      className="img-fluid border p-2 rounded"
                    />
                  </div>

                  <p className="small text-muted mb-4">
                    Scan with any UPI app (Google Pay, PhonePe, Paytm)
                  </p>

                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-outline-secondary w-50 py-2"
                      onClick={() => setShowQR(false)}
                      disabled={loading}
                    >
                      Back
                    </button>
                    <button
                      className="btn btn-success w-50 py-2 fw-bold"
                      onClick={handlePaid}
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Paid"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;