import { useFetchCMSData, useFetchSharedData } from "../../hooks";
import { Link } from "react-router-dom";

function FooterLink({ item }) {
    return (
        <div className="col-md-6 mb-5 mb-lg-0 col-lg-3">
            <h2 className="footer-heading mb-4">{item.title}</h2>
            <ul className="list-unstyled">
                {item.lists.map((list, i) => <li key={i}><Link to={list.link}>{list.text}</Link></li>)}
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
                            {data.footerLinks.map((link, i) => <FooterLink key={i} item={link} />)}
                            <div className="col-md-6 mb-5 mb-lg-0 col-lg-3">
                                <h2 className="footer-heading mb-4">{data.socialLinks.title}</h2>
                                {data.socialLinks.socials.map((social, i) => <SocialLinks key={i} item={social} index={i} />)}
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-3">
                        <a href="https://www.google.com/maps/place/OSTEOPRAKTIK,+vl.+Dino+Dudovi%C4%87/@45.6967374,17.7072603,17z/data=!3m1!4b1!4m6!3m5!1s0x47678b3ea43d0a9b:0x402d211fd28954fe!8m2!3d45.6967337!4d17.7098352!16s%2Fg%2F11l6c1wjfm?entry=ttu">
                            <img src="images/google_img.png"/>
                        </a>
                    </div> */}
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