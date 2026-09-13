import React, { useMemo, useState } from "react";
import * as d3 from "d3";

// District coordinates formatted for the SVG map layout
const districts = [
  { name: "Garhwa", x: 70, y: 225, region: "North West" },
  { name: "Palamu", x: 180, y: 225, region: "North West" },
  { name: "Latehar", x: 200, y: 315, region: "West Central" },
  { name: "Chatra", x: 300, y: 210, region: "North Central" },
  { name: "Hazaribagh", x: 400, y: 240, region: "North Central" },
  { name: "Koderma", x: 460, y: 150, region: "North" },
  { name: "Giridih", x: 530, y: 195, region: "North East" },
  { name: "Ramgarh", x: 400, y: 330, region: "Central" },
  { name: "Bokaro", x: 520, y: 330, region: "East Central" },
  { name: "Dhanbad", x: 620, y: 300, region: "East" },
  { name: "Deoghar", x: 650, y: 210, region: "Santhal Pargana" },
  { name: "Jamtara", x: 680, y: 300, region: "East" },
  { name: "Dumka", x: 780, y: 210, region: "East (Santhal Pargana)" },
  { name: "Godda", x: 760, y: 112, region: "North East" },
  { name: "Sahebganj", x: 850, y: 60, region: "Far North East" },
  { name: "Pakur", x: 860, y: 150, region: "Far North East" },
  { name: "Lohardaga", x: 260, y: 390, region: "West Central" },
  { name: "Ranchi", x: 370, y: 397, region: "Central" },
  { name: "Gumla", x: 240, y: 472, region: "West" },
  { name: "Khunti", x: 370, y: 487, region: "South Central" },
  { name: "Simdega", x: 240, y: 585, region: "South West" },
  { name: "West Singhbhum", x: 400, y: 615, region: "South" },
  { name: "Seraikela Kharsawan", x: 530, y: 510, region: "South East" },
  { name: "East Singhbhum", x: 620, y: 585, region: "South East" },
];

const activeDistricts = [
  "Koderma",
  "Hazaribagh",
  "Dumka",
  "Ramgarh",
  "Ranchi",
  "Khunti",
  "Gumla",
  "East Singhbhum",
];

const footprintStats = [
  { value: "8", label: "Districts" },
  { value: "8", label: "Blocks" },
  { value: "16", label: "Panchayats" },
  { value: "49", label: "Villages" },
];

const GREEN = "#198754";
const NAVY = "#002663";
const WIDTH = 950;
const HEIGHT = 700;

const renderLabel = (cell, fontSize) => {
  const words = cell.name.split(" ");
  const lineHeight = fontSize + 2;
  const startY = cell.y - ((words.length - 1) * lineHeight) / 2 + fontSize / 3;
  return words.map((word, idx) => (
    <tspan key={idx} x={cell.x} y={startY + idx * lineHeight}>
      {word}
    </tspan>
  ));
};

