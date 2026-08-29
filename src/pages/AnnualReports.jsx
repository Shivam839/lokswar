import React, { useState } from 'react';
import Header from '../components/Header';
import PageNavigation from '../components/PageNavigation';
import Footer from '../components/Footer';

// Data structured by Financial Years
const annualReportsData = [
  {
    id: 'fy-2024-25',
    categoryName: 'Annual Report',
    pdfs: [
      { id: 'ar-2022-main', title: 'Annual Report (2022-23)', fileUrl: '/docs/ANNUAL REPORT/Annual Report (2022-23).pdf' },
    ]
  }
];

const AnnualReports = () => {
  // State to track selected year category and selected PDF file
  const [selectedCategory, setSelectedCategory] = useState(annualReportsData[0]);
  const [selectedPdf, setSelectedPdf] = useState(annualReportsData[0].pdfs[0]);

  // Handle category change
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category.pdfs.length > 0) {
      setSelectedPdf(category.pdfs[0]);
    } else {
      setSelectedPdf(null);
    }
  };

  return (
    <div>
      <Header />
      <PageNavigation title="Annual Reports" />

      {/* Main Container Layout */}
      <div className="container py-5">
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 2fr 4fr', 
            gap: '20px',
            alignItems: 'start'
          }}
        >
          {/* DIV 1: Years/Categories (1fr) */}
          <div className="bg-light p-3 rounded shadow-sm">
            <h5 className="mb-3 border-bottom pb-2">Financial Years</h5>
            <div className="list-group">
              {annualReportsData.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`list-group-item list-group-item-action ${selectedCategory.id === cat.id ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(cat)}
                >
                  {cat.categoryName}
                </button>
              ))}
            </div>
          </div>

          {/* DIV 2: List of Reports for selected year (2fr) */}
          <div className="bg-light p-3 rounded shadow-sm">
            <h5 className="mb-3 border-bottom pb-2">Reports List</h5>
            <div className="list-group">
              {selectedCategory.pdfs.length > 0 ? (
                selectedCategory.pdfs.map((pdf) => (
                  <button
                    key={pdf.id}
                    type="button"
                    className={`list-group-item list-group-item-action d-flex align-items-center justify-content-between ${selectedPdf?.id === pdf.id ? 'active' : ''}`}
                    onClick={() => setSelectedPdf(pdf)}
                  >
                    <span>{pdf.title}</span>
                    <i className="fa fa-file-pdf text-danger"></i>
                  </button>
                ))
              ) : (
                <p className="text-muted mb-0">No reports available for this year.</p>
              )}
            </div>
          </div>

          {/* DIV 3: PDF Viewer (4fr) */}
          <div className="bg-light p-3 rounded shadow-sm">
            <h5 className="mb-3 border-bottom pb-2">
              {selectedPdf ? selectedPdf.title : 'Report Viewer'}
            </h5>
            <div style={{ width: '100%', height: '600px', background: '#fff', border: '1px solid #ddd', borderRadius: '4px' }}>
              {selectedPdf ? (
                <iframe
                  src={selectedPdf.fileUrl}
                  title={selectedPdf.title}
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                >
                  <p>Your browser does not support PDFs. <a href={selectedPdf.fileUrl}>Click here to download</a>.</p>
                </iframe>
              ) : (
                <div className="d-flex align-items-center justify-content-center h-100 text-muted">
                  Select a report to preview
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AnnualReports;