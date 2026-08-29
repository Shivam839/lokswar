import React, { useState } from 'react';
import Header from '../components/Header';
import PageNavigation from '../components/PageNavigation';
import Footer from '../components/Footer';

const AppreciationLetters = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Define your certificate images here (supports .png, .jpeg, .jpg, .JPG, etc.)
  const certificates = [
    {
      id: 1,
      title: "Certificate of Excellence",
      issuedBy: "Organization / Client Name",
      imageSrc: "/images/certificates/letter-1.jpg" 
    },
    {
      id: 2,
      title: "Letter of Appreciation",
      issuedBy: "Partner Company",
      imageSrc: "/images/certificates/letter-2.png"
    },
    {
      id: 3,
      title: "Recognition Award",
      issuedBy: "Industry Association",
      imageSrc: "/images/certificates/letter-3.jpeg"
    },
    {
      id: 4,
      title: "Service Excellence Letter",
      issuedBy: "Corporate Client",
      imageSrc: "/images/certificates/letter-4.JPG"
    }
  ];

  return (
    <>
      <Header />
      <PageNavigation title="Appreciation Letters" />
      
      <div className="container my-5 px-4">
        {/* CERTIFICATES GRID */}
        <div className="row g-4">
          {certificates.map((cert) => (
            <div key={cert.id} className="col-12 col-md-6 col-lg-4 animate-grid-item">
              <div 
                className="gallery-card position-relative overflow-hidden bg-dark border-0 cursor-pointer shadow-sm"
                style={{
                  borderRadius: "16px",
                  height: "360px"
                }}
                onClick={() => setSelectedImage(cert)}
              >
                {/* Certificate Image */}
                <img 
                  src={cert.imageSrc} 
                  alt={cert.title}
                  className="w-100 h-100 object-fit-cover gallery-img" 
                />

                {/* View / Zoom Icon Wrapper */}
                <div className="position-absolute top-50 start-50 translate-middle z-2 zoom-icon-wrapper">
                  <div className="zoom-button bg-white rounded-circle d-flex align-items-center justify-content-center shadow">
                    <span className="text-primary fs-5">🔍</span>
                  </div>
                </div>

                {/* Card Overlay Details */}
                <div className="gallery-overlay position-absolute bottom-0 start-0 end-0 p-4 d-flex flex-column justify-content-end text-start">
                  {cert.issuedBy && (
                    <span className="text-white-50 small mb-1 fw-medium">{cert.issuedBy}</span>
                  )}
                  <h4 className="text-white fw-bold m-0 text-truncate" style={{ fontSize: "1.1rem" }}>
                    {cert.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX / FULLSCREEN IMAGE MODAL */}
        {selectedImage && (
          <div 
            className="modal fade show d-block" 
            tabIndex="-1" 
            style={{ backgroundColor: "rgba(0, 0, 0, 0.88)", zIndex: 1050 }}
            onClick={() => setSelectedImage(null)}
          >
            <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content bg-dark border-0 position-relative text-white overflow-hidden" style={{ borderRadius: "16px" }}>
                <button 
                  type="button" 
                  className="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3"
                  onClick={() => setSelectedImage(null)}
                ></button>
                <div className="modal-body p-0 text-center">
                  <img 
                    src={selectedImage.imageSrc} 
                    alt={selectedImage.title} 
                    className="w-100 h-auto object-fit-contain"
                    style={{ maxHeight: "80vh" }}
                  />
                  <div className="p-4 text-start bg-dark">
                    <h5 className="m-0 fw-bold">{selectedImage.title}</h5>
                    {selectedImage.issuedBy && (
                      <span className="text-white-50 small d-block mt-1">{selectedImage.issuedBy}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* COMPONENT STYLES */}
        <style>{`
          .cursor-pointer { cursor: pointer; }

          .gallery-card .gallery-img {
            transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .gallery-overlay {
            background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%);
            height: 50%;
            transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .zoom-button {
            width: 50px;
            height: 50px;
            opacity: 0;
            transform: scale(0.8);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .gallery-card:hover .zoom-button {
            opacity: 1;
            transform: scale(1);
          }

          .gallery-card:hover .gallery-img {
            transform: scale(1.08);
          }

          .animate-grid-item {
            animation: fadeInUp 0.4s ease-out forwards;
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>

      <Footer />
    </>
  );
};

export default AppreciationLetters;