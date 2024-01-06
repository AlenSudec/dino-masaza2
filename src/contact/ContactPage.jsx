import { Hero, Discount } from "../shared";
import { Form, Info } from "./components";

export function ContactPage() {
  return (
    <>

      <Hero start={"Get"} words={["opet something", "i opet"]} />

      <div className="site-section bg-light">
        <div className="container">
          <div className="row">


            <Form />


            <Info />
          </div>
        </div>
      </div>


     <Discount />

    </>
  )
}