import { Hero } from "../shared";
import { History, Staff } from "./components";
import { Discount } from "../shared";
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