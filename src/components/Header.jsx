import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid bg-secondary top-bar" >
                <div className="row align-items-center h-100">
                    <div className="col-lg-4 text-center text-lg-start">
                        <Link to="/">
                            <div style={{ display: 'flex', gap: '10px',borderRadius: "50%",  }}>
                                <img src="/img/logos/lokswar_logo.png" alt="" height={130} width={130} style={{ position: 'absolute', left: '20px', top: '15px' }} />
                                {/* <h1 className="display-5 text-primary m-0">Lokswar</h1> */}
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
                                        <span className="text-white"><a href="tel:+919693457639" style={{color:"#fff"}}>+91 9693457639</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="d-flex justify-content-end align-items-center">
                                    <div className="flex-shrink-0 btn-square bg-primary">
                                        <i className="fa fa-envelope-open text-dark"></i>
                                    </div>
                                    <div className="ms-2">
                                        <span className="text-white"><a href="mailto:lokswar@yahoo.co.in" style={{color:"#fff"}}>lokswar@yahoo.co.in</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="d-flex justify-content-end align-items-center">
                                    <div className="flex-shrink-0 btn-square bg-primary">
                                        <i className="fa fa-map-marker-alt text-dark"></i>
                                    </div>
                                    <div className="ms-2">
                                        <span className="text-white">Ranchi, Jharkand</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}

            {/* <!-- Navbar Start --> */}
            <div className="container-fluid bg-secondary px-0">
                <div className="nav-bar">
                    <nav className="navbar navbar-expand-lg bg-primary navbar-dark px-4 py-lg-0">
                        <h4 className="d-lg-none m-0">Menu</h4>
                        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav me-auto">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `nav-item nav-link ${isActive ? "active" : ""}`
                                    }
                                >
                                    Home
                                </NavLink>

                                <div className="nav-item dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">About</Link>
                                    <div className="dropdown-menu bg-primary px-3" style={{ width: "200px" }}>
                                        <NavLink
                                            to="/about/background"
                                            className={({ isActive }) =>
                                                `nav-item nav-link ${isActive ? "active" : ""}`
                                            }
                                            style={{ margin: '0', padding: '5px' }}
                                        >
                                            Background
                                        </NavLink>
                                        <NavLink
                                            to="/about/ideology"
                                            className={({ isActive }) =>
                                                `nav-item nav-link ${isActive ? "active" : ""}`
                                            }
                                            style={{ margin: '0', padding: '5px' }}
                                        >
                                            Ideology
                                        </NavLink>
                                        <NavLink
                                            to="/about/approach"
                                            className={({ isActive }) =>
                                                `nav-item nav-link ${isActive ? "active" : ""}`
                                            }
                                            style={{ margin: '0', padding: '5px' }}
                                        >
                                            Approach
                                        </NavLink>
                                        <NavLink
                                            to="/about/boardmembers"
                                            className={({ isActive }) =>
                                                `nav-item nav-link ${isActive ? "active" : ""}`
                                            }
                                            style={{ margin: '0', padding: '5px' }}
                                        >
                                            Board Members & Leadership
                                        </NavLink>
                                        {/* <NavLink
                                            to="/about/our-approach"
                                            className={({ isActive }) =>
                                                `nav-item nav-link ${isActive ? "active" : ""}`
                                            }
                                            style={{ margin: '0', padding: '3px' }}
                                        >
                                            Our Approach
                                        </NavLink> */}
                                        <NavLink
                                            to="/about/theme"
                                            className={({ isActive }) =>
                                                `nav-item nav-link ${isActive ? "active" : ""}`
                                            }
                                            style={{ margin: '0', padding: '3px' }}
                                        >
                                            Thematic Area
                                        </NavLink>
                                    </div>
                                </div>

                                <div className="nav-item dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Partners</Link>
                                    <div className="dropdown-menu bg-primary px-3" style={{ width: "200px" }}>
                                        <NavLink
                                            to="/our-partners/funding-partner"
                                            className={({ isActive }) =>
                                                `nav-item nav-link ${isActive ? "active" : ""}`
                                            }
                                            style={{ margin: '0', padding: '5px' }}
                                        >
                                            Funding Partners
                                        </NavLink>
                                        <NavLink
                                            to="/our-partners/Collaboration-and-institutional-partner"
                                            className={({ isActive }) =>
                                                `nav-item nav-link ${isActive ? "active" : ""}`
                                            }
                                            style={{ margin: '0', padding: '5px' }}
                                        >
                                            Collaboration & Institutional Partner
                                        </NavLink>
                                    </div>
                                </div>

                                <div className="nav-item dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Resources</Link>
                                    <div className="dropdown-menu bg-primary px-3" style={{ width: "250px" }}>
                                        <NavLink
                                            to="/resources/photos"
                                            className={({ isActive }) =>
                                                `nav-item nav-link ${isActive ? "active" : ""}`
                                            }
                                            style={{ margin: '0', padding: '5px' }}
                                        >
                                            Photos
                                        </NavLink>
                                        <NavLink
                                            to="/resources/media"
                                            className={({ isActive }) =>
                                                `nav-item nav-link ${isActive ? "active" : ""}`
                                            }
                                            style={{ margin: '0', padding: '5px' }}
                                        >
                                            Media
                                        </NavLink>
                                        <NavLink
                                            to="/resources/blogs"
                                            className={({ isActive }) =>
                                                `nav-item nav-link ${isActive ? "active" : ""}`
                                            }
                                            style={{ margin: '0', padding: '5px' }}
                                        >
                                            Blogs
                                        </NavLink>
                                         <NavLink
                                    to="/appreciations-letter"
                                    className={({ isActive }) =>
                                        `nav-item nav-link ${isActive ? "active" : ""}`
                                    }
                                    style={{ margin: '0', padding: '5px' }}
                                >
                                    Appreciation Letters
                                </NavLink>
                                        
                                        {/* Nested Sub-menu Wrapper */}
                                        <div className="nested-dropdown">
                                            <div 
                                                className="nav-item nav-link d-flex align-items-center justify-content-between" 
                                                style={{ margin: '0', padding: '5px', cursor: 'pointer' }}
                                            >
                                                <span>Documents</span>
                                                <i className="fa fa-angle-right ms-2" style={{ fontSize: '12px' }}></i>
                                            </div>
                                            
                                            {/* Flyout Sub-menu */}
                                            <div className="nested-dropdown-menu bg-primary px-3 py-2">
                                                <NavLink
                                                    to="/resources/documents/annual-reports"
                                                    className={({ isActive }) =>
                                                        `nav-item nav-link ${isActive ? "active" : ""}`
                                                    }
                                                    style={{ margin: '0', padding: '5px' }}
                                                >
                                                    Annual Reports
                                                </NavLink>
                                                <NavLink
                                                    to="/resources/documents/legal-documents"
                                                    className={({ isActive }) =>
                                                        `nav-item nav-link ${isActive ? "active" : ""}`
                                                    }
                                                    style={{ margin: '0', padding: '5px' }}
                                                >
                                                    Legal Documents
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               

                                <div className="nav-item dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Get Involved</Link>
                                    <div className="dropdown-menu bg-primary px-3" style={{ width: "200px" }}>
                                        <NavLink
                                            to="/get-involved/become-a-donor"
                                            className={({ isActive }) =>
                                                `nav-item nav-link ${isActive ? "active" : ""}`
                                            }
                                            style={{ margin: '0', padding: '5px' }}
                                        >
                                            Become a Donor
                                        </NavLink>
                                        <NavLink
                                            to="/get-involved/get-full-time-opportunity"
                                            className={({ isActive }) =>
                                                `nav-item nav-link ${isActive ? "active" : ""}`
                                            }
                                            style={{ margin: '0', padding: '5px' }}
                                        >
                                            Full Time Opportunity
                                        </NavLink>
                                        <NavLink
                                            to="/get-involved/become-a-volunteer"
                                            className={({ isActive }) =>
                                                `nav-item nav-link ${isActive ? "active" : ""}`
                                            }
                                            style={{ margin: '0', padding: '5px' }}
                                        >
                                            Become a Volunteer
                                        </NavLink>
                                    </div>
                                </div>

                                <NavLink
                                    to="/contact-us"
                                    className={({ isActive }) =>
                                        `nav-item nav-link ${isActive ? "active" : ""}`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </div>
                            <div className="d-none d-lg-flex ms-auto">
                                <a className="btn btn-square btn-dark ms-2" href="https://www.instagram.com/lokswarjharkhand/" target='_blank' rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-square btn-dark ms-2" href="https://www.facebook.com/people/Lok-Swar/pfbid0asX13DdqmkSKe8kz4StyZ4CvfqAUaJK38es1X2atGT3QQ9xNinfRN4ghe7kJLfwEl/" target='_blank' rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-dark ms-2" href="https://www.linkedin.com/in/lok-swar-5bb131406" target='_blank' rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                                <a className="btn btn-square btn-dark ms-2" href="https://www.youtube.com/@Lokswarjh" target='_blank'><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}
        </div>
    );
};

export default Header;