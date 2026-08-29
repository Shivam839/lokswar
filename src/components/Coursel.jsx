import React, { useEffect } from 'react';

const Coursel = ({ slidesData = [] }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (window.$ && window.$(".header-carousel").owlCarousel) {
                window.$(".header-carousel").owlCarousel({
                    items: 1,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 4500,
                    autoplayHoverPause: true,
                    smartSpeed: 1000,
                    dots: true,
                    nav: true,
                    navText: [
                        '<i class="bi bi-chevron-left"></i>',
                        '<i class="bi bi-chevron-right"></i>'
                    ]
                });
            }
        }, []);
        return () => clearTimeout(timer);
    }, []);

    const slides = slidesData.map((slide) => (
        <div className="container-fluid px-lg-5 ls-hero-slide" key={slide.id}>
            <div className="row align-items-center g-4 g-lg-5">
                <div className="col-lg-6">
                    <div className="ls-hero-text">
                        <h1 className="ls-headline">{slide.title}</h1>
                        <p className="ls-desc">{slide.description}</p>
                        <div className="d-flex flex-wrap mt-4 ls-cta-row">
                            <a className="ls-btn ls-btn-primary me-3" href="get-involved/become-a-donor">
                                Donate Now
                            </a>
                            <a className="ls-btn ls-btn-outline" href="/get-involved/become-a-volunteer">
                                Join Us Now
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 text-end">
                    <div className="ls-hero-img-wrap me-0">
                        <div className="ls-hero-img">
                            <img src={slide.image} alt={slide.title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="ls-hero-section">
            <div className="ls-hero-pattern" aria-hidden="true"></div>
            <div className="container-fluid p-0">
                <div className="owl-carousel header-carousel">
                    {slides}
                </div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap');

                .ls-hero-section {
                    margin:10px;
                    height:cal(100vh-148.04px);
                    padding:10px;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    background: linear-gradient(160deg, #FCECF2 0%, #F5D3E0 55%, #EDBFD1 100%);
                    box-sizing: border-box;
                }

                .ls-hero-pattern {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    opacity: 0.16;
                }

                .header-carousel { 
                    width: 100%;
                    padding: 5px 0;
                    background: linear-gradient(160deg, #FCECF2 0%, #F5D3E0 55%, #EDBFD1 100%); 
                }
                
                .ls-hero-slide { 
                    width: 100%; 
                }

                .ls-headline {
                    font-family: 'Fraunces', serif;
                    font-weight: 600;
                    font-size: clamp(2.3rem, 4.2vw, 3.6rem);
                    line-height: 1.08;
                    color: #0B1A4A;
                    margin-bottom: 1.25rem;
                    letter-spacing: -0.01em;
                }

                .ls-desc {
                    font-family: 'Inter', sans-serif;
                    font-size: clamp(1rem, 1.1vw, 1.15rem);
                    line-height: 1.7;
                    color: #4A4436;
                    margin-bottom: 0;
                }

                .ls-btn {
                    font-family: 'Inter', sans-serif;
                    font-weight: 600;
                    font-size: 0.98rem;
                    padding: 0.9rem 1.7rem;
                    border-radius: 0.7rem;
                    text-decoration: none;
                    transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
                    display: inline-block;
                }
                .ls-btn-primary {
                    background: #07083b;
                    color: #FFF8EE;
                    box-shadow: 0 8px 20px -6px rgba(217, 89, 31, 0.55);
                }
                .ls-btn-primary:hover {
                    background: #ff00ff;
                    color: #FFF8EE;
                    transform: translateY(-3px);
                    box-shadow: 0 12px 26px -6px rgba(217, 89, 31, 0.6);
                }
                .ls-btn-outline {
                    background: transparent;
                    color: #0B1A4A;
                    border: 1.5px solid #0B1A4A;
                }
                .ls-btn-outline:hover {
                    background: #0B1A4A;
                    color: #FCECF2;
                    transform: translateY(-3px);
                }

                /* Image layout & structure styling */
                .ls-hero-img-wrap {
                    position: relative;
                    width: 100%;
                    max-width: 520px;
                    margin-left: auto;
                    margin-right: 0;
                    aspect-ratio: 1 / 1;
                }

                .ls-hero-img {
                    position: absolute;
                    inset: 0;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 24px 48px -12px rgba(11, 26, 74, 0.25);
                    /* Border and white padding removed */
                    border: none;
                    padding: 0;
                }
                
                .ls-hero-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                @media (max-width: 991px) {
                    .ls-hero-section { min-height: auto; padding: 3rem 0; }
                    .ls-hero-text { text-align: center; }
                    .ls-cta-row { justify-content: center; }
                    .ls-desc { margin-left: auto; margin-right: auto; }
                    .ls-hero-img-wrap { max-width: 340px; margin: 2rem auto 0 auto; }
                }
            `}</style>
        </div>
    );
};

export default Coursel;