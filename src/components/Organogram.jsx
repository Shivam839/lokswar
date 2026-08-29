import React from 'react';

const Organogram = () => {
  return (
    <div className="col-12 mt-5 mb-5">
      <div 
        className="bg-white border-0 text-center"
        style={{
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          borderRadius: "16px",
          padding: "40px 20px"
        }}
      >
        {/* Title Section */}
        <h3 className="fw-bold mb-5 text-dark" style={{ letterSpacing: "-0.5px" }}>
          Organizational Organogram
        </h3>

        {/* Tree Flow Container */}
        <div className="d-flex flex-column align-items-center position-relative">
          
          {/* Level 1: General Body */}
          <div className="card-node main-tier">
            General Body
          </div>
          <div className="flow-line"></div>

          {/* Level 2: Governing Body */}
          <div className="card-node main-tier">
            Governing Body
          </div>
          <div className="flow-line"></div>

          {/* Level 3: Chief Executive Members */}
          <div className="card-node exec-tier px-5">
            Chief Executive Members
          </div>
          
          {/* Split Connector Line for Branching */}
          <div className="split-connector-container my-3 position-relative w-70">
            <div className="horizontal-branch-line"></div>
            <div className="d-flex justify-content-between w-100 px-5">
              <div className="vertical-branch-stub"></div>
              <div className="vertical-branch-stub"></div>
            </div>
          </div>

          {/* Level 4: Split into Director & Sr. Consultants */}
          <div className="d-flex justify-content-center gap-5 w-100 max-w-700 px-3 flex-wrap">
            
            {/* Left Wing: Director & Team */}
            <div className="d-flex flex-column align-items-center flex-grow-1 min-w-250">
              <div className="card-node management-tier w-100">Director</div>
              <div className="flow-line"></div>
              
              {/* Internal Split for Finance & Coordinator */}
              <div className="split-connector-container mb-3 position-relative w-100">
                <div className="horizontal-branch-line"></div>
                <div className="d-flex justify-content-between w-100">
                  <div className="vertical-branch-stub"></div>
                  <div className="vertical-branch-stub"></div>
                </div>
              </div>

              <div className="d-flex justify-content-center gap-3 w-100">
                <div className="card-node staff-tier flex-fill">Finance Persons</div>
                <div className="card-node staff-tier flex-fill">Coordinator</div>
              </div>
            </div>

            {/* Right Wing: Sr. Consultants */}
            <div className="d-flex flex-column align-items-center flex-grow-1 min-w-250 justify-content-start">
              <div className="card-node management-tier w-100">Sr. Consultants</div>
              {/* Optional dynamic line mapping can be drawn here if needed */}
            </div>

          </div>

          {/* Combined Flow down towards Projects */}
          <div className="flow-line mt-4"></div>

          {/* Level 5: Program Officer */}
          <div className="card-node execution-tier px-4">
            Program Officer / Project Coordinator
          </div>
          <div className="flow-line"></div>

          {/* Level 6: Field Support Team */}
          <div className="card-node field-tier px-4">
            Field Support Team (F.S.T)
          </div>

        </div>
      </div>

      {/* Embedded Mini-Scoped CSS Styles to make the tree look beautiful */}
      <style>{`
        .card-node {
          background-color: #fff;
          border: 1px solid #f0f2f5;
          padding: 12px 24px;
          border-radius: 10px;
          font-weight: 600;
          color: #333;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          z-index: 2;
        }
        .card-node:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
        }
        
        /* Modern Color Coding Themes instead of harsh solid orange */
        .main-tier { border-left: 4px solid #dc3545; background-color: #fff5f5; }
        .exec-tier { border-left: 4px solid #fd7e14; background-color: #fff9f5; }
        .management-tier { border-left: 4px solid #0d6efd; background-color: #f0f7ff; }
        .staff-tier { border-left: 4px solid #6c757d; font-size: 0.9rem; }
        .execution-tier { border-left: 4px solid #198754; background-color: #f4fbf7; }
        .field-tier { border-left: 4px solid #20c997; background-color: #f0fdfa; }

        /* Structural Flow Connectors */
        .flow-line {
          width: 2px;
          height: 25px;
          background-color: #dee2e6;
          z-index: 1;
        }
        .w-70 { width: 70%; }
        .max-w-700 { max-width: 700px; }
        .min-w-250 { min-width: 250px; }
        
        .horizontal-branch-line {
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 2px;
          background-color: #dee2e6;
        }
        .vertical-branch-stub {
          width: 2px;
          height: 15px;
          background-color: #dee2e6;
        }
      `}</style>
    </div>
  );
};

export default Organogram;