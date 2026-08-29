import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageNavigation from '../components/PageNavigation';

// Folder configuration matching your 5 directory names
const folderConfig = [
  { folder: "Field photos", count: 23, category: "Field photos" },
  { folder: "Training & capacity building", count: 10, category: "Training & capacity building" },
  { folder: "IEC materials", count: 2, category: "IEC materials" },
  { folder: "Events and Workshop Photos", count: 10, category: "Events and Workshop Photos" },
  { folder: "News Media", count: 6, category: "News Media" }
];

// Helper to generate the structured list of all images
const generateGalleryItems = () => {
  const items = [];
  let idCounter = 1;

  folderConfig.forEach(({ folder, count, category }) => {
    for (let i = 1; i <= count; i++) {
      const primaryPath = `/img/Chola Shared/${folder}/${folder} (${i}).JPG`;
      
      items.push({
        id: idCounter++,
        category: category,
        title: `${category} - Image ${i}`,
        folderName: folder,
        index: i,
        primaryImage: primaryPath,
      });
    }
  });

  return items;
};

const allGalleryItems = generateGalleryItems();

// Filter categories list (REMOVED 'all')
const filterCategories = [
  "Field photos",
  "Training & capacity building",
  "IEC materials",
  "Events and Workshop Photos",
  "News Media"
];

const Gallery = () => {
  // SET DEFAULT TO 'Field photos' ON LOAD
  const [activeFilter, setActiveFilter] = useState('Field photos');
  const [selectedImage, setSelectedImage] = useState(null);

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

  // Filter calculation
  const filteredItems = allGalleryItems.filter(item => item.category === activeFilter);

  return (
    <>
      <Header />
      <PageNavigation title="Photos" />

      <div className="container my-5 px-4">
        {/* HEADER BAR */}
        <div className="text-center mb-5">
          <p className="text-muted mx-auto max-w-1200">
            A visual chronicle of our community-led interventions, field operations, workshops, and project milestones across rural and tribal sectors.
          </p>
        </div>

        {/* DYNAMIC FILTER CATEGORY SWITCHER */}
        <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`btn px-3 py-2 rounded-pill fw-medium btn-filter ${
                activeFilter === cat ? 'btn-primary shadow-sm' : 'btn-light text-secondary border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* IMAGE GALLERY GRID */}
        <div className="row g-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 animate-grid-item">
              <div 
                className="gallery-card position-relative overflow-hidden bg-white border-0 shadow-sm cursor-pointer"
                style={{ borderRadius: "12px", height: "280px" }}
                onClick={() => setSelectedImage(item)}
              >
                {/* Event Main Background Image */}
                <img 
                  src={item.primaryImage} 
                  alt={item.title}
                  onError={(e) => handleImageError(e, item)}
                  className="w-100 h-100 object-fit-cover gallery-img" 
                  loading="lazy"
                />

                {/* Category Badge */}
                <span className="position-absolute top-0 start-0 m-3 badge bg-primary rounded-pill px-3 py-2 z-3 shadow-sm">
                  {item.category}
                </span>

                {/* OVERLAY WRAPPER */}
                <div className="gallery-overlay position-absolute bottom-0 start-0 end-0 p-3 d-flex flex-column justify-content-end text-start">
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX / FULLSCREEN MODAL */}
        {selectedImage && (
          <div 
            className="modal fade show d-block" 
            tabIndex="-1" 
            style={{ backgroundColor: "rgba(0, 0, 0, 0.85)", zIndex: 1050 }}
            onClick={() => setSelectedImage(null)}
          >
            <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content bg-transparent border-0 text-center position-relative">
                <button 
                  type="button" 
                  className="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3"
                  onClick={() => setSelectedImage(null)}
                ></button>
                <div className="modal-body p-0 position-relative">
                  <img 
                    src={selectedImage.primaryImage} 
                    alt={selectedImage.title}
                    onError={(e) => handleImageError(e, selectedImage)}
                    className="img-fluid rounded shadow-lg max-h-80vh object-fit-contain" 
                  />
                  <div className="text-white mt-3">
                    <h5 className="mb-1">{selectedImage.title}</h5>
                    <span className="badge bg-secondary">{selectedImage.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCOPED CSS STYLES */}
        <style>{`
          .max-w-600 { max-width: 600px; }
          .tracking-wider { letter-spacing: 1px; }
          .cursor-pointer { cursor: pointer; }
          .max-h-80vh { max-height: 80vh; }
          .btn-filter { transition: all 0.2s ease-in-out; }
          
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