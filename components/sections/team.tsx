import React from "react";
import SectionTitle from "./section-title";
import Teamcardlist from "../team-card-list";

function Team() {
  return (
    <section className=" w-full">
      <SectionTitle
        title={"Team"}
        description={
          "Meet the skilled and experienced team behind our successful digital marketing strategies"
        }
      />
      <div className="mt-[85px]">
        <Teamcardlist />
      </div>
    </section>
  );
}

export default Team;
