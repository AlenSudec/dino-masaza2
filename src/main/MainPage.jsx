import { QuickInfo, Services, Statistics, Offers, HappyCustomers, Discount } from "."
import { Hero } from "../shared"

export function MainPage({isAdmin}) {
   return <>
      <Hero start="We give solutions to your test" words={["pain", "stress", "fatigue"]} withNavigation/>

      <QuickInfo />

      <Services isAdmin={isAdmin}/>

      <Statistics />

      <Offers />

      <HappyCustomers />

      <Discount />
   </>

}