import { EditableComponent } from "../../helpers";
import { useFetchCMSData, useTestFetchCMSData } from "../../hooks";
import React, { useState } from "react";

function FooterLink({ item }) {
    return (
        <EditableComponent initState={item}>
            {(state) =>
                <div className="col-md-6 mb-5 mb-lg-0 col-lg-3">
                    <h2 className="footer-heading mb-4">{state.title}</h2>
                    <ul className="list-unstyled">
                        {state.lists.map((list, i) => <li>
                            <a href={list.link}>{list.text}</a>
                        </li>)}
                    </ul>
                </div>
            }
        </EditableComponent>
    )
}
function SocialLinkss({ item, index }) {

    const className = index === 0 ? "pl-0 pr-3" : "pl-3 pr-3";

    return (
        <a data-tag="editable" href={item.link} className={className}><span data-tag="editable" className={item.icon}></span></a>
    )
}



function TestComponent() {

    const [modifiedHref, setModifiedHref] = React.useState(null);

    const validHref = <a href="http://localhost:3000">href</a>

    React.useEffect(() => {
        const clonedElement = React.cloneElement(validHref, { href: "http://localhost:3215123123" });
        setModifiedHref(clonedElement)
    }, []);


    return modifiedHref;
}


export function Footer() {

    const filter = {
        pageAbrv: "sharedData",
        sectionAbrv: "footerData"
    }

    const data = useFetchCMSData(filter);

    if (!data) {
        return null;
    }

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    {/* <TestComponent /> */}
                    <div className="col-md-9">
                        <div className="row">
                            <FooterLinksComponent />
                            {/* <EditableComponent>

                                <div className="col-md-6 mb-5 mb-lg-0 col-lg-3">
                                    <h2 key="1" className="footer-heading mb-4" label="title" data-tag="editable">{data.socialLinks.title}</h2>
                                    {data.socialLinks.socials.map((social, i) => <SocialLinks item={social} index={i} key={i} />)}
                                </div>
                            </EditableComponent> */}
                            <SocialLinks />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h2 className="footer-heading mb-4">{data.newsletter.title}</h2>
                        <p>{data.newsletter.content}</p>
                        <form action="#" method="post" className="subscription">
                            <div className="input-group mb-3  d-flex align-items-stretch">
                                <input type="text" className="form-control bg-transparent" placeholder={data.newsletter.inputplaceholder} aria-label={data.newsletter.inputplaceholder} aria-describedby="button-addon2" />
                                <button className="btn btn-primary text-white" type="button" id="button-addon2">{data.newsletter.submittext}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function FooterLinksComponent() {

    const data = useTestFetchCMSData('footer');

    if (!data) {
        return null;
    }

    // debugger;
    return data.footerLinks.map(link => <FooterLink item={link} />)
}

function SocialLinks() {
    const data = useTestFetchCMSData('footer');

    if (!data) {
        return null;
    }

    return data.socialLinks.map(link => <SocialLink item={link} />)
}

function SocialLink({ item }) {


    return <EditableComponent initState={item}>
        {(state) =>
            <div className="col-md-6 mb-5 mb-lg-0 col-lg-3">
                <h2 key="1" className="footer-heading mb-4" label="title" data-tag="editable">{state.title}</h2>
                {state.socials.map((social, i) => <SocialLinkss item={social} index={i} key={i} />)}
            </div>
        }
    </EditableComponent>
}