import React, { useState } from 'react';
import Header from '../components/Header';
import PageNavigation from '../components/PageNavigation';
import Footer from '../components/Footer';

const legalData = [
{
    id: '12-80g-csr',
    categoryName: '12A, 80G & CSR Registrations',
    pdfs: [
      { id: 'pdf-1', title: '12A Approval New Verified', fileUrl: encodeURI('/docs/Legal Report/12 A 80G FC CSR/12A approval new verified.pdf') },
      { id: 'pdf-2', title: '80G Approval New Verified', fileUrl: encodeURI('/docs/Legal Report/12 A 80G FC CSR/80G approval new verified.pdf') },
      { id: 'pdf-3', title: 'CSR-I Registration', fileUrl: encodeURI('/docs/Legal Report/12 A 80G FC CSR/CSR- I REGISTRATION.pdf') },
      { id: 'pdf-4', title: 'CSR-I Form', fileUrl: encodeURI('/docs/Legal Report/12 A 80G FC CSR/CSR-I form.pdf') },
      { id: 'pdf-5', title: 'Darpan ID of LOK SWAR', fileUrl: encodeURI('/docs/Legal Report/12 A 80G FC CSR/Darpan ID of LOK SWAR.pdf') },
      { id: 'pdf-6', title: 'FCRA Approval Certificate (Foreign Funds)', fileUrl: encodeURI('/docs/Legal Report/12 A 80G FC CSR/FCRA approval certificate to recive foreign funds.pdf') },
      { id: 'pdf-7', title: 'TAN LOK SWAR', fileUrl: encodeURI('/docs/Legal Report/12 A 80G FC CSR/TAN LOK SWAR.jpg') },
      { id: 'pdf-8', title: 'Trust Deed Bylaws Registration Certificate', fileUrl: encodeURI('/docs/Legal Report/12 A 80G FC CSR/Trust deed bylaws registration certificate.pdf') }
    ]
  },
  {
    id: 'audits',
    categoryName: 'General Audit Reports',
    pdfs: [
      { id: 'pdf-9', title: 'Audit Report 2021-22', fileUrl: '/docs/Legal Report/Audit/Audit 2021-22.pdf' },
      { id: 'pdf-10', title: 'Audit Report 2022-23', fileUrl: '/docs/Legal Report/Audit/Audit 2022-23.pdf' },
      { id: 'pdf-11', title: 'Audit Report 2023-24', fileUrl: '/docs/Legal Report/Audit/Audit 2023-24.pdf' },
      { id: 'pdf-12', title: 'Audit Report 2024-25', fileUrl: '/docs/Legal Report/Audit/Audit 2024- 25.pdf' }
    ]
  },
  {
    id: 'fc-audits',
    categoryName: 'FC Audit Reports',
    pdfs: [
      { id: 'pdf-13', title: 'FC Audit Report 2020', fileUrl: '/docs/Legal Report/FC AUDIT REPORTS/Fc audit report 2020.pdf' },
      { id: 'pdf-14', title: 'FC Audit Report 2021', fileUrl: '/docs/Legal Report/FC AUDIT REPORTS/FC audit report 2021.pdf' },
      { id: 'pdf-15', title: 'FC Audit Report 2022', fileUrl: '/docs/Legal Report/FC AUDIT REPORTS/FC audit report 2022.pdf' },
      { id: 'pdf-16', title: 'FC Audit Report 2023', fileUrl: '/docs/Legal Report/FC AUDIT REPORTS/FC audit report 2023.pdf' },
      { id: 'pdf-17', title: 'FC Audit Report 2024', fileUrl: '/docs/Legal Report/FC AUDIT REPORTS/FC audit report 2024.pdf' }
    ]
  },
  {
    id: 'fc-returns',
    categoryName: 'FC Returns',
    pdfs: [
      { id: 'pdf-18', title: 'FC 4 - 2016-17', fileUrl: '/docs/Legal Report/FC return/FC 4 - 2016-17.pdf' },
      { id: 'pdf-19', title: 'FC 4 - 2017-18', fileUrl: '/docs/Legal Report/FC return/FC 4- 2017-18.pdf' },
      { id: 'pdf-20', title: 'FC 4 - 2018-19', fileUrl: '/docs/Legal Report/FC return/FC 4 2018-19.pdf' },
      { id: 'pdf-21', title: 'FC Return 2021', fileUrl: '/docs/Legal Report/FC return/FC return 2021.pdf' },
      { id: 'pdf-22', title: 'FC Return 2022', fileUrl: '/docs/Legal Report/FC return/FC return 2022.pdf' },
      { id: 'pdf-23', title: 'FC Return 2023', fileUrl: '/docs/Legal Report/FC return/FC return 2023.pdf' },
      { id: 'pdf-24', title: 'FC Return 2024', fileUrl: '/docs/Legal Report/FC return/FC return 2024.pdf' },
      { id: 'pdf-25', title: 'FC Return 2025', fileUrl: '/docs/Legal Report/FC return/FC return 2025.pdf' }
    ]
  },
  {
    id: 'itr',
    categoryName: 'ITR & Tax Documents',
    pdfs: [
      { id: 'pdf-26', title: 'ITR 2020-21 Image', fileUrl: '/docs/Legal Report/ITR/ITR 20-21.jpg' },
      { id: 'pdf-27', title: 'ITR 2021-22', fileUrl: '/docs/Legal Report/ITR/ITR 21-22.pdf' },
      { id: 'pdf-28', title: 'ITR 2022-23', fileUrl: '/docs/Legal Report/ITR/ITR 22-23.pdf' },
      { id: 'pdf-29', title: 'ITR 2023-24', fileUrl: '/docs/Legal Report/ITR/ITR 23-24.pdf' },
      { id: 'pdf-30', title: 'ITR ACK FY 2023-24 (AY 2024-25)', fileUrl: '/docs/Legal Report/ITR/ITR_ACK_FY-2023-24, AY-2024-25.pdf' },
      { id: 'pdf-31', title: 'ITR ACK FY 2024-25 (AY 2025-26)', fileUrl: '/docs/Legal Report/ITR/ITR_ACK_FY-2024-25, AY-2025-26.pdf' },
      { id: 'pdf-32', title: 'Appreciation Letters Annex 19', fileUrl: '/docs/Legal Report/APPRECIATION LEETERS ANNEX 19.pdf' }
    ]
  }
];

