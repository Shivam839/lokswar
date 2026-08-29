    import React, { useEffect } from "react";

    const Testimonial = () => {
    useEffect(() => {
        const initCarousel = () => {
        if (window.$ && window.$.fn.owlCarousel) {
            const $carousel = window.$(".testimonial-carousel");

            // Prevent duplicate initialization
            if ($carousel.hasClass("owl-loaded")) {
            $carousel.trigger("destroy.owl.carousel");
            $carousel.removeClass("owl-loaded");
            $carousel.find(".owl-stage-outer").children().unwrap();
            }

            $carousel.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    margin: 30,
    dots: true,
    nav: true,
    navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>',
    ],
    });
        }
        };

        const timer = setTimeout(initCarousel, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container-fluid py-5">
        <div className="container">
            <div className="row g-5">
            {/* Left Side */}
            <div
                className="col-lg-4 col-xl-3 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="testimonial-title">
                <h1 className="display-6 mb-4">
                    Our Impact, In their words
                </h1>
                <p className="fs-5 mb-0">
                    We work to bring smiles, hope, and a brighter future to those
                    in need.
                </p>
                </div>
            </div>

            {/* Right Side */}
            <div
                className="col-lg-8 col-xl-9 wow fadeIn"
                data-wow-delay="0.3s"
            >
                <div className="owl-carousel testimonial-carousel">
                {/* Testimonial 1 */}
                <div className="testimonial-item">
                    <div className="row align-items-center g-4">
                    <div className="col-md-6">
                        <img
                        src="/img/testimonials/p1.jpg"
                        className="img-fluid rounded"
                        alt="testimonial"
                        />
                    </div>

                    <div className="col-md-6">
                        <div className="testimonial-text">
                        <div className="mb-3">
                            <i className="fa fa-star text-primary"></i>
                            <i className="fa fa-star text-primary"></i>
                            <i className="fa fa-star text-primary"></i>
                            <i className="fa fa-star text-primary"></i>
                            <i className="fa fa-star text-primary"></i>
                        </div>

                        <p className="fs-5">
                            I was taught to stay silent and accept what life decided for me. Lok Swar helped me find my voice and today, I make decisions for my own future.”
                        </p>

                        <div className="d-flex align-items-center mt-4">
                            <div className="btn-lg-square bg-light text-secondary flex-shrink-0">
                            <i className="fa fa-quote-right fa-2x"></i>
                            </div>

                            <div className="ps-3">
                            <h5 className="mb-1">Phaguni Devi</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="testimonial-item">
                    <div className="row align-items-center g-4">
                    <div className="col-md-6">
                        <img
                        src="/img/testimonials/p2.jpg"
                        className="img-fluid rounded"
                        alt="testimonial"
                        />
                    </div>

                    <div className="col-md-6">
                        <div className="testimonial-text">
                        <div className="mb-3">
                            <i className="fa fa-star text-primary"></i>
                            <i className="fa fa-star text-primary"></i>
                            <i className="fa fa-star text-primary"></i>
                            <i className="fa fa-star text-primary"></i>
                            <i className="fa fa-star text-primary"></i>
                        </div>

                        <p className="fs-5">
                           I once believed that a woman’s dreams must come after her family. Today, I have the courage to pursue my own dreams and inspire other girls to do the same.
                        </p>

                        <div className="d-flex align-items-center mt-4">
                            <div className="btn-lg-square bg-light text-secondary flex-shrink-0">
                            <i className="fa fa-quote-right fa-2x"></i>
                            </div>

                            <div className="ps-3">
                            <h5 className="mb-1">Priyanka Devi</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="testimonial-item">
                    <div className="row align-items-center g-4">
                    <div className="col-md-6">
                        <img
                        src="/img/testimonials/p3.jpg"
                        className="img-fluid rounded"
                        alt="testimonial"
                        />
                    </div>

                    <div className="col-md-6">
                        <div className="testimonial-text">
                        <div className="mb-3">
                            <i className="fa fa-star text-primary"></i>
                            <i className="fa fa-star text-primary"></i>
                            <i className="fa fa-star text-primary"></i>
                            <i className="fa fa-star text-primary"></i>
                            <i className="fa fa-star text-primary"></i>
                        </div>

                        <p className="fs-5">
                            Breaking old traditions was not easy, but I chose to take the first step. Lok Swar gave me the confidence to believe that my life can be shaped by my choices, not by social norms.
                        </p>

                        <div className="d-flex align-items-center mt-4">
                            <div className="btn-lg-square bg-light text-secondary flex-shrink-0">
                            <i className="fa fa-quote-right fa-2x"></i>
                            </div>

                            <div className="ps-3">
                            <h5 className="mb-1">Baby Devi (Khunti)</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End */}
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default Testimonial;