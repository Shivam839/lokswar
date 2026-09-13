import React from 'react';
import Organogram from './Organogram';
import OurTeam from './OurTeam';
import Footer from './Footer';
import Header from './Header';
import PageNavigation from './PageNavigation';

const AboutTeamTable = () => {
  const teamData = [
    {
      name: "Ashok Kumar Srivastav",
      designation: "President",
      background: "Graduate",
      occupation: "Self-employed (Medicine Expert/B-Pharma)",
      expert: "Monitoring/Evaluation of projects and activities, interview of team & recruitment",
      association: "12-02-2021"
    },
    {
      name: "Shalini Samvedna",
      designation: "Secretary",
      background: "Post Graduate",
      occupation: "Involved in socially constructive work on women empowerment, gender equality & justice. Part of research teams with IIT Delhi & IIMC.",
      expert: "M&E of projects and activities, Reporting to board members, Fund raising",
      association: "03-08-2000"
    },
    {
      name: "Sandhya Pandey",
      designation: "Treasurer",
      background: "Post Graduate",
      occupation: "Social worker & Self employed",
      expert: "Program management, community Knowledge, Finance",
      association: "31-05-2019"
    },
    {
      name: "Sarita Tirkey",
      designation: "Member",
      background: "Matriculation",
      occupation: "Self-employed / Home maker & Social worker",
      expert: "Looks after women wing & alliance partners / close work with finance team",
      association: "03-08-2000"
    },
    {
      name: "Sangeeta Toppo",
      designation: "Member",
      background: "Graduate",
      occupation: "Self-employed & Social worker",
      expert: "Community engagement & individual donors fund raising",
      association: "17-02-2021"
    },
    {
      name: "Rita Singh",
      designation: "Member",
      background: "Graduate",
      occupation: "Self-employed & Social worker",
      expert: "Vocational training expert of livelihood activities/Programs",
      association: "03-08-2000"
    },
    {
      name: "Sanjay Kumar Sharma",
      designation: "Member",
      background: "Post Graduate / B-Tech / BHU",
      occupation: "Social worker & Professor",
      expert: "Fundraising and impact assessment / M&E",
      association: "15-10-2000"
    },
    {
      name: "Sarwan Kumar Giri",
      designation: "Member",
      background: "Post Graduate",
      occupation: "Social worker & Finance expert",
      expert: "HR expert, Interview, selection of project team members, Fundraising",
      association: "17-02-2010"
    }
  ];

  const getBadgeClass = (role) => {
    switch (role.toLowerCase()) {
      case 'president': return 'bg-danger-subtle text-danger border border-danger-subtle';
      case 'secretary': return 'bg-primary-subtle text-primary border border-primary-subtle';
      case 'treasurer': return 'bg-success-subtle text-success border border-success-subtle';
      default: return 'bg-light text-secondary border';
    }
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .filter(Boolean)
      .slice(0, 2)
      .join('');
  };

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Header />
      <PageNavigation title="Board Members & Leadership" />

      <div className="container-fluid px-3 px-md-5 my-4">
        <div className="row g-4">
          <div className="col-12">
            <div className="bg-white border-0 rounded-4 p-3 p-md-4 shadow-sm">
              <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom">
                <div>
                  <h3 className="fw-bold text-dark mb-1" style={{ letterSpacing: "-0.5px" }}>
                    Board Members & Leadership
                  </h3>
                  <p className="text-muted small mb-0">Executive governing body and thematic domain leaders</p>
                </div>
                <span className="badge bg-light text-dark border px-3 py-2 rounded-pill d-none d-sm-inline-block">
                  {teamData.length} Members
                </span>
              </div>

              {/* DESKTOP/TABLET VIEW */}
              <div className="table-responsive d-none d-md-block">
                <table className="table align-middle custom-team-table mb-0">
                  <thead>
                    <tr className="text-uppercase fs-7 text-muted border-bottom">
                      <th className="py-3 ps-3">Member</th>
                      <th className="py-3">Designation</th>
                      <th className="py-3">Academic Background</th>
                      <th className="py-3" style={{ width: "28%" }}>Occupation / Background</th>
                      <th className="py-3" style={{ width: "28%" }}>Thematic Expert Role</th>
                      <th className="py-3 pe-3 text-end">Since</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamData.map((member, index) => (
                      <tr key={index} className="member-row">
                        <td className="py-3 ps-3">
                          <div className="d-flex align-items-center gap-3">
                            <div className="avatar-circle flex-shrink-0 bg-primary-subtle text-primary fw-bold rounded-circle d-flex align-items-center justify-content-center">
                              {getInitials(member.name)}
                            </div>
                            <span className="fw-semibold text-dark">{member.name}</span>
                          </div>
                        </td>
                        <td className="py-3">
                          <span className={`badge rounded-pill px-3 py-2 fw-medium ${getBadgeClass(member.designation)}`}>
                            {member.designation}
                          </span>
                        </td>
                        <td className="py-3 text-secondary small">{member.background}</td>
                        <td className="py-3 text-secondary small lh-base">{member.occupation}</td>
                        <td className="py-3 text-secondary small lh-base">{member.expert}</td>
                        <td className="py-3 pe-3 text-end text-muted small text-nowrap">{member.association}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* MOBILE CARD VIEW */}
              <div className="d-md-none d-flex flex-column gap-3">
                {teamData.map((member, index) => (
                  <div key={index} className="border rounded-3 p-3 bg-light-subtle">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <div className="avatar-circle-sm bg-primary-subtle text-primary fw-bold rounded-circle d-flex align-items-center justify-content-center">
                          {getInitials(member.name)}
                        </div>
                        <div>
                          <h6 className="fw-bold mb-0 text-dark">{member.name}</h6>
                          <small className="text-muted">{member.background}</small>
                        </div>
                      </div>
                      <span className={`badge rounded-pill px-2 py-1 fs-7 ${getBadgeClass(member.designation)}`}>
                        {member.designation}
                      </span>
                    </div>

                    <div className="d-flex flex-column gap-2 pt-2 border-top fs-7">
                      <div>
                        <strong className="text-dark d-block">Occupation:</strong>
                        <span className="text-secondary">{member.occupation}</span>
                      </div>
                      <div>
                        <strong className="text-dark d-block">Expertise:</strong>
                        <span className="text-secondary">{member.expert}</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center pt-2 text-muted border-top mt-1">
                        <span>Associated Since:</span>
                        <strong className="text-dark">{member.association}</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          <div className="col-12">
            <div
              className="card border-0 p-3 p-md-5 rounded-4 bg-white"
              style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)" }}
            >
              <div className="text-center mb-4">
                <small className="sub-title text-uppercase text-primary fw-bold letter-spacing-2">Governance</small>
                <h2 className="h1 title mt-1">Board Members & Structure</h2>
              </div>

              <div className="mt-4 border-top pt-4">
                <Organogram />
                <div className="mt-4">
                  <OurTeam />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STYLES FOR THE TABLE & MOBILE CARDS */}
      <style>{`
        .fs-7 { font-size: 0.825rem; }
        .avatar-circle {
          width: 40px;
          height: 40px;
          font-size: 0.875rem;
        }
        .avatar-circle-sm {
          width: 32px;
          height: 32px;
          font-size: 0.75rem;
        }
        .member-row {
          transition: background-color 0.2s ease;
          border-bottom: 1px solid #f1f3f5;
        }
        .member-row:hover {
          background-color: #f8f9fa;
        }
        .custom-team-table th {
          font-weight: 600;
          letter-spacing: 0.5px;
          background-color: #f8f9fa;
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default AboutTeamTable;