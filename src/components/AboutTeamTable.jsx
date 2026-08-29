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

  // Helper function to color-code designations dynamically
  const getBadgeClass = (role) => {
    switch (role.toLowerCase()) {
      case 'president': return 'bg-danger-subtle text-danger';
      case 'secretary': return 'bg-primary-subtle text-primary';
      case 'treasurer': return 'bg-success-subtle text-success';
      default: return 'bg-secondary-subtle text-secondary';
    }
  };

  return (
  <>
  <Header/>
  <PageNavigation title="Board Members & Leadership"/>
    <div className="col-12 p-1">
      <div
        className="bg-white border-0"
        style={{
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          borderRadius: "16px",
          padding: "30px"
        }}
      >
        <h3 className="fw-bold mb-4 text-dark" style={{ letterSpacing: "-0.5px" }}>
          Board Members & Leadership
        </h3>

        {/* table-responsive prevents breaking on small mobile screens */}
        <div className="table-responsive">
          <table className="table align-middle table-hover custom-team-table mb-0">
            <thead className="table-light text-primary text-uppercase fs-7 opacity-75">
              <tr>
                <th className="py-3 ps-3" style={{ borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px" }}>Name</th>
                <th className="py-3">Designation</th>
                <th className="py-3">Academic Background</th>
                <th className="py-3" style={{ width: "25%" }}>Occupation / Background</th>
                <th className="py-3" style={{ width: "25%" }}>Thematic Expert Role</th>
                <th className="py-3 pe-3" style={{ borderTopRightRadius: "8px", borderBottomRightRadius: "8px" }}>Since</th>
              </tr>
            </thead>
            <tbody>
              {teamData.map((member, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #f2f4f7" }}>
                  <td className="py-3 ps-3 fw-semibold text-dark">{member.name}</td>
                  <td className="py-3">
                    <span className={`badge rounded-pill px-3 py-2 fw-medium ${getBadgeClass(member.designation)}`}>
                      {member.designation}
                    </span>
                  </td>
                  <td className="py-3 text-muted small">{member.background}</td>
                  <td className="py-3 text-primary small lh-base">{member.occupation}</td>
                  <td className="py-3 text-primary small lh-base">
                    <span className="d-block text-truncate-2">{member.expert}</span>
                  </td>
                  <td className="py-3 pe-3 text-muted small whitespace-nowrap">{member.association}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div
            className="card border-0 p-4 p-md-5 rounded-4 bg-white"
            style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)" }}
          >
            <div className="text-center mb-4">
              <small className="sub-title text-uppercase text-primary fw-bold letter-spacing-2">Governance</small>
              <h2 className="h1 title mt-1">Board Members & Structure</h2>
            </div>



            {/* Organogram Diagram Component */}
            <div className="mt-4 border-top pt-4">
              <Organogram />
              <OurTeam />
            </div>

          </div>
        </div>
      </div>
    </div>
  <Footer/>
  </>
  );
};

export default AboutTeamTable;