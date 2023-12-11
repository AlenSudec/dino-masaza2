
const discountData = {
  backgroundimage: "hero_bg_2.jpg",
  discounttitle: "Up to 30% Discount for The First Commers",
  discountcontent: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  discountlink: "http://localhost:3000",
  discountbuttontext: "Contact Us"
}

export function Discount() {
  return (
    <div className="mt-5 block-cta-1 primary-overlay" style={{ backgroundImage: `url('images/${discountData.backgroundimage}')` }}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h2 className="mb-3 mt-0 text-white">{discountData.discounttitle}</h2>
            <p className="mb-0 text-white lead">{discountData.discountcontent}</p>
          </div>
          <div className="col-lg-4">
            <p className="mb-0">
              <a href={discountData.discountlink} className="btn btn-outline-white text-white btn-md btn-pill px-5 font-weight-bold btn-block">
                {discountData.discountbuttontext}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}