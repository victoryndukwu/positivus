"use client";
import React, { useState } from "react";
import Divider from "./divider";

interface IAccordionProps {
  index: number;
  question: string;
  answer: string;
}

function Accordion({ index, question, answer }: IAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-[45px] border border-black px-[60px] py-10 cursor-pointer ${
        open ? "bg-[#b9ff66]" : "bg-[#F3F3F3]"
      }`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-[25px]">
          <p className="text-[60px]">0{index + 1}</p>
          <p className="text-[30px]">{question}</p>
        </div>
        <div className="rounded-full size-[56px] bg-[#F3F3F3] grid place-items-center border border-black">
          {open ? "-" : "T"}
        </div>
      </div>

      {open ? (
        <div>
          <Divider className="mb-5 text-black" color="black" />
          {answer}
        </div>
      ) : null}
    </div>
  );
}

export default Accordion;
