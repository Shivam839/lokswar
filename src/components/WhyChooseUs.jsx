import React, { useEffect, useRef, useState } from "react";

// Counter Component supporting numbers and '+' suffix
const Counter = ({ end, duration = 2000, start, suffix = "+" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * end);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
          observer.disconnect(); // Run animation only once
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container-fluid py-5" ref={sectionRef}>
      <div className="container py-4">
        <div className="row g-5 align-items-center">
          {/* Left Side: Stats Grid */}
          <div className="col-lg-6">
            <div className="rounded overflow-hidden shadow-sm">
              <div className="row g-0">
                {/* Total Reach (Light Blue Background -> Dark Blue Text/Icons) */}
                <div className="col-sm-6">
                  <div className="text-center py-5 px-4 h-100" style={{ backgroundColor: "#dbe3eb" }}>
                    <i className="fa fa-users fa-3x mb-3" style={{ color: "#07083b" }}></i>
                    <h1 className="display-5 fw-bold mb-1" style={{ color: "#07083b" }}>
                      <Counter end={50000} start={startCounter} />
                    </h1>
                    <span className="fw-semibold text-uppercase tracking-wider" style={{ color: "#07083b", opacity: 0.8 }}>
                      Total Reach
                    </span>
                  </div>
                </div>

                {/* Women Empowered (Dark Blue Background -> White Text/Icons) */}
                <div className="col-sm-6">
                  <div className="text-center py-5 px-4 h-100" style={{ backgroundColor: "#07083b" }}>
                    <i className="fa fa-hand-holding-heart fa-3x text-light mb-3"></i>
                    <h1 className="display-5 text-white fw-bold mb-1">
                      <Counter end={7000} start={startCounter} />
                    </h1>
                    <span className="text-white-50 fw-semibold text-uppercase tracking-wider">
                      Women Empowered
                    </span>
                  </div>
                </div>

                {/* Child & Youth Reached (Dark Blue Background -> White Text/Icons) */}
                <div className="col-sm-6">
                  <div className="text-center py-5 px-4 h-100" style={{ backgroundColor: "#07083b" }}>
                    <i className="fa fa-child fa-3x text-light mb-3"></i>
                    <h1 className="display-5 text-white fw-bold mb-1">
                      <Counter end={3000} start={startCounter} />
                    </h1>
                    <span className="text-white-50 fw-semibold text-uppercase tracking-wider">
                      Child & Youth Reached
                    </span>
                  </div>
                </div>

                {/* Community Strengthened (Light Blue Background -> Dark Blue Text/Icons) */}
                <div className="col-sm-6">
                  <div className="text-center py-5 px-4 h-100" style={{ backgroundColor: "#dbe3eb" }}>
                    <i className="fa fa-hands-helping fa-3x mb-3" style={{ color: "#07083b" }}></i>
                    <h1 className="display-5 fw-bold mb-1" style={{ color: "#07083b" }}>
                      <Counter end={40000} start={startCounter} />
                    </h1>
                    <span className="fw-semibold text-uppercase tracking-wider" style={{ color: "#07083b", opacity: 0.8 }}>
                      Community Member Strengthen
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content & Pillars */}
          <div className="col-lg-6">
            <h2 className="display-6 fw-bold mb-3 text-dark">
              Our Impact Numbers
            </h2>

            <p className="lead text-muted mb-4">
              Every stat represents a real life changed, a community strengthened, and a step closer to our goal.
            </p>

            <div className="mb-4">
              <p className="text-dark d-flex align-items-start mb-3">
                <i className="fa fa-check-circle fs-5 me-3 mt-1" style={{ color: "#07083b" }}></i>
                <span>
                  <strong>Grassroots Mobilization:</strong> Driving direct community participation and sustainable social change.
                </span>
              </p>

              <p className="text-dark d-flex align-items-start mb-3">
                <i className="fa fa-check-circle fs-5 me-3 mt-1" style={{ color: "#07083b" }}></i>
                <span>
                  <strong>Rights & Entitlements:</strong> Facilitating access to government welfare schemes and citizen protection.
                </span>
              </p>

              <p className="text-dark d-flex align-items-start mb-3">
                <i className="fa fa-check-circle fs-5 me-3 mt-1" style={{ color: "#07083b" }}></i>
                <span>
                  <strong>Economic Self-Reliance:</strong> Building resilient livelihood models for vulnerable households.
                </span>
              </p>
            </div>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <a 
                className="btn text-white py-3 px-4 fw-semibold border-0" 
                style={{ backgroundColor: "#ff52a0" }} 
                href="/get-involved/become-a-donor"
              >
                Donate Now
              </a>

              <a className="btn btn-outline-dark py-3 px-4 fw-semibold" href="/get-involved/become-a-volunteer">
                Join Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;