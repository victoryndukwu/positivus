import React from "react";
import SectionTitle from "./section-title";
import Teamcardlist from "../team-card-list";
import Button from "../button/button";

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
      <div className="flex md:justify-end mt-10 justify-center">
        <Button className="w-full md:w-[269px]">See all team</Button>
      </div>
    </section>
  );
}

export default Team;
