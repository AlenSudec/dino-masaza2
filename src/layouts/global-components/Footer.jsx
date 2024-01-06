import { useFetchCMSData, useFetchSharedData } from "../../hooks";

function FooterLink({ item }) {
    return (
        <div className="col-md-6 mb-5 mb-lg-0 col-lg-3">
            <h2 className="footer-heading mb-4">{item.title}</h2>
            <ul className="list-unstyled">
                {item.lists.map(list => <li><a href={list.link}>{list.text}</a></li>)}
            </ul>
        </div>
    )
}

function SocialLinks({item, index}){

    const className = index === 0 ? "pl-0 pr-3" : "pl-3 pr-3";

    return (
        <a href={item.link} className={className}><span className={item.icon}></span></a>
    )
}

export function Footer() {

    const data = useFetchSharedData("footer-info");

    if(!data){
        return null;
    }

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            {data.footerLinks.map(link => <FooterLink item={link} />)}
                            <div className="col-md-6 mb-5 mb-lg-0 col-lg-3">
                                <h2 className="footer-heading mb-4">{data.socialLinks.title}</h2>
                                {data.socialLinks.socials.map((social, i) => <SocialLinks item={social} index={i} />)}
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-3">
                        <h2 className="footer-heading mb-4">{data.newsletter.title}</h2>
                        <p>{data.newsletter.content}</p>
                        <form action="#" method="post" className="subscription">
                            <div className="input-group mb-3  d-flex align-items-stretch">
                                <input type="text" className="form-control bg-transparent" placeholder={data.newsletter.inputplaceholder} aria-label={data.newsletter.inputplaceholder} aria-describedby="button-addon2" />
                                <button className="btn btn-primary text-white" type="button" id="button-addon2">{data.newsletter.submittext}</button>
                            </div>
                        </form>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}