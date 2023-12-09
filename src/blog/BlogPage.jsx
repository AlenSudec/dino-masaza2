import { Blogone } from "./components/blogone"
import { Hero } from "../shared"

export function BlogPage() {
  return (

    <>
      {/* <div class="site-blocks-cover overlay" style={{ backgroundImage: "url(images/hero_bg_1.jpg)" }} data-aos="fade" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row align-items-center justify-content-center text-center">

            <div class="col-md-10">

              <div class="row justify-content-center mb-4">
                <div class="col-md-10 text-center">
                  <h1 data-aos="fade-up" class="mb-5">Our  <span class="typed-words"></span></h1>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div> */}

      <Hero start={"Our"} words={["neznam", "isto neznam"]} />


      <div class="site-section">
        <div class="container">
          <div class="row">

            <div class="col-md-8">

              <div class="row mb-3 align-items-stretch">
                <Blogone />
                {/* <div class="col-md-6 col-lg-6 mb-4 mb-lg-4">
                  <div class="h-entry">
                    <Link to="/single-blog-post">
                      <img src="images/img_1.jpg" alt="Free Website Template by Free-Template.co" class="img-fluid" />
                      <div class="h-entry-inner">
                        <h2 class="font-size-regular"><a href="http://localhost">Blog post title for Physical Therapy</a></h2>
                        <div class="meta mb-4">by <a href="http://localhost">Jeff Sheldon</a> <span class="mx-2">&bullet;</span> May 5th, 2019</div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                      </div>
                    </Link>
                  </div>
                </div> */}
                <div class="col-md-6 col-lg-6 mb-4 mb-lg-4">
                  <div class="h-entry">
                    <a href="http://localhost"><img src="images/img_2.jpg" alt="Free Website Template by Free-Template.co" class="img-fluid" /></a>
                    <div class="h-entry-inner">
                      <h2 class="font-size-regular"><a href="http://localhost">Blog post title for Physical Therapy</a></h2>
                      <div class="meta mb-4">by <a href="http://localhost">Jeff Sheldon</a> <span class="mx-2">&bullet;</span> May 5th, 2019</div>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 mb-4 mb-lg-4">
                  <div class="h-entry">
                    <a href="http://localhost"><img src="images/img_3.jpg" alt="Free Website Template by Free-Template.co" class="img-fluid" /></a>
                    <div class="h-entry-inner">
                      <h2 class="font-size-regular"><a href="http://localhost">Blog post title for Physical Therapy</a></h2>
                      <div class="meta mb-4">by <a href="http://localhost">Jeff Sheldon</a> <span class="mx-2">&bullet;</span> May 5th, 2019</div>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 mb-4 mb-lg-4">
                  <div class="h-entry">
                    <a href="http://localhost"><img src="images/img_4.jpg" alt="Free Website Template by Free-Template.co" class="img-fluid" /></a>
                    <div class="h-entry-inner">
                      <h2 class="font-size-regular"><a href="http://localhost">Blog post title for Physical Therapy</a></h2>
                      <div class="meta mb-4">by <a href="http://localhost">Jeff Sheldon</a> <span class="mx-2">&bullet;</span> May 5th, 2019</div>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 mb-4 mb-lg-4">
                  <div class="h-entry">
                    <a href="http://localhost"><img src="images/img_2.jpg" alt="Free Website Template by Free-Template.co" class="img-fluid" /></a>
                    <div class="h-entry-inner">
                      <h2 class="font-size-regular"><a href="http://localhost">Blog post title for Physical Therapy</a></h2>
                      <div class="meta mb-4">by <a href="http://localhost">Jeff Sheldon</a> <span class="mx-2">&bullet;</span> May 5th, 2019</div>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 mb-4 mb-lg-4">
                  <div class="h-entry">
                    <a href="http://localhost"><img src="images/img_1.jpg" alt="Free Website Template by Free-Template.co" class="img-fluid" /></a>
                    <div class="h-entry-inner">
                      <h2 class="font-size-regular"><a href="http://localhost">Blog post title for Physical Therapy</a></h2>
                      <div class="meta mb-4">by <a href="http://localhost">Jeff Sheldon</a> <span class="mx-2">&bullet;</span> May 5th, 2019</div>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 text-center mt-5">
                <p class="custom-pagination">
                  <span>1</span>
                  <a href="http://localhost">2</a>
                  <a href="http://localhost">3</a>
                  <span>...</span>
                  <a href="http://localhost">20</a>
                </p>
              </div>
            </div>

            <div class="col-md-3 ml-auto">
              <div class="mb-5">
                <h3 class="h5 text-black mb-3">Search</h3>
                <form action="#" method="post">
                  <div class="form-group d-flex">
                    <input type="text" class="form-control" placeholder="Search keyword and hit enter..." />
                  </div>
                </form>
              </div>

              <div class="mb-5">
                <h3 class="h5 text-black mb-3">Popular Posts</h3>
                <ul class="list-unstyled post-lists">
                  <li class="mb-2"><a href="http://localhost">Lorem ipsum dolor sit amet</a></li>
                  <li class="mb-2"><a href="http://localhost">Quaerat rerum voluptatibus veritatis</a></li>
                  <li class="mb-2"><a href="http://localhost">Maiores sapiente veritatis reprehenderit</a></li>
                  <li class="mb-2"><a href="http://localhost">Natus eligendi nobis</a></li>
                </ul>
              </div>

              <div class="mb-5">
                <h3 class="h5 text-black mb-3">Recent Comments</h3>
                <ul class="list-unstyled post-lists">
                  <li class="mb-2"><a href="http://localhost">Hannah</a> <em>in</em> <a href="http://localhost">Lorem ipsum dolor sit amet</a></li>
                  <li class="mb-2"><a href="http://localhost">Roger</a> <em>in</em> <a href="http://localhost">Quaerat rerum voluptatibus veritatis</a></li>
                  <li class="mb-2"><a href="http://localhost">Hannah</a> <em>in</em> <a href="http://localhost">Maiores sapiente veritatis reprehenderit</a></li>
                  <li class="mb-2"><a href="http://localhost">Kim</a> <em>in</em> <a href="http://localhost">Natus eligendi nobis</a></li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>

      <div class="mt-5 block-cta-1 primary-overlay" style={{ backgroundImage: "url('images/hero_bg_2.jpg')" }}>
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-7 mb-4 mb-lg-0">
              <h2 class="mb-3 mt-0 text-white">Upto 30% Discount for The First Commers</h2>
              <p class="mb-0 text-white lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div class="col-lg-4">
              <p class="mb-0"><a href="http://localhost" class="btn btn-outline-white text-white btn-md btn-pill px-5 font-weight-bold btn-block">Contact Us</a></p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}