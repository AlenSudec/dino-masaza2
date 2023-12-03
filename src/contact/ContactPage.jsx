import { Hero } from "../shared";

export function ContactPage(){
    return (
  <>

    {/* <div className="site-blocks-cover overlay" style={{backgroundImage: "url(images/hero_bg_1.jpg)"}} data-aos="fade" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">

          <div className="col-md-10">
            
            <div className="row justify-content-center mb-4">
              <div className="col-md-10 text-center">
                <h1 data-aos="fade-up" className="mb-5">Get  <span className="typed-words"></span></h1>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>   */}

    <Hero start={"Get"} words={["opet something","i opet"]} />

    <div className="site-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-7 mb-5"  data-aos="fade">

            

            <form action="#" className="p-5 bg-white" style={{marginTop: "-150px"}}>
             

              <div className="row form-group">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="text-black" for="fname">First Name</label>
                  <input type="text" id="fname" className="form-control"/>
                </div>
                <div className="col-md-6">
                  <label className="text-black" for="lname">Last Name</label>
                  <input type="text" id="lname" className="form-control"/>
                </div>
              </div>

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="text-black" for="email">Email</label> 
                  <input type="email" id="email" className="form-control"/>
                </div>
              </div>

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="text-black" for="subject">Subject</label> 
                  <input type="subject" id="subject" className="form-control"/> 
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="text-black" for="message">Message</label> 
                  <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..."></textarea>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <input type="submit" value="Send Message" className="btn btn-pill btn-primary btn-md text-white" />
                </div>
              </div>

  
            </form>
          </div>
          <div className="col-md-5"  data-aos="fade" data-aos-delay="100">
            
            <div className="p-4 mb-3 bg-white">
              <p className="mb-0 font-weight-bold">Address</p>
              <p className="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>

              <p className="mb-0 font-weight-bold">Phone</p>
              <p className="mb-4"><a href="http://localhost/">+1 232 3235 324</a></p>

              <p className="mb-0 font-weight-bold">Email Address</p>
              <p className="mb-0"><a href="http://localhost/">youremail@domain.com</a></p>

            </div>
            
            <div className="p-4 mb-3 bg-white">
              <h3 className="h5 text-black mb-3">More Info</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur? Fugiat quaerat eos qui, libero neque sed nulla.</p>
              <p><a href="http://localhost/" className="btn btn-primary px-4 py-2 text-white btn-pill btn-sm">Learn More</a></p>
            </div>

          </div>
        </div>
      </div>
    </div>
    

    <div className="mt-5 block-cta-1 primary-overlay" style={{backgroundImage: "url('images/hero_bg_2.jpg')"}}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h2 className="mb-3 mt-0 text-white">Upto 30% Discount for The First Commers</h2>
            <p className="mb-0 text-white lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
          <div className="col-lg-4">
            <p className="mb-0"><a href="http://localhost/" className="btn btn-outline-white text-white btn-md btn-pill px-5 font-weight-bold btn-block">Contact Us</a></p>
          </div>
        </div>
      </div>
    </div>
    
    </>
    )
}