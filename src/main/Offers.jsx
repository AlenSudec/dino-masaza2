import React from "react";

export function Offers() {
    return (
        <div className="site-section bg-light">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12 text-center">
                        <h2 className="site-section-heading text-center font-secondary">Our Special Offers</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="d-block d-lg-flex">
                    <div className="half-wrap d-block d-md-flex">
                        <div className="half bg-white d-block d-md-flex arrow-right">
                            <div className="text">
                                <h2>Physical Therapy</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, unde!</p>
                                <p><a href="http://localhost:3000" className="btn btn-primary btn-sm btn-pill">Learn More</a></p>
                            </div>
                        </div>
                        <div className="half bg-img img" style={{ backgroundImage: "url('images/img_1.jpg')" }}></div>
                    </div>
                    <div className="half-wrap d-block d-md-flex">
                        <div className="half bg-white d-block d-md-flex arrow-right">
                            <div className="text">
                                <h2>Massage Therapy</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, unde!</p>
                                <p><a href="http://localhost:3000" className="btn btn-primary btn-sm btn-pill">Learn More</a></p>
                            </div>
                        </div>
                        <div className="half bg-img img" style={{ backgroundImage: "url('images/img_2.jpg')" }}></div>
                    </div>
                </div>

                <div className="d-block d-lg-flex">
                    <div className="half-wrap d-block d-md-flex">
                        <div className="half bg-white d-block d-md-flex arrow-left order-md-2">
                            <div className="text">
                                <h2>Chiropractic Therapy</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, unde!</p>
                                <p><a href="http://localhost:3000" className="btn btn-primary btn-sm btn-pill">Learn More</a></p>
                            </div>
                        </div>
                        <div className="half bg-img img" style={{ backgroundImage: "url('images/img_3.jpg')" }}></div>
                    </div>
                    <div className="half-wrap d-block d-md-flex">
                        <div className="half bg-white  d-block d-md-flex arrow-left order-md-2">
                            <div className="text">
                                <h2>Chiropractic Therapy</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, unde!</p>
                                <p><a href="http://localhost:3000" className="btn btn-primary btn-sm btn-pill">Learn More</a></p>
                            </div>
                        </div>
                        <div className="half bg-img img" style={{ backgroundImage: "url('images/img_4.jpg')" }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}