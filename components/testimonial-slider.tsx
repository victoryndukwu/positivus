import React from "react";
import TestimonialCard from "./cards/testimonial-card";

function TesimonialSlider() {
  return (
    <div className=" bg-[#191A23] rounded-[45px] h-[625px] py-20 flex md:gap-[50px] overflow-x-hidden">
      {Array(1)
        .fill("")
        .map((_, idx) => (
          <TestimonialCard
            key={idx}
            text="We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
            name="John Smith"
            title="Marketing Director at XYZ Corp"
          />
        ))}
    </div>
  );
}

export default TesimonialSlider;
