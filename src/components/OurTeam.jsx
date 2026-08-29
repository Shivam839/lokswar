import React from 'react'

const OurTeam = () => {
    return (
        <div className="container-fluid py-1">
            <div className="container">
                <div className="text-center mx-auto" style={{ "maxWidth": "800px" }}>
                    <h1 className="col-12 mb-4">Meet Our Chief Executive Members</h1>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-4">
                        <div className="team-item d-flex h-100 p-4">
                            <div className="team-detail">
                                <img className="img-fluid mb-4" src="/img/team_member/ashok.jpeg" alt="" />
                                <h3>Ashok Kumar Srivastav</h3>
                                <span>President</span>
                                <p>
                                    Monitoring/Evaluation of projects and activities, interview of team & recruitment                            </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="team-item d-flex h-100 p-4">
                            <div className="team-detail">
                                <img className="img-fluid mb-4" src="/img/team_member/Shalini.png" alt="" />
                                <h3>Shalini Samvedna</h3>
                                <span>Secretary</span>
                                <p>
                                    M&E of projects and activities, Reporting to board members, Fund raising                            </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 ">
                        <div className="team-item d-flex h-100 p-4">
                            <div className="team-detail">
                                <img className="img-fluid mb-4" src="/img/team_member/Sandhya.jpeg" alt="" />
                                <h3>Sandhya Pandey</h3>
                                <span>Treasurer</span>
                                <p>
                                    Program management, community Knowledge, Finance                            </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam
