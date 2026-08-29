import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageNavigation from '../components/PageNavigation';

const Ourtheme = () => {
  // State to track which focus area is currently selected
  const [activeTab, setActiveTab] = useState(0);

  // Structured content data based strictly on your 6 provided themes
  const programsData = [
    {
      id: 1,
      title: "Empowering Woman and Gender Equality",
      icon: "♀️",
      description: "We work to enhance women's agency, leadership, economic independence, and participation in decision-making processes at the household, community, and institutional levels.",
      focusAreas: [
        "Formation and strengthening of women’s groups and federations.",
        "Promotion of women's leadership and participation in local governance.",
        "Gender awareness and prevention of gender-based violence.",
        "Financial literacy and economic empowerment initiatives.",
        "Support for women entrepreneurs and producer groups.",
        "Legal awareness and access to rights and entitlements."
      ]
    },
    {
      id: 2,
      title: "Child Empowerment and Youth Development",
      icon: "📚",
      description: "We work to promote quality education, child protection, life skills, and meaningful participation of children in matters affecting their lives.",
      focusAreas: [
        "Strengthening access to quality and inclusive education.",
        "Child rights awareness and child protection mechanisms.",
        "School enrollment, retention, and learning enhancement programs.",
        "Leadership, life skills, and personality development programs.",
        "Formation of child clubs and children's collectives.",
        "Reproductive health, career guidance, and mentorship."
      ]
    },
    {
      id: 3,
      title: "Sustainable Livelihood and Entrepreneurship",
      icon: "💼",
      description: "We work with vulnerable households in strengthening livelihoods through farm, non-farm, off -farm models, diversifying income sources, and building resilient local enterprises that improve economic security and self-reliance.",
      focusAreas: [
        "Farm, non-farm, and off-farm livelihood models.",
        "Entrepreneurship development and enterprise incubation.",
        "Promotion of producer groups and community enterprises.",
        "Market linkage and value chain development.",
        "Climate-smart agriculture and climate-resilient practices.",
        "Livelihood opportunities for women, youth, and marginalized groups."
      ]
    },
    {
      id: 4,
      title: "Community Development",
      icon: "🌐",
      description: "We work towards the overall improvement of the community by promoting safe migration & Anti-trafficking, strengthening healthcare ecosystems, and facilitating the access to social protection and entitlements.",
      focusAreas: [
        "Safe migration awareness, pre-departure orientation, and anti-trafficking.",
        "Preventive healthcare, nutrition promotion, and WASH initiatives.",
        "Facilitation of access to government welfare, identity docs, and entitlements.",
        "Access to pensions, scholarships, insurance, and social security.",
        "Strengthening community health, governance, and volunteer institutions.",
        "Legal aid and support services for migrant workers and vulnerable families."
      ]
    },
    {
      id: 5,
      title: "Digital Literacy & Skill Development",
      icon: "💻",
      description: "We work towards bridging the gap between the vulnerable communities and real-world by improving their capabilities and capacities through digital literacy and skill development programs.",
      focusAreas: [
        "Digital literacy training for women and youth.",
        "Computer education and basic IT skills.",
        "Digital financial literacy and online safety.",
        "Employability and workplace readiness training.",
        "Access to e-governance services and digital platforms.",
        "Skill development for capacity enhancement."
      ]
    },
   {
  id: 6,
  title: "Access to Government Welfare Schemes",
  icon: "🔬",
  description: "We help vulnerable households access government welfare schemes, essential services, and social protection benefits.",
  focusAreas: [
    "Awareness of government welfare schemes and entitlements.",
    "Support with eligibility assessment and documentation.",
    "Facilitation of applications and scheme enrollment.",
    "Linkages with government departments and service providers.",
    "Grievance support and follow-up for benefit access.",
    "Community awareness on social protection and public services."
  ]
}
    ,
    {
      id: 7,
      title: "Research, Advocacy & Capacity Building",
      icon: "🔬",
      description: "We conduct research, generate knowledge, strengthen institutions, and advocate for policies that promote equity, inclusion, and community well-being.",
      focusAreas: [
        "Participatory research and community assessments.",
        "Policy advocacy and stakeholder engagement.",
        "Capacity building of civil society organizations.",
        "Training of community leaders and grassroots institutions.",
        "Documentation of best practices and learning.",
        "Knowledge sharing and collaborative partnerships."
      ]
    }
  ];

  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
      <Header />
      <PageNavigation title="Our Themes" />

      {/* CORE INTERACTIVE SECTION */}
      <div className="container py-5">
        <div className="row g-4">
          
          {/* LEFT COLUMN: Sidebar Navigation Menu */}
          <div className="col-md-4">
            <div className="sticky-top" style={{ top: "20px", zIndex: "10" }}>
              <h4 className="fw-bold mb-3 text-dark ps-2">Our Themes</h4>
              <div className="list-group border-0 shadow-sm" style={{ borderRadius: "12px", overflow: "hidden" }}>
                {programsData.map((prog, idx) => (
                  <button
                    key={prog.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`list-group-item list-group-item-action py-3 px-4 d-flex align-items-center gap-3 border-0 transition-all ${
                      activeTab === idx 
                        ? 'bg-primary text-white fw-bold' 
                        : 'bg-white text-primary'
                    }`}
                    style={{
                      borderBottom: "1px solid #f2f4f7",
                      fontSize: "0.95rem"
                    }}
                  >
                    <span className="fs-5">{prog.icon}</span>
                    <span className="text-start">{prog.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Active Program View Screen */}
          <div className="col-md-8">
            <div 
              className="bg-white p-4 p-md-5 h-100 transition-fade"
              style={{
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                borderRadius: "16px",
                border: "1px solid rgba(0,0,0,0.02)"
              }}
            >
              {/* Header Area inside card */}
              <div className="d-flex align-items-center gap-3 mb-4">
                <span className="p-3 bg-primary-subtle rounded-3 fs-3">
                  {programsData[activeTab].icon}
                </span>
                <h3 className="fw-bold text-dark m-0">
                  {programsData[activeTab].title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-primary lh-lg mb-5" style={{ fontSize: "1.05rem" }}>
                {programsData[activeTab].description}
              </p>

              <hr className="my-4 opacity-10" />

              {/* Key Focus Area Lists */}
              <h5 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                <span className="text-primary">⚡</span> Key Focus Areas
              </h5>
              
              <div className="row g-3">
                {programsData[activeTab].focusAreas.map((item, index) => (
                  <div key={index} className="col-12">
                    <div className="d-flex gap-3 align-items-start bg-light p-3 rounded-3 border-start border-primary border-3">
                      <span className="text-primary fw-bold">✓</span>
                      <p className="m-0 text-primary small fw-medium lh-base">{item}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scoped CSS transitions */}
      <style>{`
        .tracking-wider { letter-spacing: 1px; }
        .transition-all { transition: all 0.2s ease-in-out; }
        .list-group-item-action:hover:not(.bg-primary) {
          background-color: #f8f9fa !important;
          color: #0d6efd !important;
          padding-left: 30px !important;
        }
      `}</style>
      <Footer />
    </div>
  );
};

export default Ourtheme;