import React from 'react';

const PastProjects = () => {
  // Past Projects Data structured for clean mapping
  const projects = [
    {
      id: "01",
      title: "Social Mobilization & Food Security",
      partner: "Niwano Peace Foundation (Japan)",
      description: "Ensured food security for 546 extremely deprived households across 18 villages in Khunti through CBO capacity building, establishing grain banks, SHGs, and NREGA unions.",
      metrics: [
        { count: "546", label: "Households Secured" },
        { count: "18", label: "Grain Banks Formed" },
        { count: "2,800+", label: "Plants Distributed" }
      ],
      icon: "bi-basket",
      badgeClass: "bg-success-subtle text-success border border-success-subtle"
    },
    {
      id: "02",
      title: "Biomedical Waste Handling Campaign",
      partner: "Toxics Link India / Ford Foundation",
      description: "Sensitization and capacity building on Biomedical Waste Handling Rules 1998 across 3 districts (Ranchi, Khunti, Ramgarh). Created a model hospital ward and trained health personnel.",
      metrics: [
        { count: "250", label: "Nurses Trained" },
        { count: "3", label: "Districts Covered" },
        { count: "1", label: "Model Ward Created" }
      ],
      icon: "bi-shield-exclamation",
      badgeClass: "bg-warning-subtle text-warning-emphasis border border-warning-subtle"
    },
    {
      id: "03",
      title: "Targeted Intervention Program (HIV/AIDS)",
      partner: "JSACS / NACO (Jharkhand Govt)",
      description: "Engaged 750 mobile Female Sex Workers (FSWs) in Khunti & Simdega with counseling, blood testing, FGDs, street plays, and tracing positive cases to state health authorities.",
      metrics: [
        { count: "750", label: "FSWs Reached" },
        { count: "2", label: "Districts Covered" },
        { count: "2", label: "Cases Referred" }
      ],
      icon: "bi-heart-pulse",
      badgeClass: "bg-danger-subtle text-danger border border-danger-subtle"
    },
    {
      id: "04",
      title: "Anti-Trafficking & Rehabilitation Unit",
      partner: "Center for World Solidarity (CWS)",
      description: "Formed 20 village-level anti-trafficking vigilance committees, tracked missing cases, filed police complaints & PILs, and successfully rescued and brought back missing girls.",
      metrics: [
        { count: "20", label: "Vigilance Committees" },
        { count: "25", label: "PILs & Cases Filed" },
        { count: "4", label: "Girls Rescued" }
      ],
      icon: "bi-shield-lock",
      badgeClass: "bg-danger-subtle text-danger border border-danger-subtle"
    },
    {
      id: "05",
      title: "Education Program for Slum Children",
      partner: "ARF / LOMEF (Thailand)",
      description: "Initiated non-formal learning centers across 5 slum areas using playful 'Khel Khel Mein' learning methods to prepare and transition out-of-school children into government schools.",
      metrics: [
        { count: "1,455", label: "Students Transitioned" },
        { count: "5", label: "Slum Centers" },
        { count: "3–8 yrs", label: "Target Age" }
      ],
      icon: "bi-mortarboard",
      badgeClass: "bg-primary-subtle text-primary border border-primary-subtle"
    },
    {
      id: "06",
      title: "Learning Achievement Testing Research",
      partner: "Jharkhand Education Department",
      description: "Executed comprehensive educational research evaluating student learning outcomes and academic progress from Class V to Class VIII across government schools in 5 districts.",
      metrics: [
        { count: "5", label: "Districts Surveyed" },
        { count: "Std V-VIII", label: "Classes Assessed" },
        { count: "Govt", label: "School Sector" }
      ],
      icon: "bi-journal-check",
      badgeClass: "bg-info-subtle text-info-emphasis border border-info-subtle"
    },
    {
      id: "07",
      title: "Vocational Training & Livelihood Generation",
      partner: "DRDA, CARE, SIDBI, PNB",
      description: "Income generation through Sabai grass, bamboo handicrafts, resin bags, and stationery. Established a bamboo craft collective and supported rural women micro-entrepreneurs.",
      metrics: [
        { count: "1,100+", label: "Women Trained" },
        { count: "176", label: "Active Artisans" },
        { count: "21", label: "Businesses Started" }
      ],
      icon: "bi-briefcase",
      badgeClass: "bg-purple-subtle text-purple border border-purple-subtle"
    },
    {
      id: "08",
      title: "Condensed Educational Course for Women",
      partner: "State Social Welfare Board (SWB)",
      description: "Provided primary and middle-level educational certificate courses through regular classes for adult women in Dugdugia village, fostering literacy and empowerment.",
      metrics: [
        { count: "25", label: "Women Enrolled" },
        { count: "1", label: "Target Village" },
        { count: "Certificate", label: "Level Course" }
      ],
      icon: "bi-award",
      badgeClass: "bg-teal-subtle text-teal border border-teal-subtle"
    },
    {
      id: "09",
      title: "Creating Spaces (Ending V.A.G.W.)",
      partner: "Oxfam India / Global Affairs Canada",
      description: "Engaged 2,000 direct beneficiaries across 20 villages through workshops and weekly meetings to challenge negative social norms like domestic violence and child marriage.",
      metrics: [
        { count: "2,000", label: "Direct Beneficiaries" },
        { count: "20", label: "Villages Engaged" },
        { count: "3", label: "Core Pillars" }
      ],
      icon: "bi-people",
      badgeClass: "bg-warning-subtle text-warning-emphasis border border-warning-subtle"
    },
    {
      id: "10",
      title: "Environmental & Cultural Revival",
      partner: "Global Greengrants Fund (GGF USA)",
      description: "Capacity development to resolve local environmental issues like soil erosion and deforestation by reviving ancient tribal conservation traditions and cultural practices.",
      metrics: [
        { count: "Khunti", label: "Target Block" },
        { count: "Eco-Revival", label: "Core Focus" },
        { count: "Culture", label: "Based Action" }
      ],
      icon: "bi-tree",
      badgeClass: "bg-success-subtle text-success border border-success-subtle"
    },
    {
      id: "11",
      title: "Consumer Rights & Entitlements Campaign",
      partner: "Dept. of Food & Consumer Rights (Jharkhand)",
      description: "Organized consumer awareness camps, 'Jagrukta Raths', and consumer clubs to educate rural communities on subsidized food entitlements and consumer protections.",
      metrics: [
        { count: "Statewide", label: "Campaign Scope" },
        { count: "Raths", label: "Mobile Campaign" },
        { count: "Clubs", label: "Community Formed" }
      ],
      icon: "bi-megaphone",
      badgeClass: "bg-info-subtle text-info-emphasis border border-info-subtle"
    }
  ];

  return (
    <section className="p-top-90 p-bottom-90 bg-gray-gradient mt-5">
      <div className="container">

        {/* Section Banner Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-10">
            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
              <div className="row align-items-center g-4">
                <div className="col-lg-7">
                  <div className="block-title mb-3">
                    <small className="sub-title text-uppercase text-primary fw-bold letter-spacing-2">Track Record</small>
                    <h2 className="h1 title mt-1">Past Projects</h2>
                  </div>
                  <p className="text-muted leading-relaxed">
                    Over the years, Lok Swar has spearheaded wide-ranging initiatives across Jharkhand—from securing food rights and fighting human trafficking to promoting women's health, education, and economic independence.
                  </p>
                  <p className="text-muted leading-relaxed mb-0">
                    In partnership with international foundations and state departments, our work continues to turn grassroots challenges into sustainable community-led change.
                  </p>
                </div>

                {/* Stat Callout Box matching AboutIdeology style */}
                <div className="col-lg-5">
                  <div className="p-4 rounded-3 text-white h-100 d-flex flex-column justify-content-center" style={{ backgroundColor: "#2D3748" }}>
                    <div className="mb-2 text-warning fs-3">
                      <i className="bi bi-graph-up-arrow"></i>
                    </div>
                    <p className="fw-semibold fs-5 mb-3 lh-sm">
                      Over 10,000+ lives directly impacted through dedicated grassroots programs, advocacy, and strategic partnerships.
                    </p>
                    <small className="text-uppercase text-warning fw-bold opacity-75 letter-spacing-1">— Community Impact Summary</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Sub-heading */}
        <div className="row justify-content-center text-center mt-5 mb-4">
          <div className="col-lg-8">
            <small className="sub-title text-uppercase text-primary fw-bold letter-spacing-2">Our Footprint</small>
            <h2 className="h1 title">Key Completed Initiatives</h2>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="row g-4 justify-content-center">
          {projects.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <div 
                className="card h-100 border-0 p-4 rounded-4 d-flex flex-column justify-content-between"
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease"
                }}
              >
                <div>
                  {/* Top Header Row */}
                  <div className="d-flex align-items-center justify-between mb-3">
                    <div className="d-flex align-items-center">
                      <div 
                        className="rounded-3 d-flex align-items-center justify-content-center me-3 shrink-0"
                        style={{
                          width: "48px",
                          height: "48px",
                          backgroundColor: "rgba(13, 110, 253, 0.1)",
                          color: "#0d6efd",
                          fontSize: "1.25rem"
                        }}
                      >
                        <i className={`bi ${item.icon}`}></i>
                      </div>
                      <div>
                        <span className="badge rounded-pill bg-light text-secondary border mb-1">
                          Project #{item.id}
                        </span>
                        <h5 className="mb-0 fw-bold lh-sm">{item.title}</h5>
                      </div>
                    </div>
                  </div>

                  {/* Partner Subtitle */}
                  <div className="mb-3 text-muted small fw-medium d-flex align-items-center">
                    <i className="bi bi-building me-1 text-primary opacity-75"></i>
                    <span>{item.partner}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted mb-4 small lh-base">{item.description}</p>
                </div>

                {/* Bottom Infographic Metrics Row */}
                <div className="pt-3 border-top">
                  <div className="row g-1 text-center bg-light rounded-3 py-2 px-1">
                    {item.metrics.map((m, idx) => (
                      <div className="col-4" key={idx}>
                        <div className="fw-bold text-dark small">{m.count}</div>
                        <div className="text-muted" style={{ fontSize: "0.68rem" }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PastProjects;