import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import { sliderSettings } from "../data";
import { useFetchCMSData } from "../hooks";
import { getImageUrl } from "../helpers";

const filter = {
    pageAbrv: "mainPageData",
    sectionAbrv: "customer"
}

export function HappyCustomers() {

    const customersData = useFetchCMSData(filter);

    if(!customersData){
        return null;
    }

    return (
        <div className="site-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12 text-center">
                        <h2 className="site-section-heading text-center font-secondary">{customersData.title}</h2>
                    </div>
                </div>
                <div className="row">

                    <div className="col-12">

                        <ReactOwlCarousel className="owl-carousel-2 owl-carousel"
                            {...sliderSettings}
                        >
                            {customersData.customers.map(customer => <CarouselItem item={customer} />)}
                        </ReactOwlCarousel>
                    </div>


                </div>
            </div>
        </div>
    )
}

function CarouselItem({ item }) {
    const {
        image,
        name,
        content
    } = item;
    return (
        <div className="d-block block-testimony mx-auto text-center">
            <div className="person w-25 mx-auto mb-4">
                <img src={getImageUrl(image)} alt="SomeImage" className="img-fluid rounded-circle w-50 mx-auto" />
            </div>
            <div>
                <h2 className="h5 mb-4">{name}</h2>
                <blockquote>&ldquo;{content}&rdquo;</blockquote>
            </div>
        </div>
    )
}