const LegalDocuments = () => {
  // State initialization
  const [selectedCategory, setSelectedCategory] = useState(legalData[0]);
  const [selectedPdf, setSelectedPdf] = useState(legalData[0].pdfs[0]);

  // Handle category switch
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category.pdfs.length > 0) {
      setSelectedPdf(category.pdfs[0]);
    } else {
      setSelectedPdf(null);
    }
  };

  return (
    <>
      <Header />
      <PageNavigation title="Legal Documents" />

      {/* Main Container Layout */}
      <div className="container py-5">
        <div className="row g-4">
          
          {/* DIV 1: Categories (col-lg-3) */}
          <div className="col-12 col-md-4 col-lg-3">
            <div className="bg-light p-3 rounded shadow-sm border h-100">
              <h5 className="mb-3 border-bottom pb-2 fw-bold text-primary">Categories</h5>
              <div className="list-group">
                {legalData.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`list-group-item list-group-item-action text-start ${
                      selectedCategory.id === cat.id ? 'active fw-semibold' : ''
                    }`}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    {cat.categoryName}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* DIV 2: List of Documents (col-lg-4) */}
          <div className="col-12 col-md-8 col-lg-4">
            <div className="bg-light p-3 rounded shadow-sm border h-100">
              <h5 className="mb-3 border-bottom pb-2 fw-bold text-primary">Documents List</h5>
              <div className="list-group max-h-600 overflow-auto">
                {selectedCategory.pdfs.length > 0 ? (
                  selectedCategory.pdfs.map((pdf) => {
                    const isImage = pdf.fileUrl.endsWith('.jpg') || pdf.fileUrl.endsWith('.png');
                    return (
                      <button
                        key={pdf.id}
                        type="button"
                        className={`list-group-item list-group-item-action d-flex align-items-center justify-content-between text-start ${
                          selectedPdf?.id === pdf.id ? 'active fw-semibold' : ''
                        }`}
                        onClick={() => setSelectedPdf(pdf)}
                      >
                        <span className="me-2 text-truncate">{pdf.title}</span>
                        <i className={`fa ${isImage ? 'fa-image text-warning' : 'fa-file-pdf text-danger'} flex-shrink-0`}></i>
                      </button>
                    );
                  })
                ) : (
                  <p className="text-muted mb-0">No documents available in this category.</p>
                )}
              </div>
            </div>
          </div>

          {/* DIV 3: Document Viewer (col-lg-5) */}
          <div className="col-12 col-lg-5">
            <div className="bg-light p-3 rounded shadow-sm border h-100 d-flex flex-column">
              <div className="d-flex align-items-center justify-content-between border-bottom pb-2 mb-3">
                <h5 className="m-0 fw-bold text-primary text-truncate">
                  {selectedPdf ? selectedPdf.title : 'Document Viewer'}
                </h5>
                {selectedPdf && (
                  <a 
                    href={selectedPdf.fileUrl} 
                    download 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-primary ms-2 flex-shrink-0"
                  >
                    <i className="fa fa-download me-1"></i> Download
                  </a>
                )}
              </div>

              <div className="flex-grow-1 bg-white border rounded overflow-hidden position-relative" style={{ minHeight: '550px' }}>
                {selectedPdf ? (
                  selectedPdf.fileUrl.endsWith('.jpg') || selectedPdf.fileUrl.endsWith('.png') ? (
                    <div className="d-flex align-items-center justify-content-center h-100 p-3">
                      <img 
                        src={selectedPdf.fileUrl} 
                        alt={selectedPdf.title} 
                        className="img-fluid max-h-100 object-fit-contain" 
                      />
                    </div>
                  ) : (
                    <iframe
                      src={selectedPdf.fileUrl}
                      title={selectedPdf.title}
                      width="100%"
                      height="100%"
                      style={{ border: 'none', minHeight: '550px' }}
                    >
                      <p className="p-3 text-center">
                        Your browser does not support embedding PDFs directly. 
                        <a href={selectedPdf.fileUrl} target="_blank" rel="noreferrer" className="ms-1 fw-bold">
                          Click here to download and view.
                        </a>
                      </p>
                    </iframe>
                  )
                ) : (
                  <div className="d-flex align-items-center justify-content-center h-100 text-muted">
                    Select a document to preview
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Helper Inline Scoped CSS */}
      <style>{`
        .max-h-600 {
          max-height: 550px;
        }
        .max-h-100 {
          max-height: 100%;
        }
      `}</style>

      <Footer />
    </>
  );
};

export default LegalDocuments;