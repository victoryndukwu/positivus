import React from "react";
import CaseStudyCard from "./cards/case-study-card";
import { caseStudies } from "@/utils/data";

function CaseStudiesList() {
  return (
    <div className="flex justify-center items-center bg-black gap-5 rounded-[45px] ">
      {caseStudies.map((caseStudy, idx) => (
        <CaseStudyCard text={caseStudy.description} key={idx} />
      ))}
    </div>
  );
}

export default CaseStudiesList;
