import React from "react";
import { cmsApiCalls } from "../api-calls";
import { useFetchCMSData } from "../hooks";
import { getImageUrl } from "../helpers";

/*
OFFER
title: Physical Therapy
abrv: phisycal-therapy
text: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, unde!
linkTo: http://localhost:3000
*/

const filter = {
	pageAbrv: "mainPageData",
	sectionAbrv: "services"
}

export function Services({ isAdmin }) {

	const servicesData = useFetchCMSData(filter)

	if(!servicesData){
		return null;
	}

	return (
		<div className="block-services-1 py-5">
			<div className="container">
				<div className="row">
					<div className="mb-4 mb-lg-0 col-sm-6 col-md-6 col-lg-3">
						<h3 className="mb-3">{servicesData.main.title}</h3>
						<p>{servicesData.main.content}</p>
						<p><a href={servicesData.main.link} className="d-inline-flex align-items-center block-service-1-more"><span>{servicesData.main.linktext}</span> <span className="icon-keyboard_arrow_right icon"></span></a></p>
					</div>

					{servicesData.offers.map(offer => <OfferComponent offer={offer} isAdmin={isAdmin} key={offer.id} />)}

				</div>
			</div>
		</div>
	)
}

function OfferComponent({ offer, isAdmin }) {

	const {
		id,
		title,
		text,
		linkto,
		linktext,
		image
	} = offer;


	return (
		<div className="mb-4 mb-lg-0 col-sm-6 col-md-6 col-lg-3">
			<div className="block-service-1-card">
				<a href={linkto} className="thumbnail-link d-block mb-4">
					<img src={getImageUrl(image)} alt="SomeImage" className="img-fluid" />
				</a>
				<h3 className="block-service-1-heading mb-3">
					<a href={linkto}>{title}</a>
				</h3>
				<div className="block-service-1-excerpt">
					<p>{text}</p>
				</div>
				<p>
					<a href={linkto} className="d-inline-flex align-items-center block-service-1-more">
						<span>{linktext}</span>
						<span className="icon-keyboard_arrow_right icon"></span>
					</a>
				</p>
			</div>
		</div>
	)
}