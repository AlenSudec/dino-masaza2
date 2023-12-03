import React from "react";
import { useTypedInstance } from "../hooks";

/**
 * @param start string, start of hero title 
 * @param words string[] , e.g ["stress","relief"] 
 * @param withNavigation boolean
 * @returns JSX.Element
 */
export function Hero({start,words, withNavigation}) {

  const el = useTypedInstance(words);

  return (
    <div className="site-blocks-cover overlay" style={{ backgroundImage: "url(images/hero_bg_1.jpg)" }} data-aos="fade" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">

          <div className="col-md-10">

            <div className="row justify-content-center mb-4">
              <div className="col-md-10 text-center">
                <h1 data-aos="fade-up" className="mb-5">{start} <span className="typed-words" ref={el}></span></h1>

                {withNavigation && <p data-aos="fade-up" data-aos-delay="100"><a href="http://localhost:3000" className="btn btn-primary btn-pill">Get Started</a></p>}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}