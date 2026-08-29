import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageNavigation from '../components/PageNavigation';

const blogsData = [
  {
    id: 1,
    category: "articles",
    title: "Increasing earning for Better Future",
    date: "March 2026",
    image: "/img/blog/blog1.png",
    description: "Self-Help Groups (SHGs) are rapidly transforming from basic savings collectives into active drivers of grassroots governance, economic self-sufficiency, and rural leadership across tribal belts.",
    content: [
      "Setyeng Dainel, a 25-year-old mother of three from the quaint village of Argodi in Khunti, embodies resilience amidst dversity. Wed attender 16. ",
      "she bore the weight of a troubled marriage, her husband's penchant for alcohol fuelling domestic strife. Amidst her trials, shetoiled as a homemaker, supplementing meagre earnings by gathering dry wood for sustenance,and venturing her wares at local markets",
      " Despite her plight, she found solace in the camaraderie of village women, her spirit undaunted. Through a transformative five-day training in sabui grass foot matting, her dormant talents flourished",
      "Today, her nimble fingers weave prosperity, earning her Rs 150-200 daily, a beacon of hope illuminating her children's educational dreams. "
    ]
  },
  {
    id: 2,
    category: "stories",
    title: "Creating Brand Ambassadors of No Child Marriage",
    date: "February 2026",
    image: "/img/blog/blog2.jpg",
    description: "Discover how Sunita mobilized over 200 women in her panchayat to fight for clean drinking water infrastructure, proving that local voices can drive systemic government action.",
    content: [
      "Aditi, 15, found herself faced with the bleak possibility of being married off as a child in Khunti District, Jharkhand, a custom that was strongly ingrained in her society. Her parents' arrangement to marry an older man put her aspirations of continuing her education in jeopardy",
      "Aditi confided in her school teacher, who reached out to LOKSWAR, that supports the empowerment of women and children, as a desperate measure. LOK SWAR stepped in and had a conversation with Aditi's parents about the negative consequences of child marriage and the value of education, spearheaded by social worker Meera. To change attitudes, they also conducted community seminars and got the backing of the local authorities.",
      "Through their youth programs, LOK SWAR gave Aditi the empowerment to go from being a helpless victim to an engaged agent of change. Aditi's parents finally decided to call off the wedding and let her go back to school after several weeks of steadfast attempts. Her bravery inspired others, and the community started to reevaluate the custom of child marriage. ",
      "Aditi went back to school and started mentoring other girls. With the help of LOK SWAR, she excelled academically and wanted to work as a social worker, aiming to end child marriage and give others more authority. Aditi's story is a prime example of the transformative power of activism, education, and support in changing people's lives and communities. "
    ]
  },

];

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedBlog(null);
      }
    };
    if (selectedBlog) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedBlog]);

  return (
    <>
      <Header />
      <PageNavigation title="Blogs & Stories" />
      <div className="container my-5 px-4">
        
        {/* HEADER BAR */}


        {/* BLOG GRID */}
        <div className="row g-4">
          {blogsData.map((blog) => (
            <div key={blog.id} className="col-12 col-md-6 col-lg-4 animate-grid-item">
              <div className="blog-card bg-white border-0 h-100 d-flex flex-column overflow-hidden">
                
                {/* IMAGE SECTION */}
                <div className="blog-image-wrapper position-relative overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-100 h-100 blog-img"
                  />
                  <span className={`position-absolute top-0 start-0 m-3 badge rounded-pill px-3 py-2 text-capitalize z-2 ${
                    blog.category === 'articles' ? 'bg-primary text-white' : 
                    blog.category === 'stories' ? 'bg-warning text-dark' : 'bg-success text-white'
                  }`}>
                    {blog.category === 'articles' ? 'Article' : blog.category === 'stories' ? 'Ground Story' : 'Case Study'}
                  </span>
                </div>

                {/* CONTENT AREA */}
                <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center text-muted small mb-2">
                      <span>{blog.date}</span>
                    
                    </div>

                    <h5 className="fw-bold text-dark mb-3 line-clamp-2 blog-title">
                      {blog.title}
                    </h5>

                  
                  </div>

                  {/* ACTION TRIGGER */}
                  <div className="pt-3 border-top border-light mt-auto d-flex justify-content-between align-items-center">
                    <button 
                      onClick={() => setSelectedBlog(blog)} 
                      className="btn btn-link p-0 text-primary fw-bold small text-decoration-none read-more-link"
                    >
                      Read Full Story →
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CENTERED POPUP MODAL */}
        {selectedBlog && (
          <div 
            className="article-modal-backdrop d-flex justify-content-center align-items-center p-3 p-md-4"
            onClick={() => setSelectedBlog(null)}
          >
            <div 
              className="article-modal-card bg-white rounded-4 position-relative shadow-lg border-0 d-flex flex-column"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CROSS BUTTON OVER IMAGE */}
              <button 
                onClick={() => setSelectedBlog(null)} 
                aria-label="Close modal"
                className="article-modal-close border-0 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center position-absolute"
              >
                ✕
              </button>

              {/* FIXED HERO IMAGE AT TOP */}
              <div className="modal-hero-wrapper position-relative bg-light flex-shrink-0">
                <img 
                  src={selectedBlog.image} 
                  alt={selectedBlog.title} 
                  className="w-100 h-100" 
                />
              </div>

              {/* SCROLLABLE INNER CONTENT BODY */}
              <div className="article-modal-body flex-grow-1 custom-scroll">
                
                {/* TITLE AND META SECTION */}
                <div className="p-4 p-md-5 bg-white border-bottom">
                  <span className="badge bg-primary-subtle text-primary fw-bold text-uppercase px-3 py-2 rounded-pill mb-3 d-inline-block">
                    {selectedBlog.category === 'articles' ? 'Article' : selectedBlog.category === 'stories' ? 'Ground Story' : 'Case Study'}
                  </span>
                  
                  <h3 className="fw-bold text-dark mb-3 display-7 leading-tight">
                    {selectedBlog.title}
                  </h3>
                  
                  <div className="text-muted small d-flex align-items-center gap-2">
                    <span>{selectedBlog.date}</span>
                    <span>•</span>
                    
                  </div>
                </div>



                {/* FULL PARAGRAPH CONTENT */}
                <div className="px-4 px-md-5 pb-4 bg-white">
                  <div className="article-text text-primary lh-lg fs-6">
                    {selectedBlog.content.map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

              </div>

              {/* FIXED MODAL FOOTER */}
              <div className="p-3 bg-light border-top d-flex justify-content-between align-items-center px-4 flex-shrink-0">
                <span className="text-muted small">Share this insight with your network</span>
                <button 
                  onClick={() => setSelectedBlog(null)} 
                  className="btn btn-outline-secondary btn-sm rounded-pill px-4"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

        {/* SCOPED STYLES */}
        <style>{`
          .max-w-600 { max-width: 600px; }
          .tracking-wider { letter-spacing: 1px; }

          /* Card Container */
          .blog-card {
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
          }

          .blog-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 30px rgba(13, 110, 253, 0.12);
          }

          .blog-image-wrapper {
            height: 180px;
            width: 100%;
          }

          .blog-img {
            object-fit: cover;
            transition: transform 0.5s ease;
          }

          .blog-card:hover .blog-img {
            transform: scale(1.06);
          }

          /* Text Truncation */
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            min-height: 2.8em;
          }

          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .read-more-link {
            transition: transform 0.2s ease;
          }

          .blog-card:hover .read-more-link {
            transform: translateX(4px);
          }

          /* Grid Animation */
          .animate-grid-item {
            animation: fadeInUp 0.4s ease-out forwards;
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* MODAL STYLING */
          .article-modal-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(15, 23, 42, 0.65);
            backdrop-filter: blur(8px);
            z-index: 1050;
            animation: fadeIn 0.25s ease-out;
          }

          .article-modal-card {
            width: 100%;
            max-width: 720px;
            height: 85vh;
            overflow: hidden;
            animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .article-modal-close {
            top: 16px;
            right: 16px;
            width: 38px;
            height: 38px;
            z-index: 30;
            font-size: 16px;
            color: #333;
            transition: all 0.2s ease;
            cursor: pointer;
          }

          .article-modal-close:hover {
            background-color: #f1f5f9 !important;
            transform: rotate(90deg);
          }

          /* FIXED IMAGE CONTAINER */
          .modal-hero-wrapper {
            height: 220px;
            width: 100%;
          }

          .modal-hero-wrapper img {
            object-fit: cover;
          }

          /* SCROLLABLE BODY */
          .article-modal-body {
            overflow-y: auto !important;
            -webkit-overflow-scrolling: touch;
          }

          .bg-primary-subtle {
            background-color: #e0e7ff;
          }

          .description-box {
            background-color: #fffbeb;
            border-left: 4px solid #f59e0b;
          }

          .author-avatar {
            width: 44px;
            height: 44px;
            font-size: 18px;
          }

          /* CUSTOM EYE-APPEALING SCROLLBAR */
          .custom-scroll::-webkit-scrollbar {
            width: 8px;
          }

          .custom-scroll::-webkit-scrollbar-track {
            background: #f1f5f9;
          }

          .custom-scroll::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 10px;
            border: 2px solid #f1f5f9;
          }

          .custom-scroll::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
          }

          .custom-scroll {
            scrollbar-width: thin;
            scrollbar-color: #cbd5e1 #f1f5f9;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes scaleUp {
            from { opacity: 0; transform: scale(0.95) translateY(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>

      </div>
      <Footer />
    </>
  );
};

export default Blogs;