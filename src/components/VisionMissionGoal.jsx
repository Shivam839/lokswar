import React from 'react';

const VisionMissionGoal = () => {
    return (
        <div className="row g-3 g-md-4 justify-content-center mb-5 mx-0">
            {/* Vision Card */}
            <div className="col-12 col-md-4 px-1 px-sm-2">
                <div
                    className="card h-100 border-0 p-4 p-md-5 rounded-4 text-white shadow-sm d-flex flex-column justify-content-between"
                    style={{ backgroundColor: "#002663" }}
                >
                    <div>
                        <div className="d-flex align-items-center mb-4">
                            <div
                                className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                style={{ width: "52px", height: "52px", backgroundColor: "rgba(255,255,255,0.15)", color: "#6ecdf5" }}
                            >
                                <i className="bi bi-eye fs-3"></i>
                            </div>
                            <div>
                                <h3 className="h2 text-white fw-bold mb-0">Vision</h3>
                            </div>
                        </div>
                        <p className="fs-5 fw-light lh-base mb-0" style={{ color: "#e2e8f0" }}>
                            To build an inclusive and empowered society where every person lives with dignity, self-reliance, and sustainable well-being.            </p>
                    </div>
                </div>
            </div>

            {/* Mission Card */}
            <div className="col-12 col-md-4 px-1 px-sm-2">
                <div className="card h-100 border-0 p-4 p-md-5 rounded-4 bg-white shadow-sm d-flex flex-column justify-content-between">
                    <div>
                        <div className="d-flex align-items-center mb-4">
                            <div
                                className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                style={{ width: "52px", height: "52px", backgroundColor: "rgba(25, 135, 84, 0.12)", color: "#198754" }}
                            >
                                <i className="fa-solid fa-bullseye fs-3"></i>
                            </div>
                            <div>
                                <h3 className="h2 text-dark fw-bold mb-0">Mission</h3>
                            </div>
                        </div>
                        <p className="fs-5 text-muted lh-base mb-0">
                            To empower vulnerable communities, especially women and girls, by strengthening leadership, rights, self-reliance, and access to inclusive socio-economic opportunities.            </p>
                    </div>
                </div>
            </div>

            {/* Goal Card */}
            <div className="col-12 col-md-4 px-1 px-sm-2">
                <div
                    className="card h-100 border-0 p-4 p-md-5 rounded-4 text-white shadow-sm d-flex flex-column justify-content-between"
                    style={{ backgroundColor: "#002663" }}
                >
                    <div>
                        <div className="d-flex align-items-center mb-4">
                            <div
                                className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                style={{ width: "52px", height: "52px", backgroundColor: "rgba(255,255,255,0.15)", color: "#6ecdf5" }}
                            >
                                <i className="bi bi-trophy fs-3"></i>
                            </div>
                            <div>
                                <h3 className="h2 text-white fw-bold mb-0">Goal</h3>
                            </div>
                        </div>
                        <p className="fs-5 fw-light lh-base mb-0" style={{ color: "#e2e8f0" }}>
                            To contribute to resilient and self-reliant communities where women and girls exercise their rights, participate in decision-making, lead change, and access equal opportunities for a dignified and sustainable life.            </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionMissionGoal;