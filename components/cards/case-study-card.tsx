import { ArrowUpRight } from "lucide-react";
import React from "react";

interface ICaseStudyCardProps {
  text: string;
}

function CaseStudyCard({ text }: ICaseStudyCardProps) {
  return (
    <div className="bg-black rounded-[20px] text-white text-base p-8 flex flex-col gap-5">
      <p>{text}</p>
      <div className="flex text-[#b9ff66]">
        <p className="text-primary">Learn more</p>
        <ArrowUpRight />
      </div>
    </div>
  );
}

export default CaseStudyCard;
