import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <MobileHeader />

      <DesktopHeader />
    </>
  )
}

function MobileHeader() {
  return (
    <div className="site-mobile-menu">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div>
  )
}

function DesktopHeader() {
  return (
    <header className="site-navbar" role="banner">

      <div className="container">
        <div className="row align-items-center">

          <div className="col-11 col-xl-4">
            <h1 className="mb-0 site-logo">
              {/* <a href="http://localhost:3000" className="text-white mb-0">
                  OSTEO<span className="text-primary">PRAKTIK</span> 
                  </a> */}
              <Link
                to="/"
                className="text-white mb-0"
              >
                OSTEO<span className="text-primary">PRAKTIK</span>
              </Link>
            </h1>
          </div>
          <div className="col-12 col-md-8 d-none d-xl-block">
            <nav className="site-navigation position-relative text-right" role="navigation">

              <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                <li className="active"><a href="http://localhost:3000"><span>Home</span></a></li>
                <li className="has-children">
                  {/* <a href="http://localhost:3000"><span>Services</span></a> */}
                  <Link
                    to="/services"
                  >
                    <span>Services</span>
                  </Link>
                  <ul className="dropdown arrow-top">
                    <li><a href="http://localhost:3000">Physical Therapy</a></li>
                    <li><a href="http://localhost:3000">Massage Therapy</a></li>
                    <li><a href="http://localhost:3000">Chiropractic Therapy</a></li>
                    <li className="has-children">
                      <a href="http://localhost:3000">Dropdown</a>
                      <ul className="dropdown">
                        <li><a href="http://localhost:3000">Physical Therapy</a></li>
                        <li><a href="http://localhost:3000">Massage Therapy</a></li>
                        <li><a href="http://localhost:3000">Chiropractic Therapy</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                {/* <li><a href="http://localhost:3000"><span>About</span></a></li> */}
                <li>
                  <Link
                    to={"/about"}
                  >
                    <span>About</span>
                  </Link>
                </li>
                {/* <li><a href="http://localhost:3000"><span>Blog</span></a></li> */}
                <li>
                  <Link
                    to={"/blog"}
                  >
                    <span>Blog</span>
                  </Link>
                </li>
                {/* <li><a href="http://localhost:3000"><span>Contact</span></a></li> */}
                <li>
                  <Link
                    to={"/contact"}
                  >
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>


          <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{ position: "relative", top: "3px" }}><a href="http://localhost:3000" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></a></div>

        </div>

      </div>

    </header>
  )
}