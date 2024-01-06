import { Hero } from "../shared";
import { History, Staff, Discount } from "./components";

export function AboutPage() {
    return (
        <>
            <Hero start={"About our"} words={["nezzznam", "hehe"]} withNavigation />
            <History />
            {/* <Staff /> */}
            <Discount />
        </>

    )
}