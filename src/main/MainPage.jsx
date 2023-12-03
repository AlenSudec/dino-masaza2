import { QuickInfo, Services, Statistics, Offers, HappyCustomers, Discount } from "."
import { Hero } from "../shared"

export function MainPage() {
   return <>
      <Hero start="We give solutions to your" words={["pain", "stress", "fatigue"]} withNavigation/>

      <QuickInfo />

      <Services />

      <Statistics />

      <Offers />

      <HappyCustomers />

      <Discount />
   </>

}