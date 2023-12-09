import React, { useEffect } from "react";
import { cmsApiCalls } from "../api-calls";


/*
OFFER
title: Physical Therapy
abrv: phisycal-therapy
text: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, unde!
linkTo: http://localhost:3000
*/

// const offers = [
// 	{
// 		title: 'Physical Therapy',
// 		abrv: 'physical-therapy',
// 		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit molestias inventore, id sed, in harum tenetur earum.',
// 		linkTo: 'http://localhost:3000',
// 		linkText: 'Find out more',
// 		image: 'images/img_1.jpg'
// 	},
// 	{
// 		title: 'Massage Therapy',
// 		abrv: 'massage-therapy',
// 		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit molestias inventore, id sed, in harum tenetur earum.',
// 		linkTo: 'http://localhost:3000',
// 		linkText: 'Find out more',
// 		image: 'images/img_2.jpg'
// 	},
// 	{
// 		title: 'Chiropractic Therapy',
// 		abrv: 'chiropractic-therapy',
// 		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit molestias inventore, id sed, in harum tenetur earum.',
// 		linkTo: 'http://localhost:3000',
// 		linkText: 'Find out more',
// 		image: 'images/img_3.jpg'
// 	},

// ]



export function Services({ isAdmin }) {

	const [offers, setOffers] = React.useState(null)

	const fetchOffers = React.useCallback(async () => {

		try {
			const offers = await cmsApiCalls.fetchServicesInfo();
			setOffers(await offers.json());
		} catch (error) {
			console.error(error);
		}

	}, [])

	React.useEffect(() => {
		fetchOffers();
	}, [fetchOffers])

	if (!offers) {
		return <div>Loading...</div>
	}

	return (
		<div className="block-services-1 py-5">
			<div className="container">
				<div className="row">
					<div className="mb-4 mb-lg-0 col-sm-6 col-md-6 col-lg-3">
						<h3 className="mb-3">What We Offer</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia rerum, aliquid velit minima inventore ad consequatur accusamus dolor.</p>
						<p><a href="http://localhost:3000" className="d-inline-flex align-items-center block-service-1-more"><span>See all services</span> <span className="icon-keyboard_arrow_right icon"></span></a></p>
					</div>

					{offers.map(offer => <OfferComponent offer={offer} isAdmin={isAdmin} key={offer.id} />)}

				</div>
			</div>
		</div>
	)
}

function OfferComponent({ offer, isAdmin }) {

	const [isEditable, setIsEditable] = React.useState(false)
	const [updatedValues, setUpdatedValues] = React.useState(offer);

	const {
		id,
		title,
		abrv,
		text,
		linkto,
		linktext,
		image
	} = offer;


	const saveChanges = async () => {
		console.log(updatedValues)
		//do update request;
		try {
			const response = await cmsApiCalls.updateServicesInfo(offer.id, updatedValues);

			if(!response.ok){
				console.log("failed")
			}

			const updatedEntry = await response.json();
			console.log("Updated CMS entry", updatedEntry);
		}
		catch (error) {
			console.error(error)
		}
	}

	const closeEditable = () => {
		setUpdatedValues(offer);
		setIsEditable(false)
	}

	if (isEditable && isAdmin) {
		return <div className="mb-4 mb-lg-0 col-sm-6 col-md-6 col-lg-3">
			<div className="block-service-1-card">

				<EditableComponent
					labelText={"Image value: "}
					valueKey="image"
					value={image}
					setUpdatedValues={setUpdatedValues}
				/>

				<EditableComponent
					labelText={"Link value: "}
					valueKey="linkto"
					value={linkto}
					setUpdatedValues={setUpdatedValues}
				/>

				<EditableComponent
					labelText={"Text value: "}
					valueKey="text"
					value={text}
					setUpdatedValues={setUpdatedValues}
				/>

				<EditableComponent
					labelText={"Link text value: "}
					valueKey="linktext"
					value={linktext}
					setUpdatedValues={setUpdatedValues}
				/>

				{isAdmin && <button onClick={closeEditable}>Cancel</button>}
				{isAdmin && isEditable && <button disabled={offer === updatedValues} onClick={saveChanges}>Save</button>}
			</div>
		</div>
	}

	return (
		<div className="mb-4 mb-lg-0 col-sm-6 col-md-6 col-lg-3">
			<div className="block-service-1-card">
				<a href={linkto} className="thumbnail-link d-block mb-4">
					<img src={image} alt="SomeImage" className="img-fluid" />
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
				{isAdmin && <button onClick={() => setIsEditable(true)}>Edit</button>}
			</div>
		</div>
	)
}

function EditableComponent({ labelText, value, valueKey, setUpdatedValues }) {

	const [valueValue, setValue] = React.useState(value)

	const updateValue = (e) => {
		setValue(e.target.value)
		setUpdatedValues((prev) => ({
			...prev,
			[valueKey]: e.target.value
		}))
	}

	return <div style={{
		display: "flex",
		flexDirection: "column"
	}}>
		<label>{labelText}</label>
		<textarea type="text" value={valueValue} onChange={updateValue} />
	</div>
}