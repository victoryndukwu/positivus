import React from "react";
import SectionTitle from "./section-title";
import TestimonialSlider from "../testimonial-slider";

function Testimonials() {
  return (
    <section className=" w-full">
      <SectionTitle
        title={"Testimonials"}
        description={
          "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        }
      />
      <div className="mt-[85px]">
        <TestimonialSlider />
      </div>
    </section>
  );
}

export default Testimonials;
