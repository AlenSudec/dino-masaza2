import { useParams } from "react-router-dom"

export function SingleServicePage() {

  const params = useParams();
  console.log(params)
  return (
    <>
      <div className="site-blocks-cover overlay" style={{ backgroundImage: "url(images/hero_bg_1.jpg)" }} data-aos="fade" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">

            <div className="col-md-10">

              <div className="row justify-content-center mb-4">
                <div className="col-md-10 text-center">
                  <h1>World's Best School</h1>
                  <p data-aos="fade-up" data-aos-delay="100">Posted by Admin <span className="mx-3">&bullet;</span> Aug 30th, 2019</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>





      <div className="site-section">
        <div className="container">
          <div className="row">

            <div className="col-md-8">
              <p className="mb-4"><img src="images/hero_bg_1.jpg" alt="SomeImage" className="img-fluid" /></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione architecto voluptatibus inventore id. Porro nihil ea, quis totam veniam dolores mollitia! Magni reprehenderit magnam provident assumenda sapiente amet non similique itaque accusamus cumque, nulla illo quaerat possimus distinctio recusandae reiciendis voluptate dolorem rerum ullam et. Quibusdam minus ipsam hic. Doloribus?</p>
              <p>Doloremque alias, incidunt repudiandae ut odio facere sed sunt accusamus. Provident consequatur at ipsum placeat perspiciatis corrupti quos, veniam molestiae. Reprehenderit voluptate odio cumque, quis culpa, fugiat dolor quo quae adipisci reiciendis soluta aliquid sed delectus, deleniti cupiditate necessitatibus quibusdam quaerat blanditiis ab quia, cum deserunt esse ipsum sequi fuga.</p>
              <p>Iure deserunt doloremque debitis asperiores omnis! Labore velit perferendis cum, perspiciatis atque ipsa ad unde, necessitatibus aspernatur, ea harum saepe aut accusamus. At, veritatis similique! Culpa aliquam laborum sed ea accusantium ipsum ad ut delectus, ducimus suscipit dolore quae placeat sit consequuntur incidunt, autem esse eveniet odio perferendis vero doloremque.</p>
              <p>Cum reiciendis maxime voluptate dolor, alias fuga ab quos, illo iusto veniam. Voluptatem impedit quasi, ex unde pariatur ut placeat praesentium, culpa reiciendis perspiciatis quis, aliquid quae quos. Nisi ad dolores corrupti, rem, harum, officiis molestias debitis eos possimus doloremque facere saepe, autem tempora. Voluptatibus error commodi esse, reiciendis libero.</p>

              {/* <div className="pt-5">
                <p>Categories:  <a href="http://localhost">Design</a>, <a href="http://localhost">Events</a>  Tags: <a href="http://localhost">#html</a>, <a href="http://localhost">#trends</a></p>
              </div> */}


              {/* <div className="pt-5">
                <h3 className="mb-5">6 Comments</h3>
                <ul className="comment-list">
                  <li className="comment">
                    <div className="vcard bio">
                      <img src="images/comment_vcard.jpg" alt="" />
                    </div>
                    <div className="comment-body">
                      <h3>Jean Doe</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                      <p><a href="http://localhost" className="reply">Reply</a></p>
                    </div>
                  </li>

                  <li className="comment">
                    <div className="vcard bio">
                      <img src="images/comment_vcard.jpg" alt="SomeImage" />
                    </div>
                    <div className="comment-body">
                      <h3>Jean Doe</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                      <p><a href="http://localhost" className="reply">Reply</a></p>
                    </div>

                    <ul className="children">
                      <li className="comment">
                        <div className="vcard bio">
                          <img src="images/comment_vcard.jpg" alt="SomeImage" />
                        </div>
                        <div className="comment-body">
                          <h3>Jean Doe</h3>
                          <div className="meta">January 9, 2018 at 2:21pm</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                          <p><a href="http://localhost" className="reply">Reply</a></p>
                        </div>


                        <ul className="children">
                          <li className="comment">
                            <div className="vcard bio">
                              <img src="images/comment_vcard.jpg" alt="SomeImage" />
                            </div>
                            <div className="comment-body">
                              <h3>Jean Doe</h3>
                              <div className="meta">January 9, 2018 at 2:21pm</div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                              <p><a href="http://localhost" className="reply">Reply</a></p>
                            </div>

                            <ul className="children">
                              <li className="comment">
                                <div className="vcard bio">
                                  <img src="images/comment_vcard.jpg" alt="SomeImage" />
                                </div>
                                <div className="comment-body">
                                  <h3>Jean Doe</h3>
                                  <div className="meta">January 9, 2018 at 2:21pm</div>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                  <p><a href="http://localhost" className="reply">Reply</a></p>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="comment">
                    <div className="vcard bio">
                      <img src="images/comment_vcard.jpg" alt="SomeImage" />
                    </div>
                    <div className="comment-body">
                      <h3>Jean Doe</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                      <p><a href="http://localhost" className="reply">Reply</a></p>
                    </div>
                  </li>
                </ul>

                <div className="comment-form-wrap pt-5">
                  <h3 className="mb-5">Leave a comment</h3>
                  <form action="#" className="p-5 bg-light">
                    <div className="form-group">
                      <label for="name">Name *</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label for="email">Email *</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                      <label for="website">Website</label>
                      <input type="url" className="form-control" id="website" />
                    </div>

                    <div className="form-group">
                      <label for="message">Message</label>
                      <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                      <input type="submit" value="Post Comment" className="btn btn-pill btn-primary text-white btn-md" />
                    </div>

                  </form>
                </div>
              </div> */}


            </div>

            {/* <div className="col-md-3 ml-auto">
              <div className="mb-5">
                <h3 className="h5 text-black mb-3">Search</h3>
                <form action="#" method="post">
                  <div className="form-group d-flex">
                    <input type="text" className="form-control" placeholder="Search keyword and hit enter..." />
                  </div>
                </form>
              </div>

              <div className="mb-5">
                <h3 className="h5 text-black mb-3">Popular Posts</h3>
                <ul className="list-unstyled post-lists">
                  <li className="mb-2"><a href="http://localhost">Lorem ipsum dolor sit amet</a></li>
                  <li className="mb-2"><a href="http://localhost">Quaerat rerum voluptatibus veritatis</a></li>
                  <li className="mb-2"><a href="http://localhost">Maiores sapiente veritatis reprehenderit</a></li>
                  <li className="mb-2"><a href="http://localhost">Natus eligendi nobis</a></li>
                </ul>
              </div>

              <div className="mb-5">
                <h3 className="h5 text-black mb-3">Recent Comments</h3>
                <ul className="list-unstyled post-lists">
                  <li className="mb-2"><a href="http://localhost">Hannah</a> <em>in</em> <a href="http://localhost">Lorem ipsum dolor sit amet</a></li>
                  <li className="mb-2"><a href="http://localhost">Roger</a> <em>in</em> <a href="http://localhost">Quaerat rerum voluptatibus veritatis</a></li>
                  <li className="mb-2"><a href="http://localhost">Hannah</a> <em>in</em> <a href="http://localhost">Maiores sapiente veritatis reprehenderit</a></li>
                  <li className="mb-2"><a href="http://localhost">Kim</a> <em>in</em> <a href="http://localhost">Natus eligendi nobis</a></li>
                </ul>
              </div>

            </div> */}

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