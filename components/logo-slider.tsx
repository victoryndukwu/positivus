import React from "react";
import Image from "next/image";
import { logos } from "@/utils/data";

function LogoSlider() {
  return (
    <div className="flex md:gap-[95px] gap-10">
      {logos.map((logo, idx) => (
        <Image
          src={`${logo}.svg`}
          height={48}
          width={111}
          alt={logo}
          key={idx}
        />
      ))}
    </div>
  );
}

export default LogoSlider;
