import React from "react";
import { useFetchCMSData } from "../hooks";
import { getImageUrl } from "../helpers";

const filter = {
    pageAbrv: "mainPageData",
    sectionAbrv: "statistics"
}

export function Statistics() {
   
    const statisticsData = useFetchCMSData(filter);

    if(!statisticsData){
        return null;
    }

    return (
        <div className="block-half-content-1 d-block d-lg-flex mt-5">
            <div className="block-half-content-img" style={{ backgroundImage: `url(${getImageUrl(statisticsData.backgroundimage)})` }}>

            </div>
            <div className="block-half-content-text bg-primary">
                <div className="block-half-content-text-inner">
                    <h2 className="block-half-content-heading mb-4">{statisticsData.title}</h2>
                    <div className="block-half-content-excerpt">
                        <p className="lead">{statisticsData.content}</p>
                    </div>
                </div>

                <div className="block-counter-1 section-counter">
                    <div className="row">
                        {statisticsData.numbers.map(number => <NumberInstance data={number} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

function NumberInstance({ data }) {
    return (
        <div className="col-sm-4">
            <div className="counter">
                <div className="number-wrap">
                    <span className="block-counter-1-number" data-number={data.endnumber}>{data.initialnumber}</span><span className="append">{data.appendsymbol}</span>
                </div>
                <span className="block-counter-1-caption">{data.content}</span>
            </div>
        </div>
    )
}