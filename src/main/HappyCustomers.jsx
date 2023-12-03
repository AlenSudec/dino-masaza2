import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import { sliderSettings } from "../data";


export function HappyCustomers() {
    return (
        <div className="site-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12 text-center">
                        <h2 className="site-section-heading text-center font-secondary">Happy Customers</h2>
                    </div>
                </div>
                <div className="row">

                    <div className="col-12">

                        <ReactOwlCarousel className="owl-carousel-2 owl-carousel"
                            {...sliderSettings}
                        >

                            <div className="d-block block-testimony mx-auto text-center">
                                <div className="person w-25 mx-auto mb-4">
                                    <img src="images/person_1.jpg" alt="SomeImage" className="img-fluid rounded-circle w-50 mx-auto" />
                                </div>
                                <div>
                                    <h2 className="h5 mb-4">Katie Johnson</h2>
                                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                                </div>
                            </div>

                            <div className="d-block block-testimony mx-auto text-center">
                                <div className="person w-25 mx-auto mb-4">
                                    <img src="images/person_2.jpg" alt="SomeImage" className="img-fluid rounded-circle w-50 mx-auto" />
                                </div>
                                <div>
                                    <h2 className="h5 mb-4">Jun Mars</h2>
                                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                                </div>
                            </div>

                            <div className="d-block block-testimony mx-auto text-center">
                                <div className="person w-25 mx-auto mb-4">
                                    <img src="images/person_3.jpg" alt="SomeImage" className="img-fluid rounded-circle w-50 mx-auto" />
                                </div>
                                <div>
                                    <h2 className="h5 mb-4">Katie Johnson</h2>
                                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                                </div>
                            </div>

                            <div className="d-block block-testimony mx-auto text-center">
                                <div className="person w-25 mx-auto mb-4">
                                    <img src="images/person_4.jpg" alt="SomeImage" className="img-fluid rounded-circle w-50 mx-auto" />
                                </div>
                                <div>
                                    <h2 className="h5 mb-4">Jun Mars</h2>
                                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                                </div>
                            </div>


                        </ReactOwlCarousel>
                    </div>


                </div>
            </div>
        </div>
    )
}

/*
    <div className="owl-carousel-2 owl-carousel">

                            <div className="d-block block-testimony mx-auto text-center">
                                <div className="person w-25 mx-auto mb-4">
                                    <img src="images/person_1.jpg" alt="SomeImage" className="img-fluid rounded-circle w-50 mx-auto" />
                                </div>
                                <div>
                                    <h2 className="h5 mb-4">Katie Johnson</h2>
                                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                                </div>
                            </div>

                            <div className="d-block block-testimony mx-auto text-center">
                                <div className="person w-25 mx-auto mb-4">
                                    <img src="images/person_2.jpg" alt="SomeImage" className="img-fluid rounded-circle w-50 mx-auto" />
                                </div>
                                <div>
                                    <h2 className="h5 mb-4">Jun Mars</h2>
                                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                                </div>
                            </div>

                            <div className="d-block block-testimony mx-auto text-center">
                                <div className="person w-25 mx-auto mb-4">
                                    <img src="images/person_3.jpg" alt="SomeImage" className="img-fluid rounded-circle w-50 mx-auto" />
                                </div>
                                <div>
                                    <h2 className="h5 mb-4">Katie Johnson</h2>
                                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                                </div>
                            </div>

                            <div className="d-block block-testimony mx-auto text-center">
                                <div className="person w-25 mx-auto mb-4">
                                    <img src="images/person_4.jpg" alt="SomeImage" className="img-fluid rounded-circle w-50 mx-auto" />
                                </div>
                                <div>
                                    <h2 className="h5 mb-4">Jun Mars</h2>
                                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                                </div>
                            </div>


                        </div>
*/