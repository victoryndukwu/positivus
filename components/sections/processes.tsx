import React from "react";
import SectionTitle from "./section-title";
import { workingProcesses } from "@/utils/data";
import Accordion from "../accordion";

function Processes() {
  return (
    <section className=" w-full">
      <SectionTitle
        title={"Our Working Processes"}
        description={"Step-by-Step Guide to Achieving Your Business Goals"}
      />
      <div className="flex flex-col gap-[30px] mt-20">
        {workingProcesses.map((process, idx) => (
          <Accordion
            question={process.question}
            answer={process.answer}
            index={idx}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
}

export default Processes;
