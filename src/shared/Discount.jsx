import { getImageUrl } from "../helpers";
import { useFetchSharedData } from "../hooks"

export function Discount() {

  const discountData = useFetchSharedData("discount-info");

  if(!discountData) {
    return null;
  }

  return (
    // <div className="mt-5 block-cta-1 primary-overlay" style={{ backgroundImage: `url('images/${discountData.backgroundimage}')` }}>
    <div className="mt-5 block-cta-1 primary-overlay" style={{ backgroundImage: `url(${getImageUrl(discountData.backgroundimage)})` }}>
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