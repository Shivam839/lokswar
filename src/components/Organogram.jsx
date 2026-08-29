import React from 'react';

const Organogram = () => {
  return (
    <div className="col-12 mt-1 mb-1">
      <div 
        className="bg-white border-0"
        style={{
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          borderRadius: "16px",
          padding: "20px"
        }}
      >
        {/* Title Section */}
        <h3 className="fw-bold mb-1 text-dark text-center" style={{ letterSpacing: "-0.5px" }}>
          Organizational Organogram
        </h3>

        {/* Tree Flow Container - Left to Right Layout */}
        <div className="d-flex flex-row align-items-center justify-content-start overflow-auto py-1" style={{paddingLeft:'50px'}}>
          
          {/* Level 1: General Body */}
          <div className="card-node main-tier">
            General Body
          </div>
          <div className="flow-line-h"></div>

          {/* Level 2: Governing Body */}
          <div className="card-node main-tier">
            Governing Body
          </div>
          <div className="flow-line-h"></div>

          {/* Level 3: Chief Executive Members */}
          <div className="card-node exec-tier">
            Chief Executive Members
          </div>
          <div className="flow-line-h"></div>

          {/* Level 4: Director */}
          <div className="card-node management-tier">
            Director
          </div>

          {/* Split Branch Out to Finance & Coordinator */}
          <div className="d-flex align-items-center position-relative">
            <div className="branch-h-container">
              <div className="vertical-branch-line"></div>
              <div className="horizontal-branch-stub top-stub"></div>
              <div className="horizontal-branch-stub bottom-stub"></div>
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="card-node staff-tier">Finance Personnel</div>
              <div className="card-node staff-tier">Coordinators</div>
            </div>
          </div>

          {/* Split Merge Back to Main Flow */}
          <div className="branch-h-container position-relative">
            <div className="vertical-branch-line"></div>
            <div className="horizontal-branch-stub top-stub"></div>
            <div className="horizontal-branch-stub bottom-stub"></div>
          </div>

          <div className="flow-line-h"></div>

          {/* Level 5: Program Officer */}
          <div className="card-node execution-tier text-nowrap">
            Program Officers
          </div>
          <div className="flow-line-h"></div>

          {/* Level 6: Field Support Team */}
          <div className="card-node field-tier text-nowrap">
            Field Support Team
          </div>

        </div>
      </div>

      {/* Mini-Scoped CSS Styles tailored for Horizontal Flow */}
      <style>{`
        .card-node {
          background-color: #fff;
          border: 1px solid #f0f2f5;
          padding: 10px;
          border-radius: 10px;
          font-weight: 600;
          color: #333;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          z-index: 2;
          white-space: nowrap;
          text-align: center;
        }
        .card-node:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
        }
        
        /* Modern Color Coding Themes */
        .main-tier { border-left: 4px solid #dc3545; background-color: #fff5f5; }
        .exec-tier { border-left: 4px solid #fd7e14; background-color: #fff9f5; }
        .management-tier { border-left: 4px solid #0d6efd; background-color: #f0f7ff; }
        .staff-tier { border-left: 4px solid #6c757d; font-size: 0.9rem; }
        .execution-tier { border-left: 4px solid #198754; background-color: #f4fbf7; }
        .field-tier { border-left: 4px solid #20c997; background-color: #f0fdfa; }

        /* Horizontal Flow Lines */
        .flow-line-h {
          width: 30px;
          height: 2px;
          background-color: #dee2e6;
          z-index: 1;
          flex-shrink: 0;
        }

        /* Branching Layout for Horizontal Split */
        .branch-h-container {
          position: relative;
          width: 30px;
          height: 80px;
          flex-shrink: 0;
        }
        .vertical-branch-line {
          position: absolute;
          top: 25%;
          bottom: 25%;
          left: 50%;
          width: 2px;
          background-color: #dee2e6;
        }
        .horizontal-branch-stub {
          position: absolute;
          height: 2px;
          width: 15px;
          background-color: #dee2e6;
        }
        .top-stub {
          top: 25%;
          right: 0;
        }
        .bottom-stub {
          bottom: 25%;
          right: 0;
        }
      `}</style>
    </div>
  );
};

export default Organogram;