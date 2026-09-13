import React from 'react';
import { Link } from 'react-router-dom';

const PageNavigation = (props) => {
  return (
    <div className="px-2 px-md-3 my-2 my-md-3">
      <div 
        className="container-fluid page-header wow fadeIn" 
        data-wow-delay="0.1s"
        style={{
          background: '#ff69b4', 
          backgroundImage: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: "12px",
          boxShadow: '0 4px 15px rgba(255, 105, 180, 0.2)'
        }}
      >
        <div className="container text-center text-header-wrapper">
          <h1 className="animated slideInDown page-nav-title">
            {props.title}
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0 bg-transparent">
              <li className="breadcrumb-item">
                <Link to="/" className="breadcrumb-link">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <a href="#" className="breadcrumb-link">
                  Pages
                </a>
              </li>
              <li 
                className="breadcrumb-item active text-white fw-bold" 
                aria-current="page"
              >
                {props.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <style>{`
        /* Dynamic Header Card Height & Padding */
        .page-header {
          min-height: 120px;
          padding: 20px 15px;
        }

        /* Fluid Typography and Text Handling */
        .page-nav-title {
          color: #ffffff;
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 4px;
          text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
          line-height: 1.25;
          word-wrap: break-word;
        }

        .breadcrumb-link {
          color: #fff0f5;
          font-weight: 600;
          text-decoration: none;
          font-size: 0.85rem;
          transition: opacity 0.2s ease;
        }

        .breadcrumb-link:hover {
          opacity: 0.8;
          color: #ffffff;
        }

        .breadcrumb-item + .breadcrumb-item::before {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
        }

        .breadcrumb-item.active {
          font-size: 0.85rem;
        }

        /* Medium Devices (Tablets, 768px and up) */
        @media (min-width: 768px) {
          .page-header {
            min-height: 150px;
            padding: 30px 20px;
          }
          .page-nav-title {
            font-size: 1.85rem;
            margin-bottom: 6px;
          }
          .breadcrumb-link,
          .breadcrumb-item.active,
          .breadcrumb-item + .breadcrumb-item::before {
            font-size: 0.95rem;
          }
        }

        /* Large Devices (Desktops, 992px and up) */
        @media (min-width: 992px) {
          .page-header {
            min-height: 170px;
            padding: 35px 20px;
          }
          .page-nav-title {
            font-size: 2.2rem;
            margin-bottom: 8px;
          }
          .breadcrumb-link,
          .breadcrumb-item.active,
          .breadcrumb-item + .breadcrumb-item::before {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PageNavigation;