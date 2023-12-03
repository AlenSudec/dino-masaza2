import { Hero } from "../shared";

export function AboutPage() {
    return (

        <>

            {/* <div className="site-blocks-cover overlay" style={{ backgroundImage: "url(images/hero_bg_1.jpg)" }} data-aos="fade" data-stellar-background-ratio="0.5">
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
            </div> */}

            <Hero start={"About our"} words={["nezzznam", "hehe"]} withNavigation />



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
        </>

    )
}