export function AboutPage() {
    return (

        <>

            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>

            <header className="site-navbar" role="banner">

                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-11 col-xl-4">
                            <h1 className="mb-0 site-logo"><a href="http://localhost" className="text-white mb-0">PhysicalTherapy<span className="text-primary">.</span> </a></h1>
                        </div>
                        <div className="col-12 col-md-8 d-none d-xl-block">
                            <nav className="site-navigation position-relative text-right" role="navigation">

                                <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                                    <li><a href="http://localhost"><span>Home</span></a></li>
                                    <li className="has-children">
                                        <a href="http://localhost"><span>Services</span></a>
                                        <ul className="dropdown arrow-top">
                                            <li><a href="http://localhost">Physical Therapy</a></li>
                                            <li><a href="http://localhost">Massage Therapy</a></li>
                                            <li><a href="http://localhost">Chiropractic Therapy</a></li>
                                            <li className="has-children">
                                                <a href="http://localhost">Dropdown</a>
                                                <ul className="dropdown">
                                                    <li><a href="http://localhost">Physical Therapy</a></li>
                                                    <li><a href="http://localhost">Massage Therapy</a></li>
                                                    <li><a href="http://localhost">Chiropractic Therapy</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="active"><a href="http://localhost"><span>About</span></a></li>
                                    <li><a href="http://localhost"><span>Blog</span></a></li>
                                    <li><a href="http://localhost"><span>Contact</span></a></li>
                                </ul>
                            </nav>
                        </div>


                        <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{ position: "relative", top: "3px" }}><a href="http://localhost" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></a></div>

                    </div>

                </div>

            </header>





            <div className="site-blocks-cover overlay" style={{ backgroundImage: "url(images/hero_bg_1.jpg)" }} data-aos="fade" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">

                        <div className="col-md-10">

                            <div className="row justify-content-center mb-4">
                                <div className="col-md-10 text-center">
                                    <h1 data-aos="fade-up" className="mb-5">About our  <span className="typed-words"></span></h1>

                                    <p data-aos="fade-up" data-aos-delay="100"><a href="http://localhost" className="btn btn-primary btn-pill">Get Started</a></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>





            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="images/hero_bg_2.jpg" alt="SomeImage" className="img-fluid rounded mb-3" />
                            <img src="images/hero_bg_1.jpg" alt="SomeImage" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-5 ml-auto">
                            <h2 className="text-primary mb-3">About Our History</h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptates a explicabo delectus sed labore dolor enim optio odio at!</p>
                            <p className="mb-4">Adipisci dolore reprehenderit est et assumenda veritatis, ex voluptate odio consequuntur quo ipsa accusamus dicta laborum exercitationem aspernatur reiciendis perspiciatis!</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptates a explicabo delectus sed labore dolor enim optio odio at!</p>
                            <p className="mb-4">Adipisci dolore reprehenderit est et assumenda veritatis, ex voluptate odio consequuntur quo ipsa accusamus dicta laborum exercitationem aspernatur reiciendis perspiciatis!</p>

                            <ul className="ul-check list-unstyled success">
                                <li>Adipisci dolore reprehenderit</li>
                                <li>Accusamus dicta laborum</li>
                                <li>Delectus sed labore</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            <div className="site-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-7 text-center">
                            <h2 className="text-primary mb-3">Our Staffs</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repudiandae quo, voluptatem possimus inventor.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-6 mb-4 mb-lg-5 text-center">
                            <img src="images/person_1.jpg" alt="SomeImage" className="img-fluid mb-3 w-50 rounded-circle" />
                            <h3 className="h4">Susan Horton</h3>
                            <p className="caption text-primary">Therapist</p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem tempore in consectetur quasi saepe, dicta, asperiores velit repellendus quo optio reiciendis? Accusantium dolorem cupiditate rem, sequi. Ad recusandae voluptatem pariatur?</p>
                        </div>
                        <div className="col-md-6 col-lg-6 mb-4 mb-lg-5 text-center">
                            <img src="images/person_2.jpg" alt="SomeImage" className="img-fluid mb-3 w-50 rounded-circle" />
                            <h3 className="h4">Jonathan Kennedy</h3>
                            <p className="caption text-primary">Therapist</p>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        </div>
                        <div className="col-md-6 col-lg-6 mb-4 mb-lg-5 text-center">
                            <img src="images/person_3.jpg" alt="SomeImage" className="img-fluid mb-3 w-50 rounded-circle" />
                            <h3 className="h4">Gordon Meyer</h3>
                            <p className="caption text-primary">Therapist</p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ea ad dolore illum dignissimos sed provident voluptatem velit exercitationem? Odit consectetur accusamus rerum voluptatibus eos temporibus perferendis harum nulla, ad.</p>
                        </div>
                        <div className="col-md-6 col-lg-6 mb-4 mb-lg-5 text-center">
                            <img src="images/person_4.jpg" alt="SomeImage" className="img-fluid mb-3 w-50 rounded-circle" />
                            <h3 className="h4">Doug Hale Kennedy</h3>
                            <p className="caption text-primary">Therapist</p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ducimus eum eveniet deserunt totam odit itaque necessitatibus numquam doloremque officiis repudiandae ipsum delectus atque magni obcaecati voluptate, ea qui incidunt!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 block-cta-1 primary-overlay" style={{ backgroundImage: "url('images/hero_bg_2.jpg')" }}>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-7 mb-4 mb-lg-0">
                            <h2 className="mb-3 mt-0 text-white">Upto 30% Discount for The First Commers</h2>
                            <p className="mb-0 text-white lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        <div className="col-lg-4">
                            <p className="mb-0"><a href="http://localhost" className="btn btn-outline-white text-white btn-md btn-pill px-5 font-weight-bold btn-block">Contact Us</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-6 mb-5 mb-lg-0 col-lg-3">
                                    <h2 className="footer-heading mb-4">Quick Links</h2>
                                    <ul className="list-unstyled">
                                        <li><a href="http://localhost">About Us</a></li>
                                        <li><a href="http://localhost">Services</a></li>
                                        <li><a href="http://localhost">Testimonials</a></li>
                                        <li><a href="http://localhost">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6 mb-5 mb-lg-0 col-lg-3">
                                    <h2 className="footer-heading mb-4">Products</h2>
                                    <ul className="list-unstyled">
                                        <li><a href="http://localhost">About Us</a></li>
                                        <li><a href="http://localhost">Services</a></li>
                                        <li><a href="http://localhost">Testimonials</a></li>
                                        <li><a href="http://localhost">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6 mb-5 mb-lg-0 col-lg-3">
                                    <h2 className="footer-heading mb-4">Features</h2>
                                    <ul className="list-unstyled">
                                        <li><a href="http://localhost">About Us</a></li>
                                        <li><a href="http://localhost">Services</a></li>
                                        <li><a href="http://localhost">Testimonials</a></li>
                                        <li><a href="http://localhost">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6 mb-5 mb-lg-0 col-lg-3">
                                    <h2 className="footer-heading mb-4">Follow Us</h2>
                                    <a href="http://localhost" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                                    <a href="http://localhost" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                                    <a href="http://localhost" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                                    <a href="http://localhost" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h2 className="footer-heading mb-4">Subscribe Newsletter</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <form action="#" method="post" className="subscription">
                                <div className="input-group mb-3  d-flex align-items-stretch">
                                    <input type="text" className="form-control bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2" />
                                    <button className="btn btn-primary text-white" type="button" id="button-addon2">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row pt-5 mt-5">
                        <div className="col-12 text-md-center text-left">
                            <p>
                                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            </>

    )
}