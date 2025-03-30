import React from "react";
import SectionTitle from "./section-title";
import CaseStudiesList from "../case-studies-card-list";

function CaseStudies() {
  return (
    <section className="w-full gap-[85px] flex flex-col">
      <SectionTitle
        title={"Case Studies"}
        description={
          "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        }
      />
      <CaseStudiesList />
    </section>
  );
}

export default CaseStudies;
