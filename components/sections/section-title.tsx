import React from "react";

interface SectionTitleProps {
  title: string;
  description: string;
}
function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-[35px] md:flex-row text-center items-start container">
      <h2 className="text-[40px] bg-[#b9ff66] w-auto rounded-[8px] px-2 py-1 font-medium">{title}</h2>
      <p className="text-[20px] md:text-justify md:w-3/6">{description}</p>
    </div>
  );
}

export default SectionTitle;
