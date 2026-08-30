import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    // State for mobile hamburger toggle
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Track active dropdown key for desktop hover & mobile click
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isNestedOpen, setIsNestedOpen] = useState(false);

    // Toggle main navigation on mobile
    const toggleMobileNav = () => setIsNavOpen(prev => !prev);

    // Dropdown Handlers
    const handleMouseEnter = (key) => {
        if (window.innerWidth >= 992) setActiveDropdown(key);
    };

    const handleMouseLeave = () => {
        if (window.innerWidth >= 992) {
            setActiveDropdown(null);
            setIsNestedOpen(false);
        }
    };

    const handleDropdownClick = (key, e) => {
        e.preventDefault();
        setActiveDropdown(prev => (prev === key ? null : key));
    };

    return (
        <div>
            {/* Topbar Start */}
            <div className="container-fluid bg-secondary top-bar">
                <div className="row align-items-center h-100">
                    <div className="col-lg-4 text-center text-lg-start">
                        <Link to="/">
                            <div style={{ display: 'flex', gap: '10px', borderRadius: "50%" }}>
                                <img 
                                    src="/img/logos/lokswar_logo.png" 
                                    alt="Lokswar Logo" 
                                    height={110} 
                                    width={110} 
                                    style={{ position: 'absolute', left: '45px', top: '9px', zIndex: 1000 }} 
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-8 d-none d-lg-block">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="d-flex justify-content-end align-items-center">
                                    <div className="flex-shrink-0 btn-square bg-primary">
                                        <i className="fa fa-phone-alt text-dark"></i>
                                    </div>
                                    <div className="ms-2">
                                        <span className="text-white">
                                            <a href="tel:+919693457639" style={{ color: "#fff" }}>+91 9693457639</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="d-flex justify-content-end align-items-center">
                                    <div className="flex-shrink-0 btn-square bg-primary">
                                        <i className="fa fa-envelope-open text-dark"></i>
                                    </div>
                                    <div className="ms-2">
                                        <span className="text-white">
                                            <a href="mailto:lokswar@yahoo.co.in" style={{ color: "#fff" }}>lokswar@yahoo.co.in</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="d-flex justify-content-end align-items-center">
                                    <div className="flex-shrink-0 btn-square bg-primary">
                                        <i className="fa fa-map-marker-alt text-dark"></i>
                                    </div>
                                    <div className="ms-2">
                                        <span className="text-white">Ranchi, Jharkhand</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}

            {/* Navbar Start */}
            <div className="container-fluid bg-secondary px-0">
                <div className="nav-bar">
                    <nav className="navbar navbar-expand-lg bg-primary navbar-dark px-4 py-lg-2">
                        <h4 className="d-lg-none m-0 text-white">Menu</h4>
                        <button 
                            type="button" 
                            className="navbar-toggler me-0" 
                            onClick={toggleMobileNav}
                            aria-expanded={isNavOpen}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarCollapse">
                            <div className="navbar-nav me-auto">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
                                    onClick={() => setIsNavOpen(false)}
                                >
                                    Home
                                </NavLink>

                                {/* About Dropdown */}
                                <div 
                                    className={`nav-item dropdown ${activeDropdown === 'about' ? 'show' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('about')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <a 
                                        href="#about" 
                                        className="nav-link dropdown-toggle"
                                        onClick={(e) => handleDropdownClick('about', e)}
                                    >
                                        About
                                    </a>
                                    <div className={`dropdown-menu bg-primary px-3 ${activeDropdown === 'about' ? 'show' : ''}`} style={{ width: "200px" }}>
                                        <NavLink to="/about/background" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} style={{ margin: '0', padding: '5px' }} onClick={() => setIsNavOpen(false)}>Background</NavLink>
                                        <NavLink to="/about/ideology" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} style={{ margin: '0', padding: '5px' }} onClick={() => setIsNavOpen(false)}>Ideology</NavLink>
                                        <NavLink to="/about/approach" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} style={{ margin: '0', padding: '5px' }} onClick={() => setIsNavOpen(false)}>Approach</NavLink>
                                        <NavLink to="/about/boardmembers" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} style={{ margin: '0', padding: '5px' }} onClick={() => setIsNavOpen(false)}>Board Members & Leadership</NavLink>
                                        <NavLink to="/about/theme" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} style={{ margin: '0', padding: '3px' }} onClick={() => setIsNavOpen(false)}>Thematic Area</NavLink>
                                    </div>
                                </div>

                                {/* Partners Dropdown */}
                                <div 
                                    className={`nav-item dropdown ${activeDropdown === 'partners' ? 'show' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('partners')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <a 
                                        href="#partners" 
                                        className="nav-link dropdown-toggle"
                                        onClick={(e) => handleDropdownClick('partners', e)}
                                    >
                                        Partners
                                    </a>
                                    <div className={`dropdown-menu bg-primary px-3 ${activeDropdown === 'partners' ? 'show' : ''}`} style={{ width: "200px" }}>
                                        <NavLink to="/our-partners/funding-partner" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} style={{ margin: '0', padding: '5px' }} onClick={() => setIsNavOpen(false)}>Funding Partners</NavLink>
                                        <NavLink to="/our-partners/Collaboration-and-institutional-partner" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} style={{ margin: '0', padding: '5px' }} onClick={() => setIsNavOpen(false)}>Collaboration & Institutional Partner</NavLink>
                                    </div>
                                </div>

                                {/* Resources Dropdown with Nested Menu */}
                                <div 
                                    className={`nav-item dropdown ${activeDropdown === 'resources' ? 'show' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('resources')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <a 
                                        href="#resources" 
                                        className="nav-link dropdown-toggle"
                                        onClick={(e) => handleDropdownClick('resources', e)}
                                    >
                                        Resources
                                    </a>
                                    <div className={`dropdown-menu bg-primary px-3 ${activeDropdown === 'resources' ? 'show' : ''}`} style={{ width: "250px" }}>
                                        <NavLink to="/resources/photos" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} style={{ margin: '0', padding: '5px' }} onClick={() => setIsNavOpen(false)}>Photos</NavLink>
                                        <NavLink to="/resources/media" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} style={{ margin: '0', padding: '5px' }} onClick={() => setIsNavOpen(false)}>Media</NavLink>
                                        <NavLink to="/resources/blogs" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} style={{ margin: '0', padding: '5px' }} onClick={() => setIsNavOpen(false)}>Blogs</NavLink>
                                        <NavLink to="/appreciations-letter" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} style={{ margin: '0', padding: '5px' }} onClick={() => setIsNavOpen(false)}>Appreciation Letters</NavLink>
                                        
                                        {/* Nested Documents Menu */}
                                        <div 
                                            className="nested-dropdown"
                                            onMouseEnter={() => window.innerWidth >= 992 && setIsNestedOpen(true)}
                                            onMouseLeave={() => window.innerWidth >= 992 && setIsNestedOpen(false)}
                                        >
                                            <div 
                                                className="nav-item nav-link d-flex align-items-center justify-content-between" 
                                                style={{ margin: '0', padding: '5px', cursor: 'pointer' }}
                                                onClick={() => setIsNestedOpen(prev => !prev)}
                                            >
                                                <span>Documents</span>
                                                <i className={`fa fa-angle-${isNestedOpen ? 'down' : 'right'} ms-2`} style={{ fontSize: '12px' }}></i>
                                            </div>
                                            
                                            <div className={`nested-dropdown-menu bg-primary px-3 py-2 ${isNestedOpen ? 'd-block' : 'd-none'}`}>
                                                <NavLink to="/resources/documents/annual-reports" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} style={{ margin: '0', padding: '5px' }} onClick={() => setIsNavOpen(false)}>Annual Reports</NavLink>
                                                <NavLink to="/resources/documents/legal-documents" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} style={{ margin: '0', padding: '5px' }} onClick={() => setIsNavOpen(false)}>Legal Documents</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Get Involved Dropdown */}
                                <div 
                                    className={`nav-item dropdown ${activeDropdown === 'involved' ? 'show' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('involved')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <a 
                                        href="#involved" 
                                        className="nav-link dropdown-toggle"
                                        onClick={(e) => handleDropdownClick('involved', e)}
                                    >
                                        Get Involved
                                    </a>
                                    <div className={`dropdown-menu bg-primary px-3 ${activeDropdown === 'involved' ? 'show' : ''}`} style={{ width: "200px" }}>
                                        <NavLink to="/get-involved/become-a-donor" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} style={{ margin: '0', padding: '5px' }} onClick={() => setIsNavOpen(false)}>Become a Donor</NavLink>
                                        <NavLink to="/get-involved/get-full-time-opportunity" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} style={{ margin: '0', padding: '5px' }} onClick={() => setIsNavOpen(false)}>Full Time Opportunity</NavLink>
                                        <NavLink to="/get-involved/become-a-volunteer" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} style={{ margin: '0', padding: '5px' }} onClick={() => setIsNavOpen(false)}>Become a Volunteer</NavLink>
                                    </div>
                                </div>

                                <NavLink
                                    to="/contact-us"
                                    className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
                                    onClick={() => setIsNavOpen(false)}
                                >
                                    Contact Us
                                </NavLink>
                            </div>

                            {/* Social Icons */}
                            <div className="d-flex ms-auto my-2 my-lg-0">
                                <a className="btn btn-square btn-dark ms-2" href="https://www.instagram.com/lokswarjharkhand/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="btn btn-square btn-dark ms-2" href="https://www.facebook.com/people/Lok-Swar/pfbid0asX13DdqmkSKe8kz4StyZ4CvfqAUaJK38es1X2atGT3QQ9xNinfRN4ghe7kJLfwEl/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="btn btn-square btn-dark ms-2" href="https://www.linkedin.com/in/lok-swar-5bb131406" target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a className="btn btn-square btn-dark ms-2" href="https://www.youtube.com/@Lokswarjh" target="_blank" rel="noreferrer">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Navbar End */}
        </div>
    );
};

export default Header;