import React from "react";

export function QuickInfo(){
    return (
        <div className="block-quick-info-2">
        <div className="container">
          <div className="block-quick-info-2-inner">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-3 mb-3 mb-lg-0">
                <div className="d-flex quick-info-2">
                  <span className="icon icon-home mr-3"></span>
                  <div className="text">
                    <strong className="d-block heading">Visit our Location</strong>
                    <span className="excerpt">2875  Beechwood Drive</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 mb-3 mb-lg-0">
                <div className="d-flex quick-info-2">
                  <span className="icon icon-phone mr-3"></span>
                  <div className="text">
                    <strong className="d-block heading">Call us today</strong>
                    <span className="excerpt"><a href="http://localhost:3000">+(123) 456 7890</a></span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 mb-3 mb-lg-0">
                <div className="d-flex quick-info-2">
                  <span className="icon icon-envelope mr-3"></span>
                  <div className="text">
                    <strong className="d-block heading">Send us a message</strong>
                    <span className="excerpt"><a href="http://localhost:3000">info@mysite.com</a></span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 mb-3 mb-lg-0">
                <div className="d-flex quick-info-2">
                  <span className="icon icon-clock-o mr-3"></span>
                  <div className="text">
                    <strong className="d-block heading">Opening hours</strong>
                    <span className="excerpt">Mon-Fri 7:AM - 5PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}