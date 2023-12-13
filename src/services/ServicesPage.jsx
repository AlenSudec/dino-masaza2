import { Hero } from "../shared";
import {  Discount, HappyCustomers, Statistics } from "../main";
import { ServiceItem } from "./components";
import { useFetchCMSData } from "../hooks";


export function ServicesPage() {

    const filter = {
        pageAbrv: "servicesPageData"
    }

    const servicePageData = useFetchCMSData(filter);

    if(!servicePageData){
        return null;
    }

    return (
        <>

            <Hero start={"We do our"} words={["something", "somethin1", "somethign2"]} withNavigation />

            <div className="site-section block-services-1">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12 text-center">
                            <h2 className="site-section-heading text-center font-secondary text-black">{servicePageData.title}</h2>
                        </div>
                    </div>
                    <div className="row">
                        {servicePageData.serviceItems.map(item => <ServiceItem item={item} />)}
                    </div>
                </div>
            </div>

            <Statistics />
            <HappyCustomers />

            <Discount />
        </>

    )
}
