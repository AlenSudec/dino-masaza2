import React from "react";
import { useFetchCMSData } from "../hooks";
import { getImageUrl } from "../helpers";
import { Link } from "react-router-dom";

const filter = {
    pageAbrv: "mainPageData",
    sectionAbrv: "offer"
}

export function Offers() {

    const offersData = useFetchCMSData(filter);

    if(!offersData){
        return null;
    }

    return (
        <div className="site-section bg-light">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12 text-center">
                        <h2 className="site-section-heading text-center font-secondary">{offersData.title}</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                {/* {offers.map((offer,i) => <OfferItem item={offer} index={i} />)} */}
                {/* TODO: this is done stupidly in css, need to adjust this later */}
                <div className="d-block d-lg-flex">
                    <OfferItem item={offersData.offers[0]} index={0} arrowclass="half bg-white d-block d-md-flex arrow-right" />
                    <OfferItem item={offersData.offers[1]} index={1} arrowclass="half bg-white d-block d-md-flex arrow-right" />
                </div>

                <div className="d-block d-lg-flex">
                    <OfferItem item={offersData.offers[2]} index={2} arrowclass="half bg-white d-block d-md-flex arrow-left order-md-2" />
                    <OfferItem item={offersData.offers[3]} index={3} arrowclass="half bg-white d-block d-md-flex arrow-left order-md-2" />
                </div>
            </div>
        </div>
    )
}

function OfferItem({ item, index, arrowclass }) {

    const {
        title,
        content,
        link,
        buttontext,
        backgroundimage,
    } = item;

    return (
        <div className="half-wrap d-block d-md-flex">
            <div className={arrowclass}>
                <div className="text">
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <p><Link to={link} className="btn btn-primary btn-sm btn-pill">{buttontext}</Link></p>
                </div>
            </div>
            <div className="half bg-img img" style={{ backgroundImage: `url(${getImageUrl(backgroundimage)})` }}></div>
        </div>

    )
}