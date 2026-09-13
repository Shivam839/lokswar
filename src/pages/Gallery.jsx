import React, { useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageNavigation from '../components/PageNavigation';

// Folder configuration matching directory setup
const folderConfig = [
  { folder: "Field photos", count: 23, category: "Field photos", type: "image" },
  { folder: "Training & capacity building", count: 10, category: "Training & capacity building", type: "image" },
  { folder: "IEC materials", count: 3, category: "IEC materials", type: "pdf" }, // Marked as PDF
  { folder: "Events and Workshop Photos", count: 10, category: "Events and Workshop Photos", type: "image" },
  { folder: "News Media", count: 6, category: "News Media", type: "image" }
];

// Helper to generate gallery items (supports both Images and PDFs)
const generateGalleryItems = () => {
  const items = [];
  let idCounter = 1;

  folderConfig.forEach(({ folder, count, category, type }) => {
    for (let i = 1; i <= count; i++) {
      if (type === "pdf") {
        // Path for PDF files inside IEC materials folder
        items.push({
          id: idCounter++,
          category: category,
          title: `${category} - Document ${i}`,
          folderName: folder,
          index: i,
          fileType: "pdf",
          fileUrl: `/img/Chola Shared/${folder}/${folder} (${i}).pdf`
        });
      } else {
        // Standard Image files
        items.push({
          id: idCounter++,
          category: category,
          title: `${category} - Image ${i}`,
          folderName: folder,
          index: i,
          fileType: "image",
          primaryImage: `/img/Chola Shared/${folder}/${folder} (${i}).JPG`,
        });
      }
    }
  });

  return items;
};

const allGalleryItems = generateGalleryItems();

// Filter categories list
const filterCategories = [
  "Field photos",
  "Training & capacity building",
  "IEC materials",
  "Events and Workshop Photos",
  "News Media"
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('Field photos');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = allGalleryItems.filter(item => item.category === activeFilter);

  // Navigation handlers within filtered items
  const handlePrevItem = useCallback(() => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  }, [selectedItem, filteredItems]);

  const handleNextItem = useCallback(() => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  }, [selectedItem, filteredItems]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') setSelectedItem(null);
      if (e.key === 'ArrowLeft') handlePrevItem();
      if (e.key === 'ArrowRight') handleNextItem();
    };

    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem, handlePrevItem, handleNextItem]);

  // Fallback image handler for mixed extensions (.jpeg, .jpg, .png)
  const handleImageError = (e, item) => {
    const currentSrc = e.target.src;

    if (currentSrc.endsWith('.JPG')) {
      e.target.src = `/img/Chola Shared/${item.folderName}/${item.folderName} (${item.index}).jpeg`;
    } else if (currentSrc.endsWith('.jpeg')) {
      e.target.src = `/img/Chola Shared/${item.folderName}/${item.folderName} (${item.index}).jpg`;
    } else if (currentSrc.endsWith('.jpg')) {
      e.target.src = `/img/Chola Shared/${item.folderName}/${item.folderName} (${item.index}).png`;
    }
  };

  return (
    <>
      <Header />
      <PageNavigation title="Photos & Documents" />

      <div className="container-fluid container-xxl my-4 my-md-5 px-3 px-md-4">
        {/* HEADER BAR */}
        <div className="text-center mb-4 mb-md-5">
          <p className="text-muted mx-auto col-12 col-md-10 col-lg-8">
            A visual chronicle of our community-led interventions, field operations, workshops, IEC materials, and project milestones.
          </p>
        </div>

        {/* DYNAMIC FILTER CATEGORY SWITCHER */}
        <div className="filter-category-wrapper mb-4 mb-md-5">
          <div className="d-flex flex-nowrap align-items-center gap-2 overflow-x-auto py-1 px-2 filter-scroll-container">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`btn px-3 py-2 rounded-pill fw-medium text-nowrap flex-shrink-0 btn-filter ${
                  activeFilter === cat ? 'btn-primary shadow-sm' : 'btn-light text-secondary border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GALLERY GRID */}
        <div className="row g-3 g-md-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 animate-grid-item">
              <div 
                className="gallery-card position-relative overflow-hidden bg-white border-0 shadow-sm cursor-pointer"
                style={{ borderRadius: "12px", height: "260px" }}
                onClick={() => setSelectedItem(item)}
              >
                {/* PDF CARD PLACEHOLDER vs IMAGE CARD */}
                {item.fileType === "pdf" ? (
                  <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-light text-primary p-3 text-center border">
                    <svg width="48" height="48" fill="currentColor" className="mb-2 text-danger" viewBox="0 0 16 16">
                      <path d="M14 14V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1zM3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                      <path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.011-.832.239-1.087.25-.255.676-.283.992-.072.3.201.44.583.398.962a6.11 6.11 0 0 1-.294 1.252 14.1 14.1 0 0 0 2.213.827c.363.098.718.172 1.054.221.467.069.839.267.988.587.172.37.073.805-.224 1.055-.3.253-.746.241-1.132.023a4.72 4.72 0 0 1-1.222-.962 15.34 15.34 0 0 0-2.31 1.328 6.99 6.99 0 0 1-1.05 1.515c-.328.353-.728.538-1.143.439z"/>
                    </svg>
                    <span className="fw-bold small text-dark">{item.title}</span>
                    <span className="badge bg-danger mt-2">Click to View PDF</span>
                  </div>
                ) : (
                  <img 
                    src={item.primaryImage} 
                    alt={item.title}
                    onError={(e) => handleImageError(e, item)}
                    className="w-100 h-100 object-fit-cover gallery-img" 
                    loading="lazy"
                  />
                )}

                <span className="position-absolute top-0 start-0 m-2 m-md-3 badge bg-primary rounded-pill px-2 px-md-3 py-2 z-3 shadow-sm fs-7">
                  {item.category}
                </span>

                <div className="gallery-overlay position-absolute bottom-0 start-0 end-0 p-3 d-flex flex-column justify-content-end text-start">
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX / FULLSCREEN MODAL WITH PDF & IMAGE SUPPORT */}
        {selectedItem && (
          <div 
            className="modal fade show d-block p-2 p-md-4" 
            tabIndex="-1" 
            style={{ backgroundColor: "rgba(0, 0, 0, 0.92)", zIndex: 1050 }}
            onClick={() => setSelectedItem(null)}
          >
            {/* CLOSE BUTTON */}
            <button 
              type="button" 
              className="btn text-white position-fixed rounded-circle d-flex align-items-center justify-content-center shadow-lg"
              style={{ 
                top: "15px", 
                right: "15px", 
                zIndex: 1080,
                width: "44px",
                height: "44px",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                cursor: "pointer"
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItem(null);
              }}
              aria-label="Close"
            >
              ✕
            </button>

            {/* PREVIOUS BUTTON */}
            <button
              type="button"
              className="btn text-white position-fixed top-50 translate-middle-y rounded-circle d-flex align-items-center justify-content-center shadow-lg lightbox-nav-btn"
              style={{ 
                left: "10px",
                zIndex: 1080,
                width: "46px",
                height: "46px",
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                border: "1px solid rgba(255, 255, 255, 0.25)"
              }}
              onClick={(e) => {
                e.stopPropagation();
                handlePrevItem();
              }}
              aria-label="Previous Item"
            >
              <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </svg>
            </button>

            {/* NEXT BUTTON */}
            <button
              type="button"
              className="btn text-white position-fixed top-50 translate-middle-y rounded-circle d-flex align-items-center justify-content-center shadow-lg lightbox-nav-btn"
              style={{ 
                right: "10px",
                zIndex: 1080,
                width: "46px",
                height: "46px",
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                border: "1px solid rgba(255, 255, 255, 0.25)"
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleNextItem();
              }}
              aria-label="Next Item"
            >
              <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>

            {/* MODAL MAIN CONTENT AREA */}
            <div 
              className="modal-dialog modal-dialog-centered modal-xl h-100 my-0 mx-auto" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content bg-transparent border-0 text-center position-relative d-flex flex-column align-items-center justify-content-center h-100">
                <div className="modal-body p-0 d-flex flex-column align-items-center justify-content-center w-100 max-h-modal">
                  
                  {/* CONDITIONAL RENDERING: PDF CONTAINER WITH MOBILE SCROLL SUPPORT */}
                  {selectedItem.fileType === "pdf" ? (
                    <div className="w-100 d-flex flex-column align-items-center px-1 px-md-4">
                      <div className="pdf-responsive-wrapper w-100 rounded shadow-lg border border-secondary overflow-y-auto" style={{zIndex:"2000"}}>
                        <iframe 
                          src={`${selectedItem.fileUrl}#toolbar=1&view=FitH`} 
                          title={selectedItem.title}
                          className="w-100 h-100 border-0"
                        />
                      </div>
                      <div className="mt-2">
                        <a 
                          href={selectedItem.fileUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-sm btn-outline-light rounded-pill px-3"
                        >
                          Open PDF in New Tab
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="image-container-wrapper d-flex align-items-center justify-content-center w-100 h-100 px-4">
                      <img 
                        key={selectedItem.id}
                        src={selectedItem.primaryImage} 
                        alt={selectedItem.title}
                        onError={(e) => handleImageError(e, selectedItem)}
                        className="img-fluid rounded shadow-lg object-fit-contain lightbox-responsive-img" 
                      />
                    </div>
                  )}

                  <div className="text-white mt-2 px-2">
                    <h6 className="mb-1 text-truncate max-w-sm-100">{selectedItem.title}</h6>
                    <span className="badge bg-secondary opacity-75 me-2">{selectedItem.category}</span>
                    <span className="small text-white-50">
                      ({filteredItems.findIndex(i => i.id === selectedItem.id) + 1} of {filteredItems.length})
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCOPED STYLES */}
        <style>{`
          .cursor-pointer { cursor: pointer; }
          .btn-filter { transition: all 0.2s ease-in-out; }
          .fs-7 { font-size: 0.75rem; }

          /* Category Bar - Mobile Scrollable Setup */
          .filter-category-wrapper {
            width: 100%;
            max-width: 100%;
            position: relative;
          }

          .filter-scroll-container {
            display: flex !important;
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .filter-scroll-container::-webkit-scrollbar {
            display: none;
          }

          .filter-scroll-container .btn {
            flex-shrink: 0 !important;
            white-space: nowrap !important;
          }

          @media (min-width: 768px) {
            .filter-scroll-container {
              justify-content: center;
              flex-wrap: wrap !important;
              overflow-x: visible !important;
            }
          }

          /* Lightbox Hover Animations */
          .lightbox-nav-btn {
            transition: all 0.2s ease;
          }
          .lightbox-nav-btn:hover {
            background-color: rgba(13, 110, 253, 0.85) !important;
            border-color: rgba(255, 255, 255, 0.6) !important;
            transform: translateY(-50%) scale(1.1);
          }

          /* Mobile Scrollable PDF Wrapper */
          .pdf-responsive-wrapper {
            height: 65vh;
            -webkit-overflow-scrolling: touch;
            background-color: #525659;
          }

          @media (min-width: 768px) {
            .pdf-responsive-wrapper {
              height: 75vh;
            }
          }

          /* Lightbox Dimensions */
          .max-h-modal {
            max-height: 85vh;
          }
          .lightbox-responsive-img {
            max-height: 70vh;
            max-width: 100%;
          }

          @media (min-width: 768px) {
            .lightbox-responsive-img {
              max-height: 78vh;
            }
          }
          
          /* Cards Hover Animation */
          .gallery-card .gallery-img {
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }
          
          .gallery-overlay {
            background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%);
            height: 50%;
            transition: all 0.3s ease;
            opacity: 0.85;
          }

          .gallery-card:hover .gallery-img {
            transform: scale(1.06);
          }
          
          .gallery-card:hover .gallery-overlay {
            opacity: 1;
            height: 65%;
            background: linear-gradient(to top, rgba(13, 110, 253, 0.9) 0%, rgba(0,0,0,0.5) 100%);
          }

          .animate-grid-item {
            animation: fadeInUp 0.3s ease-out forwards;
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;