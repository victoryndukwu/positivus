import React from "react";
import SectionTitle from "./section-title";
import ServicesCardList from "../services-card-list";
import CTACard from "../cards/cta-card";

function Services() {
  return (
    <section className=" w-full">
      <SectionTitle
        title={"Services"}
        description={
          "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        }
      />
      <div className="mt-[85px]">

      <ServicesCardList />
      </div>
      <div className="mt-[123px]">
        <CTACard />
      </div>
    </section>
  );
}

export default Services;
