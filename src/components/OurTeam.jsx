import React from 'react'

const OurTeam = () => {
    return (
        <div className="container-fluid py-1">
            <div className="container">
                <div className="text-center mx-auto" style={{ "maxWidth": "800px" }}>
                    <h1 className="col-12 mb-4">Meet Our Chief Executive Members</h1>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-4 text-center">
                        <div className="team-item d-flex h-100 p-4">
                            <div className="team-detail">
                                <img className="img-fluid mb-4" src="/img/team_member/ashok.jpeg" alt="" />
                                <h3>Ashok Kumar Srivastav</h3>
                                <span>President</span>
                             
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="team-item d-flex h-100 p-4 text-center">
                            <div className="team-detail">
                                <img className="img-fluid mb-4" src="/img/team_member/Shalini.png" alt="" />
                                <h3>Shalini Samvedna</h3>
                                <span>Secretary</span>
                       
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 ">
                        <div className="team-item d-flex h-100 p-4 text-center">
                            <div className="team-detail">
                                <img className="img-fluid mb-4" src="/img/team_member/Sandhya.jpeg" alt="" />
                                <h3>Sandhya Pandey</h3>
                                <span>Treasurer</span>
                 
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam
