import { ServiceItem } from "./ServiceItem";

export function ServiceContainer({ servicePageData }) {

    const { title, serviceItems } = servicePageData;

    return <div className="site-section block-services-1">
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-12 text-center">
                    <h2 className="site-section-heading text-center font-secondary text-black">{title}</h2>
                </div>
            </div>
            <div className="row">
                {serviceItems.map(item => <ServiceItem item={item} />)}
            </div>
        </div>
    </div>
}