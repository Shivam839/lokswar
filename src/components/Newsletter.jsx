import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/send-newsletter-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert('Thank you! You have successfully subscribed to our newsletter.');
        setEmail('');
      } else {
        alert(data.message || 'Subscription failed. Please try again later.');
      }
    } catch (error) {
      console.error('Newsletter Subscription Error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid bg-primary py-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center wow fadeIn" data-wow-delay="0.5s">
            <h1 className="display-6 mb-4">Subscribe the Newsletter</h1>
            <form onSubmit={handleSubmit} className="position-relative w-100 mb-2">
              <input
                className="form-control border-0 w-100 ps-4 pe-5"
                type="email"
                placeholder="Enter Your Email"
                style={{ height: '60px' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
              <button
                type="submit"
                className="btn btn-lg-square shadow-none position-absolute top-0 end-0 mt-2 me-2"
                disabled={loading}
              >
                <i className={`fa ${loading ? 'fa-spinner fa-spin' : 'fa-paper-plane'} text-primary fs-4`}></i>
              </button>
            </form>
            <p className="mb-0">Don't worry, we won't spam you with emails.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;