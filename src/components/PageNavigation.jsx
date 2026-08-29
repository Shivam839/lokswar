import React from 'react';
import { Link } from 'react-router-dom';

const PageNavigation = (props) => {
  return (
    <div className='px-2 my-2'>
      <div 
        className="container-fluid page-header wow fadeIn" 
        data-wow-delay="0.1s"
        style={{
          // Force background color and disable any background images/gradients set by template CSS
          background: '#ff69b4', 
          backgroundImage: 'none',
          minHeight: '100px',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          borderRadius:"10px"
        }}
      >
        <div className="container text-center">
          <h1 
            className="animated slideInDown" 
            style={{ 
              color: '#ffffff', 
              fontSize: '2.2rem',
              fontWeight: '700', 
              marginBottom: '8px',
              textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            {props.title}
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0" style={{ backgroundColor: 'transparent' }}>
              <li className="breadcrumb-item">
                <Link to="/" style={{ color: '#fff0f5', fontWeight: '600', textDecoration: 'none' }}>
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <a href="#" style={{ color: '#fff0f5', fontWeight: '600', textDecoration: 'none' }}>
                  Pages
                </a>
              </li>
              <li 
                className="breadcrumb-item active" 
                aria-current="page"
                style={{ color: '#ffffff', fontWeight: '700' }}
              >
                {props.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PageNavigation;