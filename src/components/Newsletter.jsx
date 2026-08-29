import React from 'react'

const Newsletter = () => {
  return (
    //   <!-- Newsletter Start -->
    <div className="container-fluid bg-primary py-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 text-center wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="display-6 mb-4">Subscribe the Newsletter</h1>
                    <div className="position-relative w-100 mb-2">
                        <input className="form-control border-0 w-100 ps-4 pe-5" type="text"
                            placeholder="Enter Your Email" style={{"height": "60px"}}/>
                        <button type="button" className="btn btn-lg-square shadow-none position-absolute top-0 end-0 mt-2 me-2"><i
                                className="fa fa-paper-plane text-primary fs-4"></i></button>
                    </div>
                    <p className="mb-0">Don't worry, we won't spam you with emails.</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Newsletter