export default function GeographicFootprint({ activeDistrict: externalActive, setActiveDistrict: externalSetActive }) {
  const [internalHovered, setInternalHovered] = useState(null);

  // Allow component to work standalone or with controlled parent state
  const hovered = externalActive !== undefined ? externalActive : internalHovered;
  const setHovered = externalSetActive || setInternalHovered;

  const cells = useMemo(() => {
    const points = districts.map((d) => [d.x, d.y]);
    const delaunay = d3.Delaunay.from(points);
    const voronoi = delaunay.voronoi([0, 0, WIDTH, HEIGHT]);
    return districts.map((d, i) => ({
      ...d,
      polygon: voronoi.cellPolygon(i),
    }));
  }, []);

  const activeData = districts.find((d) => d.name === hovered);
  const activeIsHighlighted = activeData && activeDistricts.includes(activeData.name);

  return (
    <div className="row justify-content-center mb-4 mx-0">
      <div className="col-12 px-1 px-sm-2">
        <div className="card border-0 p-4 p-md-5 rounded-4 bg-white shadow-sm">
          <div className="row align-items-center g-4">
            
            {/* Left Column: Details & Stats */}
            <div className="col-12 col-lg-5">
              <span className="text-uppercase text-primary fw-bold small tracking-wider">
                Geographic Footprint
              </span>
              <h3 className="h3 fw-bold text-dark mb-2 mt-1">Intervention Area - Jharkhand</h3>
              <p className="text-muted small mb-4">
                Our active operations extend across key districts in Jharkhand, bringing sustainable development directly to grassroots levels.
              </p>

              <div className="row text-center g-2 mb-4">
                {footprintStats.map((stat, sIdx) => (
                  <div className="col-3" key={sIdx}>
                    <div className="p-2 bg-light rounded-3 border">
                      <div className="fw-bold fs-3 text-primary">{stat.value}</div>
                      <small className="text-muted d-block lh-1 mt-1" style={{ fontSize: "11px" }}>
                        {stat.label}
                      </small>
                    </div>
                  </div>
                ))}
              </div>

              <h6 className="fw-bold text-dark mb-3 small text-uppercase tracking-wider">
                Key Districts Served:
              </h6>
              <div className="d-flex flex-wrap gap-2">
                {activeDistricts.map((distName, dIdx) => (
                  <span
                    key={dIdx}
                    className={`badge px-3 py-2 rounded-pill fw-semibold border transition-all ${
                      hovered === distName
                        ? "text-white border-0 shadow-sm"
                        : "bg-light text-secondary border-light-subtle"
                    }`}
                    style={{
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      backgroundColor: hovered === distName ? NAVY : undefined
                    }}
                    onMouseEnter={() => setHovered(distName)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <i className="bi bi-geo-alt-fill me-1"></i> {distName}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: SVG Vector District Canvas */}
            <div className="col-12 col-lg-7">
              <div className="position-relative rounded-4 overflow-hidden border shadow-sm bg-light">
                
                {/* Header Status Bar */}
                <div className="d-flex justify-content-between align-items-center p-3 bg-white border-bottom z-3 position-relative">
                  <small className="fw-bold text-uppercase text-muted" style={{ fontSize: "11px" }}>
                    <i className="bi bi-map-fill me-1 text-primary"></i> Jharkand Map
                  </small>
                 
                </div>

                {/* SVG Container */}
                <div style={{ width: "100%", background: "#f8f9fa" }}>
                  <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-100 h-auto d-block user-select-none">
                    {cells.map((cell, i) => {
                      if (!cell.polygon) return null;
                      const isHighlighted = activeDistricts.includes(cell.name);
                      const isHovered = hovered === cell.name;
                      
                      // Base state colors
                      const fill = isHovered ? NAVY : isHighlighted ? GREEN : "#FFFFFF";
                      const points = cell.polygon.map((p) => p.join(",")).join(" ");
                      
                      return (
                        <polygon
                          key={i}
                          points={points}
                          fill={fill}
                          stroke="#CBD5E1"
                          strokeWidth={1.5}
                          style={{
                            transition: "fill 0.2s ease",
                            cursor: "pointer",
                          }}
                          onMouseEnter={() => setHovered(cell.name)}
                          onMouseLeave={() => setHovered(null)}
                        />
                      );
                    })}

                    {/* Labels Layer */}
                    {cells.map((cell, i) => {
                      const isHighlighted = activeDistricts.includes(cell.name);
                      const isHovered = hovered === cell.name;
                      const textColor = isHovered || isHighlighted ? "#FFFFFF" : "#64748B";

                      return (
                        <text
                          key={`label-${i}`}
                          textAnchor="middle"
                          fontSize={13}
                          fontWeight={isHighlighted || isHovered ? 700 : 500}
                          fill={textColor}
                          style={{ pointerEvents: "none", transition: "fill 0.2s ease" }}
                        >
                          {renderLabel(cell, 13)}
                        </text>
                      );
                    })}
                  </svg>
                </div>

               

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}