import { Hero } from "../shared";
import {  Discount, HappyCustomers, Statistics } from "../shared";
import { ServiceContainer } from "./components";
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

            <ServiceContainer servicePageData={servicePageData}/>

            <Statistics />
            <HappyCustomers />

            <Discount />
        </>

    )
}
