import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageNavigation from '../components/PageNavigation';

const Blogs = () => {
  // 1. Filter state
  const [activeFilter, setActiveFilter] = useState('all');

  // 2. Data array for Blog posts
  const blogItems = [
    {
      id: 1,
      category: "articles",
      title: "Empowering Rural Women Through SHGs",
      date: "March 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
      description: "How self-help groups are building financial independence in tribal governance models."
    },
    {
      id: 2,
      category: "stories",
      title: "Voices from the Ground: Sunita's Journey",
      date: "February 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
      description: "From a local volunteer to heading a regional micro-enterprise initiative."
    },
    {
      id: 3,
      category: "casestudies",
      title: "Sustainable Agroecology Impact Report",
      date: "January 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80",
      description: "A comprehensive look at climate-smart farming adoption across 50 villages."
    },
    {
      id: 4,
      category: "articles",
      title: "Bridging the Digital Divide in Tribal Schools",
      date: "May 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
      description: "Implementing digital literacy programs for first-generation school goers."
    },
    {
      id: 5,
      category: "stories",
      title: "Safe Migration Pathways for Youth",
      date: "April 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1469571486040-0b9b172a535c?auto=format&fit=crop&w=600&q=80",
      description: "Establishing resource centers to protect community rights during seasonal migration."
    },
    {
      id: 6,
      category: "casestudies",
      title: "Community Land Rights Rightsizing",
      date: "December 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
      description: "Analyzing legal framework advocacy for indigenous forest dwellers."
    }
  ];

  // 3. Filter calculation
  const filteredItems = activeFilter === 'all' 
    ? blogItems 
    : blogItems.filter(item => item.category === activeFilter);

  return (
    <>
      <Header />
      <PageNavigation title="Blogs & Articles" />
      <div className="container my-5 px-4">
        
        {/* HEADER BAR */}
        <div className="text-center mb-5">
          <span className="text-primary text-uppercase fw-bold small tracking-wider d-block mb-2">Insights & Stories</span>
          <h2 className="fw-bold text-dark display-6 mb-3" style={{ letterSpacing: "-1px" }}>
            Blogs & Thought Leadership
          </h2>
          <p className="text-secondary mx-auto max-w-600">
            Read field insights, impact stories, policy discussions, and case studies written by our grassroots teams and development professionals.
          </p>
        </div>

        {/* FILTER CATEGORY SWITCHER */}
        <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`btn px-4 py-2 rounded-pill fw-medium btn-filter ${activeFilter === 'all' ? 'btn-primary shadow-sm' : 'btn-light text-secondary'}`}
          >
            All Posts
          </button>
          <button 
            onClick={() => setActiveFilter('articles')}
            className={`btn px-4 py-2 rounded-pill fw-medium btn-filter ${activeFilter === 'articles' ? 'btn-primary shadow-sm' : 'btn-light text-secondary'}`}
          >
            📝 Articles
          </button>
          <button 
            onClick={() => setActiveFilter('stories')}
            className={`btn px-4 py-2 rounded-pill fw-medium btn-filter ${activeFilter === 'stories' ? 'btn-primary shadow-sm' : 'btn-light text-secondary'}`}
          >
            ✨ Ground Stories
          </button>
          <button 
            onClick={() => setActiveFilter('casestudies')}
            className={`btn px-4 py-2 rounded-pill fw-medium btn-filter ${activeFilter === 'casestudies' ? 'btn-primary shadow-sm' : 'btn-light text-secondary'}`}
          >
            📊 Case Studies
          </button>
        </div>

        {/* BLOG GRID */}
        <div className="row g-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4 animate-grid-item">
              <div 
                className="gallery-card position-relative overflow-hidden bg-white border-0"
                style={{
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                  height: "360px"
                }}
              >
                {/* Background Image */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-100 h-100 object-fit-cover gallery-img" 
                />

                {/* Badge top left */}
                <span className={`position-absolute top-0 start-0 m-3 badge rounded-pill px-3 py-2 text-capitalize z-3 ${
                  item.category === 'articles' ? 'bg-info text-dark fw-bold' : 
                  item.category === 'stories' ? 'bg-warning text-dark fw-bold' : 'bg-success text-white fw-bold'
                }`}>
                  {item.category === 'articles' ? 'Article' : item.category === 'stories' ? 'Story' : 'Case Study'}
                </span>

                {/* OVERLAY WRAPPER */}
                <div className="gallery-overlay position-absolute bottom-0 start-0 end-0 p-4 d-flex flex-column justify-content-end text-start">
                  <div className="d-flex justify-content-between align-items-center text-white-50 small mb-1 fw-medium">
                    <span>{item.date}</span>
                    <span>• {item.readTime}</span>
                  </div>
                  <h4 className="text-white fw-bold mb-2 m-0" style={{ fontSize: "1.25rem" }}>{item.title}</h4>
                  <p className="text-white-50 small m-0 description-text text-truncate-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* STYLES */}
        <style>{`
          .max-w-600 { max-width: 600px; }
          .tracking-wider { letter-spacing: 1px; }
          .btn-filter { transition: all 0.2s ease-in-out; }
          
          .gallery-card .gallery-img {
            transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          }
          
          .gallery-overlay {
            background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%);
            height: 60%;
            transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
            transform: translateY(20px);
            opacity: 0.9;
          }

          .gallery-card:hover .gallery-img {
            transform: scale(1.08);
          }
          
          .gallery-card:hover .gallery-overlay {
            transform: translateY(0);
            opacity: 1;
            height: 75%;
            background: linear-gradient(to top, rgba(13, 110, 253, 0.95) 0%, rgba(0,0,0,0.6) 100%);
          }

          .text-truncate-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;  
            overflow: hidden;
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

export default Blogs;