import React from "react";

const data = {
    backgroundimage: "hero_bg_1.jpg",
    title: "Why Choose Us",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut tenetur possimus nam totam, repellat expedita ullam amet velit.",
    numbers: [
        {
            initialnumber: "0",
            endnumber: "3",
            appendsymbol: "K",
            content: "Happy Customers"
        },
        {
            initialnumber: "0",
            endnumber: "7",
            appendsymbol: "",
            content: "Years of Experience"
        },
        {
            initialnumber: "0",
            endnumber: "100",
            appendsymbol: "%",
            content: "Satisfaction"
        }
    ]
}


export function Statistics() {
    return (
        <div className="block-half-content-1 d-block d-lg-flex mt-5">
            <div className="block-half-content-img" style={{ backgroundImage: `url('images/${data.backgroundimage}')` }}>

            </div>
            <div className="block-half-content-text bg-primary">
                <div className="block-half-content-text-inner">
                    <h2 className="block-half-content-heading mb-4">{data.title}</h2>
                    <div className="block-half-content-excerpt">
                        <p className="lead">{data.content}</p>
                    </div>
                </div>

                <div className="block-counter-1 section-counter">
                    <div className="row">
                        {data.numbers.map(number => <NumberInstance data={number} />)}
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